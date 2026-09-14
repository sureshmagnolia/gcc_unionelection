// Secondary background sync helper for Google Sheets backup
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbw29XuhvNI4cV-tlAWz5IaRrWPY1T9P7ZiQJbu-7za9226PyEqlhuLOrOMTG2QulzzOog/exec';

export async function syncToGoogleSheets(payload) {
  if (!APPS_SCRIPT_URL) return;

  // Non-blocking asynchronous sync request
  try {
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    }).catch(err => {
      console.warn('[Sheets Backup Sync Warning]', err.message);
    });
  } catch (err) {
    console.warn('[Sheets Backup Sync Trigger Error]', err.message);
  }
}
