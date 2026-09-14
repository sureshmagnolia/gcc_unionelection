/**
 * api.js (V2 - Vercel Postgres Primary API with Secondary Google Sheets Sync)
 * Communicates directly with Vercel Serverless Functions (/api/*).
 */
import { CONFIG } from './config.js';

const API_BASE = CONFIG.API_BASE_URL || '/api';
const APPS_SCRIPT_URL = CONFIG.APPS_SCRIPT_URL;

let _cache = {};
const _syncQueue = [];
let _isSyncing = false;
let _statusCallback = null;

// Helper to retrieve stored admin JWT session token
function getAdminAuthHeader() {
  const token = sessionStorage.getItem('adminSessionToken') || localStorage.getItem('adminSessionToken');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
}

function handleSessionExpired() {
  localStorage.removeItem('adminPwd');
  localStorage.removeItem('adminLoginDate');
  localStorage.removeItem('adminSessionToken');
  sessionStorage.removeItem('adminSessionToken');
  _cache = {};
  alert('⚠️ Session expired or invalid admin credentials. Please login again.');
  window.location.hash = '/admin';
}

export function setSyncStatusCallback(cb) {
  _statusCallback = cb;
}

function updateStatus(status) {
  if (_statusCallback) _statusCallback(status);
}

function invalidateCache(actionSubstring) {
  Object.keys(_cache).forEach(k => {
    if (k.includes(actionSubstring)) delete _cache[k];
  });
}

function updateCache(key, updater) {
  if (typeof updater === 'function') {
    if (_cache[key] !== undefined) _cache[key] = updater(_cache[key]);
  } else {
    _cache[key] = updater;
  }
}

// Background sync to Google Sheets secondary backup
async function processBackupSync(payload) {
  if (!APPS_SCRIPT_URL) return;
  try {
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    }).catch(e => console.warn('[Secondary Sheets Backup Sync warning]', e.message));
  } catch (err) {
    console.warn('[Secondary Sheets Backup Sync error]', err.message);
  }
}

// Universal fetch handler for Vercel API endpoints
async function apiFetch(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...getAdminAuthHeader(),
    ...(options.headers || {})
  };

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers
  });

  if (res.status === 401) {
    handleSessionExpired();
    throw new Error('UNAUTHORIZED');
  }

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || `HTTP ${res.status}`);
  }

  return await res.json();
}

// ─── Public API ────────────────────────────────────────────────────────────────

export const api = {
  invalidateCache,

  initPublicData: async () => {
    const promises = [
      api.getSettings().catch(() => null),
      api.getPosts().catch(() => null),
      api.getValidNominations().catch(() => null),
      api.getFinalNominations().catch(() => null)
    ];
    await Promise.all(promises);
  },

  initAdminData: async (password) => {
    const promises = [
      api.adminGetNominations(password).catch(() => null),
      api.adminGetSettings(password).catch(() => null),
      api.adminGetPosts(password).catch(() => null)
    ];
    await Promise.all(promises);
  },

  getNominalRoll: () => apiFetch('/nominal-roll'),

  getStudentBySerial: (serial) => apiFetch(`/nominal-roll?serial=${serial}`),

  getPosts: async () => {
    const cacheKey = 'getPosts';
    if (_cache[cacheKey]) return _cache[cacheKey];
    const data = await apiFetch('/admin/posts');
    _cache[cacheKey] = data;
    return data;
  },

  getNomination: (id) => apiFetch(`/find-nomination?id=${id}`),

  getPublicNominations: () => apiFetch('/admin/verify'),

  getValidNominations: async () => {
    const all = await apiFetch('/admin/verify').catch(() => []);
    return all.filter(n => n.status === 'Valid');
  },

  getFinalNominations: async () => {
    const all = await apiFetch('/admin/verify').catch(() => []);
    return all.filter(n => n.status === 'Valid' && n.withdrawalStatus !== 'Approved');
  },

  submitNomination: async (payload) => {
    const res = await apiFetch('/submit-nomination', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    // Fire-and-forget secondary backup sync to Google Sheets
    processBackupSync({ action: 'submitNomination', ...payload, id: res.id });
    return res;
  },

  submitWithdrawal: async (id, reason) => {
    const res = await apiFetch('/withdraw-nomination', {
      method: 'POST',
      body: JSON.stringify({ id, reason })
    });
    processBackupSync({ action: 'submitWithdrawal', id, reason });
    return res;
  },

  // ─── Admin API ──────────────────────────────────────────────────────────────

  adminLogin: async (password) => {
    const res = await apiFetch('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password })
    });
    if (res.token) {
      sessionStorage.setItem('adminSessionToken', res.token);
      localStorage.setItem('adminSessionToken', res.token);
    }
    return res;
  },

  adminGetNominations: (password) => apiFetch('/admin/verify'),

  adminVerifyNomination: async (password, id, status, remarks) => {
    const res = await apiFetch('/admin/verify', {
      method: 'POST',
      body: JSON.stringify({ id, status, remarks })
    });
    processBackupSync({ action: 'adminVerifyNomination', id, status, remarks });
    return { ok: true, res };
  },

  adminApproveWithdrawal: async (password, id) => {
    const res = await apiFetch('/admin/withdrawals', {
      method: 'POST',
      body: JSON.stringify({ id, withdrawalStatus: 'Approved' })
    });
    processBackupSync({ action: 'adminApproveWithdrawal', id });
    return { ok: true, res };
  },

  adminDirectWithdrawal: async (password, id) => {
    return api.adminApproveWithdrawal(password, id);
  },

  adminGetSettings: () => apiFetch('/admin/settings'),

  adminUpdateSettings: async (password, settings) => {
    const res = await apiFetch('/admin/settings', {
      method: 'POST',
      body: JSON.stringify({ settings })
    });
    processBackupSync({ action: 'adminUpdateSettings', settings });
    return { ok: true, res };
  },

  adminPublishValidList: (password) => api.adminUpdateSettings(password, { validListPublished: 'true' }),
  adminPublishFinalList: (password) => api.adminUpdateSettings(password, { finalListPublished: 'true' }),
  adminUnpublishValidList: (password) => api.adminUpdateSettings(password, { validListPublished: 'false', finalListPublished: 'false' }),
  adminUnpublishFinalList: (password) => api.adminUpdateSettings(password, { finalListPublished: 'false' }),

  getSettings: () => apiFetch('/admin/settings'),
  getPublicSettings: () => apiFetch('/admin/settings'),

  // ─── Posts Management ───────────────────────────────────────────────────────

  adminGetPosts: () => apiFetch('/admin/posts'),

  adminAddPost: (password, postData) => apiFetch('/admin/posts', {
    method: 'POST',
    body: JSON.stringify(postData)
  }),

  adminUpdatePost: (password, postData) => apiFetch('/admin/posts', {
    method: 'POST',
    body: JSON.stringify(postData)
  }),

  adminDeletePost: (password, postName) => apiFetch('/admin/posts', {
    method: 'DELETE',
    body: JSON.stringify({ postName })
  }),

  // ─── Results Management ──────────────────────────────────────────────────────

  getResults: () => apiFetch('/admin/results'),

  adminSaveResults: async (password, results) => {
    const res = await apiFetch('/admin/results', {
      method: 'POST',
      body: JSON.stringify(results)
    });
    processBackupSync({ action: 'adminSaveResults', results });
    return { ok: true, res };
  },

  getPublicSchedule: () => Promise.resolve({ electionDate: CONFIG.ELECTION_DATE }),
  adminSaveSchedule: () => Promise.resolve({ ok: true })
};
