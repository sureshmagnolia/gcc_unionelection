var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={API_BASE_URL:`/api/main`,ELECTION_DATE:`2026-10-12`,COLLEGE_NAME:`Government Victoria College, Palakkad`,COLLEGE_SHORT_NAME:`GVC`,DEFAULT_POSTS:[{post:`The Chairman`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`The Vice Chairman`,femaleOnly:!0,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`The Secretary`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`The Joint Secretary`,femaleOnly:!0,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`The Chief Student Editor`,femaleOnly:!1,finalYearIneligible:!0,yearRestriction:``,yearRuleMode:`EXCLUDE`,yearRuleYears:[`3_UG`,`2_PG`],deptRestriction:!1,restrictedDept:``},{post:`The Secretary Fine Arts`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`The General Captain For Sports And Games`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`The University Union Councillor`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!1,restrictedDept:``},{post:`I UG Representative`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:`1`,yearRuleMode:`INCLUDE`,yearRuleYears:[`1_UG`],deptRestriction:!1,restrictedDept:``},{post:`II UG Representative`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:`2`,yearRuleMode:`INCLUDE`,yearRuleYears:[`2_UG`],deptRestriction:!1,restrictedDept:``},{post:`III UG Representative`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:`3`,yearRuleMode:`INCLUDE`,yearRuleYears:[`3_UG`],deptRestriction:!1,restrictedDept:``},{post:`PG Representative`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:`PG`,yearRuleMode:`INCLUDE`,yearRuleYears:[`1_PG`,`2_PG`],deptRestriction:!1,restrictedDept:``},{post:`Association Secretary Botany`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Botany`},{post:`Association Secretary Chemistry`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Chemistry`},{post:`Association Secretary Commerce`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Commerce`},{post:`Association Secretary Computer Science`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Computer Science`},{post:`Association Secretary Economics`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Economics`},{post:`Association Secretary English`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`English`},{post:`Association Secretary Hindi`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Hindi`},{post:`Association Secretary History`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`History`},{post:`Association Secretary Malayalam`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Malayalam`},{post:`Association Secretary Mathematics`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Mathematics`},{post:`Association Secretary Physics`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Physics`},{post:`Association Secretary Psychology`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Psychology`},{post:`Association Secretary Sanskrit`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Sanskrit`},{post:`Association Secretary Tamil`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Tamil`},{post:`Association Secretary Zoology`,femaleOnly:!1,finalYearIneligible:!1,yearRestriction:``,yearRuleMode:`ALL`,yearRuleYears:[],deptRestriction:!0,restrictedDept:`Zoology`}]},r=t({router:()=>o}),i={},a=`/`,o={on(e,t){return i[e]=t,this},setDefault(e){return a=e,this},navigate(e,t={}){window.history.pushState({path:e,params:t},``,`#${e}`),this._resolve(e,t)},start(){let e=(e={})=>{let t=(window.location.hash.replace(/^#/,``).trim()||a).split(`?`)[0]||a;this._resolve(t,e)};window.addEventListener(`popstate`,e=>{let t=window.location.hash.replace(/^#/,``).trim().split(`?`)[0],n=e.state?.path||t||a,r=e.state?.params||{};this._resolve(n,r)}),window.addEventListener(`hashchange`,()=>{e({})}),e({})},_resolve(e,t){let n=i[e]||i[a];n&&n(t)}},s=n.API_BASE_URL,c={},l=[],u=!1,d=null;function f(){return sessionStorage.getItem(`adminSessionToken`)||localStorage.getItem(`adminSessionToken`)}function p(){localStorage.removeItem(`adminPwd`),localStorage.removeItem(`adminLoginDate`),localStorage.removeItem(`adminSessionToken`),sessionStorage.removeItem(`adminSessionToken`),c={},alert(`⚠️ Another admin has logged in from a different device. You have been logged out.`),window.location.hash=`/admin`}function m(e){d=e}function h(e){d&&d(e)}function g(){window._unloadGuardAdded||(window._unloadGuardAdded=!0,window.addEventListener(`beforeunload`,e=>{if(l.length>0||u)return e.returnValue=`Changes are still saving. Are you sure you want to leave?`,e.returnValue}))}async function _(){if(!(u||l.length===0)){for(u=!0,g(),h(`saving`);l.length>0;){let e=l[0];try{let t=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e.body)});if(!t.ok){let e=`Network error: ${t.status}`;try{let n=await t.json();n.error&&(e=n.error)}catch{}throw(e.includes(`UNAUTHORIZED_SESSION`)||e===`SESSION_EXPIRED`)&&(p(),l.length=0),Error(e)}let n=await t.json();if(n.error===`SESSION_EXPIRED`||n.error&&n.error.includes(`UNAUTHORIZED_SESSION`)){p(),l.length=0;break}if(n.error)throw Error(n.error);e.resolve&&e.resolve(n)}catch(t){console.error(`Background sync failed for`,e.body.action,t),e.reject&&e.reject(t)}l.shift()}u=!1,h(`saved`),setTimeout(()=>{!u&&l.length===0&&h(`idle`)},3e3)}}async function v(e){let t=f(),n={},r={...e};r.password&&(n[`X-Admin-Password`]=r.password,delete r.password),t&&(n[`X-Session-Token`]=t,delete r.sessionToken);let i=JSON.stringify(e);if(c[i]!==void 0)return c[i];let a=new URL(s,window.location.origin);Object.entries(r).forEach(([e,t])=>a.searchParams.append(e,t));let o=await fetch(a.toString(),{headers:n});if(!o.ok){let e=`Network error: ${o.status}`;try{let t=await o.json();t.error&&(e=t.error)}catch{}throw(e.includes(`UNAUTHORIZED_SESSION`)||e===`SESSION_EXPIRED`)&&p(),Error(e)}let l=await o.json();if(l.error===`SESSION_EXPIRED`||l.error&&l.error.includes(`UNAUTHORIZED_SESSION`))throw p(),Error(`SESSION_EXPIRED`);if(l.error)throw Error(l.error);return c[i]=l,l}async function y(e){let t=f();t&&e.password&&(e={...e,sessionToken:t});let n=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(!n.ok){let e=`Network error: ${n.status}`;try{let t=await n.json();t.error&&(e=t.error)}catch{}throw(e.includes(`UNAUTHORIZED_SESSION`)||e===`SESSION_EXPIRED`)&&p(),Error(e)}let r=await n.json();if(r.error===`SESSION_EXPIRED`||r.error&&r.error.includes(`UNAUTHORIZED_SESSION`))throw p(),Error(`SESSION_EXPIRED`);if(r.error)throw Error(r.error);return r}function b(e){let t=f();return t&&e.password&&(e={...e,sessionToken:t}),new Promise((t,n)=>{l.push({body:e,resolve:t,reject:n}),_()})}function x(e,t){let n=JSON.stringify(e);typeof t==`function`?c[n]!==void 0&&(c[n]=t(c[n])):c[n]=t}function S(e){Object.keys(c).forEach(t=>{t.includes(e)&&delete c[t]})}var C={invalidateCache:S,initPublicData:async()=>{let e=[C.getPublicSchedule().catch(()=>null),C.getSettings().catch(()=>null),C.getPosts().catch(()=>null),C.getResults().catch(()=>null),C.getNominalRoll().catch(()=>null),C.getPublicNominations().catch(()=>null),C.getValidNominations().catch(()=>null),C.getFinalNominations().catch(()=>null)];await Promise.all(e)},initAdminData:async e=>{let t=[C.adminGetNominations(e).catch(()=>null),C.adminGetSettings(e).catch(()=>null),C.adminGetPosts(e).catch(()=>null),C.adminGetBooths(e).catch(()=>null),C.adminGetLocations(e).catch(()=>null),C.adminGetBallotPlan(e).catch(()=>null),C.adminGetCountingMatrix(e).catch(()=>null)];await Promise.all(t)},getNominalRoll:()=>v({action:`getNominalRoll`}),getPosts:()=>v({action:`getPosts`}),getPublicNominations:()=>v({action:`getPublicNominations`}),getNomination:(e,t)=>v({action:`getNomination`,id:e,admissionNo:t}),getValidNominations:()=>v({action:`getValidNominations`}),getFinalNominations:()=>v({action:`getFinalNominations`}),submitNomination:async e=>{let t=await y({action:`submitNomination`,...e});return S(`adminGetNominations`),S(`getPublicNominations`),S(`getValidNominations`),S(`getFinalNominations`),t},submitWithdrawal:async(e,t)=>{let n=await y({action:`submitWithdrawal`,id:e,admissionNo:t});return S(`adminGetNominations`),S(`getPublicNominations`),n},adminLogin:async e=>{let t=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`adminLogin`,password:e})});if(!t.ok)throw Error(`Network error: ${t.status}`);let n=await t.json();if(n.error)throw Error(n.error);return n.sessionToken&&sessionStorage.setItem(`adminSessionToken`,n.sessionToken),n},adminLogout:e=>y({action:`adminLogout`,password:e}),adminSendOTP:e=>y({action:`adminSendOTP`,password:e}),adminVerifyOTP:(e,t)=>y({action:`adminVerifyOTP`,password:e,otp:t}),adminGetNominations:(e,t=!1)=>(t&&S(`adminGetNominations`),v({action:`adminGetNominations`,password:e})),adminGetFinalNominations:e=>v({action:`adminGetFinalNominations`,password:e}),adminVerifyNomination:(e,t,n,r=null)=>(x({action:`adminGetNominations`,password:e},e=>{let i=e.find(e=>e.id===t);return i&&(i.status=n,r&&(i.rejectionReason=r)),e}),b({action:`adminVerifyNomination`,password:e,id:t,status:n,reason:r}),Promise.resolve({ok:!0})),adminDeleteNomination:async(e,t)=>{let n=await y({action:`adminDeleteNomination`,password:e,confirmPassword:e,id:t});return S(`adminGetNominations`),S(`getPublicNominations`),S(`getValidNominations`),S(`getFinalNominations`),n},adminApproveWithdrawal:(e,t)=>(x({action:`adminGetNominations`,password:e},e=>{let n=e.find(e=>e.id===t);return n&&(n.withdrawalStatus=`Approved`),e}),b({action:`adminApproveWithdrawal`,password:e,id:t}),Promise.resolve({ok:!0})),adminDirectWithdrawal:(e,t)=>(x({action:`adminGetNominations`,password:e},e=>{let n=e.find(e=>e.id===t);return n&&(n.withdrawalStatus=`Approved`),e}),b({action:`adminDirectWithdrawal`,password:e,id:t}),Promise.resolve({ok:!0})),adminRestoreWithdrawal:(e,t,n=`None`)=>(x({action:`adminGetNominations`,password:e},e=>{let r=e.find(e=>e.id===t);return r&&(r.withdrawalStatus=n),e}),b({action:`adminRestoreWithdrawal`,password:e,id:t,targetStatus:n}),S(`getFinalNominations`),S(`adminGetFinalNominations`),Promise.resolve({ok:!0})),adminRejectWithdrawal:(e,t)=>(x({action:`adminGetNominations`,password:e},e=>{let n=e.find(e=>e.id===t);return n&&(n.withdrawalStatus=`Rejected`),e}),b({action:`adminRejectWithdrawal`,password:e,id:t}),S(`getFinalNominations`),S(`adminGetFinalNominations`),Promise.resolve({ok:!0})),adminPublishValidList:async e=>{x({action:`adminGetSettings`,password:e},e=>({...e,validListPublished:`true`}));let t=await y({action:`adminPublishValidList`,password:e});return S(`getValidNominations`),S(`getSettings`),S(`adminGetSettings`),t},adminPublishFinalList:async e=>{x({action:`adminGetSettings`,password:e},e=>({...e,finalListPublished:`true`}));let t=await y({action:`adminPublishFinalList`,password:e});return S(`getFinalNominations`),S(`getSettings`),S(`adminGetSettings`),t},adminUnpublishValidList:async e=>{x({action:`adminGetSettings`,password:e},e=>({...e,validListPublished:`false`,finalListPublished:`false`}));let t=await y({action:`adminUnpublishValidList`,password:e});return S(`getValidNominations`),S(`getFinalNominations`),S(`getSettings`),S(`adminGetSettings`),t},adminUnpublishFinalList:async e=>{x({action:`adminGetSettings`,password:e},e=>({...e,finalListPublished:`false`}));let t=await y({action:`adminUnpublishFinalList`,password:e});return S(`getFinalNominations`),S(`getSettings`),S(`adminGetSettings`),t},adminGetSettings:e=>v({action:`adminGetSettings`,password:e}),adminUpdateSettings:(e,t)=>(x({action:`adminGetSettings`,password:e},e=>({...e,...t})),S(`getSettings`),S(`adminGetSettings`),b({action:`adminUpdateSettings`,password:e,...t}),Promise.resolve({ok:!0})),adminUpdateCredentials:(e,t)=>y({action:`adminUpdateCredentials`,password:e,...t}),getPublicSettings:()=>v({action:`adminGetSettings`,password:`NONE`}),adminGetPosts:e=>v({action:`adminGetPosts`,password:e}),adminAddPost:async(e,t)=>{let n={...t,post:t.post||t.postName};return x({action:`adminGetPosts`,password:e},e=>[...Array.isArray(e)?e:[],n]),await b({action:`adminAddPost`,password:e,...n}),S(`getPosts`),S(`adminGetPosts`),{ok:!0}},adminUpdatePost:async(e,t)=>{let n={...t,post:t.post||t.postName},r=t.originalName||n.post;return x({action:`adminGetPosts`,password:e},e=>{if(!Array.isArray(e))return[n];let t=e.findIndex(e=>e.post===r||e.post===n.post);return t===-1?e.push(n):e[t]=n,e}),await b({action:`adminUpdatePost`,password:e,...n}),S(`getPosts`),S(`adminGetPosts`),{ok:!0}},adminDeletePost:async(e,t)=>(x({action:`adminGetPosts`,password:e},e=>e.filter(e=>e.post!==t)),await b({action:`adminDeletePost`,password:e,postName:t}),S(`getPosts`),{ok:!0}),adminReorderPosts:async(e,t)=>(x({action:`adminGetPosts`,password:e},e=>{let n={};return e.forEach(e=>n[e.post]=e),t.map(e=>n[e]).filter(Boolean)}),await b({action:`adminReorderPosts`,password:e,posts:t}),S(`getPosts`),{ok:!0}),adminGetBooths:(e,t=!1)=>(t&&S(`adminGetBooths`),v({action:`adminGetBooths`,password:e})),adminSaveBooths:async(e,t)=>{let n=await y({action:`adminSaveBooths`,password:e,booths:t});return S(`adminGetBooths`),S(`adminGetBallotPlan`),n},adminGetLocations:(e,t=!1)=>(t&&S(`adminGetLocations`),v({action:`adminGetLocations`,password:e})),adminSaveLocations:async(e,t)=>{let n=await y({action:`adminSaveLocations`,password:e,locations:t});return S(`adminGetLocations`),n},getResults:(e=!1)=>(e&&S(`getResults`),v({action:`getResults`})),adminGetResults:(e,t=!1)=>(t&&S(`adminGetResults`),v({action:`adminGetResults`,password:e})),adminToggleLockResults:async e=>{let t=await y({action:`adminToggleLockResults`,password:e});return x({action:`adminGetSettings`,password:e},e=>({...e,resultsLocked:t.locked?`true`:`false`})),S(`getSettings`),S(`adminGetSettings`),t},adminTogglePublishResults:async e=>{let t=await y({action:`adminTogglePublishResults`,password:e});return x({action:`adminGetSettings`,password:e},e=>({...e,resultsPublished:t.published?`true`:`false`})),S(`getResults`),S(`adminGetResults`),S(`getSettings`),S(`adminGetSettings`),t},adminLockResults:async e=>{let t=await y({action:`adminLockResults`,password:e});return x({action:`adminGetSettings`,password:e},e=>({...e,resultsLocked:`true`})),S(`getSettings`),S(`adminGetSettings`),t},adminUnlockResults:async e=>{let t=await y({action:`adminUnlockResults`,password:e});return x({action:`adminGetSettings`,password:e},e=>({...e,resultsLocked:`false`})),S(`getSettings`),S(`adminGetSettings`),t},adminPublishResults:async e=>{let t=await y({action:`adminPublishResults`,password:e});return x({action:`adminGetSettings`,password:e},e=>({...e,resultsPublished:`true`})),S(`getResults`),S(`adminGetResults`),S(`getSettings`),S(`adminGetSettings`),t},adminUnpublishResults:async e=>{let t=await y({action:`adminUnpublishResults`,password:e});return x({action:`adminGetSettings`,password:e},e=>({...e,resultsPublished:`false`})),S(`getResults`),S(`adminGetResults`),S(`getSettings`),S(`adminGetSettings`),t},adminToggleCounting:async e=>{let t=await y({action:`adminToggleCounting`,password:e});return S(`getResults`),S(`getSettings`),S(`adminGetSettings`),S(`getPublicSchedule`),t},adminSetCountingActive:async(e,t)=>{let n=await y({action:`adminSetCountingActive`,password:e,active:t});return S(`getResults`),S(`getSettings`),S(`adminGetSettings`),S(`getPublicSchedule`),n},adminSaveResults:(e,t)=>(b({action:`adminSaveResults`,password:e,results:t}).then(()=>{S(`getResults`),S(`adminGetResults`)}),Promise.resolve({ok:!0})),adminInjectTestData:e=>(c={},y({action:`adminInjectTestData`,password:e})),adminWipeData:e=>(c={},y({action:`adminWipeData`,password:e})),adminGetCountingMatrix:e=>v({action:`adminGetCountingMatrix`,password:e}),adminSaveCountingMatrix:(e,t)=>(x({action:`adminGetCountingMatrix`,password:e},t),b({action:`adminSaveCountingMatrix`,password:e,matrixData:t}),Promise.resolve({ok:!0})),adminGenerateBallotPlan:async e=>{let t=await b({action:`adminGenerateBallotPlan`,password:e});return x({action:`adminGetBallotPlan`,password:e},t.plan),t},adminGetBallotPlan:e=>v({action:`adminGetBallotPlan`,password:e}),adminGetBallotConfig:e=>v({action:`adminGetBallotConfig`,password:e}),adminSaveBallotConfig:async(e,t)=>{let n=await y({action:`adminSaveBallotConfig`,password:e,config:t});return S(`adminGetBallotConfig`),S(`adminGetBallotPlan`),n},adminRunAudit:e=>y({action:`adminRunAudit`,password:e}),getSettings:()=>v({action:`getSettings`}),adminAddStudent:async(e,t)=>(await b({action:`adminAddStudent`,password:e,...t}),S(`getNominalRoll`),{ok:!0}),adminUpdateStudent:async(e,t)=>(await b({action:`adminUpdateStudent`,password:e,...t}),S(`getNominalRoll`),{ok:!0}),adminDeleteStudent:async(e,t)=>(await b({action:`adminDeleteStudent`,password:e,serial:t}),S(`getNominalRoll`),{ok:!0}),adminPublishDraftRoll:async e=>{let t=await y({action:`adminPublishDraftRoll`,password:e});return S(`getSettings`),S(`adminGetSettings`),t},adminUnpublishDraftRoll:async e=>{let t=await y({action:`adminUnpublishDraftRoll`,password:e});return S(`getSettings`),S(`adminGetSettings`),t},submitRollCorrection:e=>y({action:`submitRollCorrection`,...e}),adminGetRollCorrections:e=>v({action:`adminGetRollCorrections`,password:e}),adminUpdateRollCorrection:(e,t,n,r=``)=>y({action:`adminUpdateRollCorrection`,password:e,id:t,status:n,notes:r}),adminFinalizeRoll:async(e,t={})=>{let n=await y({action:`adminFinalizeRoll`,password:e,...t});return n&&n.requiresMatching?n:(S(`getSettings`),S(`adminGetSettings`),S(`getNominalRoll`),n||{ok:!0})},adminUnfinalizeRoll:async e=>{let t=await y({action:`adminUnfinalizeRoll`,password:e,confirmPassword:e});return S(`getSettings`),S(`adminGetSettings`),S(`getNominalRoll`),t||{ok:!0}},adminGetNominalRollTemplate:e=>v({action:`adminGetNominalRollTemplate`,password:e}),adminUploadNominalRoll:async(e,t)=>{let n=await y({action:`adminUploadNominalRoll`,password:e,...t});return S(`getNominalRoll`),S(`adminGetNominations`),S(`getSettings`),S(`adminGetSettings`),S(`getValidNominations`),S(`getFinalNominations`),S(`getPublicNominations`),n},adminClearNominalRoll:async e=>{let t=await y({action:`adminClearNominalRoll`,password:e,confirmPassword:e});return S(`getNominalRoll`),S(`getSettings`),S(`adminGetSettings`),S(`adminGetNominations`),S(`getValidNominations`),S(`getFinalNominations`),S(`getPublicNominations`),t},adminRemapNominations:async e=>{let t=await y({action:`adminRemapNominations`,password:e});return S(`adminGetNominations`),S(`getPublicNominations`),S(`getValidNominations`),S(`getFinalNominations`),t},adminFixSerialNumbersDeptWise:async e=>{let t=await y({action:`adminFixSerialNumbersDeptWise`,password:e});return S(`getNominalRoll`),S(`adminGetNominations`),S(`getSettings`),S(`adminGetSettings`),S(`getValidNominations`),S(`getFinalNominations`),S(`getPublicNominations`),t},getPublicSchedule:()=>v({action:`getPublicSchedule`}),adminSaveSchedule:async(e,t)=>{x({action:`getPublicSchedule`},t);let n=await y({action:`adminSaveSchedule`,password:e,...t});return S(`getPublicSchedule`),S(`getSettings`),S(`adminGetSettings`),S(`getValidNominations`),S(`getFinalNominations`),S(`getResults`),n||{ok:!0}},adminSetStageOverride:async(e,t,n)=>{let r=await y({action:`adminSetStageOverride`,password:e,stage:t,mode:n});return S(`getPublicSchedule`),S(`getSettings`),S(`adminGetSettings`),S(`getValidNominations`),S(`getFinalNominations`),S(`getResults`),r},adminExportBackup:e=>y({action:`adminExportBackup`,password:e}),adminGetSnapshots:e=>v({action:`adminGetSnapshots`,password:e}),adminDownloadSnapshot:(e,t)=>y({action:`adminDownloadSnapshot`,password:e,snapshotId:t}),adminRestoreBackup:async(e,t)=>{let n=await y({action:`adminRestoreBackup`,password:e,...t});return c={},n},adminRevertSnapshot:async(e,t)=>{let n=await y({action:`adminRevertSnapshot`,password:e,snapshotId:t});return c={},n}};function w(e,t=n.ELECTION_DATE){if(!e)return`N/A`;let r;if(typeof e==`string`&&e.includes(`-`)){let t=e.split(`-`);r=t[0].length===4?new Date(parseInt(t[0],10),parseInt(t[1],10)-1,parseInt(t[2],10)):new Date(parseInt(t[2],10),parseInt(t[1],10)-1,parseInt(t[0],10))}else r=new Date(e);if(isNaN(r.getTime()))return`N/A`;let i=new Date(t),a=i.getFullYear()-r.getFullYear(),o=i.getMonth()-r.getMonth(),s=i.getDate()-r.getDate();return s<0&&(o--,s+=new Date(i.getFullYear(),i.getMonth(),0).getDate()),o<0&&(a--,o+=12),`${a} Years, ${o} Months, ${s} Days`}var T=[{id:`1_UG`,label:`1st Year UG (I UG)`,short:`I UG`},{id:`2_UG`,label:`2nd Year UG (II UG)`,short:`II UG`},{id:`3_UG`,label:`3rd Year UG (III UG)`,short:`III UG`},{id:`1_PG`,label:`1st Year PG (I PG)`,short:`I PG`},{id:`2_PG`,label:`2nd Year PG (II PG)`,short:`II PG`},{id:`RS`,label:`Research Scholar (Ph.D)`,short:`RS`}];function E(e){let t=String(e||``).toUpperCase().trim();if(t.includes(`RESEARCH`)||t.includes(`SCHOLAR`)||t.includes(`PHD`))return`RS`;let n=/\b(MA|MSC|MCOM|M\.SC|M\.COM|M\.A|MBA|MCA|MSW)\b/.test(t)||t.includes(`POST GRADUATE`)||t.includes(`PG`);t.includes(`1ST`)||/^\s*(1|1ST|I)\b/.test(t)||/\b1ST\s+YEAR\b/.test(t)||/\bI\s+(YEAR|UG|PG|DC|DEG|BA|BSC|BCOM|MA|MSC|MCOM)\b/.test(t);let r=t.includes(`2ND`)||/^\s*(2|2ND|II)\b/.test(t)||/\b2ND\s+YEAR\b/.test(t)||/\bII\s+(YEAR|UG|PG|DC|DEG|BA|BSC|BCOM|MA|MSC|MCOM)\b/.test(t),i=t.includes(`3RD`)||/^\s*(3|3RD|III)\b/.test(t)||/\b3RD\s+YEAR\b/.test(t)||/\bIII\s+(YEAR|UG|DC|DEG|BA|BSC|BCOM)\b/.test(t);return n?r?`2_PG`:`1_PG`:i?`3_UG`:r?`2_UG`:`1_UG`}function D(e,t){if(!t)return!0;let n=E(e),r=t.yearRuleMode||(t.finalYearIneligible?`EXCLUDE`:t.yearRestriction?`INCLUDE`:`ALL`),i=[];if(Array.isArray(t.yearRuleYears)?i=t.yearRuleYears:typeof t.yearRuleYears==`string`&&t.yearRuleYears.trim()?i=t.yearRuleYears.split(`,`).map(e=>e.trim()).filter(Boolean):t.finalYearIneligible?i=[`3_UG`,`2_PG`]:t.yearRestriction===`1`?i=[`1_UG`]:t.yearRestriction===`2`?i=[`2_UG`]:t.yearRestriction===`3`?i=[`3_UG`]:t.yearRestriction===`PG`?i=[`1_PG`,`2_PG`]:t.yearRestriction===`UG`?i=[`1_UG`,`2_UG`,`3_UG`]:t.yearRestriction===`1,2`&&(i=[`1_UG`,`2_UG`]),r===`ALL`||i.length===0)return!(t.finalYearIneligible&&(n===`3_UG`||n===`2_PG`));let a=(e,t)=>!!(t.includes(e)||e.endsWith(`_UG`)&&t.includes(`UG`)||e.endsWith(`_PG`)&&t.includes(`PG`)||e.startsWith(`1_`)&&t.includes(`1`)||e.startsWith(`2_`)&&t.includes(`2`)||e.startsWith(`3_`)&&t.includes(`3`));return r===`INCLUDE`?a(n,i):r===`EXCLUDE`?!a(n,i):!0}function O(e){if(!e)return`All Years Eligible`;let t=e.yearRuleMode||(e.finalYearIneligible?`EXCLUDE`:e.yearRestriction?`INCLUDE`:`ALL`),n=[];if(Array.isArray(e.yearRuleYears)?n=e.yearRuleYears:typeof e.yearRuleYears==`string`&&e.yearRuleYears.trim()?n=e.yearRuleYears.split(`,`).map(e=>e.trim()).filter(Boolean):e.finalYearIneligible?n=[`3_UG`,`2_PG`]:e.yearRestriction===`1`?n=[`1_UG`]:e.yearRestriction===`2`?n=[`2_UG`]:e.yearRestriction===`3`?n=[`3_UG`]:e.yearRestriction===`PG`?n=[`1_PG`,`2_PG`]:e.yearRestriction===`UG`?n=[`1_UG`,`2_UG`,`3_UG`]:e.yearRestriction===`1,2`&&(n=[`1_UG`,`2_UG`]),t===`ALL`||n.length===0)return e.finalYearIneligible?`Final Years Barred (3rd UG & 2nd PG)`:`All Years Eligible`;let r=n.map(e=>{let t=T.find(t=>t.id===e);return t?t.short:e}).join(`, `);return t===`INCLUDE`?`Only: ${r}`:t===`EXCLUDE`?`Barred: ${r}`:`All Years`}function k(e,t,n,r=null,i=[],a=[]){if(!e)return[];let o=[],s=String(e.CLASS||``).toUpperCase(),c=String(e.Dept||``).toUpperCase(),l=String(e[`Nominal Roll Serial Number`]),u=i.find(e=>e.post===t)||{};if((n===`Proposer`||n===`Seconder`)&&a.some(e=>e.post===t&&e.status!==`Rejected`&&(String(e.proposerSerial)===l||String(e.seconderSerial)===l))&&o.push(`Student #${l} has already proposed or seconded a candidate for "${t}". They cannot endorse multiple candidates for the same post.`),u.deptRestriction){let r=(u.restrictedDept||(t.startsWith(`Association Secretary `)?t.replace(`Association Secretary `,``):``)).trim();if(r){let i=e=>String(e||``).toUpperCase().replace(/[^A-Z0-9]/g,``),a=i(c),s=i(r);a===s||a.includes(s)||s.includes(a)||o.push(`${n} for "${t}" must belong to the ${r} department (current student: ${e.Dept||`N/A`}).`)}}if(!D(s,u)){let e=O(u);o.push(`${n} (${s||`Unspecified`}) is not eligible under year restriction for "${t}" (${e}).`)}return n===`Candidate`&&(E(s)===`RS`&&o.push(`Research Scholars are not eligible to contest in College Union Elections.`),u.femaleOnly&&r&&r!==`Female`&&o.push(`The post of "${t}" is reserved for female candidates only.`)),o}function A(){let e=Math.floor(Math.random()*10)+1,t=Math.floor(Math.random()*10)+1;return{question:`${e} + ${t}`,answer:String(e+t)}}function j(){return new Date().toLocaleDateString(`en-GB`)}function M(e,t,n){if(!e||!t||!n)return;let r=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];for(let t=1;t<=31;t++)e.innerHTML+=`<option value="${t}">${t}</option>`;r.forEach((e,n)=>t.innerHTML+=`<option value="${n+1}">${e}</option>`);for(let e=2015;e>=1950;e--)n.innerHTML+=`<option value="${e}">${e}</option>`}function N(e,t,n){return`${n}-${String(t).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`}function P(e,t,n){return`${String(e).padStart(2,`0`)}/${String(t).padStart(2,`0`)}/${n}`}function ee(e,t=`Nomination Form`){let n=window.open(``,`_blank`);if(!n){alert(`Popup blocked! Please allow popups for this site to print.`);return}n.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${t}</title>
        <style>
          @page { size: A4; margin: 15mm; }
          * { box-sizing: border-box; }
          body {
            font-family: Arial, sans-serif;
            color: black !important;
            background: white !important;
            font-size: 11pt;
            line-height: 1.5;
            margin: 0;
            padding: 0;
          }
          /* Reset dark theme classes to clean B&W for printing */
          * { color: black !important; background: transparent !important; border-color: #333 !important; }
          .print-paper { width: 100%; margin: 0 auto; padding: 1rem; }
          .border { border: 1px solid #333; }
          .border-b { border-bottom: 1px solid #333; }
          .border-y { border-top: 1px solid #333; border-bottom: 1px solid #333; }
          .border-t { border-top: 1px solid #333; }
          .rounded-lg, .rounded-xl { border-radius: 4px; }
          .p-8 { padding: 2rem; }
          .p-4 { padding: 1rem; }
          .p-3 { padding: 0.75rem; }
          .pt-6 { padding-top: 1.5rem; }
          .pb-1 { padding-bottom: 0.25rem; }
          .pb-2 { padding-bottom: 0.5rem; }
          .pb-3 { padding-bottom: 0.75rem; }
          .mt-1 { margin-top: 0.25rem; }
          .mt-4 { margin-top: 1rem; }
          .mt-6 { margin-top: 1.5rem; }
          .mb-1 { margin-bottom: 0.25rem; }
          .mb-2 { margin-bottom: 0.5rem; }
          .space-y-4 > * + * { margin-top: 1rem; }
          .space-y-3 > * + * { margin-top: 0.75rem; }
          .space-y-1 > * + * { margin-top: 0.25rem; }
          .flex { display: flex; }
          .justify-between { justify-content: space-between; }
          .justify-around { justify-content: space-around; }
          .items-start { align-items: flex-start; }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .text-xs { font-size: 0.8rem; }
          .text-sm { font-size: 0.9rem; }
          .text-base { font-size: 1rem; }
          .text-lg { font-size: 1.125rem; }
          .text-xl { font-size: 1.25rem; }
          .text-3xl { font-size: 1.875rem; }
          .font-bold { font-weight: bold; }
          .font-semibold { font-weight: 600; }
          .font-mono { font-family: monospace; }
          .uppercase { text-transform: uppercase; }
          .tracking-wide { letter-spacing: 0.025em; }
          .tracking-widest { letter-spacing: 0.1em; }
          .w-40 { width: 10rem; }
          .inline-block { display: inline-block; }
          .grid { display: grid; }
          .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .col-span-2 { grid-column: span 2; }
          .gap-x-4 { column-gap: 1rem; }
          .gap-y-1 { row-gap: 0.25rem; }
          .italic { font-style: italic; }
          .badge { border: 1px solid #000; padding: 2px 6px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
          h2, h3, p { margin: 0; }
        </style>
      </head>
      <body>
        ${e}
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 200);
          };
        <\/script>
      </body>
    </html>
  `),n.document.close()}function F(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function I(e,t,n){t?(e.disabled=!0,e.innerHTML=`<span class="spinner"></span> Please wait...`):(e.disabled=!1,e.innerHTML=n)}function L(e,t=`info`){let n={info:`#6366f1`,success:`#10b981`,error:`#ef4444`,warning:`#f59e0b`},r=document.createElement(`div`);r.style.cssText=`position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;padding:0.75rem 1.25rem;border-radius:0.5rem;color:white;font-size:0.875rem;font-weight:500;background:${n[t]||n.info};box-shadow:0 10px 40px rgba(0,0,0,0.4);max-width:320px;transition:opacity 0.4s;`,r.textContent=e,document.body.appendChild(r),setTimeout(()=>{r.style.opacity=`0`,setTimeout(()=>r.remove(),400)},3500)}async function te(e){e.innerHTML=`<div class="min-h-screen flex items-center justify-center"><span class="spinner"></span></div>`;let t=new Date().getFullYear(),r=n.COLLEGE_NAME,i=n.COLLEGE_SHORT_NAME,a={},o={};try{let[e,n]=await Promise.all([C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]);e&&(a=e),n&&(o=n),a.electionYear&&(t=a.electionYear),o.electionYear&&(t=o.electionYear),o.collegeName&&(r=o.collegeName),o.collegeShortName&&(i=o.collegeShortName)}catch(e){console.warn(`Failed to load schedule or settings for home page:`,e)}try{let n=new Date,s=o.nominalRollFinalized===`true`||o.isRollFinalized===`true`||a.isRollFinalized===`true`,c=!s&&(o.draftRollPublished===`true`||a.draftRollPublished===`true`),l=`<span class="badge bg-slate-500/20 text-slate-400 border border-slate-500/30 text-[10px]">⏳ Unpublished</span>`,u=`View the official voter list for the election.`;s?(l=`<span class="badge bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">🔒 Final List Live</span>`,u=`Finalized nominal roll verified by Returning Officer.`):c&&(l=`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">📋 Draft Published</span>`,u=`Draft nominal roll published for student verification.`);let d=a.nominationStart?new Date(a.nominationStart):null,f=a.nominationDeadline?new Date(a.nominationDeadline):null,p=``,m=`New nomination form with automatic eligibility check.`;s?d&&!isNaN(d.getTime())&&n<d?(p=`<span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px]">📅 Opens ${d.toLocaleDateString(`en-IN`,{month:`short`,day:`numeric`})}</span>`,m=`Filing begins on ${d.toLocaleString(`en-IN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}.`):f&&!isNaN(f.getTime())&&n>f?(p=`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px]">🔴 Filing Closed</span>`,m=`The official deadline for filing nominations has passed.`):(p=`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">🟢 Open Now</span>`,m=`Submit your candidate nomination online.`):(p=`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">⏳ Awaiting Final Roll</span>`,m=`Opens only after the Final Nominal Roll is published.`);let h=o.validListPublished===`true`||a.validListPublished===`true`,g=a.withdrawalStart?new Date(a.withdrawalStart):null,_=a.withdrawalEnd?new Date(a.withdrawalEnd):null,v=``,y=`Submit formal withdrawal of your candidature.`;h?g&&!isNaN(g.getTime())&&n<g?(v=`<span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px]">📅 Opens ${g.toLocaleDateString(`en-IN`,{month:`short`,day:`numeric`})}</span>`,y=`Opens on ${g.toLocaleString(`en-IN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}.`):_&&!isNaN(_.getTime())&&n>_?(v=`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px]">🔴 Closed</span>`,y=`The official deadline for withdrawals has ended.`):(v=`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">🟢 Open Now</span>`,y=`Withdraw your nomination with admission number verification.`):(v=`<span class="badge bg-slate-500/20 text-slate-400 border border-slate-500/30 text-[10px]">⏳ Awaiting Scrutiny</span>`,y=`Opens after the Valid Nominations List is published.`);let b=h?`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">🟢 Published</span>`:`<span class="badge bg-slate-500/20 text-slate-400 border border-slate-500/30 text-[10px]">⏳ Pending Scrutiny</span>`,x=o.finalListPublished===`true`||a.finalListPublished===`true`?`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">🏆 Published</span>`:`<span class="badge bg-slate-500/20 text-slate-400 border border-slate-500/30 text-[10px]">⏳ Pending Final List</span>`,S=o.resultsPublished===`true`||a.resultsPublished===`true`,C=o.countingActive===`true`||a.countingActive===`true`,w=``,T=`View live vote counting and official declarations.`;S?(w=`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">📢 Results Declared</span>`,T=`Official election results published and verified.`):C?(w=`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] animate-pulse">🗳️ Counting in Progress</span>`,T=`Live vote counting is currently underway.`):(w=`<span class="badge bg-slate-500/20 text-slate-400 border border-slate-500/30 text-[10px]">⏳ Awaiting Counting</span>`,T=`Check back when counting commences.`),e.innerHTML=`
    <div class="page-enter min-h-screen flex flex-col">
      <header class="glass sticky top-0 z-50 border-b border-white/10">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">${i.charAt(0)}</div>
            <h1 class="text-xl font-bold text-white tracking-tight">${F(i)} Election Portal ${t}</h1>
          </div>
          <button data-nav="/admin" class="btn btn-secondary btn-sm flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            Admin Login
          </button>
        </div>
      </header>

      <main class="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            College Union <br/>
            <span class="gradient-text">Election Management ${t}</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            Welcome to the official election portal of ${F(r)}. 
            Submit your nominations, track status, and view the finalized candidate lists for the year ${t}.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${R(`/nominal-roll`,`📜`,`Nominal Roll`,u,l)}
          ${R(`/submit`,`📝`,`Submit Nomination`,m,p)}
          ${R(`/find`,`🔍`,`Find My Nomination`,`Retrieve and print your submitted nomination form.`,`<span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px]">🔍 Lookup</span>`)}
          ${R(`/withdraw`,`↩️`,`Withdraw Nomination`,y,v)}
          ${R(`/valid-list`,`✅`,`Valid Nominations`,`List of verified candidates before withdrawal.`,b)}
          ${R(`/final-list`,`🏆`,`Final Candidate List`,`Approved final candidate list for ballot.`,x)}
          ${R(`/results`,`📊`,`Live Results`,T,w)}
        </div>
      </main>

      <footer class="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; Magnolia 🌸</p>
      </footer>
    </div>
  `}catch(t){console.error(`Error rendering home page:`,t),e.innerHTML=`
      <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div class="glass p-8 rounded-2xl max-w-lg border border-red-500/20">
          <h2 class="text-2xl font-bold text-white mb-2">College Union Election Portal</h2>
          <p class="text-slate-400 mb-6">Unable to render dashboard cards right now.</p>
          <button data-nav="/" class="btn btn-primary" onclick="window.location.reload()">Reload</button>
        </div>
      </div>
    `}}function R(e,t,n,r,i=``){return`
  <div data-nav="${e}" class="glass p-6 rounded-2xl hover:bg-white/5 transition group cursor-pointer border border-white/5 hover:border-indigo-500/30 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-4">
        <div class="text-3xl transform group-hover:scale-110 transition duration-300">${t}</div>
        ${i?`<div>${i}</div>`:``}
      </div>
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition">${F(n)}</h3>
      <p class="text-sm text-slate-400 leading-relaxed">${F(r)}</p>
    </div>
    <div class="mt-6 flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">
      Continue <span>→</span>
    </div>
  </div>`}var z=[],ne=[],re=[],B={},ie=``;async function ae(e){let t=new Date().getFullYear(),r=n.COLLEGE_NAME,i=n.COLLEGE_SHORT_NAME;try{let[e,n]=await Promise.all([C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]);e.electionYear&&(t=e.electionYear),n.electionYear&&(t=n.electionYear),n.collegeName&&(r=n.collegeName),n.collegeShortName&&(i=n.collegeShortName)}catch{}e.innerHTML=me(`Submit Nomination`,`
    <div id="loadingState" class="flex flex-col items-center justify-center py-24 gap-4">
      <span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span>
      <p class="text-slate-400 text-sm">Loading data...</p>
    </div>
    <div id="formArea" class="hidden"></div>
  `,t,i),e.querySelector(`#backToHome`).addEventListener(`click`,()=>o.navigate(`/`));try{let[i,a,o,s,c]=await Promise.all([C.getNominalRoll(),C.getPosts().catch(()=>null),C.getPublicNominations().catch(()=>[]),C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]);if(z=Array.isArray(i)?i:[],re=Array.isArray(o)?o:[],B=s||{},z.length===0)throw Error(`Nominal roll is empty. Please contact the admin.`);ne=Array.isArray(a)&&a.length>0?a:n.DEFAULT_POSTS,oe(e,t,r,c||{})}catch(t){e.querySelector(`#loadingState`).innerHTML=`
      <div class="alert alert-error">${F(t.message)}</div>
      <button class="btn btn-secondary mt-4" id="backBtn">← Back to Home</button>`,e.querySelector(`#backBtn`).addEventListener(`click`,()=>o.navigate(`/`))}}function oe(e,t,n,r={}){let i=A();ie=i.answer,e.querySelector(`#loadingState`).classList.add(`hidden`);let a=e.querySelector(`#formArea`);a.classList.remove(`hidden`);let s=r.nominalRollFinalized===`true`||r.isRollFinalized===`true`,c=!s&&r.draftRollPublished===`true`;if(!window.ADMIN_BYPASS_PWD&&!s){a.innerHTML=`
      <div class="glass p-12 text-center rounded-2xl border border-amber-500/20 max-w-2xl mx-auto page-enter">
        <div class="text-6xl mb-6">📜</div>
        <div class="badge bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
          ${c?`Draft Nominal Roll Live`:`Nominal Roll Unpublished`}
        </div>
        <h3 class="text-2xl font-bold text-white mb-3">Nominations Not Open Yet</h3>
        <p class="text-slate-400 mb-6 leading-relaxed">
          Nomination submission will become active only after the <strong>Final Nominal Roll</strong> is officially published by the Returning Officer.
          ${c?`<br/><span class="text-xs text-amber-400/90 mt-2 block">Currently, only the Draft Voter List is published for verification & claims.</span>`:``}
        </p>
        <div class="flex justify-center gap-3">
          <button id="viewRollBtn" class="btn btn-primary">📜 View Nominal Roll</button>
          <button id="backBtn" class="btn btn-secondary">← Back to Home</button>
        </div>
      </div>
    `,a.querySelector(`#viewRollBtn`).onclick=()=>o.navigate(`/nominal-roll`),a.querySelector(`#backBtn`).onclick=()=>o.navigate(`/`);return}let l=B.nominationOverride||`AUTO`,u=l===`FORCE_OPEN`,d=l===`FORCE_CLOSED`,f=new Date,p=B.nominationStart?new Date(B.nominationStart):null,m=B.nominationDeadline?new Date(B.nominationDeadline):null;if(!window.ADMIN_BYPASS_PWD&&!u){if(d){a.innerHTML=`
        <div class="glass p-12 text-center rounded-2xl border border-rose-500/20 max-w-2xl mx-auto page-enter">
          <div class="text-6xl mb-6">🛑</div>
          <div class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            Filing Closed
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Nomination Window Closed</h3>
          <p class="text-slate-400 mb-6 leading-relaxed">Nomination submission has been officially closed by the Returning Officer.</p>
          <button id="expiredBackBtn" class="btn btn-secondary">← Back to Home</button>
        </div>
      `,a.querySelector(`#expiredBackBtn`).onclick=()=>o.navigate(`/`);return}if(p&&!isNaN(p.getTime())&&f<p){a.innerHTML=`
        <div class="glass p-12 text-center rounded-2xl border border-amber-500/20 max-w-2xl mx-auto page-enter">
          <div class="text-6xl mb-6">📅</div>
          <div class="badge bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            Scheduled Opening
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Nomination Filing Not Started</h3>
          <p class="text-slate-400 mb-6 leading-relaxed">
            Nomination submissions are scheduled to open on <strong>${p.toLocaleString(`en-IN`,{dateStyle:`full`,timeStyle:`short`})}</strong>.
          </p>
          <button id="pendingBackBtn" class="btn btn-secondary">← Back to Home</button>
        </div>
      `,a.querySelector(`#pendingBackBtn`).onclick=()=>o.navigate(`/`);return}if(m&&!isNaN(m.getTime())&&f>m){a.innerHTML=`
        <div class="glass p-12 text-center rounded-2xl border border-rose-500/20 max-w-2xl mx-auto page-enter">
          <div class="text-6xl mb-6">⏳</div>
          <div class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            Filing Ended
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Nomination Window Closed</h3>
          <p class="text-slate-400 mb-6 leading-relaxed">The official deadline for filing nominations was <strong>${m.toLocaleString(`en-IN`,{dateStyle:`full`,timeStyle:`short`})}</strong>.</p>
          <button id="expiredBackBtn" class="btn btn-secondary">← Back to Home</button>
        </div>
      `,a.querySelector(`#expiredBackBtn`).onclick=()=>o.navigate(`/`);return}}a.innerHTML=`
    <div id="warningBox" class="hidden alert alert-warning mb-4"></div>

    <form id="nomForm" class="space-y-8">
      <!-- Post -->
      <div>
        <label class="block text-sm font-semibold text-slate-300 mb-1">Post Applied For</label>
        <select id="postSelect" class="field">${ne.map(e=>`<option value="${F(e.post)}">${F(e.post)}</option>`).join(``)}</select>
        <div id="postRuleBadgeStrip" class="mt-2.5 flex flex-wrap items-center gap-2"></div>
      </div>

      <!-- Three columns: Candidate / Proposer / Seconder -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${ce(`candidate`,`Candidate`,!0)}
        ${ce(`proposer`,`Proposer`,!1)}
        ${ce(`seconder`,`Seconder`,!1)}
      </div>

      <!-- Captcha -->
      <div class="glass rounded-xl p-5">
        <label class="block text-sm font-semibold text-slate-300 mb-2">🤖 Captcha Verification</label>
        <p class="text-slate-400 text-sm mb-3">What is <strong id="captchaQuestion" class="text-white text-base">${i.question}</strong>?</p>
        <div class="flex items-center gap-3">
          <input id="captchaInput" type="number" class="field w-40" placeholder="Your answer" />
          <button type="button" id="refreshCaptcha" class="btn btn-secondary btn-sm">↺ Refresh</button>
        </div>
      </div>

      <!-- Submit -->
      <div class="flex gap-3">
        <button type="button" id="backHomeBtn" class="btn btn-secondary">← Back</button>
        <button type="submit" id="submitBtn" class="btn btn-primary flex-1">Generate &amp; Preview Nomination</button>
      </div>
    </form>

    <!-- Print Preview (hidden until submitted) -->
    <div id="previewSection" class="hidden mt-10">
      <div class="flex items-center justify-between mb-4 no-print">
        <h2 class="text-lg font-bold text-white">📄 Nomination Preview</h2>
        <div class="flex gap-3">
          <button id="printBtn" class="btn btn-success">🖨️ Print Form</button>
          <button id="newNomBtn" class="btn btn-secondary">Submit Another</button>
        </div>
      </div>
      <div id="printZone" class="print-zone"></div>
    </div>
  `;function h(e){let t=e.querySelector(`#postSelect`)?.value,n=e.querySelector(`#postRuleBadgeStrip`);if(!n||!t)return;let r=ne.find(e=>e.post===t)||{},i=[];r.femaleOnly&&i.push(`<span class="badge bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs">♀ Female Candidates Only</span>`);let a=r.restrictedDept||(r.deptRestriction&&String(r.post||``).startsWith(`Association Secretary `)?r.post.replace(`Association Secretary `,``).trim():``);(r.deptRestriction||a)&&i.push(`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">🏢 ${F(a||`Dept`)} Only (Candidate & Supporters)</span>`);let o=O(r);o&&o!==`All Years Eligible`&&o!==`All Years`&&(r.yearRuleMode===`EXCLUDE`||r.finalYearIneligible?i.push(`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold">🚫 ${F(o)}</span>`):i.push(`<span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">🎓 ${F(o)}</span>`)),i.length===0&&i.push(`<span class="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">✓ Open to all eligible students</span>`),n.innerHTML=i.join(``)}M(a.querySelector(`#dob-day`),a.querySelector(`#dob-month`),a.querySelector(`#dob-year`)),[`candidate`,`proposer`,`seconder`].forEach(e=>{let t=a.querySelector(`#serial-${e}`);t&&(t.addEventListener(`input`,()=>le(a,e)),t.addEventListener(`change`,()=>le(a,e)))}),a.querySelectorAll(`.find-serial-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.role,n=e.dataset.label;se(t,n,(e,n)=>{let r=a.querySelector(`#serial-${t}`);if(r&&(r.value=e,le(a,t)),t===`candidate`){let e=a.querySelector(`#auth-candidate`);e&&(!e.value||e.value.trim()===``)&&n&&n!==`–`&&(e.value=n,V(a))}})})});let g=a.querySelector(`#auth-candidate`);g&&(g.addEventListener(`input`,()=>V(a)),g.addEventListener(`change`,()=>V(a))),a.querySelector(`#postSelect`)?.addEventListener(`change`,()=>{h(a),V(a)}),h(a),a.querySelectorAll(`[name="gender"]`).forEach(e=>e.addEventListener(`change`,()=>V(a))),a.querySelectorAll(`.dob-sel`).forEach(e=>e.addEventListener(`change`,()=>V(a))),a.querySelector(`#refreshCaptcha`)?.addEventListener(`click`,()=>{let e=A();ie=e.answer,a.querySelector(`#captchaInput`).value=``,a.querySelector(`#captchaQuestion`).textContent=e.question}),a.querySelector(`#backHomeBtn`)?.addEventListener(`click`,()=>o.navigate(`/`)),a.querySelector(`#nomForm`)?.addEventListener(`submit`,e=>ue(e,a,t,n,r?.collegeLogo||``))}function se(e,t,n){let r=document.getElementById(`findSerialModalContainer`);r&&r.remove();let i=document.createElement(`div`);i.id=`findSerialModalContainer`,i.className=`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm page-enter`,i.innerHTML=`
    <div class="relative bg-slate-900 border border-indigo-500/30 rounded-2xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      <div class="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-indigo-950/40">
        <div>
          <h3 class="font-bold text-white text-base flex items-center gap-2">
            🔍 Find Electoral Roll Serial Number
          </h3>
          <p class="text-xs text-slate-400">Selecting for: <strong class="text-indigo-300 uppercase">${F(t)}</strong></p>
        </div>
        <button id="closeSerialModalBtn" class="text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
      </div>
      
      <div class="p-4 border-b border-white/10 space-y-2 bg-slate-900/80">
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input type="text" id="serialSearchInput" class="field pl-10 w-full text-sm" placeholder="Search by Student Name, Admission No, or Class..." autofocus />
        </div>
        <div class="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <span>⚠️</span>
          <span><strong>Critical:</strong> An incorrect Electoral Roll Serial Number leads to automatic rejection during scrutiny. Verify your Name and Admission No.</span>
        </div>
      </div>
      
      <div id="serialSearchResults" class="p-4 overflow-y-auto space-y-2 flex-1 max-h-[50vh]">
        <p class="text-slate-500 text-xs text-center py-6">Type a student name or admission number to search ${z.length} students.</p>
      </div>
    </div>
  `,document.body.appendChild(i);let a=i.querySelector(`#serialSearchInput`),o=i.querySelector(`#serialSearchResults`),s=i.querySelector(`#closeSerialModalBtn`),c=()=>i.remove();s.onclick=c,i.onclick=e=>{e.target===i&&c()},a.oninput=()=>{let t=a.value.trim().toLowerCase();if(!t){o.innerHTML=`<p class="text-slate-500 text-xs text-center py-6">Type a student name or admission number to search ${z.length} students.</p>`;return}let r=z.filter(e=>{let n=String(e.NAME||e.name||``).toLowerCase(),r=String(e[`ADMISION NO`]||e[`ADMISSION NO`]||e.admission_no||e[`Admission No`]||e[`Adm No`]||``).toLowerCase(),i=String(e.CLASS||e.class||``).toLowerCase(),a=String(e.Dept||e.dept||``).toLowerCase(),o=String(e[`Nominal Roll Serial Number`]||e.serial_number||``);return n.includes(t)||r.includes(t)||i.includes(t)||a.includes(t)||o===t||o.includes(t)}).slice(0,30);if(r.length===0){o.innerHTML=`<p class="text-rose-400 text-xs text-center py-6">No matching student found in the published Nominal Roll for "${F(t)}".</p>`;return}o.innerHTML=r.map(t=>{let n=String(t[`Nominal Roll Serial Number`]||t.serial_number||``),r=String(t.NAME||t.name||``),i=String(t[`ADMISION NO`]||t[`ADMISSION NO`]||t.admission_no||t[`Admission No`]||t[`Adm No`]||`–`),a=String(t.CLASS||t.class||``),o=String(t.Dept||t.dept||`N/A`),s=a.toUpperCase().includes(`RESEARCH`)||a.toUpperCase().includes(`SCHOLAR`),c=e===`candidate`&&s;return`
        <div class="glass hover:bg-white/[0.04] p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3 transition-colors ${c?`opacity-70`:``}">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono font-bold text-xs px-2 py-0.5">
                Sl. #${F(n)}
              </span>
              <span class="font-bold text-white text-sm truncate">${F(r)}</span>
              ${c?`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] px-1.5 py-0.2">Cannot Contest</span>`:``}
            </div>
            <div class="text-[11px] text-slate-400 mt-1 flex flex-wrap gap-x-3">
              <span>Adm: <strong class="text-slate-300 font-mono">${F(i)}</strong></span>
              <span>Class: ${F(a)}</span>
              <span>Dept: ${F(o)}</span>
            </div>
          </div>
          ${c?`
            <button type="button" disabled class="btn btn-secondary btn-xs shrink-0 px-2.5 py-1 text-xs font-medium opacity-40 cursor-not-allowed" title="Research Scholars are not eligible to contest">
              Ineligible
            </button>
          `:`
            <button type="button" class="btn btn-primary btn-xs shrink-0 select-serial-btn px-3 py-1 text-xs font-semibold" data-serial="${F(n)}" data-adm="${F(i)}">
              Select #${F(n)}
            </button>
          `}
        </div>
      `}).join(``),o.querySelectorAll(`.select-serial-btn`).forEach(e=>{e.onclick=()=>{n(e.dataset.serial,e.dataset.adm),c()}})},setTimeout(()=>a.focus(),100)}function ce(e,t,n){return`
  <div class="glass rounded-xl p-4 space-y-3 border border-white/10 shadow-lg">
    <div class="flex items-center justify-between border-b border-white/10 pb-2">
      <h3 class="font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
        <span>${n?`👤`:e===`proposer`?`✍️`:`🤝`}</span>
        ${t}
      </h3>
      <button type="button" class="btn btn-secondary btn-xs text-[11px] py-1 px-2.5 flex items-center gap-1.5 find-serial-btn border-indigo-500/30 text-indigo-300 hover:text-white" data-role="${e}" data-label="${t}">
        🔍 Find Sl. No.
      </button>
    </div>
    <div>
      <label class="text-xs text-slate-400 flex items-center justify-between">
        <span>Nominal Roll Serial No. <span class="text-rose-400">*</span></span>
        <span class="text-[10px] text-slate-500">Official voter list number</span>
      </label>
      <input id="serial-${e}" type="number" class="field mt-1 w-full font-mono text-base font-bold text-indigo-200" placeholder="e.g. 42" required />
    </div>
    <div id="details-${e}" class="text-xs text-slate-400 space-y-1 min-h-[3rem]"></div>
    ${n?`
    <div class="mt-4 pt-4 border-t border-white/10">
      <label class="text-xs font-semibold text-indigo-300 block mb-1">
        Your Admission Number (Authentication) <span class="text-rose-400">*</span>
      </label>
      <input id="auth-candidate" type="text" class="field mt-1 border-indigo-500/30 bg-indigo-900/20 font-mono text-sm" placeholder="Must match candidate serial record" required />
      <div id="auth-feedback" class="min-h-[1.25rem]"></div>
    </div>
    <div class="mt-4">
      <label class="text-xs text-slate-400 block mb-1">Gender <span class="text-rose-400">*</span></label>
      <div class="flex gap-4">
        <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
          <input type="radio" name="gender" value="Male" class="accent-indigo-500" /> Male
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
          <input type="radio" name="gender" value="Female" class="accent-indigo-500" /> Female
        </label>
      </div>
    </div>
    <div>
      <label class="text-xs text-slate-400 block mb-1">Date of Birth <span class="text-rose-400">*</span></label>
      <div class="flex gap-2">
        <select id="dob-day"   class="field dob-sel"><option value="">Day</option></select>
        <select id="dob-month" class="field dob-sel"><option value="">Month</option></select>
        <select id="dob-year"  class="field dob-sel"><option value="">Year</option></select>
      </div>
    </div>`:``}
  </div>`}function le(e,t){let n=e.querySelector(`#serial-${t}`)?.value.trim(),r=e.querySelector(`#details-${t}`);if(!r)return;let i=z.find(e=>String(e[`Nominal Roll Serial Number`]||e.serial_number||``)===n);if(!i){r.innerHTML=n?`
      <div class="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-2.5 rounded-lg mt-1 text-xs">
        ⚠️ Serial <strong>#${F(n)}</strong> not found in the published Nominal Roll!
      </div>`:``,V(e);return}r.innerHTML=`
    <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-lg p-2.5 space-y-1 mt-1 text-xs">
      <div class="flex items-center justify-between border-b border-indigo-500/20 pb-1 mb-1">
        <span class="text-slate-400 font-medium">Electoral Roll Sl. No:</span>
        <span class="badge bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 font-mono font-bold text-xs px-2 py-0.5">
          #${F(i[`Nominal Roll Serial Number`]||i.serial_number)}
        </span>
      </div>
      <p><span class="text-slate-400">Name:</span> <strong class="text-white">${F(i.NAME||i.name||``)}</strong></p>
      <p><span class="text-slate-400">Class:</span> <span class="text-slate-200">${F(i.CLASS||i.class||``)}</span></p>
      <p><span class="text-slate-400">Dept:</span> <span class="text-slate-200">${F(i.Dept||i.dept||`N/A`)}</span></p>
      <p><span class="text-slate-400">Adm No:</span> <span class="text-indigo-300 font-mono font-semibold">${F(i[`ADMISION NO`]||i[`ADMISSION NO`]||i.admission_no||`–`)}</span></p>
    </div>`,V(e)}function V(e){let t=[],n=e.querySelector(`#postSelect`)?.value,r=e.querySelector(`[name="gender"]:checked`)?.value||null,i=[`candidate`,`proposer`,`seconder`].map(t=>e.querySelector(`#serial-${t}`)?.value.trim()||``),a=i.map(e=>e?z.find(t=>String(t[`Nominal Roll Serial Number`]||t.serial_number||``)===e):null),[o,s,c]=i;o&&o===s&&t.push(`Candidate and Proposer cannot be the same person.`),o&&o===c&&t.push(`Candidate and Seconder cannot be the same person.`),s&&s===c&&t.push(`Proposer and Seconder cannot be the same person.`);let l=e.querySelector(`#auth-candidate`),u=l?.value.trim().toLowerCase(),d=a[0],f=e.querySelector(`#auth-feedback`);if(d&&u){let e=String(d[`ADMISION NO`]||d[`ADMISSION NO`]||d.admission_no||``).trim().toLowerCase();e&&u!==e?(t.push(`Authentication Failed: Entered Admission Number "${l.value}" does NOT match Electoral Roll Serial #${d[`Nominal Roll Serial Number`]} (${d.NAME}). A mismatched serial number will result in rejection!`),f&&(f.innerHTML=`<span class="text-rose-400 text-xs font-semibold flex items-center gap-1 mt-1">❌ Mismatch with Serial #${F(d[`Nominal Roll Serial Number`])}! Registered Adm No is different.</span>`)):e&&u===e&&f&&(f.innerHTML=`<span class="text-emerald-400 text-xs font-semibold flex items-center gap-1 mt-1">✅ Verified: Admission No matches Electoral Roll Serial #${F(d[`Nominal Roll Serial Number`])}</span>`)}else f&&(f.innerHTML=``);let p=[`Candidate`,`Proposer`,`Seconder`];a.forEach((e,i)=>{e&&t.push(...k(e,n,p[i],i===0?r:null,ne,re))});let m=e.querySelector(`#warningBox`);return m&&(t.length?(m.innerHTML=`<strong class="block mb-1">⚠ Eligibility & Serial Number Warnings</strong>`+t.map(e=>`<p class="text-sm">• ${F(e)}</p>`).join(``),m.classList.remove(`hidden`)):m.classList.add(`hidden`)),t}async function ue(e,t,n,r,i=``){if(e.preventDefault(),V(t).length){L(`Please resolve all eligibility warnings first.`,`error`);return}if(t.querySelector(`#captchaInput`)?.value.trim()!==ie){L(`Captcha answer is incorrect.`,`error`);return}let a=t.querySelector(`#postSelect`)?.value,o=t.querySelector(`[name="gender"]:checked`)?.value,s=t.querySelector(`#dob-day`)?.value,c=t.querySelector(`#dob-month`)?.value,l=t.querySelector(`#dob-year`)?.value;if(!o){L(`Please select a gender for the candidate.`,`error`);return}if(!s||!c||!l){L(`Please select a complete Date of Birth (Day, Month, Year).`,`error`);return}let u=[`candidate`,`proposer`,`seconder`].map(e=>t.querySelector(`#serial-${e}`)?.value.trim()||``),d=u.map(e=>z.find(t=>String(t[`Nominal Roll Serial Number`]||t.serial_number||``)===e));if(d.some(e=>!e)){L(`One or more serial numbers are invalid.`,`error`);return}let f=t.querySelector(`#auth-candidate`)?.value.trim();if(!f){L(`Please enter the Candidate Admission Number.`,`error`);return}let p=t.querySelector(`#submitBtn`);I(p,!0,`Generating & Previewing...`);try{let e=N(s,c,l),p={post:a,gender:o,dob:e,candidateSerial:u[0],proposerSerial:u[1],seconderSerial:u[2],candidateAdmission:f};window.ADMIN_BYPASS_PWD&&(p.password=window.ADMIN_BYPASS_PWD);let m=await C.submitNomination(p);de(t,m.id,{post:a,gender:o,day:s,month:c,year:l,dob:e,students:d},n,r,i),L(`Nomination submitted! ID: ${m.id}`,`success`)}catch(e){L(`Submission failed: ${e.message}`,`error`)}finally{I(p,!1,`Generate &amp; Preview Nomination`)}}function de(e,t,{post:n,gender:r,day:i,month:a,year:o,dob:s,students:c},l,u,d=``){let[f,p,m]=c,h=P(i,a,o),g=w(s),_=e.querySelector(`#previewSection`);e.querySelector(`#printZone`).innerHTML=fe(t,n,r,h,g,f,p,m,`Pending`,l,u,d),_.classList.remove(`hidden`),_.scrollIntoView({behavior:`smooth`}),_.querySelector(`#printBtn`)?.addEventListener(`click`,()=>{ee(e.querySelector(`#printZone`).innerHTML)}),_.querySelector(`#newNomBtn`)?.addEventListener(`click`,()=>ae(e.closest(`#app`)))}function fe(e,t,r,i,a,o,s,c,l=``,u=`2026`,d=null,f=``){let p=j(),m=d||n.COLLEGE_NAME;return`
  <div class="print-paper border border-slate-700 rounded-xl p-8 bg-slate-900 text-slate-200 space-y-4">
    <div class="flex justify-between items-start text-sm">
      <div>
        ${f?`<img src="${f}" style="max-height:45px;max-width:120px;margin-bottom:4px;display:block;object-fit:contain" alt="College Logo">`:``}
        <p class="font-bold text-white text-base">${F(m)}</p>
        <p class="text-slate-400">College Union Election ${u}</p>
      </div>
      <div class="text-right">
        <p class="text-slate-400 text-xs">Generated: ${p}</p>
        ${l?`<span class="badge badge-${l.toLowerCase()}">${F(l)}</span>`:``}
      </div>
    </div>
    <h2 class="text-center font-bold text-xl text-white border-y border-white/10 py-3">NOMINATION PAPER</h2>
    <p class="text-sm"><span class="font-semibold text-slate-400 w-40 inline-block">Post Applied For:</span> <strong class="text-white">${F(t)}</strong></p>
    <div class="space-y-3">
      ${pe(`Candidate`,o,r,i,a)}
      ${pe(`Proposer`,s)}
      ${pe(`Seconder`,c)}
    </div>
    <div class="border-t border-white/10 pt-6 text-center space-y-3">
      <h3 class="font-bold text-white">Consent of Candidate</h3>
      <p class="text-sm text-slate-400">I agree, if elected, to serve on the body to which I am proposed as a candidate.</p>
      <div class="flex justify-around mt-6 text-sm text-slate-400">
        <p>Signature: _______________________</p>
        <p>Date: ______ / ______ / ________</p>
      </div>
      <p class="text-xs text-slate-500 italic mb-4">(To be signed in front of the Returning Officer)</p>
    </div>
    <div class="border-t border-white/10 pt-2 text-right">
      <p class="text-[10px] text-slate-500 font-mono">Ref ID: ${F(e)}</p>
    </div>
  </div>`}function pe(e,t,n=null,r=null,i=null){if(!t)return``;let a=t[`Nominal Roll Serial Number`]||t.serial_number||t.SL_NO||``,o=t[`ADMISION NO`]||t[`ADMISSION NO`]||t.admission_no||t.candidateAdmission||t.proposerAdmission||t.seconderAdmission||``;return`
  <div class="glass rounded-lg p-4 text-sm space-y-1 border border-white/10">
    <div class="flex items-center justify-between border-b border-white/10 pb-1 mb-2">
      <h3 class="font-bold text-white uppercase text-xs tracking-widest">${e} Details</h3>
      <span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono font-bold text-xs px-2.5 py-0.5">
        Electoral Roll Sl. #${F(a)}
      </span>
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
      <p><span class="text-slate-400">Name:</span> <strong class="text-white text-sm">${F(t.NAME||t.name||``)}</strong></p>
      <p><span class="text-slate-400">Admission No:</span> <strong class="text-indigo-300 font-mono">${F(o||`–`)}</strong></p>
      <p><span class="text-slate-400">Class:</span> <span class="text-slate-200">${F(t.CLASS||t.class||``)}</span></p>
      <p><span class="text-slate-400">Dept:</span> <span class="text-slate-200">${F(t.Dept||t.dept||`N/A`)}</span></p>
      ${n?`<p><span class="text-slate-400">Gender:</span> <span class="text-slate-200">${F(n)}</span></p>`:``}
      ${r?`<p><span class="text-slate-400">Date of Birth:</span> <span class="text-slate-200">${F(r)}</span></p>`:``}
      ${i?`<p class="col-span-2"><span class="text-slate-400">Age as on Notification Date:</span> <strong class="text-emerald-400">${F(i)}</strong></p>`:``}
    </div>
    ${e===`Candidate`?``:`
    <div class="flex justify-between mt-4 text-slate-500 text-xs pt-2 border-t border-white/5">
      <span>Date: ______ / ______ / ________</span>
      <span>Signature: _______________</span>
    </div>`}
  </div>`}function me(e,t,r=`2026`,i=null){let a=i||n.COLLEGE_SHORT_NAME;return`
  <div class="page-enter min-h-screen">
    <header class="no-print sticky top-0 z-50 border-b border-white/10 glass">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button id="backToHome" class="btn btn-secondary btn-sm flex items-center gap-2">
            <span class="text-lg">←</span> Home
          </button>
          <div class="h-6 w-px bg-white/10 mx-2"></div>
          <h1 class="font-bold text-white text-lg tracking-tight">${F(e)}</h1>
        </div>
        <div class="text-xs text-slate-500 font-medium hidden md:block uppercase tracking-widest">
          ${F(a)} Election Portal ${r}
        </div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-8">${t}</main>
  </div>`}async function he(e){let t=new Date().getFullYear(),r=n.COLLEGE_SHORT_NAME,i=n.COLLEGE_NAME,a=``;try{let e=await C.getSettings().catch(()=>({}));e.electionYear&&(t=e.electionYear),e.collegeName&&(i=e.collegeName),e.collegeShortName&&(r=e.collegeShortName),e.collegeLogo&&(a=e.collegeLogo)}catch{}e.innerHTML=_e(`Find My Nomination`,`
    <div class="glass rounded-2xl p-8 max-w-lg mx-auto">
      <div class="text-center mb-8">
        <div class="text-5xl mb-3">🔍</div>
        <h2 class="text-xl font-bold text-white">Retrieve Nomination</h2>
        <p class="text-slate-400 text-sm mt-2">Enter your 10-digit unique nomination ID to find and print your form.</p>
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-slate-300 mb-1">Nomination ID (10 digits)</label>
          <input id="searchId" type="text" maxlength="10" class="field text-center text-xl tracking-widest font-mono" placeholder="0000000000" />
        </div>
        <button id="searchBtn" class="btn btn-primary w-full">🔍 Find Nomination</button>
      </div>
      <div id="resultArea" class="mt-8"></div>
    </div>
  `,t,r),e.querySelector(`#backToHome`).addEventListener(`click`,()=>o.navigate(`/`));let s=e.querySelector(`#searchBtn`);s.addEventListener(`click`,async()=>{let n=e.querySelector(`#searchId`).value.trim();if(n.length!==10||!/^\d+$/.test(n)){L(`Please enter a valid 10-digit numeric ID.`,`error`);return}I(s,!0,`🔍 Find Nomination`);try{let r=await C.getNomination(n);ge(e.querySelector(`#resultArea`),r,n,t,i,a)}catch(t){e.querySelector(`#resultArea`).innerHTML=`<div class="alert alert-error mt-4">❌ ${F(t.message)}</div>`}finally{I(s,!1,`🔍 Find Nomination`)}})}function ge(e,t,n,r,i,a=``){let o=t.dob||`N/A`,s=new Date(t.dob);isNaN(s.getTime())||(o=`${String(s.getDate()).padStart(2,`0`)}/${String(s.getMonth()+1).padStart(2,`0`)}/${s.getFullYear()}`);let c=w(t.dob);e.innerHTML=`
    <div class="space-y-4">
      <div class="alert alert-success">✅ Nomination found! Status: <strong>${F(t.status)}</strong></div>
      <div id="printZone" class="print-zone">
        ${fe(n,t.post,t.gender,o,c,t.candidate,t.proposer,t.seconder,t.status,r,i,a)}
      </div>
      <div class="flex gap-3 no-print">
        <button id="printBtn" class="btn btn-success flex-1">🖨️ Print</button>
      </div>
    </div>`,e.querySelector(`#printBtn`).addEventListener(`click`,()=>{ee(e.querySelector(`#printZone`).innerHTML)})}function _e(e,t,r=`2026`,i=null){let a=i||n.COLLEGE_SHORT_NAME;return`
  <div class="page-enter min-h-screen">
    <header class="no-print sticky top-0 z-50 border-b border-white/10 glass">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button id="backToHome" class="btn btn-secondary btn-sm flex items-center gap-2">
            <span class="text-lg">←</span> Home
          </button>
          <div class="h-6 w-px bg-white/10 mx-2"></div>
          <h1 class="font-bold text-white text-lg tracking-tight">${F(e)}</h1>
        </div>
        <div class="text-xs text-slate-500 font-medium hidden md:block uppercase tracking-widest">
          ${F(a)} Election Portal ${r}
        </div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-8">${t}</main>
  </div>`}async function ve(e){let t=new Date().getFullYear(),r=n.COLLEGE_SHORT_NAME;try{let[e,n]=await Promise.all([C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]);e.electionYear&&(t=e.electionYear),n.electionYear&&(t=n.electionYear),n.collegeShortName&&(r=n.collegeShortName)}catch{}e.innerHTML=be(`Valid Nominations List`,`
    <div class="text-center py-20"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading Valid Nominations...</p></div>
  `,t,r),e.querySelector(`#backToHome`).addEventListener(`click`,()=>o.navigate(`/`));try{let t=await C.getValidNominations();ye(e.querySelector(`main`),t)}catch{ye(e.querySelector(`main`),[])}}function ye(e,t){if(!t||t.length===0){e.innerHTML=`
      <div class="glass rounded-3xl p-20 text-center border-dashed border-white/10">
        <div class="text-6xl mb-6">📋</div>
        <h2 class="text-2xl font-bold text-white mb-2">List Not Published</h2>
        <p class="text-slate-400 max-w-md mx-auto">The valid nominations list has not been released yet. Please check back later for updates.</p>
      </div>
    `;return}let n={};t.forEach(e=>{n[e.post]||(n[e.post]=[]),n[e.post].push(e)}),e.innerHTML=`
    <div class="page-enter space-y-10">
      <div class="text-center md:text-left border-b border-white/5 pb-8">
        <h2 class="text-3xl font-black text-white tracking-tight">Verified Nominations</h2>
        <p class="text-slate-400 mt-2">Official list of all candidates whose nominations have been verified as valid.</p>
      </div>
      
      <div class="space-y-12">
        ${Object.entries(n).map(([e,t])=>`
          <div class="glass rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <div class="px-6 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/5 border-b border-white/10 flex justify-between items-center">
              <h3 class="font-bold text-indigo-300 text-sm uppercase tracking-widest">${F(e)}</h3>
              <span class="text-[10px] text-slate-500 font-mono">${t.length} Candidate${t.length>1?`s`:``}</span>
            </div>
            <div class="overflow-x-auto">
              <table class="data-table">
                <thead>
                  <tr>
                    <th class="w-16">#</th>
                    <th>Candidate Details</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  ${t.map((e,t)=>`
                    <tr class="hover:bg-white/[0.02] transition-colors">
                      <td class="text-slate-600 font-mono text-xs text-center">${t+1}</td>
                      <td>
                        <div class="font-bold text-white text-base flex items-center gap-2">
                          <span>${F(e.candidateName)}</span>
                          ${e.candidateSerial?`<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" title="Electoral Roll Serial Number">Roll Sl. #${F(e.candidateSerial)}</span>`:``}
                        </div>
                        <div class="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                          <span>${F(e.candidateClass)}</span>
                          ${e.candidateAdmission?`<span class="text-slate-500 font-mono">Adm: ${F(e.candidateAdmission)}</span>`:``}
                        </div>
                      </td>
                      <td class="text-sm text-slate-400">${F(e.candidateDept)}</td>
                    </tr>
                  `).join(``)}
                </tbody>
              </table>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>`}function be(e,t,r=`2026`,i=null){let a=i||n.COLLEGE_SHORT_NAME;return`
  <div class="page-enter min-h-screen">
    <header class="no-print sticky top-0 z-10 border-b border-white/10 glass">
      <div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button id="backToHome" class="text-slate-400 hover:text-white transition text-sm">← Home</button>
          <span class="text-slate-600">|</span>
          <h1 class="font-bold text-white text-sm tracking-tight">${F(e)}</h1>
        </div>
        <div class="text-[10px] text-slate-500 font-mono hidden sm:block">${F(a).toUpperCase()} ELECTION PORTAL ${r}</div>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 py-12">${t}</main>
  </div>`}async function xe(e){let t=new Date().getFullYear(),r=n.COLLEGE_SHORT_NAME;try{let[e,n]=await Promise.all([C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]);e.electionYear&&(t=e.electionYear),n.electionYear&&(t=n.electionYear),n.collegeShortName?r=n.collegeShortName:n.shortName&&(r=n.shortName)}catch{}e.innerHTML=Ce(`Final Candidates List`,`
    <div class="text-center py-20"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading Final List...</p></div>
  `,t,r),e.querySelector(`#backToHome`).addEventListener(`click`,()=>o.navigate(`/`));try{let n=await C.getFinalNominations();Se(e.querySelector(`main`),n?.active||[],t)}catch{Se(e.querySelector(`main`),[],t)}}function Se(e,t,n){if(!t||t.length===0){e.innerHTML=`
      <div class="glass rounded-3xl p-20 text-center border-dashed border-white/10">
        <div class="text-6xl mb-6">🏁</div>
        <h2 class="text-2xl font-bold text-white mb-2">Final List Pending</h2>
        <p class="text-slate-400 max-w-md mx-auto">The final candidate list will be published after the withdrawal period and scrutiny. Please check back later.</p>
      </div>
    `;return}let r={};t.forEach(e=>{r[e.post]||(r[e.post]=[]),r[e.post].push(e)}),e.innerHTML=`
    <div class="page-enter space-y-10">
      <div class="text-center md:text-left border-b border-white/5 pb-8">
        <h2 class="text-3xl font-black text-white tracking-tight">Final Candidate List ${n}</h2>
        <p class="text-slate-400 mt-2">Official approved list of candidates for the College Union Election ${n}.</p>
      </div>
      
      <div class="space-y-12">
        ${Object.entries(r).map(([e,t])=>`
          <div class="glass rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <div class="px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-indigo-500/5 border-b border-white/10 flex justify-between items-center">
              <h3 class="font-bold text-emerald-400 text-sm uppercase tracking-widest">${F(e)}</h3>
              <div class="flex items-center gap-3">
                ${t.length===1?`
                  <span class="badge badge-valid bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 text-[10px] animate-pulse">
                    🏆 ELECTED UNANIMOUSLY
                  </span>
                `:``}
                <span class="text-[10px] text-slate-500 font-mono">${t.length} Approved</span>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="data-table">
                <thead>
                  <tr>
                    <th class="w-16">#</th>
                    <th>Candidate Details</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  ${t.map((e,t)=>`
                    <tr class="hover:bg-white/[0.02] transition-colors">
                      <td class="text-slate-600 font-mono text-xs text-center">${t+1}</td>
                      <td>
                        <div class="font-bold text-white text-base flex items-center gap-2">
                          <span>${F(e.candidateName)}</span>
                          ${e.candidateSerial?`<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" title="Electoral Roll Serial Number">Roll Sl. #${F(e.candidateSerial)}</span>`:``}
                        </div>
                        <div class="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                          <span>${F(e.candidateClass)}</span>
                          ${e.candidateAdmission?`<span class="text-slate-500 font-mono">Adm: ${F(e.candidateAdmission)}</span>`:``}
                        </div>
                      </td>
                      <td class="text-sm text-slate-400">${F(e.candidateDept)}</td>
                    </tr>
                  `).join(``)}
                </tbody>
              </table>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>`}function Ce(e,t,r=`2026`,i=null){let a=i||n.COLLEGE_SHORT_NAME;return`
  <div class="page-enter min-h-screen">
    <header class="no-print sticky top-0 z-10 border-b border-white/10 glass">
      <div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button id="backToHome" class="text-slate-400 hover:text-white transition text-sm">← Home</button>
          <span class="text-slate-600">|</span>
          <h1 class="font-bold text-white text-sm tracking-tight">${F(e)}</h1>
        </div>
        <div class="text-[10px] text-slate-500 font-mono hidden sm:block">${F(a).toUpperCase()} ELECTION PORTAL ${r}</div>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 py-12">${t}</main>
  </div>`}async function we(e){let t=new Date().getFullYear(),r=n.COLLEGE_SHORT_NAME,i=n.COLLEGE_NAME;try{let[e,n]=await Promise.all([C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]);e.electionYear&&(t=e.electionYear),n.electionYear&&(t=n.electionYear),n.collegeName&&(i=n.collegeName),n.collegeShortName&&(r=n.collegeShortName)}catch{}e.innerHTML=De(`Withdrawal Form`,`
    <div id="loadingState" class="flex flex-col items-center justify-center py-24 gap-4">
      <span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span>
      <p class="text-slate-400 text-sm">Checking schedule...</p>
    </div>
    <div id="withdrawArea" class="hidden"></div>
  `,t,r),e.querySelector(`#backToHome`).addEventListener(`click`,()=>o.navigate(`/`));try{let[t,n]=await Promise.all([C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]),r=new Date,a=t.withdrawalStart?new Date(t.withdrawalStart):null,s=t.withdrawalEnd?new Date(t.withdrawalEnd):null,c=n?.validListPublished===`true`||t?.validListPublished===`true`,l=e.querySelector(`#withdrawArea`);if(e.querySelector(`#loadingState`).classList.add(`hidden`),l.classList.remove(`hidden`),!c){l.innerHTML=`
        <div class="glass p-12 text-center rounded-2xl border border-amber-500/20 max-w-2xl mx-auto page-enter">
          <div class="text-6xl mb-6">⏳</div>
          <div class="badge bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            Awaiting Scrutiny
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Withdrawals Not Open Yet</h3>
          <p class="text-slate-400 mb-6 leading-relaxed">
            Withdrawal of candidature will open only after the <strong>Valid Nominations List</strong> is officially published by the Returning Officer.
          </p>
          <button id="expiredBackBtn" class="btn btn-secondary">← Back to Home</button>
        </div>
      `,l.querySelector(`#expiredBackBtn`).onclick=()=>o.navigate(`/`);return}let u=t.withdrawalOverride||`AUTO`,d=u===`FORCE_OPEN`,f=u===`FORCE_CLOSED`;if(!d){if(f){l.innerHTML=`
          <div class="glass p-12 text-center rounded-2xl border border-rose-500/20 max-w-2xl mx-auto page-enter">
            <div class="text-6xl mb-6">🛑</div>
            <h3 class="text-2xl font-bold text-white mb-3">Withdrawal Window Closed</h3>
            <p class="text-slate-400 mb-6">Withdrawal of candidature has been officially closed by the Returning Officer.</p>
            <button id="expiredBackBtn" class="btn btn-secondary">← Back to Home</button>
          </div>
        `,l.querySelector(`#expiredBackBtn`).onclick=()=>o.navigate(`/`);return}if(a&&r<a){l.innerHTML=`
          <div class="glass p-12 text-center rounded-2xl border border-amber-500/20 max-w-2xl mx-auto page-enter">
            <div class="text-6xl mb-6">📅</div>
            <h3 class="text-2xl font-bold text-white mb-3">Withdrawal Window Pending</h3>
            <p class="text-slate-400 mb-6">The withdrawal window is scheduled to open on <strong>${new Date(a).toLocaleString()}</strong>.</p>
            <button id="expiredBackBtn" class="btn btn-secondary">← Back to Home</button>
          </div>
        `,l.querySelector(`#expiredBackBtn`).onclick=()=>o.navigate(`/`);return}if(s&&r>s){l.innerHTML=`
          <div class="glass p-12 text-center rounded-2xl border border-rose-500/20 max-w-2xl mx-auto page-enter">
            <div class="text-6xl mb-6">⏳</div>
            <h3 class="text-2xl font-bold text-white mb-3">Withdrawal Window Closed</h3>
            <p class="text-slate-400 mb-6">The official deadline for withdrawal requests was <strong>${new Date(s).toLocaleString()}</strong>.</p>
            <button id="expiredBackBtn" class="btn btn-secondary">← Back to Home</button>
          </div>
        `,l.querySelector(`#expiredBackBtn`).onclick=()=>o.navigate(`/`);return}}l.innerHTML=`
      <div class="glass rounded-2xl p-8 max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <div class="text-5xl mb-3">↩️</div>
          <h2 class="text-xl font-bold text-white">Submit Withdrawal</h2>
          <p class="text-slate-400 text-sm mt-2">Enter your 10-digit nomination ID and Admission Number to securely fetch your details and submit a withdrawal request.</p>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-slate-300 mb-1">Nomination ID (10 digits)</label>
            <input id="withdrawId" type="text" maxlength="10" class="field text-center text-xl tracking-widest font-mono" placeholder="0000000000" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-300 mb-1">Your Admission Number (Authentication)</label>
            <input id="authAdm" type="text" class="field text-center text-xl tracking-widest font-mono" placeholder="12345" />
          </div>
          <button id="fetchBtn" class="btn btn-primary w-full">Fetch Nomination Details</button>
        </div>
        <div id="nominationDetails" class="mt-8"></div>
      </div>
    `;let p=l.querySelector(`#fetchBtn`);p.addEventListener(`click`,async()=>{let e=l.querySelector(`#withdrawId`).value.trim(),t=l.querySelector(`#authAdm`).value.trim();if(e.length!==10||!/^\d+$/.test(e)){L(`Please enter a valid 10-digit numeric ID.`,`error`);return}if(!t){L(`Please enter your Admission Number.`,`error`);return}I(p,!0,`Fetch Nomination Details`);try{let n=await C.getNomination(e,t);Te(l.querySelector(`#nominationDetails`),n,e,t,i)}catch(e){l.querySelector(`#nominationDetails`).innerHTML=`<div class="alert alert-error">❌ ${F(e.message)}</div>`}finally{I(p,!1,`Fetch Nomination Details`)}})}catch(t){e.querySelector(`#loadingState`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}function Te(e,t,n,r,i=null){if(t.status!==`Valid`){e.innerHTML=`<div class="alert alert-warning">⚠ This nomination has status <strong>${F(t.status)}</strong>. Only <strong>Valid</strong> nominations can be withdrawn.</div>`;return}if(t.withdrawalStatus===`Requested`||t.withdrawalStatus===`Pending`||t.withdrawalStatus===`Approved`){e.innerHTML=`<div class="alert alert-info">ℹ A withdrawal request has already been ${t.withdrawalStatus===`Approved`?`approved`:`submitted and is currently under review by the Returning Officer`} for this nomination.</div>`;return}e.innerHTML=`
    <div class="space-y-4">
      <div class="alert alert-success">✅ Nomination found. Please review the details below before submitting your withdrawal.</div>
      <div class="glass rounded-xl p-5 text-sm space-y-2">
        <p><span class="text-slate-400 w-36 inline-block">Nomination ID:</span> <strong class="font-mono text-indigo-300">${F(n)}</strong></p>
        <p><span class="text-slate-400 w-36 inline-block">Post:</span> <strong class="text-white">${F(t.post)}</strong></p>
        <p><span class="text-slate-400 w-36 inline-block">Candidate:</span> ${F(t.candidate?.NAME||t.candidateName||`N/A`)}</p>
        <p><span class="text-slate-400 w-36 inline-block">Class:</span> ${F(t.candidate?.CLASS||t.candidateClass||`N/A`)}</p>
        <p><span class="text-slate-400 w-36 inline-block">Dept:</span> ${F(t.candidate?.Dept||t.candidateDept||`N/A`)}</p>
      </div>
      <div class="alert alert-warning text-sm">
        ⚠ <strong>Warning:</strong> Submitting this withdrawal is irreversible. The request will be sent to the Returning Officer for final approval.
      </div>
      <div class="flex gap-3">
        <button id="withdrawBtn" class="btn btn-danger flex-1">Submit Withdrawal Request</button>
      </div>
    </div>`,e.querySelector(`#withdrawBtn`).addEventListener(`click`,async()=>{let a=e.querySelector(`#withdrawBtn`);I(a,!0,`Submit Withdrawal Request`);try{await C.submitWithdrawal(n,r),e.innerHTML=`
        <div class="alert alert-success">✅ Withdrawal request submitted successfully! The Returning Officer will review your request.</div>
        <div class="mt-4 no-print">
          <button id="printWithdrawal" class="btn btn-secondary">🖨️ Print Withdrawal Form</button>
        </div>
        <div class="print-zone mt-4">
          ${Ee(n,t,i)}
        </div>`,e.querySelector(`#printWithdrawal`).addEventListener(`click`,ee),L(`Withdrawal request submitted!`,`success`)}catch(e){L(`Failed: ${e.message}`,`error`),I(a,!1,`Submit Withdrawal Request`)}})}function Ee(e,t,r=null){let i=j(),a=t.candidate?.NAME||t.candidateName||`N/A`,o=t.candidate?.CLASS||t.candidateClass||`N/A`,s=t.candidate?.Dept||t.candidateDept||`N/A`;return`
  <div class="print-paper border border-slate-700 rounded-xl p-8 bg-slate-900 text-slate-200 space-y-5">
    <div class="flex justify-between text-sm">
      <div>
        <p class="font-bold text-white text-base">${F(r||n.COLLEGE_NAME)}</p>
        <p class="text-slate-400">College Union Election — Withdrawal Form</p>
      </div>
      <p class="text-slate-400 text-xs">Date: ${i}</p>
    </div>
    <h2 class="text-center font-bold text-xl text-white border-y border-white/10 py-3">WITHDRAWAL OF NOMINATION</h2>
    <div class="space-y-2 text-sm">
      <p><span class="text-slate-400 w-40 inline-block">Nomination ID:</span> <strong class="font-mono text-indigo-300 text-lg">${F(e)}</strong></p>
      <p><span class="text-slate-400 w-40 inline-block">Post:</span> <strong class="text-white">${F(t.post)}</strong></p>
      <p><span class="text-slate-400 w-40 inline-block">Candidate Name:</span> ${F(a)}</p>
      <p><span class="text-slate-400 w-40 inline-block">Class:</span> ${F(o)}</p>
      <p><span class="text-slate-400 w-40 inline-block">Department:</span> ${F(s)}</p>
    </div>
    <p class="text-sm text-slate-300 border border-white/10 rounded-lg p-4">
      I, <strong>${F(a)}</strong>, hereby withdraw my nomination for the post of <strong>${F(t.post)}</strong> in the College Union Election.
    </p>
    <div class="flex justify-around mt-8 text-sm text-slate-400">
      <div class="text-center">
        <p class="mb-8">___________________________</p>
        <p>Signature of Candidate</p>
      </div>
      <div class="text-center">
        <p class="mb-8">______ / ______ / ________</p>
        <p>Date</p>
      </div>
      <div class="text-center">
        <p class="mb-8">___________________________</p>
        <p>Returning Officer</p>
      </div>
    </div>
  </div>`}function De(e,t,r=`2026`,i=null){let a=i||n.COLLEGE_SHORT_NAME;return`
  <div class="page-enter min-h-screen">
    <header class="no-print sticky top-0 z-50 border-b border-white/10 glass">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button id="backToHome" class="btn btn-secondary btn-sm flex items-center gap-2">
            <span class="text-lg">←</span> Home
          </button>
          <div class="h-6 w-px bg-white/10 mx-2"></div>
          <h1 class="font-bold text-white text-lg tracking-tight">${F(e)}</h1>
        </div>
        <div class="text-xs text-slate-500 font-medium hidden md:block uppercase tracking-widest">
          ${F(a)} Election Portal ${r}
        </div>
      </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-8">${t}</main>
  </div>`}var Oe=`modulepreload`,ke=function(e,t){return new URL(e,t).href},Ae={},je=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ke(t,n),t in Ae)return;Ae[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Oe,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Me(e){e.innerHTML=`
    <div class="glass max-w-md w-full mx-auto p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden page-enter">
      <!-- Background Glow -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>

      <button data-nav="/" class="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-1 text-sm z-20 transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        Home
      </button>

      <div class="text-center mb-8 relative z-10 mt-4">
        <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-xl">G</div>
        <h2 class="text-3xl font-black text-white tracking-tight">Admin Access</h2>
        <p class="text-slate-400 text-sm mt-2">Secure Gateway for Election Management</p>
      </div>

      <div id="errorMsg" class="hidden alert alert-error text-left mb-6"></div>
      
      <form id="loginForm" class="space-y-6 text-left relative z-10">
        <input type="text" name="username" value="admin" style="display:none;" autocomplete="username" />
        
        <!-- Step 1: Password -->
        <div id="passwordStep">
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Password</label>
          <input id="adminPassword" type="password" class="field text-lg" placeholder="Enter password" autocomplete="current-password" />
          <button type="submit" id="btnRequestOTP" class="btn btn-primary w-full text-base py-4 mt-6 group">
            <span>Request Secure OTP</span>
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <!-- Step 2: OTP (Hidden initially) -->
        <div id="otpStep" class="hidden space-y-6">
          <div class="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
            <p class="text-xs text-indigo-300 leading-relaxed">
              🔐 <strong>Check your Email</strong><br/>
              A 6-digit verification code has been sent to your registered email address.
            </p>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Enter 6-Digit OTP</label>
            <input id="adminOTP" type="number" class="field text-center text-2xl tracking-[0.5em] font-black" placeholder="000000" maxlength="6" />
          </div>
          <button type="button" id="btnVerifyLogin" class="btn btn-success w-full text-base py-4 shadow-lg shadow-emerald-500/20">
            <span>Verify & Login</span>
          </button>
          <button type="button" id="btnBackToPassword" class="w-full text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-widest font-bold transition">
            ← Use a different password
          </button>
        </div>
      </form>
    </div>
  `;let t=e.querySelector(`#loginForm`),n=e.querySelector(`#errorMsg`),i=e.querySelector(`#passwordStep`),a=e.querySelector(`#otpStep`),o=e.querySelector(`#adminPassword`),s=e.querySelector(`#adminOTP`),c=e=>{n.textContent=e,n.classList.remove(`hidden`),n.classList.add(`shake`),setTimeout(()=>n.classList.remove(`shake`),500)};t.onsubmit=async t=>{t.preventDefault();let r=o.value.trim();if(!r)return c(`Please enter the admin password.`);let l=e.querySelector(`#btnRequestOTP`);I(l,!0,`Verifying...`),n.classList.add(`hidden`);try{await C.adminSendOTP(r),i.classList.add(`hidden`),a.classList.remove(`hidden`),a.classList.add(`page-enter`),s.focus(),L(`OTP sent successfully!`,`success`)}catch(e){c(e.message===`Unauthorized`?`Incorrect admin password.`:e.message)}finally{I(l,!1,`Request Secure OTP`)}},e.querySelector(`#btnVerifyLogin`).onclick=async e=>{let t=o.value.trim(),i=s.value.trim();if(!i||i.length!==6)return c(`Please enter a valid 6-digit OTP.`);I(e.target,!0,`Verifying OTP...`),n.classList.add(`hidden`);try{let e=await C.adminVerifyOTP(t,i),n=new Date().toISOString().split(`T`)[0];localStorage.setItem(`adminPwd`,t),localStorage.setItem(`adminLoginDate`,n),e.sessionToken&&(localStorage.setItem(`adminSessionToken`,e.sessionToken),sessionStorage.setItem(`adminSessionToken`,e.sessionToken)),L(`Authentication successful!`,`success`),je(async()=>{let{router:e}=await Promise.resolve().then(()=>r);return{router:e}},void 0,import.meta.url).then(({router:e})=>e.navigate(`/admin/dashboard`))}catch(e){c(e.message)}finally{I(e.target,!1,`Verify & Login`)}},e.querySelector(`#btnBackToPassword`).onclick=()=>{a.classList.add(`hidden`),i.classList.remove(`hidden`),i.classList.add(`page-enter`),n.classList.add(`hidden`)}}function H(){let e=localStorage.getItem(`adminPwd`),t=localStorage.getItem(`adminLoginDate`),n=new Date().toISOString().split(`T`)[0];if(!e||t!==n)return e&&(localStorage.removeItem(`adminPwd`),localStorage.removeItem(`adminLoginDate`),localStorage.removeItem(`adminSessionToken`),sessionStorage.removeItem(`adminSessionToken`),L(`Daily session expired. Please log in again.`,`warning`)),o.navigate(`/admin`),null;let r=localStorage.getItem(`adminSessionToken`);return r&&sessionStorage.setItem(`adminSessionToken`,r),e}function U(e,t,r){let i=H(),a=localStorage.getItem(`cachedCollegeShortName`)||n.COLLEGE_SHORT_NAME;i&&(C.initAdminData(i),C.adminGetSettings(i).then(t=>{let r=t.collegeShortName||n.COLLEGE_SHORT_NAME;localStorage.setItem(`cachedCollegeShortName`,r);let i=e.querySelector(`#layout-college-logo`),a=e.querySelector(`#layout-college-name`);i&&(i.textContent=r.charAt(0)),a&&(a.textContent=r+` Election`)}).catch(()=>{})),e.innerHTML=`
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside class="no-print w-60 flex-shrink-0 glass border-r border-white/10 flex flex-col">
      <div class="p-5 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div id="layout-college-logo" class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">${a.charAt(0)}</div>
          <div>
            <p id="layout-college-name" class="font-bold text-white text-xs">${a} Election</p>
            <p class="text-slate-500 text-xs">Admin Panel</p>
          </div>
        </div>
      </div>
      <nav class="flex-1 p-3 space-y-1">
        ${W(`dashboard`,`📊`,`Dashboard`,t)}
        ${W(`schedule`,`📅`,`Election Schedule`,t)}
        ${W(`nominal-roll`,`📜`,`Nominal Roll`,t)}
        ${W(`posts`,`📋`,`Manage Posts`,t)}
        ${W(`direct-nomination`,`📝`,`Direct Entry`,t)}
        ${W(`verify`,`✅`,`Verify Nominations`,t)}
        ${W(`withdrawals`,`↩️`,`Withdrawals`,t)}
        ${W(`publish`,`📢`,`Publish Lists`,t)}
        ${W(`booths`,`🏫`,`Polling Booths`,t)}
        ${W(`ballots`,`🗳️`,`Ballot Printing`,t)}
        <div class="border-t border-white/10 my-2"></div>
        ${W(`counting`,`🧮`,`Counting Setup`,t)}
        ${W(`results-entry`,`📥`,`Results Entry`,t)}
        ${W(`results`,`🏆`,`Election Results`,t)}
        <div class="border-t border-white/10 my-2"></div>
        ${W(`settings`,`⚙️`,`Settings`,t)}
        ${W(`backup`,`💾`,`Backup & Restore`,t)}
        ${W(`public`,`🌐`,`Public Portal`,t)}
        <div class="border-t border-white/10 my-2"></div>
        ${W(`testing`,`🧪`,`Testing Tools`,t)}
        ${W(`audit`,`🛡️`,`Internal Audit`,t)}
      </nav>
      <div class="p-3 border-t border-white/10">
        <button id="logoutBtn" class="sidebar-item text-red-400 hover:text-red-300 hover:bg-red-500/10">
          <span>🚪</span> Logout
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col min-h-screen overflow-auto">
      <header class="no-print border-b border-white/10 glass px-6 py-3 flex items-center justify-between flex-shrink-0">
        <h2 class="font-semibold text-white capitalize">${t.replace(/-/g,` `)}</h2>
        <span class="text-xs text-slate-500">Logged in as Admin</span>
      </header>
      <main id="adminMain" class="flex-1 p-6 overflow-auto">
        ${r}
      </main>
    </div>
  </div>`,e.querySelectorAll(`[data-admin-nav]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.adminNav;if(t===`public`){o.navigate(`/`);return}o.navigate(`/admin/${t}`)})}),e.querySelector(`#logoutBtn`).addEventListener(`click`,async()=>{try{let e=localStorage.getItem(`adminPwd`);e&&await C.adminLogout(e)}catch(e){console.error(`Logout API failed:`,e)}localStorage.removeItem(`adminPwd`),localStorage.removeItem(`adminLoginDate`),localStorage.removeItem(`adminSessionToken`),sessionStorage.removeItem(`adminSessionToken`),L(`Logged out.`,`info`),o.navigate(`/`)})}function W(e,t,n,r){return`
  <button data-admin-nav="${e}" class="sidebar-item ${r===e?`active`:``}">
    <span>${t}</span> ${n}
  </button>`}async function Ne(e){let t=H();if(t){U(e,`dashboard`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading dashboard...</p></div>
  `);try{let[n,i]=await Promise.all([C.adminGetNominations(t,!0),C.adminGetSettings(t)]),a=n.length,o=n.filter(e=>e.status===`Pending`).length,s=n.filter(e=>e.status===`Valid`).length,c=n.filter(e=>e.status===`Rejected`).length,l=n.filter(e=>e.withdrawalStatus===`Requested`||e.withdrawalStatus===`Pending`).length,u=e.querySelector(`#adminMain`);u.innerHTML=`
      <div class="page-enter space-y-8">
        <div class="flex items-end justify-between">
          <div>
            <h3 class="text-2xl font-bold text-white">Admin Dashboard</h3>
            <p class="text-slate-400 text-sm mt-1">Real-time overview of nomination and election status.</p>
          </div>
          <div class="text-right hidden md:block">
            <p class="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Last Updated</p>
            <p class="text-xs text-indigo-400 font-mono">${new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          ${Pe(`Total Submissions`,a,`from-indigo-500/20 to-indigo-600/5`,`text-indigo-400`)}
          ${Pe(`Pending Review`,o,`from-amber-500/20 to-amber-600/5`,`text-amber-400`)}
          ${Pe(`Valid Nominations`,s,`from-emerald-500/20 to-emerald-600/5`,`text-emerald-400`)}
          ${Pe(`Rejected`,c,`from-rose-500/20 to-rose-600/5`,`text-rose-400`)}
        </div>

        <!-- Secondary Stats & Actions -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 glass rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-white mb-2">Management Actions</h4>
              <p class="text-slate-400 text-xs mb-6">Process incoming requests and publish official lists to the public portal.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <button class="btn btn-primary" data-admin-nav="verify">
                <span>✅ Review Nominations</span>
                ${o>0?`<span class="ml-1 bg-white/20 px-1.5 py-0.5 rounded text-[10px]">${o}</span>`:``}
              </button>
              <button class="btn btn-secondary" data-admin-nav="withdrawals">
                <span>↩️ Withdrawals</span>
                ${l>0?`<span class="ml-1 bg-indigo-500/40 px-1.5 py-0.5 rounded text-[10px]">${l}</span>`:``}
              </button>
              <button class="btn btn-secondary" data-admin-nav="publish">📢 Publish Lists</button>
            </div>
          </div>
          
          </div>
        </div>

        <!-- Table View -->
        <div class="glass rounded-2xl overflow-hidden shadow-2xl">
          <div class="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
            <h4 class="font-bold text-white text-sm">Recent Activity</h4>
            <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Top 10 Latest</span>
          </div>
          <div class="overflow-x-auto">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Nomination ID</th>
                  <th>Candidate Name</th>
                  <th>Post</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${n.slice(-10).reverse().map(e=>`
                  <tr>
                    <td class="font-mono text-indigo-400 text-xs">${F(e.id)}</td>
                    <td>
                      <div class="font-semibold text-white">${F(e.candidateName)}</div>
                      <div class="text-[10px] text-slate-500">${F(e.candidateClass)}</div>
                    </td>
                    <td class="text-xs text-slate-300 font-medium">${F(e.post)}</td>
                    <td class="text-xs text-slate-400">${F(e.candidateDept)}</td>
                    <td><span class="badge badge-${(e.status||`pending`).toLowerCase()}">${F(e.status)}</span></td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
          ${a>10?`
          <div class="p-3 text-center border-t border-white/5 bg-white/[0.01]">
            <button class="text-[10px] text-indigo-400 font-bold uppercase tracking-widest hover:text-indigo-300 transition" data-admin-nav="verify">View All Nominations →</button>
          </div>`:``}
        </div>
      </div>`,e.querySelectorAll(`[data-admin-nav]`).forEach(e=>{e.addEventListener(`click`,()=>{je(async()=>{let{router:e}=await Promise.resolve().then(()=>r);return{router:e}},void 0,import.meta.url).then(({router:t})=>t.navigate(`/admin/${e.dataset.adminNav}`))})})}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function Pe(e,t,n,r){return`
  <div class="glass rounded-2xl p-6 relative overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-br ${n} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3 relative z-10">${e}</p>
    <p class="text-3xl font-black ${r} relative z-10">${t}</p>
  </div>`}async function Fe(e){let t=H();if(t){U(e,`verify`,`
    <div class="text-center py-16">
      <span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span>
      <p class="text-slate-400 mt-4 text-sm">Loading nominations and scrutiny rules...</p>
    </div>
  `);try{let[r,i,a]=await Promise.all([C.adminGetNominations(t,!0),C.adminGetSettings(t).catch(()=>({})),C.adminGetPosts(t).catch(()=>C.getPosts().catch(()=>n.DEFAULT_POSTS||[]))]);Ie(e.querySelector(`#adminMain`),r,t,i,a)}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function G(e,t=[],n=[],r={}){let i=[];if(!e)return i;let a=t.find(t=>t.post===e.post)||{},o=String(e.candidateClass||e.candidate?.CLASS||``).toUpperCase(),s=String(e.candidateDept||e.candidate?.Dept||``).toUpperCase(),c=String(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]||``).trim(),l=String(e.candidateAdmission||e.candidate?.[`ADMISION NO`]||``).trim().toLowerCase(),u=e.proposerName||e.proposer?.NAME||``;String(e.proposerClass||e.proposer?.CLASS||``).toUpperCase();let d=String(e.proposerDept||e.proposer?.Dept||``).toUpperCase(),f=String(e.proposerSerial||e.proposer?.[`Nominal Roll Serial Number`]||``).trim(),p=String(e.proposerAdmission||e.proposer?.[`ADMISION NO`]||``).trim().toLowerCase(),m=e.seconderName||e.seconder?.NAME||``;String(e.seconderClass||e.seconder?.CLASS||``).toUpperCase();let h=String(e.seconderDept||e.seconder?.Dept||``).toUpperCase(),g=String(e.seconderSerial||e.seconder?.[`Nominal Roll Serial Number`]||``).trim(),_=String(e.seconderAdmission||e.seconder?.[`ADMISION NO`]||``).trim().toLowerCase(),v=E(o);if((v===`RS`||o.includes(`RESEARCH`)||o.includes(`SCHOLAR`)||o.includes(`PHD`))&&i.push({type:`RESEARCH_SCHOLAR`,severity:`error`,message:`Research Scholars are barred from contesting in College Union Elections under Lyngdoh Committee norms.`}),a.femaleOnly&&e.gender&&e.gender!==`Female`&&i.push({type:`GENDER_MISMATCH`,severity:`error`,message:`The post "${e.post}" is reserved for Female candidates only (Submitted: ${e.gender}).`}),e.dob){let t=new Date(e.dob);if(!isNaN(t.getTime())){let e=r.electionDate?new Date(r.electionDate):new Date,n=e.getFullYear()-t.getFullYear(),a=e.getMonth()-t.getMonth();(a<0||a===0&&e.getDate()<t.getDate())&&n--,(v===`1_UG`||v===`2_UG`||v===`3_UG`)&&n>22?i.push({type:`AGE_LIMIT_UG`,severity:`error`,message:`Candidate age is ${n} years, exceeding the maximum statutory UG age limit of 22 years (Lyngdoh Committee recommendations).`}):(v===`1_PG`||v===`2_PG`)&&n>25?i.push({type:`AGE_LIMIT_PG`,severity:`error`,message:`Candidate age is ${n} years, exceeding the maximum statutory PG age limit of 25 years (Lyngdoh Committee recommendations).`}):v===`RS`&&n>28&&i.push({type:`AGE_LIMIT_RS`,severity:`error`,message:`Candidate age is ${n} years, exceeding the maximum Research Scholar age limit of 28 years.`})}}if(a.deptRestriction){let t=(a.restrictedDept||(String(e.post).startsWith(`Association Secretary `)?e.post.replace(`Association Secretary `,``).trim():``)).trim();if(t){let n=e=>String(e||``).toUpperCase().replace(/[^A-Z0-9]/g,``),r=n(t),a=e=>{let t=n(e);return t===r||t.includes(r)||r.includes(t)};a(s)||i.push({type:`DEPT_CANDIDATE`,severity:`error`,message:`Candidate belongs to department "${e.candidateDept||`N/A`}", but post requires "${t}".`}),a(d)||i.push({type:`DEPT_PROPOSER`,severity:`warning`,message:`Proposer belongs to department "${e.proposerDept||`N/A`}", but post requires "${t}".`}),a(h)||i.push({type:`DEPT_SECONDER`,severity:`warning`,message:`Seconder belongs to department "${e.seconderDept||`N/A`}", but post requires "${t}".`})}}if(a&&!D(o,a)){let t=O(a);i.push({type:`YEAR_ELIGIBILITY`,severity:`error`,message:`Candidate class (${e.candidateClass||`N/A`}) does not meet the year restriction for "${e.post}" (${t}).`})}c&&f&&c===f?i.push({type:`SELF_PROPOSED`,severity:`error`,message:`Candidate cannot propose themselves (Proposer serial matches candidate).`}):l&&p&&l===p&&i.push({type:`SELF_PROPOSED`,severity:`error`,message:`Candidate and Proposer have the same admission number.`}),c&&g&&c===g?i.push({type:`SELF_SECONDED`,severity:`error`,message:`Candidate cannot second themselves (Seconder serial matches candidate).`}):l&&_&&l===_&&i.push({type:`SELF_SECONDED`,severity:`error`,message:`Candidate and Seconder have the same admission number.`}),f&&g&&f===g?i.push({type:`SAME_PROPOSER_SECONDER`,severity:`error`,message:`Proposer and Seconder cannot be the same person.`}):p&&_&&p===_&&i.push({type:`SAME_PROPOSER_SECONDER`,severity:`error`,message:`Proposer and Seconder have the same admission number.`});let y=n.filter(t=>t.id!==e.id&&t.post===e.post&&t.status!==`Rejected`);if(f){let e=y.find(e=>String(e.proposerSerial)===f||String(e.seconderSerial)===f);e&&i.push({type:`DUPLICATE_PROPOSER_ENDORSEMENT`,severity:`error`,message:`Proposer (Sl #${f}, ${u}) has already endorsed nomination #${e.id} (${e.candidateName||`Candidate`}) for this post.`})}if(g){let e=y.find(e=>String(e.proposerSerial)===g||String(e.seconderSerial)===g);e&&i.push({type:`DUPLICATE_SECONDER_ENDORSEMENT`,severity:`error`,message:`Seconder (Sl #${g}, ${m}) has already endorsed nomination #${e.id} (${e.candidateName||`Candidate`}) for this post.`})}let b=n.filter(t=>t.id!==e.id&&t.status!==`Rejected`&&(c&&String(t.candidateSerial)===c||l&&String(t.candidateAdmission).trim().toLowerCase()===l));if(b.length>0){let e=b.map(e=>`"${e.post}" (#${e.id})`).join(`, `);i.push({type:`MULTIPLE_CANDIDACY`,severity:`error`,message:`Candidate has also filed nomination for other post(s): ${e}.`})}return i}function Ie(e,t,r,i={},a=[]){let o=Array.isArray(t)?[...t]:[],s=Array.isArray(a)?[...a]:[],c=`cards`;e.innerHTML=`
    <div class="page-enter space-y-4">
      <!-- Title Bar -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-2">
        <div>
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <span>Nomination Verification & Scrutiny</span>
          </h3>
          <p class="text-slate-400 text-sm">Review full candidate forms, audit statutory rule violations, and mark nominations as Valid or Rejected.</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button id="btnRefreshVerify" class="btn btn-secondary btn-sm flex items-center gap-1.5 text-xs py-1.5 px-3 bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-200">
            <span id="refreshIcon">🔄</span> <span>Refresh List</span>
          </button>
        </div>
      </div>

      <!-- Search & Filters -->
      <div class="glass rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center w-full shadow-lg">
        <div class="relative flex-1 w-full">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          <input type="text" id="nomSearch" class="field w-full pl-10 bg-black/20 focus:bg-black/40 transition-colors" placeholder="Search Candidate, ID, Post, Dept, or Roll Serial...">
        </div>
        <div class="w-full md:w-64 shrink-0">
          <select id="statusFilter" class="field w-full bg-black/20 focus:bg-black/40 transition-colors">
            <option value="all">All Submissions</option>
            <option value="Pending">Pending Review</option>
            <option value="Valid">Valid</option>
            <option value="Rejected">Rejected</option>
            <option value="violations">⚠️ Rule Violations Flagged</option>
            <option value="passed">✓ All Rules Passed</option>
          </select>
        </div>
        <div class="flex items-center rounded-lg bg-black/40 p-1 border border-white/10 shrink-0 self-end md:self-center">
          <button type="button" id="btnNomModeCards" class="btn btn-xs py-1.5 px-3 rounded text-xs flex items-center gap-1.5 transition-all ${c===`cards`?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`text-slate-400 hover:text-white`}" title="Card View (Optimized for Mobile/Phone)">
            <span>📇</span> <span>Cards</span>
          </button>
          <button type="button" id="btnNomModeTable" class="btn btn-xs py-1.5 px-3 rounded text-xs flex items-center gap-1.5 transition-all ${c===`table`?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`text-slate-400 hover:text-white`}" title="Table View">
            <span>📑</span> <span>Table</span>
          </button>
        </div>
      </div>

      <!-- Nominations List View (Cards or Table) -->
      <div class="glass rounded-xl overflow-hidden shadow-2xl" id="nomListView">
        <div id="nomCardsContainer" class="${c===`cards`?``:`hidden`} p-3.5 sm:p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5"></div>
        <div id="nomTableContainer" class="${c===`table`?``:`hidden`} overflow-x-auto">
          <table class="data-table" id="nomTable">
            <thead><tr>
              <th>Nom. ID</th>
              <th>Post</th>
              <th>Candidate Details</th>
              <th>Class / Dept</th>
              <th>Proposer</th>
              <th>Seconder</th>
              <th>Status & Scrutiny</th>
              <th>Action</th>
            </tr></thead>
            <tbody id="nomTableBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Full Nomination Form Review Modal -->
    <div id="nomDetailModal" class="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] hidden flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div class="glass w-full max-w-3xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-indigo-500/30 max-h-[92vh] flex flex-col my-auto">
        <!-- Modal Header -->
        <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4 shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl font-bold border border-indigo-500/30">📄</div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="text-lg font-bold text-white">Nomination Paper Review</h4>
                <span id="modalNomIdBadge" class="font-mono text-xs text-indigo-300 bg-indigo-500/20 border border-indigo-500/40 px-2 py-0.5 rounded font-bold">#</span>
                <span id="modalNomStatusBadge" class="badge"></span>
              </div>
              <p class="text-slate-400 text-xs mt-0.5" id="modalNomTimestamp"></p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btnModalPrevNom" class="btn btn-secondary btn-sm px-2.5 py-1 text-xs" title="Previous Nomination">◀ Prev</button>
            <span id="modalNomCounter" class="text-xs font-mono text-slate-400 px-1">1 / 1</span>
            <button type="button" id="btnModalNextNom" class="btn btn-secondary btn-sm px-2.5 py-1 text-xs" title="Next Nomination">Next ▶</button>
            <button type="button" id="btnCloseNomDetail" class="btn btn-secondary btn-sm px-2.5 py-1 text-sm ml-2 text-slate-400 hover:text-white" title="Close Modal">✕</button>
          </div>
        </div>

        <!-- Statutory Scrutiny Audit Box -->
        <div id="modalScrutinyZone" class="shrink-0 mb-3"></div>

        <!-- Rejection Reason Banner (if rejected) -->
        <div id="modalRejectionBanner" class="hidden bg-rose-500/15 border border-rose-500/40 rounded-xl p-3 mb-3 text-xs text-rose-300 shrink-0">
          <strong>⚠️ Statutory Rejection Reason:</strong> <span id="modalRejectionText"></span>
        </div>

        <!-- Modal Body (Print-zone with Authentic Nomination Paper) -->
        <div id="modalPaperZone" class="overflow-y-auto flex-1 pr-1 print-zone space-y-4"></div>

        <!-- Modal Footer Actions (Sticky) -->
        <div class="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 mt-4 shrink-0">
          <button type="button" id="btnModalPrintPaper" class="btn btn-secondary btn-sm flex items-center gap-1.5 text-xs py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10">
            <span>🖨️</span> <span>Print Paper</span>
          </button>
          <div class="flex items-center gap-2">
            <button type="button" id="btnModalMarkValid" class="btn btn-primary btn-sm flex items-center gap-1.5 text-xs py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg">
              <span>✅</span> <span>Mark as Valid</span>
            </button>
            <button type="button" id="btnModalMarkReject" class="btn btn-secondary btn-sm flex items-center gap-1.5 text-xs py-2 px-4 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white font-bold border border-rose-500/40 shadow-lg">
              <span>❌</span> <span>Reject Nomination</span>
            </button>
            <button type="button" id="btnModalCloseFooter" class="btn btn-secondary btn-sm text-xs py-2 px-3 text-slate-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Permanent Delete Warning Modal -->
    <div id="deleteNomModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4">
      <div class="glass w-full max-w-md rounded-2xl p-6 shadow-2xl border border-red-500/30">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold border border-red-500/30">⚠️</div>
          <div>
            <h4 class="text-xl font-bold text-white">Delete Nomination</h4>
            <p class="text-slate-400 text-xs">Permanent deletion of submission</p>
          </div>
        </div>
        <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-3 my-4 text-xs text-red-200 leading-relaxed">
          <strong>WARNING:</strong> This will permanently delete the nomination of <strong id="delNomCandidate" class="text-white"></strong> for <strong id="delNomPost" class="text-white"></strong> (ID: <span id="delNomId" class="font-mono text-amber-300"></span>). This cannot be undone.
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Enter Admin Password to Confirm</label>
            <input type="password" id="delNomPwdInput" class="field w-full" placeholder="Admin Password" autocomplete="current-password">
          </div>
          <div id="delNomError" class="text-rose-400 text-xs font-medium hidden"></div>
        </div>
        <div class="flex gap-2 mt-6">
          <button type="button" id="btnCancelDelNom" class="btn btn-secondary flex-1">Cancel</button>
          <button type="button" id="btnConfirmDelNom" class="btn bg-red-600 hover:bg-red-500 text-white flex-1 font-bold">Permanently Delete</button>
        </div>
      </div>
    </div>
  `;let l=[],u=null,d=e.querySelector(`#nomDetailModal`),f=e.querySelector(`#modalPaperZone`),p=e.querySelector(`#modalScrutinyZone`),m=e.querySelector(`#modalNomIdBadge`),h=e.querySelector(`#modalNomStatusBadge`),g=e.querySelector(`#modalNomTimestamp`),_=e.querySelector(`#modalNomCounter`),v=e.querySelector(`#btnModalPrevNom`),y=e.querySelector(`#btnModalNextNom`),b=e.querySelector(`#btnModalMarkValid`),x=e.querySelector(`#btnModalMarkReject`),S=e.querySelector(`#modalRejectionBanner`),T=e.querySelector(`#modalRejectionText`),E=t=>{let n=e.querySelector(`#nomTableBody`),r=e.querySelector(`#nomCardsContainer`);n.innerHTML=t.length?t.map(e=>{let t=G(e,s,o,i),n=String(e.candidateClass||``).toUpperCase().includes(`RESEARCH`)||String(e.candidateClass||``).toUpperCase().includes(`SCHOLAR`);return`
      <tr id="row-${F(e.id)}" class="hover:bg-white/[0.02] transition-colors">
        <td>
          <button type="button" class="view-nom-btn font-mono text-indigo-300 hover:text-indigo-200 text-xs font-bold hover:underline cursor-pointer flex items-center gap-1" data-id="${F(e.id)}" title="Click to view full form">
            <span>📄</span> ${F(e.id)}
          </button>
        </td>
        <td class="text-xs max-w-[140px] leading-snug font-medium text-slate-200">
          <div>${F(e.post)}</div>
        </td>
        <td>
          <div class="font-bold text-white flex items-center gap-1.5 flex-wrap">
            <span class="hover:text-indigo-300 cursor-pointer view-nom-btn" data-id="${F(e.id)}">${F(e.candidateName||e.candidate?.NAME||`N/A`)}</span>
            <span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono font-bold text-[10px] px-1.5 py-0.2" title="Electoral Roll Serial Number">
              Sl. #${F(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]||`–`)}
            </span>
            ${n?`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] px-1.5 py-0.2 font-semibold">⚠️ Ineligible (RS)</span>`:``}
          </div>
          <div class="text-[11px] text-slate-400 font-mono">Adm: ${F(e.candidateAdmission||e.candidate?.[`ADMISION NO`]||`–`)}</div>
        </td>
        <td class="text-xs text-slate-400">
          <div>${F(e.candidateClass||``)}</div>
          <div class="text-[10px] opacity-60">${F(e.candidateDept||``)}</div>
        </td>
        <td>
          <div class="text-xs font-medium text-slate-300 flex items-center gap-1">
            <span>${F(e.proposerName||e.proposer?.NAME||`N/A`)}</span>
            <span class="badge bg-slate-800 text-slate-300 border border-white/10 font-mono text-[10px] px-1 py-0.2" title="Proposer Roll Serial">
              #${F(e.proposerSerial||e.proposer?.[`Nominal Roll Serial Number`]||`–`)}
            </span>
          </div>
          <div class="text-[10px] text-slate-500 font-mono">Adm: ${F(e.proposerAdmission||e.proposer?.[`ADMISION NO`]||`–`)}</div>
        </td>
        <td>
          <div class="text-xs font-medium text-slate-300 flex items-center gap-1">
            <span>${F(e.seconderName||e.seconder?.NAME||`N/A`)}</span>
            <span class="badge bg-slate-800 text-slate-300 border border-white/10 font-mono text-[10px] px-1 py-0.2" title="Seconder Roll Serial">
              #${F(e.seconderSerial||e.seconder?.[`Nominal Roll Serial Number`]||`–`)}
            </span>
          </div>
          <div class="text-[10px] text-slate-500 font-mono">Adm: ${F(e.seconderAdmission||e.seconder?.[`ADMISION NO`]||`–`)}</div>
        </td>
        <td>
          <div>
            <span class="badge badge-${(e.status||`pending`).toLowerCase()} font-bold">${F(e.status)}</span>
          </div>
          ${t.length>0?`
            <button type="button" class="view-nom-btn badge bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-[10px] px-2 py-0.5 mt-1 font-semibold flex items-center gap-1 cursor-pointer transition-colors" data-id="${F(e.id)}" title="${F(t.map(e=>e.message).join(` | `))}">
              <span>⚠️ ${t.length} Rule Violation${t.length>1?`s`:``}</span>
            </button>
          `:`
            <span class="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] px-1.5 py-0.2 mt-1 inline-flex items-center gap-1 font-medium">
              <span>✓</span> Rules Passed
            </span>
          `}
          ${e.status===`Rejected`&&e.rejectionReason?`
            <div class="text-[10px] text-rose-400 mt-1 max-w-[150px] leading-tight font-medium" title="${F(e.rejectionReason)}">⚠️ ${F(e.rejectionReason)}</div>
          `:``}
        </td>
        <td>
          <div class="flex items-center gap-1.5 flex-wrap">
            <button type="button" class="btn btn-secondary btn-xs view-nom-btn bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 px-2 py-1 flex items-center gap-1 font-semibold" data-id="${F(e.id)}" title="View Full Nomination Form and Scrutiny Details">
              <span>📄</span> <span>View Form</span>
            </button>
            <button type="button" class="btn btn-primary btn-xs verify-btn bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white" data-id="${F(e.id)}" data-action="Valid"
              ${e.status===`Valid`?`disabled`:``}>Valid</button>
            <button type="button" class="btn btn-secondary btn-xs verify-btn bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white" data-id="${F(e.id)}" data-action="Rejected"
              ${e.status===`Rejected`?`disabled`:``}>Reject</button>
            <button type="button" class="btn btn-secondary btn-xs delete-nom-btn bg-red-900/20 hover:bg-red-700 text-red-400 hover:text-white border border-red-500/30 px-2" data-id="${F(e.id)}" data-candidate="${F(e.candidateName||e.candidate?.NAME||``)}" data-post="${F(e.post)}" title="Delete Nomination">🗑️</button>
          </div>
        </td>
      </tr>`}).join(``):`<tr><td colspan="8" class="text-center text-slate-500 py-12">No nominations found matching those criteria.</td></tr>`,r&&(r.innerHTML=t.length?t.map(e=>{let t=G(e,s,o,i),n=String(e.candidateClass||``).toUpperCase().includes(`RESEARCH`)||String(e.candidateClass||``).toUpperCase().includes(`SCHOLAR`);return`
          <div class="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border ${t.length?`border-rose-500/40 bg-rose-950/10`:`border-white/10`} hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-3.5 shadow-xl">
            <!-- Top Header: ID, Post, Status -->
            <div class="space-y-2.5">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <button type="button" class="view-nom-btn font-mono text-xs text-indigo-300 bg-indigo-500/20 hover:bg-indigo-500/30 px-2 py-0.5 rounded border border-indigo-500/30 font-bold inline-flex items-center gap-1" data-id="${F(e.id)}" title="Click to view full form">
                    <span>📄</span> #${F(e.id)}
                  </button>
                  <span class="text-xs font-semibold text-slate-200 ml-1.5">${F(e.post)}</span>
                </div>
                <span class="badge badge-${(e.status||`pending`).toLowerCase()} font-bold text-xs shrink-0">${F(e.status)}</span>
              </div>

              <!-- Candidate Info -->
              <div class="bg-black/30 p-3 rounded-lg border border-white/5 space-y-1">
                <div class="font-bold text-white text-base flex items-center gap-1.5 flex-wrap">
                  <span class="hover:text-indigo-300 cursor-pointer view-nom-btn" data-id="${F(e.id)}">${F(e.candidateName||e.candidate?.NAME||`N/A`)}</span>
                  <span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono font-bold text-[10px] px-1.5 py-0.2" title="Electoral Roll Serial Number">
                    Sl. #${F(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]||`–`)}
                  </span>
                  ${n?`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] px-1.5 py-0.2 font-semibold">⚠️ Ineligible (RS)</span>`:``}
                </div>
                <div class="text-xs text-slate-300 flex items-center gap-2 flex-wrap">
                  <span class="font-mono text-slate-400">Adm: <strong class="text-slate-200">${F(e.candidateAdmission||e.candidate?.[`ADMISION NO`]||`–`)}</strong></span>
                  <span class="text-slate-500">•</span>
                  <span>${F(e.candidateClass||``)} (${F(e.candidateDept||``)})</span>
                </div>
              </div>

              <!-- Proposer & Seconder -->
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="bg-black/20 p-2 rounded border border-white/5 space-y-0.5">
                  <div class="text-[10px] uppercase font-bold text-slate-400">Proposer</div>
                  <div class="font-medium text-slate-200 truncate">${F(e.proposerName||e.proposer?.NAME||`N/A`)}</div>
                  <div class="text-[10px] font-mono text-slate-400">Sl. #${F(e.proposerSerial||e.proposer?.[`Nominal Roll Serial Number`]||`–`)} • Adm: ${F(e.proposerAdmission||e.proposer?.[`ADMISION NO`]||`–`)}</div>
                </div>
                <div class="bg-black/20 p-2 rounded border border-white/5 space-y-0.5">
                  <div class="text-[10px] uppercase font-bold text-slate-400">Seconder</div>
                  <div class="font-medium text-slate-200 truncate">${F(e.seconderName||e.seconder?.NAME||`N/A`)}</div>
                  <div class="text-[10px] font-mono text-slate-400">Sl. #${F(e.seconderSerial||e.seconder?.[`Nominal Roll Serial Number`]||`–`)} • Adm: ${F(e.seconderAdmission||e.seconder?.[`ADMISION NO`]||`–`)}</div>
                </div>
              </div>

              <!-- Scrutiny Audit & Violations -->
              <div>
                ${t.length>0?`
                  <button type="button" class="view-nom-btn w-full badge bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs px-2.5 py-1.5 font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors" data-id="${F(e.id)}" title="${F(t.map(e=>e.message).join(` | `))}">
                    <span>⚠️ ${t.length} Rule Violation${t.length>1?`s`:``} Flagged</span>
                  </button>
                `:`
                  <div class="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 flex items-center justify-center gap-1.5 font-medium">
                    <span>✓</span> All Statutory Rules Passed
                  </div>
                `}
                ${e.status===`Rejected`&&e.rejectionReason?`
                  <div class="text-xs text-rose-400 mt-1.5 bg-rose-500/10 border border-rose-500/20 p-2 rounded font-medium">
                    ⚠️ ${F(e.rejectionReason)}
                  </div>
                `:``}
              </div>
            </div>

            <!-- Touch-friendly Action Buttons for Phone -->
            <div class="space-y-2 pt-2 border-t border-white/10">
              <button type="button" class="btn btn-secondary btn-sm w-full view-nom-btn bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 py-2 flex items-center justify-center gap-1.5 font-bold text-xs" data-id="${F(e.id)}">
                <span>📄</span> <span>View Full Nomination Paper</span>
              </button>
              <div class="flex items-center gap-2">
                <button type="button" class="btn btn-primary btn-sm flex-1 verify-btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 text-xs" data-id="${F(e.id)}" data-action="Valid" ${e.status===`Valid`?`disabled style="opacity:0.4;cursor:not-allowed;"`:``}>
                  ✅ Valid
                </button>
                <button type="button" class="btn btn-secondary btn-sm flex-1 verify-btn bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 font-bold py-2 text-xs" data-id="${F(e.id)}" data-action="Rejected" ${e.status===`Rejected`?`disabled style="opacity:0.4;cursor:not-allowed;"`:``}>
                  ❌ Reject
                </button>
                <button type="button" class="btn btn-secondary btn-sm delete-nom-btn bg-red-900/20 hover:bg-red-700 text-red-400 hover:text-white border border-red-500/30 px-3 py-2 text-xs font-bold" data-id="${F(e.id)}" data-candidate="${F(e.candidateName||e.candidate?.NAME||``)}" data-post="${F(e.post)}" title="Delete Nomination">
                  🗑️
                </button>
              </div>
            </div>
          </div>
        `}).join(``):`
        <div class="col-span-full text-center text-slate-500 py-12">
          <div class="text-3xl mb-2">🔍</div>
          <p class="text-slate-300 font-medium text-sm">No nominations found</p>
          <p class="text-xs text-slate-500 mt-1">Try broadening your search term or filter.</p>
        </div>
      `)},D=e=>{let t=o.find(t=>String(t.id)===String(e));if(!t)return;u=t.id;let r=l.findIndex(e=>String(e.id)===String(t.id)),a=l.length;_.textContent=a>0?`${r+1} / ${a}`:`1 / 1`,v.disabled=r<=0,y.disabled=r===-1||r>=a-1,m.textContent=`#${t.id}`,h.className=`badge badge-${(t.status||`pending`).toLowerCase()} font-bold`,h.textContent=t.status||`Pending`,g.textContent=t.timestamp?`Submitted: ${new Date(t.timestamp).toLocaleString()}`:``,t.status===`Rejected`&&t.rejectionReason?(T.textContent=t.rejectionReason,S.classList.remove(`hidden`)):S.classList.add(`hidden`);let c=G(t,s,o,i);c.length>0?p.innerHTML=`
        <div class="rounded-xl border border-rose-500/40 bg-rose-950/40 p-4 space-y-2.5 shadow-lg">
          <div class="flex items-center justify-between border-b border-rose-500/30 pb-2">
            <div class="flex items-center gap-2 text-rose-300 font-bold text-sm">
              <span class="text-base">⚠️</span> Rule Violations & Scrutiny Warnings (${c.length})
            </div>
            <span class="badge bg-rose-500/30 text-rose-200 border border-rose-500/50 text-[10px] font-bold uppercase tracking-wider">Scrutiny Alert</span>
          </div>
          <div class="text-xs text-rose-200/90 space-y-1.5 pl-1">
            ${c.map(e=>`
              <div class="flex items-start gap-2">
                <span class="text-rose-400 font-bold text-sm leading-none">•</span>
                <span>${F(e.message)}</span>
              </div>
            `).join(``)}
          </div>
        </div>`:p.innerHTML=`
        <div class="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3.5 flex items-center justify-between text-xs text-emerald-300 shadow-md">
          <div class="flex items-center gap-2.5">
            <span class="text-emerald-400 text-base">✅</span>
            <span><strong>Statutory Scrutiny Passed:</strong> Candidate satisfies all eligibility criteria, age limits, gender, year-level, and endorsement rules.</span>
          </div>
          <span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold shrink-0">ALL RULES PASSED</span>
        </div>`;let b=t.dob||`N/A`,x=new Date(t.dob);isNaN(x.getTime())||(b=`${String(x.getDate()).padStart(2,`0`)}/${String(x.getMonth()+1).padStart(2,`0`)}/${x.getFullYear()}`);let C=w(t.dob),E=i?.electionYear||new Date().getFullYear(),D=i?.collegeName||n.COLLEGE_NAME,O=i?.collegeLogo||``;f.innerHTML=fe(t.id,t.post,t.gender,b,C,t.candidate,t.proposer,t.seconder,t.status,E,D,O),d.classList.remove(`hidden`)},O=()=>{d.classList.add(`hidden`),u=null},k=null,A=e.querySelector(`#deleteNomModal`),j=e.querySelector(`#delNomPwdInput`),M=e.querySelector(`#delNomError`),N=e.querySelector(`#btnConfirmDelNom`),P=()=>{A?.classList.add(`hidden`),k=null,j&&(j.value=``),M&&(M.textContent=``,M.classList.add(`hidden`))};e.querySelector(`#btnCancelDelNom`)?.addEventListener(`click`,P),e.querySelector(`#btnConfirmDelNom`)?.addEventListener(`click`,async()=>{let e=(j?.value||``).trim();if(!e){M&&(M.textContent=`❌ Please enter admin password.`,M.classList.remove(`hidden`)),j?.focus();return}if(k){N.disabled=!0,N.textContent=`Deleting...`,M&&M.classList.add(`hidden`);try{await C.adminDeleteNomination(e,k);let t=o.findIndex(e=>e.id===k);t!==-1&&o.splice(t,1),L(`Nomination ${k} permanently deleted.`,`success`),P(),u===k&&O(),I()}catch(e){let t=e.message.includes(`password`)?`Incorrect admin password.`:e.message;M&&(M.textContent=`❌ ${t}`,M.classList.remove(`hidden`)),L(t,`error`),j?.focus()}finally{N.disabled=!1,N.textContent=`Permanently Delete`}}});let I=()=>{let t=(e.querySelector(`#nomSearch`).value||``).trim().toLowerCase(),n=e.querySelector(`#statusFilter`).value,r=o.filter(e=>{let r=G(e,s,o,i),a=!0;n===`violations`?a=r.length>0:n===`passed`?a=r.length===0:n!==`all`&&(a=e.status===n);let c=!t||String(e.id).toLowerCase().includes(t)||String(e.candidateName||e.candidate?.NAME||``).toLowerCase().includes(t)||String(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]||``).toLowerCase().includes(t)||String(e.candidateAdmission||e.candidate?.[`ADMISION NO`]||``).toLowerCase().includes(t)||String(e.candidateDept||``).toLowerCase().includes(t)||String(e.post).toLowerCase().includes(t);return a&&c});if(r.sort((e,t)=>{let n={Pending:1,Valid:2,Rejected:3},r=n[e.status]||99,i=n[t.status]||99;return r===i?String(t.id).localeCompare(String(e.id)):r-i}),l=r,E(r),u){let e=l.findIndex(e=>String(e.id)===String(u)),t=l.length;_.textContent=t>0?`${e+1} / ${t}`:`1 / 1`,v.disabled=e<=0,y.disabled=e===-1||e>=t-1}};e.querySelector(`#nomSearch`).addEventListener(`input`,I),e.querySelector(`#statusFilter`).addEventListener(`change`,I);let te=()=>{let t=e.querySelector(`#nomCardsContainer`),n=e.querySelector(`#nomTableContainer`),r=e.querySelector(`#btnNomModeCards`),i=e.querySelector(`#btnNomModeTable`);t&&t.classList.toggle(`hidden`,c!==`cards`),n&&n.classList.toggle(`hidden`,c!==`table`),r&&(r.className=`btn btn-xs py-1.5 px-3 rounded text-xs flex items-center gap-1.5 transition-all ${c===`cards`?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`text-slate-400 hover:text-white`}`),i&&(i.className=`btn btn-xs py-1.5 px-3 rounded text-xs flex items-center gap-1.5 transition-all ${c===`table`?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`text-slate-400 hover:text-white`}`)};e.querySelector(`#btnNomModeCards`)?.addEventListener(`click`,()=>{c!==`cards`&&(c=`cards`,te())}),e.querySelector(`#btnNomModeTable`)?.addEventListener(`click`,()=>{c!==`table`&&(c=`table`,te())}),e.querySelector(`#btnRefreshVerify`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#btnRefreshVerify`),n=e.querySelector(`#refreshIcon`);t&&(t.disabled=!0),n&&n.classList.add(`animate-spin`);try{let[e,t]=await Promise.all([C.adminGetNominations(r,!0),C.adminGetPosts(r).catch(()=>s)]);o.length=0,Array.isArray(e)&&o.push(...e),Array.isArray(t)&&(s.length=0,s.push(...t)),I(),L(`Nomination list & rules refreshed.`,`info`)}catch(e){L(`Refresh failed: ${e.message}`,`error`)}finally{t&&(t.disabled=!1),n&&n.classList.remove(`animate-spin`)}}),b.addEventListener(`click`,async()=>{if(!u)return;let e=u;b.disabled=!0;let t=b.innerHTML;b.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span> Validating...`;try{await C.adminVerifyNomination(r,e,`Valid`);let t=o.find(t=>t.id===e);t&&(t.status=`Valid`,t.rejectionReason=null),L(`Nomination #${e} marked as Valid.`,`success`),I(),D(e)}catch(e){L(`Failed: ${e.message}`,`error`)}finally{b.disabled=!1,b.innerHTML=t}}),x.addEventListener(`click`,async()=>{if(!u)return;let e=u,t=o.find(t=>t.id===e),n=G(t,s,o,i),a=n.length>0?n[0].message:`Serial number or eligibility requirement not met`,c=prompt(`Please enter the statutory reason for rejecting Nomination #${e}:`,a);if(c===null)return;let l=c.trim()||`Scrutiny criteria not satisfied`;x.disabled=!0;let d=x.innerHTML;x.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span> Rejecting...`;try{await C.adminVerifyNomination(r,e,`Rejected`,l),t&&(t.status=`Rejected`,t.rejectionReason=l),L(`Nomination #${e} marked as Rejected.`,`success`),I(),D(e)}catch(e){L(`Failed: ${e.message}`,`error`)}finally{x.disabled=!1,x.innerHTML=d}}),e.querySelector(`#btnModalPrintPaper`)?.addEventListener(`click`,()=>{ee(f.innerHTML)}),v.addEventListener(`click`,()=>{let e=l.findIndex(e=>String(e.id)===String(u));e>0&&D(l[e-1].id)}),y.addEventListener(`click`,()=>{let e=l.findIndex(e=>String(e.id)===String(u));e!==-1&&e<l.length-1&&D(l[e+1].id)}),e.querySelector(`#btnCloseNomDetail`)?.addEventListener(`click`,O),e.querySelector(`#btnModalCloseFooter`)?.addEventListener(`click`,O),window.addEventListener(`keydown`,e=>{d.classList.contains(`hidden`)||(e.key===`Escape`?O():e.key===`ArrowLeft`&&!v.disabled?v.click():e.key===`ArrowRight`&&!y.disabled&&y.click())}),e.querySelector(`#nomListView`)?.addEventListener(`click`,async t=>{let n=t.target.closest(`.view-nom-btn`);if(n){let e=n.dataset.id;e&&D(e);return}let a=t.target.closest(`.delete-nom-btn`);if(a){k=a.dataset.id,e.querySelector(`#delNomCandidate`).textContent=a.dataset.candidate||`Unknown`,e.querySelector(`#delNomPost`).textContent=a.dataset.post||`Unknown`,e.querySelector(`#delNomId`).textContent=k,j&&(j.value=``),M&&(M.textContent=``,M.classList.add(`hidden`)),A?.classList.remove(`hidden`),setTimeout(()=>j?.focus(),50);return}let c=t.target.closest(`.verify-btn`);if(!c)return;let l=c.dataset.id,u=c.dataset.action,d=null;if(u===`Rejected`){let e=G(o.find(e=>String(e.id)===String(l)),s,o,i),t=e.length>0?e[0].message:`Serial number or eligibility requirement not met`;if(d=prompt(`Please enter the statutory reason for rejecting Nomination #${l}:`,t),d===null)return;d=d.trim()||`Scrutiny criteria not satisfied`}c.disabled=!0;let f=c.textContent;c.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span>`;try{await C.adminVerifyNomination(r,l,u,d);let e=o.find(e=>String(e.id)===String(l));e&&(e.status=u,e.rejectionReason=d),L(`Nomination #${l} marked as ${u}.`,`success`),I()}catch(e){L(`Failed: ${e.message}`,`error`),c.disabled=!1,c.textContent=f}}),I()}async function Le(e){let t=H();if(t){U(e,`withdrawals`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading withdrawals...</p></div>
  `);try{let n=await C.adminGetNominations(t,!0);Re(e.querySelector(`#adminMain`),n,t)}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function Re(e,t,n){let r=Array.isArray(t)?t:[],i=r.filter(e=>e.withdrawalStatus&&e.withdrawalStatus!==`None`),a=r.filter(e=>e.status===`Valid`&&e.withdrawalStatus!==`Approved`),o=r.filter(e=>e.withdrawalStatus===`Approved`);e.innerHTML=`
    <div class="page-enter space-y-4">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-2">
        <div>
          <h3 class="text-xl font-bold text-white">Withdrawal Management</h3>
          <p class="text-slate-400 text-sm">Approve student requests, directly withdraw candidates, or restore accidental withdrawals.</p>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 border-b border-white/10 pb-0 mb-4">
        <button id="tabRequests" class="tab-btn px-4 py-2 text-sm font-bold rounded-t-lg border-b-2 border-indigo-400 text-white bg-white/5">
          📥 Student Requests <span id="reqCountBadge" class="ml-1 badge badge-pending text-xs">${i.length}</span>
        </button>
        <button id="tabDirect" class="tab-btn px-4 py-2 text-sm font-bold rounded-t-lg border-b-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
          ⚡ Admin Direct Withdrawal & Restoration
        </button>
      </div>

      <!-- Tab: Student Requests -->
      <div id="panelRequests">
        <div class="glass rounded-xl p-4 flex items-center w-full shadow-lg mb-3">
          <div class="relative flex-1 w-full">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
            <input type="text" id="withSearch" class="field w-full pl-10 bg-black/20 focus:bg-black/40 transition-colors" placeholder="Search requests by candidate name, ID, or post...">
          </div>
        </div>
        <div class="glass rounded-xl overflow-hidden shadow-2xl">
          <div id="withdrawalCardsContainer" class="md:hidden space-y-3 p-3"></div>
          <div class="hidden md:block overflow-x-auto">
            <table class="data-table">
              <thead><tr>
                <th>Nom. ID</th>
                <th>Post</th>
                <th>Candidate</th>
                <th>Class / Dept</th>
                <th>Withdrawal Status</th>
                <th>Action</th>
              </tr></thead>
              <tbody id="withdrawalTableBody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Tab: Direct Withdrawal & Restoration -->
      <div id="panelDirect" class="hidden space-y-6">
        <div class="alert" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius:0.75rem; padding:0.85rem 1.2rem; color:#7dd3fc; font-size:0.85rem;">
          💡 <strong>Direct Withdrawal & Accidental Recovery:</strong> You can directly withdraw any candidate from the active valid list. If a withdrawal was made accidentally, you can immediately <strong>Restore</strong> the candidate back to the active Valid List using the <em>Withdrawn Candidates (Restorable)</em> section below.
        </div>

        <!-- Section 1: Active Valid Nominations -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-white text-base flex items-center gap-2">
              <span>⚡ Active Valid Candidates</span>
              <span id="activeCountBadge" class="badge badge-valid text-xs">${a.length}</span>
            </h4>
            <span class="text-xs text-slate-400">Candidates currently competing</span>
          </div>

          <div class="glass rounded-xl p-3 flex items-center w-full shadow-lg">
            <div class="relative flex-1 w-full">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
              <input type="text" id="directSearch" class="field w-full pl-10 bg-black/20 focus:bg-black/40 transition-colors" placeholder="Search active candidates by name, ID, or post...">
            </div>
          </div>

          <div class="glass rounded-xl overflow-hidden shadow-2xl">
            <div id="directCardsContainer" class="md:hidden space-y-3 p-3"></div>
            <div class="hidden md:block overflow-x-auto">
              <table class="data-table">
                <thead><tr>
                  <th>Nom. ID</th>
                  <th>Post</th>
                  <th>Candidate</th>
                  <th>Class / Dept</th>
                  <th>Current Status</th>
                  <th>Action</th>
                </tr></thead>
                <tbody id="directTableBody"></tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Section 2: Withdrawn Candidates (Restorable) -->
        <div class="space-y-3 pt-6 border-t border-white/10">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-amber-300 text-base flex items-center gap-2">
              <span>↺ Withdrawn Candidates (Restorable)</span>
              <span id="withdrawnCountBadge" class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs">${o.length}</span>
            </h4>
            <span class="text-xs text-amber-400/80">Accidentally withdrawn? Click Restore to return candidate to the Valid list</span>
          </div>

          <div class="glass rounded-xl p-3 flex items-center w-full shadow-lg">
            <div class="relative flex-1 w-full">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
              <input type="text" id="restoreSearch" class="field w-full pl-10 bg-black/20 focus:bg-black/40 transition-colors" placeholder="Search withdrawn candidates to restore...">
            </div>
          </div>

          <div class="glass rounded-xl overflow-hidden shadow-2xl border border-amber-500/20">
            <div id="restoreCardsContainer" class="md:hidden space-y-3 p-3"></div>
            <div class="hidden md:block overflow-x-auto">
              <table class="data-table">
                <thead><tr>
                  <th>Nom. ID</th>
                  <th>Post</th>
                  <th>Candidate</th>
                  <th>Class / Dept</th>
                  <th>Withdrawal Source</th>
                  <th>Action</th>
                </tr></thead>
                <tbody id="withdrawnTableBody"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>`;let s=e.querySelector(`#tabRequests`),c=e.querySelector(`#tabDirect`),l=e.querySelector(`#panelRequests`),u=e.querySelector(`#panelDirect`),d=e=>{[s,c].forEach(e=>{e.classList.remove(`border-indigo-400`,`text-white`,`bg-white/5`),e.classList.add(`border-transparent`,`text-slate-400`)}),e.classList.add(`border-indigo-400`,`text-white`,`bg-white/5`),e.classList.remove(`border-transparent`,`text-slate-400`),l.classList.toggle(`hidden`,e!==s),u.classList.toggle(`hidden`,e!==c)};s.onclick=()=>d(s),c.onclick=()=>d(c);let f=()=>{let t=e.querySelector(`#reqCountBadge`);t&&(t.textContent=i.length);let n=e.querySelector(`#activeCountBadge`);n&&(n.textContent=a.length);let r=e.querySelector(`#withdrawnCountBadge`);r&&(r.textContent=o.length)},p=t=>{let n=e.querySelector(`#withdrawalTableBody`);n.innerHTML=t.length?t.map(e=>{let t=e.withdrawalStatus===`Approved`,n=e.withdrawalStatus===`Pending`||e.withdrawalStatus===`Requested`,r=e.withdrawalStatus===`Rejected`,i=`<span class="badge badge-pending">Pending</span>`;return t?i=`<span class="badge badge-valid">Approved (Withdrawn)</span>`:r&&(i=`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/30">Rejected (Active)</span>`),`
      <tr id="wrow-${F(e.id)}">
        <td class="font-mono text-indigo-300 text-xs">${F(e.id)}</td>
        <td class="text-xs font-medium text-slate-300">${F(e.post)}</td>
        <td class="font-bold text-white">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span>${F(e.candidateName||`N/A`)}</span>
            ${e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]?`<span class="badge bg-indigo-500/20 text-indigo-300 font-mono text-[10px]">Sl. #${F(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`])}</span>`:``}
          </div>
        </td>
        <td class="text-xs text-slate-400">${F(e.candidateClass||``)} / ${F(e.candidateDept||``)}</td>
        <td>${i}</td>
        <td>
          ${t?`
            <button class="btn btn-sm unapprove-btn" data-id="${F(e.id)}"
              style="background:rgba(245,158,11,0.15); color:#fbbf24; border:1px solid rgba(245,158,11,0.4);"
              title="Undo approval and restore candidate to active Valid list">
              ↺ Restore Approval
            </button>
          `:n?`
            <div class="flex items-center gap-1.5">
              <button class="btn btn-primary btn-sm approve-btn bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white" data-id="${F(e.id)}" title="Approve withdrawal and withdraw candidate">
                ✅ Approve
              </button>
              <button class="btn btn-sm reject-btn" data-id="${F(e.id)}"
                style="background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.3);" title="Reject request; keep candidate active">
                ❌ Reject
              </button>
            </div>
          `:`
            <button class="btn btn-sm approve-btn text-xs bg-slate-700/50 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-white/10" data-id="${F(e.id)}" title="Re-evaluate and approve withdrawal">
              Approve
            </button>
          `}
        </td>
      </tr>`}).join(``):`<tr><td colspan="6" class="text-center text-slate-500 py-12">No withdrawal requests found.</td></tr>`;let r=e.querySelector(`#withdrawalCardsContainer`);r&&(r.innerHTML=t.length?t.map(e=>{let t=e.withdrawalStatus===`Approved`,n=e.withdrawalStatus===`Pending`||e.withdrawalStatus===`Requested`,r=e.withdrawalStatus===`Rejected`,i=`<span class="badge badge-pending">Pending</span>`;return t?i=`<span class="badge badge-valid">Approved (Withdrawn)</span>`:r&&(i=`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/30">Rejected (Active)</span>`),`
          <div class="glass p-3.5 rounded-xl border border-white/10 space-y-2 bg-slate-900/80">
            <div class="flex items-center justify-between gap-2">
              <span class="font-mono text-xs text-indigo-300 font-bold bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">#${F(e.id)}</span>
              ${i}
            </div>
            <div>
              <div class="font-bold text-white text-base">${F(e.candidateName||`N/A`)}</div>
              <div class="text-xs text-indigo-300 font-semibold">${F(e.post)}</div>
              <div class="text-xs text-slate-400 mt-0.5">${F(e.candidateClass||``)} / ${F(e.candidateDept||``)}</div>
            </div>
            <div class="pt-2 border-t border-white/10">
              ${t?`
                <button class="btn btn-sm w-full unapprove-btn py-1.5 text-xs font-semibold" data-id="${F(e.id)}"
                  style="background:rgba(245,158,11,0.15); color:#fbbf24; border:1px solid rgba(245,158,11,0.4);"
                  title="Undo approval and restore candidate to active Valid list">
                  ↺ Restore Approval
                </button>
              `:n?`
                <div class="flex gap-2">
                  <button class="btn btn-primary btn-sm flex-1 approve-btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 text-xs" data-id="${F(e.id)}">
                    ✅ Approve
                  </button>
                  <button class="btn btn-sm flex-1 reject-btn bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 font-bold py-1.5 text-xs" data-id="${F(e.id)}">
                    ❌ Reject
                  </button>
                </div>
              `:`
                <button class="btn btn-sm w-full approve-btn text-xs bg-slate-700/50 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-white/10 py-1.5" data-id="${F(e.id)}">
                  Approve
                </button>
              `}
            </div>
          </div>
        `}).join(``):`<div class="text-center text-slate-500 py-8">No withdrawal requests found.</div>`)},m=()=>{let t=e.querySelector(`#withSearch`).value.toLowerCase();p(i.filter(e=>!t||String(e.id).toLowerCase().includes(t)||String(e.candidateName||``).toLowerCase().includes(t)||String(e.post).toLowerCase().includes(t)))};e.querySelector(`#withSearch`).addEventListener(`input`,m),p(i),e.querySelector(`#panelRequests`).addEventListener(`click`,async e=>{let t=e.target.closest(`.approve-btn`);if(t){let e=t.dataset.id;t.disabled=!0,t.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span>`;try{await C.adminApproveWithdrawal(n,e),L(`Withdrawal request approved.`,`success`);let t=i.find(t=>t.id===e);t&&(t.withdrawalStatus=`Approved`);let s=r.find(t=>t.id===e)||t;s&&(s.withdrawalStatus=`Approved`,a=a.filter(t=>t.id!==e),o.some(t=>t.id===e)||o.unshift(s)),f(),m(),_(),v()}catch(e){L(`Failed: ${e.message}`,`error`),t.disabled=!1,t.innerHTML=`✅ Approve`}return}let s=e.target.closest(`.reject-btn`);if(s){let e=s.dataset.id,t=i.find(t=>t.id===e);if(!confirm(`REJECT WITHDRAWAL REQUEST\n\nCandidate: ${t?.candidateName||e}\nPost: ${t?.post||``}\n\nRejecting this request will keep the candidate active on the Valid List. Proceed?`))return;s.disabled=!0,s.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span>`;try{await C.adminRejectWithdrawal(n,e),L(`Withdrawal request for ${t?.candidateName||e} rejected. Candidate remains active.`,`info`),t&&(t.withdrawalStatus=`Rejected`);let i=r.find(t=>t.id===e)||t;i&&(i.withdrawalStatus=`Rejected`,o=o.filter(t=>t.id!==e),a.some(t=>t.id===e)||a.unshift(i)),f(),m(),_(),v()}catch(e){L(`Failed: ${e.message}`,`error`),s.disabled=!1,s.innerHTML=`❌ Reject`}return}let c=e.target.closest(`.unapprove-btn`);if(c){let e=c.dataset.id,t=i.find(t=>t.id===e);if(!confirm(`RESTORE STUDENT WITHDRAWAL APPROVAL\n\nCandidate: ${t?.candidateName||e}\nPost: ${t?.post||``}\n\nThis will undo the approved withdrawal, restore the candidate to the active Valid List, and return this request to 'Pending'.\n\nProceed?`))return;c.disabled=!0,c.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span>`;try{await C.adminRestoreWithdrawal(n,e,`Pending`),L(`✅ Withdrawal approval undone! ${t?.candidateName||e} restored to Valid list.`,`success`),t&&(t.withdrawalStatus=`Pending`);let i=r.find(t=>t.id===e)||t;i&&(i.withdrawalStatus=`Pending`,o=o.filter(t=>t.id!==e),a.some(t=>t.id===e)||a.unshift(i)),f(),m(),_(),v()}catch(e){L(`Restore Failed: ${e.message}`,`error`),c.disabled=!1,c.innerHTML=`↺ Restore Approval`}return}});let h=t=>{let n=e.querySelector(`#directTableBody`);n.innerHTML=t.length?t.map(e=>`
      <tr id="drow-${F(e.id)}">
        <td class="font-mono text-indigo-300 text-xs">${F(e.id)}</td>
        <td class="text-xs font-medium text-slate-300">${F(e.post)}</td>
        <td class="font-bold text-white">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span>${F(e.candidateName||`N/A`)}</span>
            ${e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]?`<span class="badge bg-indigo-500/20 text-indigo-300 font-mono text-[10px]">Sl. #${F(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`])}</span>`:``}
          </div>
        </td>
        <td class="text-xs text-slate-400">${F(e.candidateClass||``)} / ${F(e.candidateDept||``)}</td>
        <td>
          <span class="badge badge-valid">${F(e.status)}</span>
          ${e.withdrawalStatus&&e.withdrawalStatus!==`None`?`<span class="badge badge-pending ml-1">${F(e.withdrawalStatus)}</span>`:``}
        </td>
        <td>
          <button class="btn btn-sm direct-withdraw-btn" data-id="${F(e.id)}"
            style="background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.3);"
            onmouseover="this.style.background='rgba(239,68,68,0.8)';this.style.color='white';"
            onmouseout="this.style.background='rgba(239,68,68,0.15)';this.style.color='#f87171';">
            ⚡ Withdraw Now
          </button>
        </td>
      </tr>`).join(``):`<tr><td colspan="6" class="text-center text-slate-500 py-8">No active valid nominations found.</td></tr>`;let r=e.querySelector(`#directCardsContainer`);r&&(r.innerHTML=t.length?t.map(e=>`
        <div class="glass p-3.5 rounded-xl border border-white/10 space-y-2 bg-slate-900/80">
          <div class="flex items-center justify-between gap-2">
            <span class="font-mono text-xs text-indigo-300 font-bold bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">#${F(e.id)}</span>
            <span class="badge badge-valid">${F(e.status)}</span>
          </div>
          <div>
            <div class="font-bold text-white text-base">${F(e.candidateName||`N/A`)}</div>
            <div class="text-xs text-indigo-300 font-semibold">${F(e.post)}</div>
            <div class="text-xs text-slate-400 mt-0.5">${F(e.candidateClass||``)} / ${F(e.candidateDept||``)}</div>
          </div>
          <div class="pt-2 border-t border-white/10">
            <button class="btn btn-sm w-full direct-withdraw-btn py-1.5 text-xs font-bold" data-id="${F(e.id)}"
              style="background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.3);">
              ⚡ Withdraw Now
            </button>
          </div>
        </div>
      `).join(``):`<div class="text-center text-slate-500 py-8">No active valid nominations found.</div>`)},g=t=>{let n=e.querySelector(`#withdrawnTableBody`);n.innerHTML=t.length?t.map(e=>{let t=i.some(t=>t.id===e.id);return`
      <tr id="rrow-${F(e.id)}" class="bg-amber-950/10">
        <td class="font-mono text-indigo-300 text-xs">${F(e.id)}</td>
        <td class="text-xs font-medium text-slate-300">${F(e.post)}</td>
        <td class="font-bold text-white">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span>${F(e.candidateName||`N/A`)}</span>
            ${e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]?`<span class="badge bg-amber-500/20 text-amber-300 font-mono text-[10px]">Sl. #${F(e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`])}</span>`:``}
          </div>
        </td>
        <td class="text-xs text-slate-400">${F(e.candidateClass||``)} / ${F(e.candidateDept||``)}</td>
        <td>
          <span class="badge ${t?`bg-indigo-500/20 text-indigo-300 border border-indigo-500/30`:`bg-amber-500/20 text-amber-300 border border-amber-500/30`} text-xs">
            ${t?`Student Request`:`Admin Direct`}
          </span>
        </td>
        <td>
          <button class="btn btn-sm restore-withdraw-btn flex items-center gap-1.5" data-id="${F(e.id)}"
            style="background:rgba(16,185,129,0.15); color:#34d399; border:1px solid rgba(16,185,129,0.35);"
            onmouseover="this.style.background='rgba(16,185,129,0.8)';this.style.color='white';"
            onmouseout="this.style.background='rgba(16,185,129,0.15)';this.style.color='#34d399';"
            title="Restore this nomination back to the active Valid List">
            ↺ Restore to Valid List
          </button>
        </td>
      </tr>`}).join(``):`<tr><td colspan="6" class="text-center text-slate-500 py-8">No withdrawn nominations found.</td></tr>`;let r=e.querySelector(`#restoreCardsContainer`);r&&(r.innerHTML=t.length?t.map(e=>{let t=i.some(t=>t.id===e.id);return`
          <div class="glass p-3.5 rounded-xl border border-amber-500/30 space-y-2 bg-slate-900/80">
            <div class="flex items-center justify-between gap-2">
              <span class="font-mono text-xs text-indigo-300 font-bold bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">#${F(e.id)}</span>
              <span class="badge ${t?`bg-indigo-500/20 text-indigo-300 border border-indigo-500/30`:`bg-amber-500/20 text-amber-300 border border-amber-500/30`} text-xs">
                ${t?`Student Request`:`Admin Direct`}
              </span>
            </div>
            <div>
              <div class="font-bold text-white text-base">${F(e.candidateName||`N/A`)}</div>
              <div class="text-xs text-amber-300 font-semibold">${F(e.post)}</div>
              <div class="text-xs text-slate-400 mt-0.5">${F(e.candidateClass||``)} / ${F(e.candidateDept||``)}</div>
            </div>
            <div class="pt-2 border-t border-white/10">
              <button class="btn btn-sm w-full restore-withdraw-btn flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold" data-id="${F(e.id)}"
                style="background:rgba(16,185,129,0.15); color:#34d399; border:1px solid rgba(16,185,129,0.35);">
                ↺ Restore Candidate
              </button>
            </div>
          </div>
        `}).join(``):`<div class="text-center text-slate-500 py-8">No withdrawn candidates to restore.</div>`)},_=()=>{let t=(e.querySelector(`#directSearch`)?.value||``).toLowerCase();h(a.filter(e=>!t||String(e.id).toLowerCase().includes(t)||String(e.candidateName||``).toLowerCase().includes(t)||String(e.post).toLowerCase().includes(t)))},v=()=>{let t=(e.querySelector(`#restoreSearch`)?.value||``).toLowerCase();g(o.filter(e=>!t||String(e.id).toLowerCase().includes(t)||String(e.candidateName||``).toLowerCase().includes(t)||String(e.post).toLowerCase().includes(t)))};e.querySelector(`#directSearch`).addEventListener(`input`,_),e.querySelector(`#restoreSearch`).addEventListener(`input`,v),h(a),g(o),e.querySelector(`#panelDirect`).addEventListener(`click`,async e=>{let t=e.target.closest(`.direct-withdraw-btn`);if(t){let e=t.dataset.id,r=a.find(t=>t.id===e);if(!confirm(`CONFIRM DIRECT WITHDRAWAL\n\nCandidate: ${r?.candidateName||e}\nPost: ${r?.post||``}\n\nThis will mark this nomination as Withdrawn.\n(Note: You can easily restore it below at any time if done accidentally).\n\nProceed?`))return;t.disabled=!0,t.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span>`;try{await C.adminDirectWithdrawal(n,e),L(`Nomination ${e} marked as Withdrawn.`,`success`),r&&(r.withdrawalStatus=`Approved`,a=a.filter(t=>t.id!==e),o.some(t=>t.id===e)||o.unshift(r)),f(),_(),v()}catch(e){L(`Failed: ${e.message}`,`error`),t.disabled=!1,t.innerHTML=`⚡ Withdraw Now`}return}let r=e.target.closest(`.restore-withdraw-btn`);if(r){let e=r.dataset.id,t=o.find(t=>t.id===e);if(!confirm(`CONFIRM RESTORE NOMINATION\n\nCandidate: ${t?.candidateName||e}\nPost: ${t?.post||``}\n\nThis will undo the withdrawal and immediately return this candidate to the active Valid List.\n\nProceed?`))return;r.disabled=!0,r.innerHTML=`<span class="spinner" style="width:1rem;height:1rem;border-width:2px;"></span>`;let s=i.some(t=>t.id===e)?`Pending`:`None`;try{await C.adminRestoreWithdrawal(n,e,s),L(`✅ Nomination ${e} (${t?.candidateName||``}) successfully restored to Valid List!`,`success`),t&&(t.withdrawalStatus=s,o=o.filter(t=>t.id!==e),a.some(t=>t.id===e)||a.unshift(t));let r=i.find(t=>t.id===e);r&&(r.withdrawalStatus=`Pending`),f(),_(),v(),m()}catch(e){L(`Restore Failed: ${e.message}`,`error`),r.disabled=!1,r.innerHTML=`↺ Restore to Valid List`}return}})}function ze({students:e,isFinal:t,isDraft:r,collegeName:i,collegeLogo:a=``,electionYear:o=``,initialDept:s=``,initialClass:c=``,initialSort:l=`dept-class`}){let u=document.getElementById(`printRollModalContainer`);u&&u.remove();let d=i||n.COLLEGE_NAME||`College Union Election`,f=Array.from(new Set(e.map(e=>(e.Dept||e.DEPT||e.department||``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),p=t=>Array.from(new Set(e.filter(e=>!t||(e.Dept||``).trim().toLowerCase()===t.toLowerCase()).map(e=>(e.CLASS||e.Class||``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),m=`all`;c?m=`class`:s&&(m=`dept`);let h=s||f[0]||``,g=c||p(h)[0]||``,_=l||`dept-class`,v=`1`,y=!0,b=document.createElement(`div`);b.id=`printRollModalContainer`,b.className=`fixed inset-0 z-50 flex items-center justify-center p-4`;let x=()=>{let n=p(m===`dept`?h:h||``);n.includes(g)||(g=n[0]||``);let i=[],s=``;m===`all`?(i=e,s=`Entire College (${e.length} students across ${f.length} departments)`):m===`dept`?(i=e.filter(e=>(e.Dept||``).trim().toLowerCase()===h.toLowerCase()),s=`Department of ${h} (${i.length} students)`):m===`class`&&(i=e.filter(e=>(e.CLASS||``).trim().toLowerCase()===g.toLowerCase()),s=`Class: ${g} (${i.length} students)`),b.innerHTML=`
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-slate-950/85 backdrop-blur-md" id="printModalBackdrop"></div>

      <!-- Dialog Card -->
      <div class="relative bg-slate-900 border border-white/15 rounded-2xl shadow-2xl max-w-xl w-full p-6 space-y-5 text-slate-200 z-10 max-h-[90vh] overflow-y-auto">
        
        <!-- Header -->
        <div class="flex items-start justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl shadow-inner">🖨️</div>
            <div>
              <h3 class="font-bold text-white text-lg leading-tight">Print Nominal Roll</h3>
              <p class="text-xs text-slate-400 mt-0.5">Configure filter scope, layout, and sorting for printing</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            ${r?`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-bold">📋 DRAFT (D1, D2...)</span>`:`<span class="badge badge-valid text-[11px] font-mono font-bold">✅ FINAL (1, 2, 3...)</span>`}
            <button id="btnClosePrintModal" class="text-slate-400 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
        </div>

        <!-- Scope Selection (Tabs) -->
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider block">1. Select Print Scope</label>
          <div class="grid grid-cols-3 gap-2">
            <button type="button" class="scope-btn p-3 rounded-xl border text-center transition-all ${m===`all`?`border-indigo-500 bg-indigo-600/20 text-white font-bold shadow-lg shadow-indigo-900/30`:`border-white/10 bg-black/20 text-slate-400 hover:text-white hover:bg-white/5`}" data-scope="all">
              <div class="text-base mb-1">🏛️</div>
              <div class="text-xs">All Students</div>
              <div class="text-[10px] text-slate-500 font-mono mt-0.5">${e.length} voters</div>
            </button>

            <button type="button" class="scope-btn p-3 rounded-xl border text-center transition-all ${m===`dept`?`border-indigo-500 bg-indigo-600/20 text-white font-bold shadow-lg shadow-indigo-900/30`:`border-white/10 bg-black/20 text-slate-400 hover:text-white hover:bg-white/5`}" data-scope="dept">
              <div class="text-base mb-1">🏢</div>
              <div class="text-xs">Department Wise</div>
              <div class="text-[10px] text-slate-500 font-mono mt-0.5">${f.length} depts</div>
            </button>

            <button type="button" class="scope-btn p-3 rounded-xl border text-center transition-all ${m===`class`?`border-indigo-500 bg-indigo-600/20 text-white font-bold shadow-lg shadow-indigo-900/30`:`border-white/10 bg-black/20 text-slate-400 hover:text-white hover:bg-white/5`}" data-scope="class">
              <div class="text-base mb-1">🎓</div>
              <div class="text-xs">Specific Class</div>
              <div class="text-[10px] text-slate-500 font-mono mt-0.5">Single class</div>
            </button>
          </div>
        </div>

        <!-- Scope Parameters (Conditional) -->
        <div class="space-y-3 bg-black/30 p-4 rounded-xl border border-white/5">
          ${m===`dept`?`
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Choose Department</label>
              <select id="printDeptSelect" class="field text-sm bg-slate-800 border-white/10 text-white w-full">
                ${f.map(t=>{let n=e.filter(e=>(e.Dept||``).trim().toLowerCase()===t.toLowerCase()).length;return`<option value="${F(t)}" ${t===h?`selected`:``}>${F(t)} (${n} students)</option>`}).join(``)}
              </select>
            </div>
          `:``}

          ${m===`class`?`
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Filter by Department (Optional)</label>
                <select id="printClassDeptFilter" class="field text-sm bg-slate-800 border-white/10 text-white w-full">
                  <option value="">All Departments</option>
                  ${f.map(e=>`<option value="${F(e)}" ${e===h?`selected`:``}>${F(e)}</option>`).join(``)}
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Choose Class</label>
                <select id="printClassSelect" class="field text-sm bg-slate-800 border-white/10 text-white w-full">
                  ${n.map(t=>{let n=e.filter(e=>(e.CLASS||``).trim().toLowerCase()===t.toLowerCase()).length;return`<option value="${F(t)}" ${t===g?`selected`:``}>${F(t)} (${n} students)</option>`}).join(``)}
                </select>
              </div>
            </div>
          `:``}

          ${m===`all`?`
            <div class="text-xs text-slate-400 flex items-center gap-2">
              <span>ℹ</span>
              <span>All <strong>${e.length}</strong> students across the entire institution will be included in the print job.</span>
            </div>
          `:``}
        </div>

        <!-- Sort Order, Column Layout & Page Break Options -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">2. Sort Order</label>
            <select id="printSortSelect" class="field text-xs bg-slate-800 border-white/10 text-white w-full py-2">
              <option value="dept-class" ${_===`dept-class`?`selected`:``}>🏢 Dept ➔ Class ➔ Sl. No</option>
              <option value="serial" ${_===`serial`?`selected`:``}>🔢 By Serial Number</option>
              <option value="class" ${_===`class`?`selected`:``}>🎓 By Class & Alphabetical</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">3. Column Layout</label>
            <select id="printColumnsSelect" class="field text-xs bg-slate-800 border-white/10 text-white w-full py-2">
              <option value="1" ${v===`1`?`selected`:``}>1 Column (Standard)</option>
              <option value="2" ${v===`2`?`selected`:``}>2 Columns (Saves Space / Paper)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">4. Multi-Class Layout</label>
            ${m===`class`?`
              <div class="field text-xs bg-slate-800/50 text-slate-400 py-2 border-dashed">
                Single Class Mode
              </div>
            `:`
              <label class="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-white/5 cursor-pointer hover:bg-slate-800 h-[38px]">
                <input type="checkbox" id="pageBreakCheckbox" class="rounded text-indigo-600" ${y?`checked`:``}>
                <span class="text-xs text-slate-300">New page per class</span>
              </label>
            `}
          </div>
        </div>

        <!-- Live Preview Banner -->
        <div class="p-3.5 rounded-xl border border-indigo-500/20 bg-indigo-500/10 flex items-center justify-between text-xs text-indigo-200">
          <div class="flex items-center gap-2">
            <span class="text-base">📋</span>
            <div>
              <strong class="text-white block">Ready to Print: ${i.length} Students</strong>
              <span>${F(s)}</span>
            </div>
          </div>
          <div class="text-right font-mono text-[11px] text-indigo-300">
            ${r?`Provisional Draft`:`Official Final`}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
          <button type="button" id="btnCancelPrintModal" class="btn btn-secondary text-sm">Cancel</button>
          <button type="button" id="btnExecutePrint" class="btn btn-primary bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center gap-2 px-5 py-2.5 shadow-lg shadow-indigo-900/40">
            <span>🖨️ Open Print View</span>
            <span class="badge bg-white/20 text-white text-[10px] px-1.5">${i.length}</span>
          </button>
        </div>

      </div>
    `,b.querySelector(`#btnClosePrintModal`).onclick=()=>b.remove(),b.querySelector(`#btnCancelPrintModal`).onclick=()=>b.remove(),b.querySelector(`#printModalBackdrop`).onclick=()=>b.remove(),b.querySelectorAll(`.scope-btn`).forEach(e=>{e.onclick=()=>{m=e.dataset.scope,x()}});let c=b.querySelector(`#printDeptSelect`);c&&(c.onchange=e=>{h=e.target.value,x()});let l=b.querySelector(`#printClassDeptFilter`);l&&(l.onchange=e=>{h=e.target.value,x()});let u=b.querySelector(`#printClassSelect`);u&&(u.onchange=e=>{g=e.target.value,x()});let S=b.querySelector(`#printSortSelect`);S&&(S.onchange=e=>{_=e.target.value});let C=b.querySelector(`#printColumnsSelect`);C&&(C.onchange=e=>{v=e.target.value});let w=b.querySelector(`#pageBreakCheckbox`);w&&(w.onchange=e=>{y=e.target.checked}),b.querySelector(`#btnExecutePrint`).onclick=()=>{Be({students:e,isFinal:t,isDraft:r,collegeName:d,collegeLogo:a,electionYear:o,scope:m,dept:h,className:g,sortBy:_,pageBreakPerClass:y,columns:v}),b.remove()}};x(),document.body.appendChild(b)}function Be({students:e,isFinal:t,isDraft:n,collegeName:r,collegeLogo:i=``,electionYear:a=``,scope:o=`all`,dept:s=``,className:c=``,sortBy:l=`serial`,pageBreakPerClass:u=!0,columns:d=`1`}){let f=a||new Date().getFullYear().toString(),p=[...e],m=`Master Nominal Roll`;if(o===`dept`&&s?(p=p.filter(e=>(e.Dept||``).trim().toLowerCase()===s.toLowerCase()),m=`Department of ${s}`):o===`class`&&c&&(p=p.filter(e=>(e.CLASS||``).trim().toLowerCase()===c.toLowerCase()),m=`Class: ${c}`),p.length===0){alert(`No students found for the selected print criteria.`);return}let h=e=>{let t=String(e||``).toUpperCase().trim();return t.includes(`RESEARCH`)||t.includes(`PH.D`)||t.includes(`PHD`)?6e3:/^I\s+M(SC|A|COM|BA|CA)/.test(t)||/^I\s+PG/.test(t)?4e3:/^II\s+M(SC|A|COM|BA|CA)/.test(t)||/^II\s+PG/.test(t)?5e3:/^III\s+M(SC|A|COM|BA|CA)/.test(t)?5500:/^I\s+(B|UG)/.test(t)||/^1ST\s+YEAR/.test(t)?1e3:/^II\s+(B|UG)/.test(t)||/^2ND\s+YEAR/.test(t)?2e3:/^III\s+(B|UG)/.test(t)||/^3RD\s+YEAR/.test(t)?3e3:3500},g=e=>{let t=String(e?.[`Nominal Roll Serial Number`]||e?.serial_number||e?.SL_NO||e?.[`SL. NO`]||``).replace(/\D/g,``),n=parseInt(t,10);return isNaN(n)?999999999:n};l===`dept-class`?p.sort((e,t)=>{let n=String(e.Dept||e.DEPT||``).trim().toUpperCase(),r=String(t.Dept||t.DEPT||``).trim().toUpperCase();if(n!==r)return n.localeCompare(r);let i=String(e.CLASS||``).trim().toUpperCase(),a=String(t.CLASS||``).trim().toUpperCase(),o=h(i),s=h(a);if(o!==s)return o-s;if(i!==a)return i.localeCompare(a);let c=g(e),l=g(t);return c===l?String(e.NAME||``).trim().toUpperCase().localeCompare(String(t.NAME||``).trim().toUpperCase()):c-l}):l===`class`?p.sort((e,t)=>{let n=String(e.Dept||``).toUpperCase(),r=String(t.Dept||``).toUpperCase();if(n!==r)return n.localeCompare(r);let i=String(e.CLASS||``).toUpperCase(),a=String(t.CLASS||``).toUpperCase();if(i!==a){let e=h(i),t=h(a);return e===t?i.localeCompare(a):e-t}return String(e.NAME||``).toUpperCase().localeCompare(String(t.NAME||``).toUpperCase())}):p.sort((e,t)=>g(e)-g(t));let _=t?`FINAL NOMINAL ROLL`:`DRAFT NOMINAL ROLL`,v=new Date().toLocaleString(),y=e=>n?`D${e}`:e,b=``;if(o===`class`||u&&o!==`single_table`){let e={};p.forEach(t=>{let n=String(t.CLASS||`UNSPECIFIED CLASS`).toUpperCase();e[n]||(e[n]=[]),e[n].push(t)});let t=Object.keys(e);t.forEach((a,c)=>{let u=e[a],p=u[0].Dept||(o===`dept`?s:`–`),m=c===t.length-1;if(d===`2`){let e=Math.max(1,Math.ceil(u.length/70));for(let t=0;t<e;t++){let o=u.slice(t*70,(t+1)*70),s=Math.ceil(o.length/2),c=o.slice(0,s),d=o.slice(s),h=t===e-1;b+=`
            <div class="page-container ${m&&h?``:`page-break`}">
              <div class="watermark">${_}</div>
              
              <div class="print-header">
                ${i?`<img src="${i}" class="college-logo" alt="College Logo">`:``}
                <div class="college-name">${F(r)}</div>
                <div class="election-title">College Union Election ${F(f)} — ${_}</div>
                <div class="class-header">
                  <span class="badge-tag">CLASS: ${F(a)}</span>
                  <span class="badge-tag">DEPARTMENT: ${F(p)}</span>
                  ${e>1?`<span class="badge-tag">PAGE ${t+1} OF ${e}</span>`:``}
                </div>
                <div class="meta-bar">
                  <div>Students in Class: <strong>${u.length}</strong></div>
                  <div>Sorted By: ${l===`dept-class`?`Dept ➔ Class ➔ Sl. No`:l===`class`?`Class & Alphabetical`:`Serial Number`}</div>
                  <div>Printed: ${v}</div>
                </div>
              </div>

              <div class="dual-columns">
                <div class="column-half">
                  <table class="roll-table">
                    <thead>
                      <tr>
                        <th class="col-sl">${n?`Draft Sl.`:`Sl. No`}</th>
                        <th class="col-adm">Adm. No</th>
                        <th>Student Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${c.map(e=>`
                        <tr>
                          <td class="col-sl font-mono font-bold">${y(F(e[`Nominal Roll Serial Number`]))}</td>
                          <td class="col-adm font-mono">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                          <td class="font-semibold">${F(e.NAME)}</td>
                        </tr>
                      `).join(``)}
                    </tbody>
                  </table>
                </div>

                <div class="column-half">
                  <table class="roll-table">
                    <thead>
                      <tr>
                        <th class="col-sl">${n?`Draft Sl.`:`Sl. No`}</th>
                        <th class="col-adm">Adm. No</th>
                        <th>Student Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${d.map(e=>`
                        <tr>
                          <td class="col-sl font-mono font-bold">${y(F(e[`Nominal Roll Serial Number`]))}</td>
                          <td class="col-adm font-mono">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                          <td class="font-semibold">${F(e.NAME)}</td>
                        </tr>
                      `).join(``)}
                    </tbody>
                  </table>
                </div>
              </div>

              ${h?`
                <div class="print-footer">
                  <div class="sig-box">
                    <div class="sig-line"></div>
                    <div>Returning Officer</div>
                  </div>
                </div>
              `:``}
            </div>
          `}}else b+=`
          <div class="page-container ${m?``:`page-break`}">
            <div class="watermark">${_}</div>
            
            <div class="print-header">
              ${i?`<img src="${i}" class="college-logo" alt="College Logo">`:``}
              <div class="college-name">${F(r)}</div>
              <div class="election-title">College Union Election ${F(f)} — ${_}</div>
              <div class="class-header">
                <span class="badge-tag">CLASS: ${F(a)}</span>
                <span class="badge-tag">DEPARTMENT: ${F(p)}</span>
              </div>
              <div class="meta-bar">
                <div>Students in Class: <strong>${u.length}</strong></div>
                <div>Sorted By: ${l===`dept-class`?`Dept ➔ Class ➔ Sl. No`:l===`class`?`Class & Alphabetical`:`Serial Number`}</div>
                <div>Printed: ${v}</div>
              </div>
            </div>

            <table class="roll-table">
              <thead>
                <tr>
                  <th class="col-sl">${n?`Draft Sl. No`:`Sl. No`}</th>
                  <th class="col-adm">Admission No</th>
                  <th>Student Full Name</th>
                </tr>
              </thead>
              <tbody>
                ${u.map(e=>`
                  <tr>
                    <td class="col-sl font-mono font-bold">${y(F(e[`Nominal Roll Serial Number`]))}</td>
                    <td class="col-adm font-mono">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                    <td class="font-semibold">${F(e.NAME)}</td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>

            <div class="print-footer">
              <div class="sig-box">
                <div class="sig-line"></div>
                <div>Returning Officer</div>
              </div>
            </div>
          </div>
        `})}else if(d===`2`){let e=Math.max(1,Math.ceil(p.length/70));for(let t=0;t<e;t++){let a=p.slice(t*70,(t+1)*70),o=Math.ceil(a.length/2),s=a.slice(0,o),c=a.slice(o),u=t===e-1;b+=`
          <div class="page-container ${u?``:`page-break`}">
            <div class="watermark">${_}</div>

            <div class="print-header">
              ${i?`<img src="${i}" class="college-logo" alt="College Logo">`:``}
              <div class="college-name">${F(r)}</div>
              <div class="election-title">College Union Election ${F(f)} — ${_}</div>
              <div class="class-header">
                <span class="badge-tag">${F(m.toUpperCase())}</span>
                ${e>1?`<span class="badge-tag">PAGE ${t+1} OF ${e}</span>`:``}
              </div>
              <div class="meta-bar">
                <div>Total Students: <strong>${p.length}</strong></div>
                <div>Sorted By: ${l===`dept-class`?`Dept ➔ Class ➔ Sl. No`:l===`class`?`Class & Alphabetical`:`Serial Number`}</div>
                <div>Printed: ${v}</div>
              </div>
            </div>

            <div class="dual-columns">
              <div class="column-half">
                <table class="roll-table">
                  <thead>
                    <tr>
                      <th class="col-sl">${n?`Draft Sl.`:`Sl. No`}</th>
                      <th class="col-adm">Adm. No</th>
                      <th>Student Name</th>
                      <th>Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${s.map(e=>`
                      <tr>
                        <td class="col-sl font-mono font-bold">${y(F(e[`Nominal Roll Serial Number`]))}</td>
                        <td class="col-adm font-mono">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                        <td class="font-semibold">${F(e.NAME)}</td>
                        <td class="text-xs">${F(e.CLASS)}</td>
                      </tr>
                    `).join(``)}
                  </tbody>
                </table>
              </div>

              <div class="column-half">
                <table class="roll-table">
                  <thead>
                    <tr>
                      <th class="col-sl">${n?`Draft Sl.`:`Sl. No`}</th>
                      <th class="col-adm">Adm. No</th>
                      <th>Student Name</th>
                      <th>Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${c.map(e=>`
                      <tr>
                        <td class="col-sl font-mono font-bold">${y(F(e[`Nominal Roll Serial Number`]))}</td>
                        <td class="col-adm font-mono">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                        <td class="font-semibold">${F(e.NAME)}</td>
                        <td class="text-xs">${F(e.CLASS)}</td>
                      </tr>
                    `).join(``)}
                  </tbody>
                </table>
              </div>
            </div>

            ${u?`
              <div class="print-footer">
                <div class="sig-box">
                  <div class="sig-line"></div>
                  <div>Returning Officer</div>
                </div>
              </div>
            `:``}
          </div>
        `}}else b=`
        <div class="page-container">
          <div class="watermark">${_}</div>

          <div class="print-header">
            ${i?`<img src="${i}" class="college-logo" alt="College Logo">`:``}
            <div class="college-name">${F(r)}</div>
            <div class="election-title">College Union Election ${F(f)} — ${_}</div>
            <div class="class-header">
              <span class="badge-tag">${F(m.toUpperCase())}</span>
            </div>
            <div class="meta-bar">
              <div>Total Students: <strong>${p.length}</strong></div>
              <div>Sorted By: ${l===`dept-class`?`Dept ➔ Class ➔ Sl. No`:l===`class`?`Class & Alphabetical`:`Serial Number`}</div>
              <div>Printed: ${v}</div>
            </div>
          </div>

          <table class="roll-table">
            <thead>
              <tr>
                <th class="col-sl">${n?`Draft Sl. No`:`Sl. No`}</th>
                <th class="col-adm">Admission No</th>
                <th>Student Full Name</th>
                <th>Class</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              ${p.map(e=>`
                <tr>
                  <td class="col-sl font-mono font-bold">${y(F(e[`Nominal Roll Serial Number`]))}</td>
                  <td class="col-adm font-mono">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                  <td class="font-semibold">${F(e.NAME)}</td>
                  <td>${F(e.CLASS)}</td>
                  <td>${F(e.Dept||`–`)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>

          <div class="print-footer">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div>Returning Officer</div>
            </div>
          </div>
        </div>
      `;let x=window.open(``,`_blank`);if(!x){alert(`Popup blocked! Please allow popups for this site to print.`);return}x.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${_} — ${m}</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .page-break {
              page-break-after: always;
              break-after: page;
            }
            .watermark {
              color: rgba(0, 0, 0, 0.035) !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
          * { box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            color: #111827;
            line-height: 1.35;
            font-size: 11px;
            margin: 0;
            padding: 0;
            background: #fff;
          }
          .page-container {
            position: relative;
            margin-bottom: 20px;
            overflow: hidden;
          }
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-35deg);
            font-size: 52px;
            color: rgba(0, 0, 0, 0.035);
            font-weight: 900;
            letter-spacing: 3px;
            pointer-events: none;
            z-index: 0;
            white-space: nowrap;
            text-transform: uppercase;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            user-select: none;
          }
          .college-logo {
            max-height: 55px;
            max-width: 140px;
            margin: 0 auto 6px auto;
            display: block;
            object-fit: contain;
          }
          .print-header {
            text-align: center;
            border-bottom: 2px solid #1f2937;
            padding-bottom: 8px;
            margin-bottom: 10px;
          }
          .college-name {
            font-size: 17px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .election-title {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 2px;
            color: #374151;
          }
          .class-header {
            margin-top: 6px;
            display: flex;
            justify-content: center;
            gap: 12px;
          }
          .badge-tag {
            display: inline-block;
            background: #f3f4f6;
            border: 1px solid #d1d5db;
            padding: 2px 10px;
            border-radius: 4px;
            font-weight: 800;
            font-size: 11px;
          }
          .meta-bar {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            margin-top: 8px;
            color: #4b5563;
          }
          .dual-columns {
            display: flex;
            gap: 12px;
            width: 100%;
            align-items: flex-start;
          }
          .column-half {
            flex: 1;
            width: calc(50% - 6px);
          }
          .column-half .roll-table {
            width: 100%;
          }
          .roll-table {
            width: 100%;
            border-collapse: collapse;
          }
          .roll-table th, .roll-table td {
            border: 1px solid #9ca3af;
            padding: 3px 6px;
            text-align: left;
            vertical-align: middle;
          }
          .roll-table th {
            background: #e5e7eb;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 9.5px;
            color: #111827;
          }
          .col-sl { width: 55px; text-align: center; }
          .col-adm { width: 85px; }
          .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
          .font-semibold { font-weight: 600; }
          .font-bold { font-weight: 700; }
          .text-xs { font-size: 9.5px; }
          
          .print-footer {
            margin-top: 25px;
            padding-top: 10px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            page-break-inside: avoid;
          }
          .sig-box {
            text-align: center;
            font-weight: 700;
            font-size: 11px;
            width: 160px;
          }
          .sig-line {
            border-bottom: 1px dashed #4b5563;
            margin-bottom: 6px;
            height: 40px;
          }
        </style>
      </head>
      <body>
        ${b}
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 250);
          };
        <\/script>
      </body>
    </html>
  `),x.document.close()}async function Ve(e){let t=H();t&&(U(e,`publish`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading election lists & settings...</p></div>
  `),await K(e.querySelector(`#adminMain`),t))}async function K(e,t){if(e){e.innerHTML=`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading election lists & settings...</p></div>
  `;try{let[n,r,i,a,o]=await Promise.all([C.adminGetSettings(t),C.adminGetNominations(t).catch(()=>[]),C.getPosts().catch(()=>[]),C.getNominalRoll().catch(()=>[]),C.adminGetResults(t).catch(()=>({results:[]}))]);He(e,n,r,i,a,o?.results||[],t)}catch(t){e.innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function He(e,t,r,i,a,o,s){let c=t.nominalRollFinalized===`true`||t.isRollFinalized===`true`,l=!c&&t.draftRollPublished===`true`,u=!c&&!l,d=t.validListPublished===`true`,f=t.finalListPublished===`true`,p=t.resultsPublished===`true`,m=t.resultsLocked===`true`,h=t.countingActive===`true`,g=t.electionYear||new Date().getFullYear(),_=t.collegeName||n.COLLEGE_NAME,v=t.collegeShortName||n.COLLEGE_SHORT_NAME,y=t.collegeLogo||``,b=r.filter(e=>e.status===`Valid`),x=r.filter(e=>e.status===`Valid`&&e.withdrawalStatus!==`Approved`),S=r.filter(e=>e.status===`Valid`&&e.withdrawalStatus===`Approved`),w=new Set(b.map(e=>e.post)).size,T=new Set(x.map(e=>e.post)).size,E={};x.forEach(e=>{E[e.post]=(E[e.post]||0)+1});let D=Object.keys(E).filter(e=>E[e]===1);e.innerHTML=`
    <div class="page-enter space-y-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 class="text-xl font-bold text-white">Publish & Print Lists</h3>
          <p class="text-slate-400 text-sm">Control public visibility, audit election pipeline stages, and generate official signed documents.</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button data-nav="/admin/schedule" class="btn btn-primary btn-sm flex items-center gap-1.5">
            <span>📅</span> Schedule & Timings
          </button>
          <button id="btnRefreshPublish" class="btn btn-secondary btn-sm flex items-center gap-2">
            <span>🔄</span> Refresh State
          </button>
        </div>
      </div>

      <!-- Election Pipeline Overview Bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="glass rounded-xl p-3 border ${c?`border-emerald-500/30 bg-emerald-500/10`:l?`border-amber-500/30 bg-amber-500/10`:`border-white/10 bg-white/5`}">
          <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">1. Nominal Roll</div>
          <div class="text-white font-bold text-sm mt-0.5">${a.length} Voters</div>
          <div class="text-xs font-semibold ${c?`text-emerald-400`:l?`text-amber-400`:`text-slate-400`}">
            ${c?`🔒 Finalized`:l?`📋 Draft Live`:`⏳ Unpublished`}
          </div>
        </div>

        <div class="glass rounded-xl p-3 border ${d?`border-emerald-500/30 bg-emerald-500/10`:`border-white/10 bg-white/5`}">
          <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">2. Valid List</div>
          <div class="text-white font-bold text-sm mt-0.5">${b.length} Candidates</div>
          <div class="text-xs font-semibold ${d?`text-emerald-400`:`text-slate-400`}">
            ${d?`✅ Published`:`⏳ Pending`}
          </div>
        </div>

        <div class="glass rounded-xl p-3 border ${f?`border-emerald-500/30 bg-emerald-500/10`:`border-white/10 bg-white/5`}">
          <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">3. Final List</div>
          <div class="text-white font-bold text-sm mt-0.5">${x.length} Approved</div>
          <div class="text-xs font-semibold ${f?`text-emerald-400`:`text-slate-400`}">
            ${f?`✅ Published`:`⏳ Pending`}
          </div>
        </div>

        <div class="glass rounded-xl p-3 border ${p?`border-emerald-500/30 bg-emerald-500/10`:h?`border-amber-500/30 bg-amber-500/10`:`border-white/10 bg-white/5`}">
          <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">4. Results</div>
          <div class="text-white font-bold text-sm mt-0.5">${m?`🔒 Frozen`:h?`🗳️ Counting`:`🔓 Live Entry`}</div>
          <div class="text-xs font-semibold ${p?`text-emerald-400`:h?`text-amber-400`:`text-slate-400`}">
            ${p?`📢 Publicly Live`:h?`⚡ Counting Active`:`👁️‍🗨️ Hidden`}
          </div>
        </div>
      </div>

      <!-- 1. Nominal Roll publish & print -->
      <div class="glass rounded-xl p-6 space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-white text-base">📜 Nominal Roll (Voter List) Stages</h4>
              <span class="badge ${c?`badge-valid`:l?`badge-pending`:`bg-slate-700 text-slate-300`} text-xs">
                ${c?`🔒 Finalized (1, 2, 3...)`:l?`📋 Draft Published (D1, D2...)`:`⏳ Unpublished`}
              </span>
            </div>
            <p class="text-slate-400 text-xs mt-1">
              Registered Voters: <strong class="text-white">${a.length} students</strong>. 
              ${c?`Official finalized numbers (1, 2, 3...) are active.`:l?`Draft list (D1, D2...) is open for student correction requests.`:`The voter list is currently hidden from public visitors.`}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button id="btnPrintNominalRoll" class="btn btn-secondary btn-sm flex items-center gap-1.5" ${a.length===0?`disabled`:``}>
              <span>🖨️</span> Print Roll
            </button>
            <button data-nav="/admin/nominal-roll" class="btn btn-secondary btn-sm">👥 Manage Roll</button>
          </div>
        </div>

        ${u?`
        <div class="alert alert-warning text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span>ℹ️ The Nominal Roll is currently <strong>Unpublished</strong> (hidden from students). Publish the Draft Roll so students can verify their details and submit corrections.</span>
          </div>
          <button id="publishDraftRollBtn" class="btn btn-primary bg-amber-600 hover:bg-amber-500 text-white shrink-0">📢 Publish Draft Roll</button>
        </div>
        `:``}

        ${l?`
        <div class="alert alert-success text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span>📋 <strong>Draft Roll is currently live to students</strong> with <strong>D1, D2...</strong> provisional Sl. numbers. Correction requests can be submitted.</span>
          <div class="flex gap-2 shrink-0">
            <button id="unpublishDraftRollBtn" class="btn btn-sm" style="background:#dc2626;color:white;border:none;">🚫 Unpublish Draft</button>
            <button data-nav="/admin/nominal-roll" class="btn btn-sm btn-primary">🔒 Finalize in Roll Management</button>
          </div>
        </div>
        `:``}

        ${c?`
        <div class="alert alert-success text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span>✅ <strong>Nominal Roll is Finalized & Locked.</strong> Serial numbers are standard <strong>1, 2, 3...</strong> and nominations are locked to official serials.</span>
          <button data-nav="/admin/nominal-roll" class="btn btn-sm bg-rose-500/20 text-rose-300 border border-rose-500/50 hover:bg-rose-500/30 shrink-0">🔓 Unfinalize</button>
        </div>
        `:``}
      </div>

      <!-- 2. Valid list publish & print -->
      <div class="glass rounded-xl p-6 space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-white text-base">📋 Valid Nominations List</h4>
              <span class="badge ${d?`badge-valid`:`badge-pending`} text-xs">
                ${d?`✅ Published`:`⏳ Not Published`}
              </span>
            </div>
            <p class="text-slate-400 text-xs mt-1">
              Verified Candidates: <strong class="text-white">${b.length} candidates</strong> across <strong class="text-white">${w} posts</strong>.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button id="btnPrintValid" class="btn btn-secondary btn-sm flex items-center gap-1.5" ${b.length===0?`disabled`:``}>
              <span>🖨️</span> Print Valid List
            </button>
            <button data-nav="/admin/verify" class="btn btn-secondary btn-sm">✅ Review Nominations</button>
          </div>
        </div>

        ${d?`
        <div class="alert alert-success text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span>✅ This list is currently visible to students on the public portal (<code>#/valid-list</code>).</span>
          <button id="unpublishValidBtn" class="btn btn-sm shrink-0" style="background:#dc2626;color:white;border:none;">🚫 Unpublish Valid List</button>
        </div>`:`
        <div class="alert alert-warning text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span>⚠️ Ensure all received nomination papers have been verified by the Returning Officer before publishing.</span>
          <button id="publishValidBtn" class="btn btn-primary shrink-0" ${b.length===0?`disabled title="No valid candidates to publish"`:``}>
            📢 Publish Valid Nominations List
          </button>
        </div>`}
      </div>

      <!-- 3. Final list publish & print -->
      <div class="glass rounded-xl p-6 space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-white text-base">🏁 Final Nominations List</h4>
              <span class="badge ${f?`badge-valid`:`badge-pending`} text-xs">
                ${f?`✅ Published`:`⏳ Not Published`}
              </span>
            </div>
            <p class="text-slate-400 text-xs mt-1">
              Approved Contesting: <strong class="text-white">${x.length} candidates</strong> across <strong class="text-white">${T} posts</strong> 
              (${S.length} Withdrawn${D.length>0?`, <span class="text-emerald-400 font-bold">${D.length} Uncontested/Unanimous</span>`:``}).
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button id="btnPrintFinal" class="btn btn-secondary btn-sm flex items-center gap-1.5" ${x.length===0?`disabled`:``}>
              <span>🖨️</span> Print Final List
            </button>
            <button data-nav="/admin/withdrawals" class="btn btn-secondary btn-sm">↩️ Withdrawals</button>
          </div>
        </div>

        ${f?`
        <div class="alert alert-success text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span>✅ The final candidate list is currently visible to students on the public portal (<code>#/final-list</code>).</span>
          <button id="unpublishFinalBtn" class="btn btn-sm shrink-0" style="background:#dc2626;color:white;border:none;">🚫 Unpublish Final List</button>
        </div>`:`
        <div class="alert alert-warning text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span>⚠️ Publish after the withdrawal scrutiny deadline has passed. Uncontested candidates will be flagged as elected unanimously.</span>
          <button id="publishFinalBtn" class="btn btn-primary shrink-0" ${d?``:`disabled title="Publish the valid list first"`}>
            📢 Publish Final Nominations List
          </button>
        </div>`}
      </div>

      <!-- 4. Election Results publish, freeze & print -->
      <div class="glass rounded-xl p-6 space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-white text-base">📊 Election Results Visibility & Official Declaration</h4>
              <span class="badge ${p?`badge-valid`:`badge-pending`} text-xs">
                ${p?`📢 Publicly Live`:`👁️‍🗨️ Hidden from Public`}
              </span>
              <span class="badge ${h?`bg-amber-500/20 text-amber-300 border border-amber-500/30`:`bg-slate-700 text-slate-300`} text-xs">
                ${h?`⚡ Counting in Progress`:`⏳ Counting Inactive`}
              </span>
              ${m?`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs">🔒 Locked & Frozen</span>`:``}
            </div>
            <p class="text-slate-400 text-xs mt-1">
              Control live counting status, public results visibility, and lock vote tallies against modification.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button id="btnPrintResults" class="btn btn-primary btn-sm flex items-center gap-1.5">
              <span>🖨️</span> Print Official Result Sheet
            </button>
            <button data-nav="/admin/results" class="btn btn-secondary btn-sm">🏆 View Results</button>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <button id="toggleCountingBtn" class="btn ${h?`btn-danger`:`bg-amber-500 hover:bg-amber-600 text-black font-bold`} btn-sm">
            ${h?`⏸️ Stop Counting Mode`:`⚡ Set Counting Active`}
          </button>
          <button id="toggleResultsPublishBtn" class="btn ${p?`btn-danger`:`btn-primary`} btn-sm">
            ${p?`🚫 Hide Results from Public`:`📢 Publish Results to Public`}
          </button>
          <button id="toggleResultsLockBtn" class="btn ${m?`btn-secondary`:`bg-amber-500 hover:bg-amber-600 text-black font-bold`} btn-sm">
            ${m?`🔓 Unlock Results`:`🔒 Freeze / Lock Results`}
          </button>
        </div>
      </div>
    </div>`,e.querySelector(`#btnPrintNominalRoll`)?.addEventListener(`click`,()=>{if(a.length===0){L(`Nominal Roll is empty. Add students before printing.`,`error`);return}ze({students:a,isFinal:c,isDraft:l,collegeName:_,collegeLogo:y,electionYear:g})});let O=e=>{let t=e===`final`,n=t?x:b;if(n.length===0){alert(t?`No approved contesting candidates found to print.`:`No valid nominations found to print.`);return}let r={};n.forEach(e=>{r[e.post]||(r[e.post]=[]),r[e.post].push(e)});let a=i.map(e=>e.post||e.name).filter(e=>r[e]);Object.keys(r).forEach(e=>{a.includes(e)||a.push(e)}),a.forEach(e=>{r[e]&&r[e].sort((e,t)=>String(e.candidateName||``).localeCompare(String(t.candidateName||``)))});let o=`
      <div style="text-align:center;margin-bottom:25px;border-bottom:2px solid #000;padding-bottom:12px">
        ${y?`<img src="${y}" style="max-height:55px;max-width:140px;margin:0 auto 6px auto;display:block;object-fit:contain" alt="College Logo">`:``}
        <div style="font-size:13px;font-weight:600;color:#333;text-transform:uppercase;letter-spacing:0.5px">${F(_)}</div>
        <h1 style="margin:4px 0;font-size:20px;text-transform:uppercase;font-weight:800;letter-spacing:0.5px">College Union Election ${F(g)}</h1>
        <h2 style="margin:4px 0 0 0;font-size:15px;color:#111;text-transform:uppercase;font-weight:700">
          ${t?`FINAL LIST OF ELIGIBLE CONTESTING CANDIDATES`:`LIST OF VALID NOMINATIONS`}
        </h2>
      </div>
      <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:12px">
        <thead>
          <tr style="background:#f0f0f0">
            <th style="border:1px solid #000;padding:6px;text-align:center;width:40px">#</th>
            <th style="border:1px solid #000;padding:6px 8px;text-align:left">Candidate Name</th>
            <th style="border:1px solid #000;padding:6px 8px;text-align:center;width:80px">Roll Sl. No</th>
            <th style="border:1px solid #000;padding:6px 8px;text-align:center;width:90px">Adm. No</th>
            <th style="border:1px solid #000;padding:6px 8px;text-align:left">Class</th>
            <th style="border:1px solid #000;padding:6px 8px;text-align:left">Department</th>
            ${t?`<th style="border:1px solid #000;padding:6px 8px;text-align:center;width:140px">Remarks</th>`:``}
          </tr>
        </thead>
        <tbody>
    `;a.forEach(e=>{let n=r[e],i=t&&n.length===1;o+=`
        <tr>
          <td colspan="${t?`7`:`6`}" style="border:1px solid #000;padding:8px;background:#f3f4f6;font-weight:bold;text-transform:uppercase;font-size:13px">
            POST: ${F(e)}
            <span style="font-size:11px;font-weight:normal;float:right">
              ${n.length} Candidate${n.length>1?`s`:``} ${i?`— (UNCONTESTED)`:``}
            </span>
          </td>
        </tr>
      `,n.forEach((e,n)=>{let r=e.candidateSerial||e.candidate?.[`Nominal Roll Serial Number`]||e.candidate?.serial_number||`–`,a=e.candidate?.[`ADMISION NO`]||e.candidateAdmission||e.candidate?.admission_no||`–`;o+=`
          <tr>
            <td style="border:1px solid #000;padding:6px;text-align:center;font-weight:bold">${n+1}</td>
            <td style="border:1px solid #000;padding:6px 8px;font-weight:bold">${F(e.candidateName)}</td>
            <td style="border:1px solid #000;padding:6px 8px;text-align:center;font-family:monospace;font-weight:bold">${F(r)}</td>
            <td style="border:1px solid #000;padding:6px 8px;text-align:center;font-family:monospace">${F(a)}</td>
            <td style="border:1px solid #000;padding:6px 8px">${F(e.candidateClass)}</td>
            <td style="border:1px solid #000;padding:6px 8px">${F(e.candidateDept)}</td>
            ${t?`
              <td style="border:1px solid #000;padding:6px 8px;text-align:center;font-weight:bold;font-size:11px">
                ${i?`<span style="color:#047857">ELECTED UNOPPOSED</span>`:`<span style="color:#1d4ed8">CONTESTING</span>`}
              </td>
            `:``}
          </tr>
        `})}),o+=`
        </tbody>
      </table>
      <div style="margin-top:50px;display:flex;justify-content:space-between;align-items:flex-end">
        <div style="font-size:11px;color:#555">
          <div><strong>Date of Publication:</strong> ${new Date().toLocaleDateString(`en-IN`,{day:`numeric`,month:`long`,year:`numeric`})}</div>
          <div><strong>Place:</strong> Palakkad</div>
        </div>
        <div style="text-align:center;width:220px">
          <div style="border-top:1px solid #000;padding-top:6px;font-weight:bold;font-size:12px">RETURNING OFFICER</div>
          <div style="font-size:10px;color:#555">Signature & Official Seal</div>
        </div>
      </div>
    `;let s=window.open(``,`_blank`);if(!s){L(`Popup blocked! Please allow popups to print.`,`error`);return}s.document.write(`<!DOCTYPE html><html><head><title>${t?`Final List`:`Valid List`} - ${F(v)} Election ${F(g)}</title><style>
      @page{size:A4;margin:15mm}
      body{font-family:Arial,sans-serif;line-height:1.4;margin:0;padding:10px;}
    </style></head><body>${o}<script>window.onload=()=>setTimeout(()=>window.print(),500)<\/script></body></html>`),s.document.close()};e.querySelector(`#btnPrintValid`)?.addEventListener(`click`,()=>O(`valid`)),e.querySelector(`#btnPrintFinal`)?.addEventListener(`click`,()=>O(`final`)),e.querySelector(`#btnPrintResults`)?.addEventListener(`click`,()=>{let e={};(o||[]).forEach(t=>{let n=t.Post||t.post,r=t.CandidateId||t.candidateId;e[n]||(e[n]={}),e[n][r]||(e[n][r]=0),e[n][r]+=Number(t.Votes||t.votes)||0});let t=i.map(t=>{let n=t.post||t.name,r=x.filter(e=>e.post===n);if(r.length===0)return{post:n,type:`no-candidates`,candidates:[]};if(r.length===1)return{post:n,type:`unanimous`,candidates:r,winner:r[0]};let i=e[n]||{},a=r.map(e=>({...e,votes:i[e.id]||0})).sort((e,t)=>t.votes-e.votes),o=n.toUpperCase().includes(`UUC`)||n.toUpperCase().includes(`UNIVERSITY`)?2:1;return{post:n,type:`election`,candidates:a,winners:a.slice(0,o),totalVotes:Object.values(i).reduce((e,t)=>e+t,0)}}),n=`
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #222; line-height: 1.5; padding: 15px; }
        .official-sheet { max-width: 850px; margin: 0 auto; padding: 25px; border: 1px solid #ddd; background: white; }
        .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 20px; }
        .header h1 { margin: 0; font-size: 20px; text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px; }
        .header h2 { margin: 4px 0 0 0; font-size: 14px; color: #333; font-weight: 600; text-transform: uppercase; }
        .result-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 12px; }
        .result-table th, .result-table td { border: 1px solid #000; padding: 8px 10px; }
        .result-table th { background: #f2f2f2; text-align: left; text-transform: uppercase; font-size: 11px; }
        .post-header { background: #f9f9f9; font-weight: bold; font-size: 13px; text-transform: uppercase; }
        .winner-row { background: #f0fdf4 !important; font-weight: bold; }
        .footer { margin-top: 50px; display: flex; justify-content: space-between; align-items: flex-end; }
        .sig-box { width: 220px; border-top: 1px solid #000; text-align: center; padding-top: 6px; font-size: 12px; font-weight: bold; }
        @media print {
          body { padding: 0; }
          .official-sheet { border: none; width: 100%; max-width: 100%; padding: 0; }
          .post-header { background-color: #eee !important; -webkit-print-color-adjust: exact; }
          .winner-row { background-color: #f0fdf4 !important; -webkit-print-color-adjust: exact; }
        }
      </style>
      <div class="official-sheet">
        <div class="header">
          ${y?`<img src="${y}" style="max-height:60px;max-width:140px;margin:0 auto 8px auto;display:block;object-fit:contain" alt="College Logo">`:``}
          <h2>${F(_)}</h2>
          <h1>College Union Election ${F(g)}</h1>
          <div style="font-size: 16px; margin-top: 12px; font-weight: 900; text-decoration: underline;">OFFICIAL RESULT DECLARATION NOTIFICATION</div>
        </div>

        <p style="font-size: 13px; margin-bottom: 20px; text-align: justify;">
          The following candidates are hereby declared to have been duly elected to the respective offices of the College Union for the academic year ${F(g)}, 
          based on the scrutiny, uncontested nominations, and counting of votes held on ${new Date().toLocaleDateString(`en-IN`,{day:`numeric`,month:`long`,year:`numeric`})}.
        </p>

        <table class="result-table">
          <thead>
            <tr>
              <th style="width: 8%; text-align: center;">#</th>
              <th style="width: 42%;">Name of Candidate</th>
              <th style="width: 25%;">Class / Department</th>
              <th style="text-align: center; width: 10%;">Votes</th>
              <th style="width: 15%; text-align: center;">Remarks</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(e=>e.type===`no-candidates`?``:`
                <tr class="post-header">
                  <td colspan="5" style="background: #eaeaea; padding: 10px 8px; border-bottom: 2px solid #000;">
                    POST: ${F(e.post)}
                  </td>
                </tr>
                ${e.candidates.map((t,n)=>{let r=e.type===`unanimous`||e.winners&&e.winners.some(e=>e.id===t.id);return`
                    <tr class="${r?`winner-row`:``}">
                      <td style="text-align: center; font-size: 11px;">${n+1}</td>
                      <td style="font-weight: ${r?`bold`:`normal`};">${F(t.candidateName)} ${t.candidateSerial?`<span style="font-size: 10px; font-weight: normal; color: #555;">(Roll Sl. #${F(t.candidateSerial)})</span>`:``}</td>
                      <td style="color: #444;">${F(t.candidateClass)}</td>
                      <td style="text-align: center; font-weight: bold;">${e.type===`unanimous`?`—`:t.votes||0}</td>
                      <td style="font-size: 11px; font-weight: bold; text-align: center; color: ${r?`#047857`:`#555`};">
                        ${r?e.type===`unanimous`?`ELECTED UNOPPOSED`:`✓ ELECTED`:`CONTESTING`}
                      </td>
                    </tr>
                  `}).join(``)}
              `).join(``)}
          </tbody>
        </table>

        <div class="footer">
          <div style="font-size: 11px; color: #444;">
            <p><strong>Date:</strong> ${new Date().toLocaleDateString(`en-IN`,{day:`numeric`,month:`long`,year:`numeric`})}</p>
            <p><strong>Place:</strong> Palakkad</p>
          </div>
          <div class="sig-box">
            RETURNING OFFICER<br>
            <span style="font-weight: normal; font-size: 10px;">College Union Election ${F(g)}</span>
          </div>
        </div>
      </div>
    `,r=window.open(``,`_blank`);if(!r){L(`Popup blocked! Please allow popups to print.`,`error`);return}r.document.write(`
      <!DOCTYPE html>
      <html>
        <head><title>Official Results Declaration - ${F(v)} Election ${F(g)}</title></head>
        <body>
          ${n}
          <script>window.addEventListener('load', () => setTimeout(() => window.print(), 500));<\/script>
        </body>
      </html>
    `),r.document.close()}),e.querySelector(`#btnRefreshPublish`)?.addEventListener(`click`,()=>K(e,s)),e.querySelector(`#publishDraftRollBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;I(n,!0,`Publishing Draft...`);try{await C.adminPublishDraftRoll(s),L(`Draft Nominal Roll published! Serial numbers are set to D1, D2...`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,`📢 Publish Draft Roll`)}}),e.querySelector(`#unpublishDraftRollBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;if(confirm(`Unpublish the Draft Nominal Roll? Students will no longer be able to view it.`)){I(n,!0,`Unpublishing...`);try{await C.adminUnpublishDraftRoll(s),L(`Draft Nominal Roll unpublished.`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,`🚫 Unpublish Draft`)}}}),e.querySelector(`#publishValidBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;if(confirm(`Are you sure you want to publish the valid nominations list? This will be visible to all students.`)){I(n,!0,`Publishing...`);try{await C.adminPublishValidList(s),L(`Valid nominations list published successfully!`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,`📢 Publish Valid Nominations List`)}}}),e.querySelector(`#unpublishValidBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;if(confirm(`Unpublish Valid List?

This will remove it from public view. The Final List will also be unpublished.`)){I(n,!0,`Unpublishing...`);try{await C.adminUnpublishValidList(s),L(`Valid list unpublished.`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,`🚫 Unpublish Valid List`)}}}),e.querySelector(`#publishFinalBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;if(confirm(`Are you sure you want to publish the final nominations list?`)){I(n,!0,`Publishing...`);try{await C.adminPublishFinalList(s),L(`Final nominations list published successfully!`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,`📢 Publish Final Nominations List`)}}}),e.querySelector(`#unpublishFinalBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;if(confirm(`Unpublish Final List?

This will remove the final candidate list from public view.`)){I(n,!0,`Unpublishing...`);try{await C.adminUnpublishFinalList(s),L(`Final list unpublished.`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,`🚫 Unpublish Final List`)}}}),e.querySelector(`#toggleResultsPublishBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget,r=p;if(confirm(r?`Hide election results from public view? Public visitors will see counting in progress.`:`Publish election results to the public portal? Results will be immediately visible to all visitors.`)){I(n,!0,`Updating...`);try{L((await C.adminTogglePublishResults(s)).published?`📢 Results published to public view!`:`👁️‍🗨️ Results hidden from public view.`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,r?`🚫 Hide Results from Public`:`📢 Publish Results to Public`)}}}),e.querySelector(`#toggleResultsLockBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget,r=m;if(confirm(r?`Unlock election results? Vote entry modifications will be re-enabled.`:`Freeze and lock election results? Further vote entries will be blocked.`)){I(n,!0,`Updating...`);try{L((await C.adminToggleLockResults(s)).locked?`🔒 Results locked and frozen.`:`🔓 Results unlocked for live entry.`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,r?`🔓 Unlock Results`:`🔒 Freeze / Lock Results`)}}}),e.querySelector(`#toggleCountingBtn`)?.addEventListener(`click`,async t=>{let n=t.currentTarget,r=h;if(confirm(r?`Deactivate Counting Mode? Public visitors to the results page will be asked to wait.`:`Activate Counting Mode? Public visitors will see "Counting in Progress".`)){I(n,!0,`Updating...`);try{L((await C.adminToggleCounting(s)).active?`⚡ Live counting mode active!`:`⏳ Counting mode inactive.`,`success`),await K(e,s)}catch(e){L(`Failed: ${e.message}`,`error`),I(n,!1,r?`⏸️ Stop Counting Mode`:`⚡ Set Counting Active`)}}})}async function Ue(e){let t=H();if(t){U(e,`posts`,`
    <div class="text-center py-16">
      <span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span>
      <p class="text-slate-400 mt-4 text-sm">Loading posts and departments...</p>
    </div>
  `);try{let[r,i]=await Promise.all([C.adminGetPosts(t).catch(()=>null),C.getNominalRoll().catch(()=>[])]),a=Array.isArray(r)&&r.length>0?r:n.DEFAULT_POSTS,o=new Set;Array.isArray(i)&&i.forEach(e=>{let t=String(e.Dept||e.dept||e.DEPARTMENT||e.Department||``).trim();t&&t!==`-`&&t!==`–`&&o.add(t)});let s=new Set;Array.isArray(a)&&a.forEach(e=>{let t=(e.restrictedDept||(e.deptRestriction&&String(e.post||``).startsWith(`Association Secretary `)?e.post.replace(`Association Secretary `,``).trim():``)).trim();t&&t!==`-`&&t!==`–`&&s.add(t)});let c=[`Botany`,`Chemistry`,`Commerce`,`Computer Science`,`Economics`,`English`,`Hindi`,`History`,`Malayalam`,`Mathematics`,`Physics`,`Psychology`,`Sanskrit`,`Tamil`,`Zoology`],l=o.size>0,u=l?Array.from(o).sort():c,d=Array.from(s).filter(e=>!o.has(e)&&(l?!0:!c.includes(e))).sort(),f=Array.from(new Set([...u,...d])).sort();We(e.querySelector(`#adminMain`),a,{nominalDepts:u,otherDepts:d,allDepartments:f,hasNominalRoll:l},t)}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function We(e,t,n,r){e.innerHTML=`
    <div class="page-enter space-y-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <span>🗳️ Manage Election Posts</span>
            <span class="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">${t.length} Posts</span>
          </h3>
          <p class="text-slate-400 text-sm mt-1">Configure post eligibility rules: gender, multi-year include/exclude policies, and department associations.</p>
        </div>
        <button id="addPostBtn" class="btn btn-primary gap-2">
          <span>+</span> Add New Post
        </button>
      </div>

      <!-- Add / Edit form (hidden by default) -->
      <div id="postFormWrap" class="hidden glass rounded-2xl p-6 space-y-5 border border-indigo-500/30 shadow-xl">
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl" id="postFormIcon">✏️</span>
            <div>
              <h4 id="postFormTitle" class="font-bold text-white text-lg">Add New Post</h4>
              <p class="text-xs text-slate-400">Configure election restrictions and eligibility criteria</p>
            </div>
          </div>
          <button id="closePostFormBtn" class="text-slate-400 hover:text-white text-lg px-2">✕</button>
        </div>

        <!-- Post Name -->
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1.5">
            Post Name <span class="text-red-400">*</span>
          </label>
          <input id="pfPost" type="text" class="field" placeholder="e.g. Association Secretary Physics, III UG Representative, Lady Vice-Chairperson" />
          <p class="text-[11px] text-slate-500 mt-1">Typing a department name or year will auto-configure eligibility settings.</p>
        </div>

        <!-- Expanded Year & Level Eligibility Policy -->
        <div class="glass rounded-xl p-5 border border-indigo-500/20 bg-slate-900/40 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <h5 class="text-sm font-bold text-white flex items-center gap-2">
                <span>🎓</span> Year &amp; Class Level Eligibility Policy
              </h5>
              <p class="text-xs text-slate-400">Choose whether all years can apply, include specific years only, or exclude/bar certain years.</p>
            </div>
            
            <!-- Policy Mode Radios -->
            <div class="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs self-start sm:self-auto">
              <label class="px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-white bg-indigo-600 font-semibold" id="lblModeAll">
                <input type="radio" name="pfYearMode" value="ALL" class="hidden" checked />
                <span>🌐 All Years</span>
              </label>
              <label class="px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-slate-300 hover:text-white" id="lblModeInclude">
                <input type="radio" name="pfYearMode" value="INCLUDE" class="hidden" />
                <span>✅ Include Only</span>
              </label>
              <label class="px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-slate-300 hover:text-white" id="lblModeExclude">
                <input type="radio" name="pfYearMode" value="EXCLUDE" class="hidden" />
                <span>🚫 Exclude (Bar)</span>
              </label>
            </div>
          </div>

          <!-- Quick Presets -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Quick Presets:</span>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-white/5 border-white/10 hover:bg-white/10 preset-btn" data-preset="all">Open All</button>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-white/5 border-white/10 hover:bg-white/10 preset-btn" data-preset="ug">UG Only</button>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-white/5 border-white/10 hover:bg-white/10 preset-btn" data-preset="pg">PG Only</button>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 preset-btn" data-preset="bar-final">🚫 Bar Final Years (3rd UG &amp; 2nd PG)</button>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-white/5 border-white/10 hover:bg-white/10 preset-btn" data-preset="1_ug">1st UG Only</button>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-white/5 border-white/10 hover:bg-white/10 preset-btn" data-preset="2_ug">2nd UG Only</button>
            <button type="button" class="btn btn-secondary btn-xs py-1 px-2.5 text-[11px] bg-white/5 border-white/10 hover:bg-white/10 preset-btn" data-preset="3_ug">3rd UG Only</button>
          </div>

          <!-- Multi-Year Checkbox Grid -->
          <div id="yearCheckboxesWrap" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-1">
            ${T.map(e=>`
              <label class="year-card flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-indigo-500/40 cursor-pointer transition-all">
                <input type="checkbox" value="${e.id}" class="pf-year-cb accent-indigo-500 w-4 h-4 rounded cursor-pointer" />
                <span class="text-xs font-semibold text-slate-200">${F(e.label)}</span>
              </label>
            `).join(``)}
          </div>

          <p id="yearPolicyHint" class="text-[11px] text-slate-400 italic">Students from any year level can contest, propose, or second for this post.</p>
        </div>

        <!-- Hidden legacy inputs for backward compatibility -->
        <select id="pfYear" class="hidden">
          <option value="">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="UG">UG</option>
          <option value="PG">PG</option>
          <option value="1,2">1,2</option>
        </select>
        <input id="pfFinalYear" type="checkbox" class="hidden" />

        <!-- Checkbox Options -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Female Only -->
          <label class="flex items-start gap-3 cursor-pointer glass rounded-xl p-4 border border-white/5 hover:border-pink-500/30 transition-all">
            <input id="pfFemale" type="checkbox" class="accent-pink-500 w-5 h-5 mt-0.5 rounded cursor-pointer" />
            <div>
              <p class="text-sm font-semibold text-white flex items-center gap-1.5">
                <span>👩</span> Female Candidates Only
              </p>
              <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                Reserved exclusively for female candidates. Male students cannot file nomination.
              </p>
            </div>
          </label>

          <!-- Department Restricted -->
          <label class="flex items-start gap-3 cursor-pointer glass rounded-xl p-4 border border-white/5 hover:border-amber-500/30 transition-all">
            <input id="pfDept" type="checkbox" class="accent-amber-500 w-5 h-5 mt-0.5 rounded cursor-pointer" />
            <div>
              <p class="text-sm font-semibold text-white flex items-center gap-1.5">
                <span>🏢</span> Department Restricted
              </p>
              <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                Candidate, Proposer, and Seconder must all belong to the designated department.
              </p>
            </div>
          </label>
        </div>

        <!-- Department Chooser (Shown when Department Restricted is checked) -->
        <div id="deptChooserWrap" class="hidden p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
          <div class="flex items-center justify-between">
            <label class="block text-xs font-bold text-amber-300 uppercase tracking-wider">
              Designated Department <span class="text-red-400">*</span>
            </label>
            <span class="text-xs text-amber-200/70">Candidate &amp; Supporters must belong to this department</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] text-slate-400 mb-1">
                ${n.hasNominalRoll?`Departments from Nominal Roll (${n.nominalDepts.length})`:`Select from Known College Departments`}
              </label>
              <select id="pfDeptSelect" class="field">
                <option value="">-- Choose Department --</option>
                ${n.hasNominalRoll?`
                  <optgroup label="📋 Departments from Nominal Roll (${n.nominalDepts.length})">
                    ${n.nominalDepts.map(e=>`<option value="${F(e)}">${F(e)}</option>`).join(``)}
                  </optgroup>
                  ${n.otherDepts.length>0?`
                  <optgroup label="🏢 Other Configured Departments">
                    ${n.otherDepts.map(e=>`<option value="${F(e)}">${F(e)}</option>`).join(``)}
                  </optgroup>`:``}
                `:`
                  ${n.allDepartments.map(e=>`<option value="${F(e)}">${F(e)}</option>`).join(``)}
                `}
                <option value="__custom__">✏️ Custom / Other Department...</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] text-slate-400 mb-1">Department Name (Exact match)</label>
              <input id="pfDeptCustom" type="text" class="field" placeholder="e.g. Physics, Computer Science" />
            </div>
          </div>
        </div>

        <!-- Live Rule Summary Card -->
        <div class="rounded-xl p-4 bg-slate-900/60 border border-indigo-500/20 flex items-start gap-3 text-xs">
          <span class="text-base text-indigo-400">💡</span>
          <div class="flex-1 space-y-1">
            <p class="font-bold text-indigo-300">Live Eligibility Preview</p>
            <p id="ruleSummaryText" class="text-slate-300 leading-relaxed"></p>
          </div>
        </div>

        <div class="flex items-center gap-3 pt-2">
          <button id="savePostBtn" class="btn btn-primary gap-2">
            <span>💾</span> Save Post
          </button>
          <button id="cancelPostBtn" class="btn btn-secondary">Cancel</button>
        </div>
        <input type="hidden" id="pfOriginalName" value="" />
      </div>

      <!-- Posts table -->
      <div class="glass rounded-2xl overflow-hidden border border-white/10 shadow-lg">
        <div class="p-4 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <input id="filterPostsInput" type="text" class="field text-xs py-1.5 max-w-xs" placeholder="Search posts or departments..." />
          </div>
          <p class="text-xs text-slate-400">Total: <strong class="text-white" id="postCountBadge">${t.length}</strong> configured</p>
        </div>
        <div class="overflow-x-auto">
          <table class="data-table" id="postsTable">
            <thead>
              <tr>
                <th class="w-10 text-center">#</th>
                <th>Post Name</th>
                <th>Gender</th>
                <th>Year / Level Policy</th>
                <th>Department Scope</th>
                <th class="text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="postsBody"></tbody>
          </table>
        </div>
      </div>
      
      <p class="text-xs text-slate-500 flex items-center gap-2">
        <span>ℹ️</span>
        <span>All changes apply directly to live nomination validation, ballot generation, booth assignments, and the counting matrix.</span>
      </p>
    </div>`,Ge(e,t,r),Ke(e,t,n.allDepartments,r)}function Ge(e,t,n,r=``){let i=e.querySelector(`#postsBody`),a=r.toLowerCase().trim(),o=a?t.filter(e=>{let t=String(e.post||``).toLowerCase(),n=String(e.restrictedDept||``).toLowerCase();return t.includes(a)||n.includes(a)}):t;if(e.querySelector(`#postCountBadge`).textContent=o.length,!o.length){i.innerHTML=`<tr><td colspan="6" class="text-center text-slate-500 py-10">No matching posts found.</td></tr>`;return}i.innerHTML=o.map((e,t)=>{let n=O(e),r=`<span class="text-slate-500 text-xs">— All Years —</span>`,i=e.yearRuleMode===`EXCLUDE`||e.finalYearIneligible,a=e.yearRuleMode===`INCLUDE`||!e.yearRuleMode&&e.yearRestriction;i?r=`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-medium">🚫 ${F(n)}</span>`:a&&(r=`<span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium">🎓 ${F(n)}</span>`);let o=e.femaleOnly?`<span class="badge bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold">♀ Female Only</span>`:`<span class="text-slate-400 text-xs">All Genders</span>`,s=e.restrictedDept||(e.deptRestriction&&String(e.post||``).startsWith(`Association Secretary `)?e.post.replace(`Association Secretary `,``).trim():``),c=e.deptRestriction||s?`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-medium">🏢 ${F(s||`Restricted`)}</span>`:`<span class="text-slate-400 text-xs">All Departments</span>`;return`
      <tr class="hover:bg-white/[0.02] transition-colors">
        <td class="text-slate-500 text-xs text-center">${t+1}</td>
        <td>
          <span class="font-semibold text-white text-sm">${F(e.post)}</span>
        </td>
        <td>${o}</td>
        <td>${r}</td>
        <td>${c}</td>
        <td class="text-right">
          <div class="flex items-center justify-end gap-2">
            <button class="btn btn-secondary btn-sm edit-post-btn" data-name="${F(e.post)}">
              ✏️ Edit
            </button>
            <button class="btn btn-danger btn-sm delete-post-btn" data-name="${F(e.post)}">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `}).join(``),i.querySelectorAll(`.delete-post-btn`).forEach(r=>{r.addEventListener(`click`,async()=>{let i=r.dataset.name;if(confirm(`Delete post "${i}"?\n\nThis cannot be undone. Are you sure?`)){r.disabled=!0;try{await C.adminDeletePost(n,i),L(`Post "${i}" deleted.`,`success`);let r=await C.adminGetPosts(n);t.length=0,t.push(...r),Ge(e,t,n,e.querySelector(`#filterPostsInput`).value)}catch(e){L(`Failed: ${e.message}`,`error`),r.disabled=!1}}})}),i.querySelectorAll(`.edit-post-btn`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.name,i=t.find(e=>e.post===r);if(!i)return;let a=e.querySelector(`#postFormWrap`);e.querySelector(`#postFormTitle`).textContent=`Edit Post`,e.querySelector(`#postFormIcon`).textContent=`✏️`,e.querySelector(`#pfPost`).value=i.post,e.querySelector(`#pfFemale`).checked=!!i.femaleOnly,e.querySelector(`#pfDept`).checked=!!i.deptRestriction||!!i.restrictedDept;let o=i.yearRuleMode,s=Array.isArray(i.yearRuleYears)?i.yearRuleYears:i.yearRuleYears?String(i.yearRuleYears).split(`,`).map(e=>e.trim()).filter(Boolean):[];o||(i.finalYearIneligible?(o=`EXCLUDE`,s=[`3_UG`,`2_PG`]):i.yearRestriction?(o=`INCLUDE`,i.yearRestriction===`1`?s=[`1_UG`]:i.yearRestriction===`2`?s=[`2_UG`]:i.yearRestriction===`3`?s=[`3_UG`]:i.yearRestriction===`PG`?s=[`1_PG`,`2_PG`]:i.yearRestriction===`UG`?s=[`1_UG`,`2_UG`,`3_UG`]:i.yearRestriction===`1,2`&&(s=[`1_UG`,`2_UG`])):(o=`ALL`,s=[])),window._setPostYearPolicy(o,s);let c=i.restrictedDept||(i.deptRestriction&&String(i.post||``).startsWith(`Association Secretary `)?i.post.replace(`Association Secretary `,``).trim():``),l=e.querySelector(`#pfDeptSelect`),u=e.querySelector(`#pfDeptCustom`);if(c){u.value=c;let e=Array.from(l.options).find(e=>e.value.toLowerCase()===c.toLowerCase());e?l.value=e.value:l.value=`__custom__`}else l.value=``,u.value=``;e.querySelector(`#pfOriginalName`).value=i.post,q(e),J(e),a.classList.remove(`hidden`),a.scrollIntoView({behavior:`smooth`})})})}function q(e){let t=e.querySelector(`#pfDept`).checked,n=e.querySelector(`#deptChooserWrap`);t?n.classList.remove(`hidden`):n.classList.add(`hidden`)}function J(e){let t=e.querySelector(`input[name="pfYearMode"]:checked`)?.value||`ALL`,n=Array.from(e.querySelectorAll(`.pf-year-cb:checked`)).map(e=>e.value),r=e.querySelector(`#pfFemale`).checked,i=e.querySelector(`#pfDept`).checked,a=e.querySelector(`#pfDeptCustom`).value.trim(),o=[];o.push(`<strong>Candidate:</strong> ${r?`Female students only`:`Any gender`}.`),i?a?o.push(`<strong>Department:</strong> Candidate, Proposer & Seconder must all belong to <strong>${F(a)}</strong>.`):o.push(`<strong>Department:</strong> Department restricted (select a department above).`):o.push(`<strong>Department:</strong> Open across all college departments.`);let s=O({yearRuleMode:t,yearRuleYears:n});t===`ALL`||n.length===0?o.push(`<strong>Year Level:</strong> All year levels eligible (UG &amp; PG).`):t===`INCLUDE`?o.push(`<strong>Year Level:</strong> <span class="text-indigo-300 font-semibold">Strictly restricted to ${F(s.replace(`Only: `,``))}</span> (Candidate &amp; Supporters).`):t===`EXCLUDE`&&o.push(`<strong>Year Level:</strong> <span class="text-rose-400 font-semibold">Ineligible / Barred: ${F(s.replace(`Barred: `,``))}</span> (Cannot contest or support).`),e.querySelector(`#ruleSummaryText`).innerHTML=o.join(` • `)}function Ke(e,t,n,r){let i=e.querySelector(`#postFormWrap`),a=e.querySelector(`#addPostBtn`),o=e.querySelector(`#cancelPostBtn`),s=e.querySelector(`#closePostFormBtn`),c=e.querySelector(`#savePostBtn`),l=e.querySelector(`#filterPostsInput`),u=e.querySelector(`#pfPost`),d=e.querySelector(`#pfFemale`),f=e.querySelector(`#pfDept`),p=e.querySelector(`#pfDeptSelect`),m=e.querySelector(`#pfDeptCustom`),h=e.querySelector(`#yearPolicyHint`),g=e.querySelectorAll(`input[name="pfYearMode"]`),_=e.querySelectorAll(`.year-card`),v=e.querySelectorAll(`.pf-year-cb`),y=t=>{let n=e.querySelector(`#lblModeAll`),r=e.querySelector(`#lblModeInclude`),i=e.querySelector(`#lblModeExclude`);[n,r,i].forEach(e=>{e.className=`px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-slate-300 hover:text-white`}),t===`ALL`?(n.className=`px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-white bg-indigo-600 font-semibold shadow`,h.textContent=`Students from any year level (I UG through II PG) can contest, propose, or second.`,_.forEach(e=>{e.classList.add(`opacity-50`,`pointer-events-none`)})):t===`INCLUDE`?(r.className=`px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-white bg-emerald-600 font-semibold shadow`,h.textContent=`ONLY students in the checked year levels below can contest, propose, or second.`,_.forEach(e=>{e.classList.remove(`opacity-50`,`pointer-events-none`)})):t===`EXCLUDE`&&(i.className=`px-2.5 py-1 rounded-md cursor-pointer transition-all flex items-center gap-1.5 text-white bg-rose-600 font-semibold shadow`,h.textContent=`Students in the checked year levels below are BARRED from contesting or endorsing nominations.`,_.forEach(e=>{e.classList.remove(`opacity-50`,`pointer-events-none`)}))},b=(t,n=[])=>{let r=e.querySelector(`input[name="pfYearMode"][value="${t}"]`);r&&(r.checked=!0),y(t),v.forEach(e=>{e.checked=n.includes(e.value);let t=e.closest(`.year-card`);e.checked?t?.classList.add(`border-indigo-500`,`bg-indigo-500/10`):t?.classList.remove(`border-indigo-500`,`bg-indigo-500/10`)}),J(e)};window._setPostYearPolicy=b,g.forEach(t=>{t.addEventListener(`change`,()=>{y(t.value),J(e)})}),v.forEach(t=>{t.addEventListener(`change`,()=>{let n=t.closest(`.year-card`);t.checked?n?.classList.add(`border-indigo-500`,`bg-indigo-500/10`):n?.classList.remove(`border-indigo-500`,`bg-indigo-500/10`),J(e)})}),e.querySelectorAll(`.preset-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.preset;t===`all`?b(`ALL`,[]):t===`ug`?b(`INCLUDE`,[`1_UG`,`2_UG`,`3_UG`]):t===`pg`?b(`INCLUDE`,[`1_PG`,`2_PG`]):t===`bar-final`?b(`EXCLUDE`,[`3_UG`,`2_PG`]):t===`1_ug`?b(`INCLUDE`,[`1_UG`]):t===`2_ug`?b(`INCLUDE`,[`2_UG`]):t===`3_ug`&&b(`INCLUDE`,[`3_UG`])})}),l.addEventListener(`input`,()=>{Ge(e,t,r,l.value)}),p.addEventListener(`change`,()=>{p.value&&p.value!==`__custom__`?m.value=p.value:p.value===`__custom__`&&m.focus(),J(e)}),m.addEventListener(`input`,()=>{let t=m.value.trim(),n=Array.from(p.options).find(e=>e.value.toLowerCase()===t.toLowerCase());n?p.value=n.value:t?p.value=`__custom__`:p.value=``,J(e)}),f.addEventListener(`change`,()=>{q(e),J(e)}),u.addEventListener(`input`,()=>{let t=u.value,r=`Association Secretary `;if(t.startsWith(r)){let n=t.replace(r,``).trim();if(f.checked=!0,q(e),n){m.value=n;let e=Array.from(p.options).find(e=>e.value.toLowerCase()===n.toLowerCase());e?p.value=e.value:p.value=`__custom__`}}else for(let r of n)if(t.toLowerCase().includes(r.toLowerCase())){f.checked=!0,q(e),m.value=r,p.value=r;break}t.includes(`I UG`)||t.includes(`1st Year`)||t.includes(`1st UG`)?b(`INCLUDE`,[`1_UG`]):t.includes(`II UG`)||t.includes(`2nd Year`)||t.includes(`2nd UG`)?b(`INCLUDE`,[`2_UG`]):t.includes(`III UG`)||t.includes(`3rd Year`)||t.includes(`3rd UG`)?b(`INCLUDE`,[`3_UG`]):t.includes(`PG Rep`)?b(`INCLUDE`,[`1_PG`,`2_PG`]):t.toLowerCase().includes(`chief student editor`)&&b(`EXCLUDE`,[`3_UG`,`2_PG`]),(t.includes(`Vice Chairman`)||t.includes(`Joint Secretary`)||t.toLowerCase().includes(`lady`)||t.toLowerCase().includes(`female`))&&(d.checked=!0),J(e)}),d.addEventListener(`change`,()=>J(e)),a.addEventListener(`click`,()=>{e.querySelector(`#postFormTitle`).textContent=`Add New Post`,e.querySelector(`#postFormIcon`).textContent=`✨`,u.value=``,d.checked=!1,f.checked=!1,p.value=``,m.value=``,e.querySelector(`#pfOriginalName`).value=``,b(`ALL`,[]),q(e),J(e),i.classList.remove(`hidden`),i.scrollIntoView({behavior:`smooth`}),u.focus()}),o.addEventListener(`click`,()=>i.classList.add(`hidden`)),s.addEventListener(`click`,()=>i.classList.add(`hidden`)),c.addEventListener(`click`,async()=>{let n=u.value.trim(),a=e.querySelector(`input[name="pfYearMode"]:checked`)?.value||`ALL`,o=Array.from(e.querySelectorAll(`.pf-year-cb:checked`)).map(e=>e.value),s=d.checked,l=f.checked,p=l?m.value.trim():``,h=e.querySelector(`#pfOriginalName`).value.trim();if(!n){L(`Post name is required.`,`error`),u.focus();return}if(l&&!p){L(`Please select or specify the restricted department.`,`warning`),m.focus();return}let g=a===`EXCLUDE`&&o.includes(`3_UG`)&&o.includes(`2_PG`),_=``;if(a===`INCLUDE`){let e=o.join(`,`);e===`1_UG`?_=`1`:e===`2_UG`?_=`2`:e===`3_UG`?_=`3`:e===`1_PG,2_PG`||e===`2_PG,1_PG`?_=`PG`:o.length===3&&o.includes(`1_UG`)&&o.includes(`2_UG`)&&o.includes(`3_UG`)?_=`UG`:o.length===2&&o.includes(`1_UG`)&&o.includes(`2_UG`)&&(_=`1,2`)}let v={post:n,postName:n,yearRuleMode:a,yearRuleYears:o,yearRestriction:_,femaleOnly:s,finalYearIneligible:g,deptRestriction:l,restrictedDept:p,originalName:h};I(c,!0,`💾 Saving...`);try{h?(await C.adminUpdatePost(r,v),L(`Post "${n}" updated successfully!`,`success`)):(await C.adminAddPost(r,v),L(`Post "${n}" created successfully!`,`success`)),i.classList.add(`hidden`);let a=await C.adminGetPosts(r);t.length=0,t.push(...a);let o=e.querySelector(`#filterPostsInput`);o&&(o.value=``),Ge(e,t,r,``);let s=Array.from(e.querySelectorAll(`#postsBody tr`)).find(e=>{let t=e.querySelector(`td:nth-child(2) span`);return t&&t.textContent.trim().toLowerCase()===n.toLowerCase()});s&&(s.scrollIntoView({behavior:`smooth`,block:`center`}),s.classList.add(`bg-indigo-500/30`,`transition-all`,`duration-500`),setTimeout(()=>{s.classList.remove(`bg-indigo-500/30`)},3500))}catch(e){L(`Failed: ${e.message}`,`error`)}finally{I(c,!1,`💾 Save Post`)}})}async function qe(e){let t=H();if(t){U(e,`booths`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading booth data...</p></div>
  `);try{let[n,r,i,a,o,s,c]=await Promise.all([C.getNominalRoll(),C.adminGetBooths(t,!0).catch(()=>[]),C.adminGetLocations(t,!0).catch(()=>[]),C.adminGetPosts(t).catch(()=>[]),C.adminGetFinalNominations(t).catch(()=>C.getFinalNominations()).catch(()=>({active:[]})),C.adminGetBallotPlan(t).catch(()=>null),C.adminGetSettings(t).catch(()=>({}))]);Je(e.querySelector(`#adminMain`),t,n,r,i,a,o,s,c)}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function Je(e,t,r,i,a,o,s,c,l){let u={};r.forEach(e=>{let t=String(e.CLASS||`Unknown`).trim(),n=String(e.Dept||`Unknown`).trim();u[t]||(u[t]={name:t,dept:n,count:0}),u[t].count++});let d=Object.values(u).sort((e,t)=>e.name.localeCompare(t.name)),f=i.length?[...i]:[{boothNumber:1,roomName:``,classes:[]}],p=[...a],m=null,h=!0,g=()=>{f.forEach(e=>e.totalStudents=0);let n=[];d.forEach(e=>{let t=f.find(t=>t.classes.includes(e.name));t?t.totalStudents+=e.count:n.push(e)});let i=window.scrollY;e.innerHTML=`
        <!-- Locations Modal -->
        <div id="locationsModal" class="fixed inset-0 z-50 flex items-center justify-center hidden">
          <div class="absolute inset-0 bg-slate-900/80" id="locationsModalOverlay"></div>
          <div class="relative bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-lg p-6 z-10 flex flex-col max-h-[90vh]">
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div class="flex items-center gap-2">
                <h4 class="font-bold text-white text-lg">📍 Manage &amp; Edit Locations</h4>
                <span id="locationsCountBadge" class="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30 font-mono">
                  ${p.length} Locations
                </span>
              </div>
              <button id="btnCloseLocationsModal" class="text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
            </div>
            
            <div class="flex gap-2 mb-4">
              <input type="text" id="newLocationInput" class="field flex-1" placeholder="Add room or location name (e.g. Room 101, Auditorium)...">
              <button id="btnAddLocation" class="btn btn-secondary whitespace-nowrap">➕ Add</button>
            </div>

            <!-- Scrollable Locations List -->
            <div class="flex-1 overflow-y-auto mb-4 pr-1 min-h-[140px] max-h-[360px]" id="locationsListContainer">
              <div id="locationsList" class="space-y-2"></div>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
              <span class="text-xs text-slate-400">💡 Click <strong>✏️ Edit</strong> or double-click to rename.</span>
              <div class="flex gap-2">
                <button id="btnCloseLocationsModal2" class="btn btn-secondary">Close</button>
                <button id="btnSaveLocations" class="btn btn-primary">💾 Save Locations</button>
              </div>
            </div>
          </div>
        </div>

      <div class="page-enter space-y-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 class="text-xl font-bold text-white">Polling Booth Allotment</h3>
            <p class="text-slate-400 text-sm">Designate rooms and allot classes to polling booths.</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button id="btnClearAll" class="btn btn-secondary border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white">🗑️ Clear All</button>
            <button id="btnAutoAllot" class="btn btn-secondary">⚡ Auto Allot</button>
            <button id="btnManageLocations" class="btn btn-secondary border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-white">📍 Manage Locations</button>
            <button id="btnSaveBooths" class="btn btn-primary">💾 Save Configuration</button>
            <button id="btnRegenPlan" class="btn btn-primary border-indigo-500 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 px-4">🔄 Finalize Master Plan</button>
            <button id="btnPrintRolls" class="btn btn-secondary">🖨️ Print Marked Copy (Electoral Rolls)</button>
            <button id="btnPrintBallotAccounts" class="btn btn-secondary border-indigo-500/30 text-indigo-300 hover:bg-indigo-500 hover:text-white">📑 Print Ballot Accounts</button>
          </div>
        </div>
        <div id="printArea" class="hidden"></div>




        <!-- Booth Configuration -->
        <div class="glass rounded-xl p-5 border-l-4 border-l-indigo-500">
          <div class="flex justify-between items-center mb-4">
            <h4 class="font-bold text-white">Booth Setup</h4>
            <div class="flex gap-2 items-center">
              <label class="text-sm text-slate-300 mb-0">Total Booths:</label>
              <input type="number" id="numBoothsInput" class="field w-20 py-1" min="1" max="20" value="${f.length}">
              <button id="btnUpdateBoothCount" class="btn btn-secondary btn-sm">Update</button>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="boothsContainer">
            ${f.map((e,t)=>`
              <div class="border border-white/10 rounded-lg p-3 bg-white/5 shadow-inner">
                <div class="text-[10px] text-slate-500 font-bold uppercase mb-1 flex justify-between">
                  <span>Booth ${t+1}</span>
                  <span class="${e.totalStudents>0?`text-indigo-400`:``}">${e.totalStudents} Students</span>
                </div>
                <div class="flex gap-1.5 items-center mb-2">
                  <select class="field text-sm py-1 flex-1 room-name-select" data-idx="${t}">
                    <option value="">-- Assign Location --</option>
                    ${p.map(n=>`
                      <option value="${F(n)}" 
                        ${e.roomName===n?`selected`:``}
                        ${f.some((e,r)=>r!==t&&e.roomName===n)?`disabled`:``}
                      >${F(n)}</option>
                    `).join(``)}
                    <option value="__ADD_NEW__">➕ Add / Manage Locations...</option>
                  </select>
                  ${e.roomName?`
                    <button type="button" class="btn btn-secondary btn-xs py-1.5 px-2 text-slate-300 hover:text-white border-white/10 quick-edit-loc-btn" data-idx="${t}" title="Edit / Rename '${F(e.roomName)}'">
                      ✏️
                    </button>
                  `:``}
                </div>
                <div class="text-xs text-slate-500 h-16 overflow-y-auto bg-black/20 rounded p-1">
                  ${e.classes.length?e.classes.map(e=>`<div class="whitespace-nowrap overflow-hidden text-ellipsis">• ${F(e)} (${u[e]?.count||0})</div>`).join(``):`<em class="opacity-30">No classes assigned</em>`}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Unallocated Warning -->
        ${n.length?`
          <div class="alert alert-warning py-2 text-sm">
            ⚠️ <strong>${n.length} classes</strong> are currently unassigned.
          </div>
        `:``}

        <!-- Class Allocation Table -->
        <div class="glass rounded-xl overflow-hidden shadow-2xl">
          <div class="overflow-x-auto">
            <table class="data-table">
              <thead><tr>
                <th>Department</th>
                <th>Class</th>
                <th>Students</th>
                <th>Assigned Booth</th>
              </tr></thead>
              <tbody>
                ${d.map(e=>{let t=f.find(t=>t.classes.includes(e.name));return`
                    <tr>
                      <td class="text-xs text-slate-400">${F(e.dept)}</td>
                      <td class="font-medium text-sm text-white">${F(e.name)}</td>
                      <td class="font-mono text-indigo-300">${e.count}</td>
                      <td>
                        <select class="field w-full md:w-44 py-1 text-xs class-booth-select" data-class="${F(e.name)}">
                          <option value="">-- Unassigned --</option>
                          ${f.map((e,n)=>`
                            <option value="${n}" ${t===e?`selected`:``}>Booth ${n+1}</option>
                          `).join(``)}
                        </select>
                      </td>
                    </tr>
                  `}).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,h||window.scrollTo(0,i),h=!1,e.querySelector(`#btnClearAll`).addEventListener(`click`,()=>{confirm(`Clear all class allotments? Room locations will be kept.`)&&(f.forEach(e=>e.classes=[]),g())}),e.querySelector(`#btnPrintRolls`).addEventListener(`click`,()=>{let t=e.querySelector(`#printArea`);t.innerHTML=_(f,r,o,u,s,c);let n=window.open(``,`_blank`);if(!n){alert(`Popup blocked! Please allow popups for this site to print.`);return}n.document.write(`
        <html>
          <head>
            <title>Electoral Rolls - Booth Allotment</title>
            <style>
              @page { size: A4 portrait; margin: 10mm 12mm; }
              * { box-sizing: border-box; }
              body { font-family: Arial, sans-serif; color: #111; margin: 0; padding: 0; font-size: 11px; }
              .facing-sheet { padding: 0; page-break-before: always; break-before: page; page-break-after: always; break-after: page; display: flex; flex-direction: column; height: 250mm; }
              .facing-sheet:first-of-type { page-break-before: avoid; break-before: avoid; }
              .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 6px; margin-bottom: 10px; }
              .college-name { font-size: 18px; font-weight: bold; margin-bottom: 2px; }
              .title { font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; }
              .stats-table { width: 99.5%; margin: 0 auto; border-collapse: collapse; border: 1.5px solid #555; }
              .stats-table th, .stats-table td { border: 1px solid #555; padding: 4px 6px; text-align: left; }
              .stats-table th { background: #f0f0f0; font-size: 10px; text-transform: uppercase; font-weight: bold; }
              .footer { display: flex; justify-content: space-between; margin-top: 20px; padding: 0 30px; }
              .sig-line { border-top: 1.5px solid #000; padding-top: 5px; width: 160px; text-align: center; font-size: 11px; font-weight: bold; }
              .roll-page { page-break-before: always; break-before: page; }
              .roll-page:first-of-type { page-break-before: avoid; break-before: avoid; }
              .roll-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 4px; margin-bottom: 4px; font-size: 11px; }
              .roll-table { width: 99.5%; margin: 0 auto; border-collapse: collapse; border: 1.5px solid #555; table-layout: fixed; }
              .roll-table thead { display: table-header-group; }
              .roll-table tbody { orphans: 4; widows: 4; }
              .roll-table th { background: #e8e8e8; font-weight: bold; text-transform: uppercase; font-size: 9px; border: 1px solid #555; padding: 4px 4px; }
              .roll-table td { border: 1px solid #555; padding: 2px 4px; font-size: 10px; }
              .roll-table tr { page-break-inside: avoid; break-inside: avoid; height: 24px; }
              @media print {
                .no-print { display: none; }
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              }
            </style>
          </head>
          <body>
            ${t.innerHTML}
          </body>
        </html>
      `),n.document.close(),n.focus(),setTimeout(()=>{n.print()},500)}),e.querySelector(`#btnPrintBallotAccounts`).addEventListener(`click`,()=>{let t=e.querySelector(`#printArea`);t.innerHTML=v(f,r,o,u,s,c);let n=window.open(``,`_blank`);if(!n){alert(`Popup blocked! Please allow popups for this site to print.`);return}n.document.write(`
        <html>
          <head>
            <title>Ballot Accounts - Booth Wise</title>
            <style>
              @page { size: A4 portrait; margin: 10mm; }
              body { font-family: sans-serif; color: #333; margin: 0; padding: 0; }
              .page-break { page-break-after: always; }
              .account-page { padding: 20px; display: flex; flex-direction: column; box-sizing: border-box; border: 1px solid #ccc; margin: 5px; min-height: 250mm; position: relative; }
              .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 15px; }
              .college-name { font-size: 20px; font-weight: bold; margin-bottom: 3px; }
              .title { font-size: 15px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
              .stats-table { width: 99.5%; margin: 0 auto; border-collapse: collapse; border: 1.5px solid #000; }
              .stats-table th, .stats-table td { border: 1px solid #000; padding: 6px 10px; text-align: left; font-size: 11px; }
              .stats-table th { background: #f2f2f2; font-size: 11px; text-transform: uppercase; font-weight: bold; }
              .footer { display: flex; justify-content: flex-end; margin-top: 30px; padding-right: 30px; }
              .sig-line { border-top: 1.5px solid #000; padding-top: 8px; width: 220px; text-align: center; font-size: 13px; font-weight: bold; }
              @media print { .no-print { display: none; } .page-break { page-break-after: always; } }
            </style>
          </head>
          <body>${t.innerHTML}</body>
        </html>
      `),n.document.close(),n.focus(),setTimeout(()=>{n.print()},500)}),e.querySelector(`#btnUpdateBoothCount`).addEventListener(`click`,()=>{let t=parseInt(e.querySelector(`#numBoothsInput`).value,10);if(t>0&&t<=50){if(t>f.length)for(let e=f.length;e<t;e++)f.push({boothNumber:e+1,roomName:``,classes:[]});else t<f.length&&(f=f.slice(0,t));g()}}),e.querySelectorAll(`.room-name-select`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.value,n=parseInt(e.target.dataset.idx,10);if(t===`__ADD_NEW__`){e.target.value=f[n].roomName||``,b();let t=a.querySelector(`#newLocationInput`);t&&t.focus();return}f[n].roomName=t,g()})}),e.querySelectorAll(`.quick-edit-loc-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.dataset.idx,10),n=f[t]?.roomName;if(!n)return;let r=p.indexOf(n);if(b(),r!==-1){m=r,S();let e=a.querySelector(`.loc-edit-input[data-idx="${r}"]`);e&&(e.focus(),e.select())}})});let a=e.querySelector(`#locationsModal`),l=()=>{m=null,a.classList.add(`hidden`)},b=()=>{a.classList.remove(`hidden`),S()},x=e=>{let t=a.querySelector(`.loc-edit-input[data-idx="${e}"]`);if(!t)return;let n=t.value.trim();if(!n){L(`Location name cannot be blank.`,`error`),t.focus();return}let r=p[e];if(n===r){m=null,S();return}if(p.some((t,r)=>r!==e&&t.toLowerCase()===n.toLowerCase())){L(`Location "${n}" already exists.`,`error`),t.focus();return}p[e]=n;let i=0;f.forEach(e=>{e.roomName===r&&(e.roomName=n,i++)}),m=null,S(),L(i>0?`Renamed to "${n}" (updated ${i} booth assignment). Remember to save!`:`Renamed to "${n}".`,`info`)},S=()=>{let e=a.querySelector(`#locationsCountBadge`);e&&(e.textContent=`${p.length} Locations`);let t=a.querySelector(`#locationsList`);if(!p.length){t.innerHTML=`<div class="p-6 text-center text-slate-500 text-sm italic bg-black/20 rounded-xl border border-white/5">No locations added yet. Add your rooms and halls above.</div>`;return}t.innerHTML=p.map((e,t)=>{let n=f.filter(t=>t.roomName===e);return m===t?`
            <div class="p-2.5 rounded-lg bg-indigo-950/50 border border-indigo-500/50 flex items-center gap-2">
              <input type="text" class="field text-sm py-1 flex-1 loc-edit-input" data-idx="${t}" value="${F(e)}">
              <button type="button" class="btn btn-primary btn-xs py-1 px-2.5 save-loc-edit" data-idx="${t}" title="Save rename">✓ Save</button>
              <button type="button" class="btn btn-secondary btn-xs py-1 px-2 cancel-loc-edit" data-idx="${t}" title="Cancel">✕</button>
            </div>
          `:`
          <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-between gap-3 transition-colors loc-item-row" data-idx="${t}">
            <div class="flex items-center gap-2 min-w-0 flex-1 cursor-pointer loc-label-wrap" data-idx="${t}" title="Double-click to edit">
              <span class="text-base text-slate-400 flex-shrink-0">📍</span>
              <span class="text-sm font-medium text-white truncate loc-text">${F(e)}</span>
              ${n.length?n.map(e=>`
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex-shrink-0">
                  Booth ${e.boothNumber}
                </span>
              `).join(``):``}
            </div>
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button type="button" class="btn btn-secondary btn-xs py-1 px-2 text-slate-300 hover:text-white border-white/10 edit-location" data-idx="${t}" title="Rename location">
                ✏️ Edit
              </button>
              <button type="button" class="btn btn-secondary btn-xs py-1 px-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 border-red-500/20 delete-location" data-idx="${t}" title="Delete location">
                🗑️
              </button>
            </div>
          </div>
        `}).join(``),t.querySelectorAll(`.edit-location`).forEach(e=>{e.addEventListener(`click`,e=>{m=parseInt(e.currentTarget.dataset.idx,10),S();let t=a.querySelector(`.loc-edit-input[data-idx="${m}"]`);t&&(t.focus(),t.select())})}),t.querySelectorAll(`.loc-label-wrap`).forEach(e=>{e.addEventListener(`dblclick`,e=>{m=parseInt(e.currentTarget.dataset.idx,10),S();let t=a.querySelector(`.loc-edit-input[data-idx="${m}"]`);t&&(t.focus(),t.select())})}),t.querySelectorAll(`.save-loc-edit`).forEach(e=>{e.addEventListener(`click`,e=>{x(parseInt(e.currentTarget.dataset.idx,10))})}),t.querySelectorAll(`.cancel-loc-edit`).forEach(e=>{e.addEventListener(`click`,()=>{m=null,S()})}),t.querySelectorAll(`.loc-edit-input`).forEach(e=>{e.addEventListener(`keydown`,e=>{let t=parseInt(e.currentTarget.dataset.idx,10);e.key===`Enter`?(e.preventDefault(),x(t)):e.key===`Escape`&&(e.preventDefault(),m=null,S())})}),t.querySelectorAll(`.delete-location`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.dataset.idx,10),n=p[t],r=f.filter(e=>e.roomName===n);if(r.length>0){let e=r.map(e=>`Booth ${e.boothNumber}`).join(`, `);if(!confirm(`"${n}" is currently assigned to ${e}.\n\nDeleting it will remove the assignment from these booths. Proceed?`))return}p.splice(t,1),f.forEach(e=>{e.roomName===n&&(e.roomName=``)}),m===t?m=null:m>t&&m--,S()})})};e.querySelector(`#btnManageLocations`).addEventListener(`click`,b),e.querySelector(`#btnCloseLocationsModal`).addEventListener(`click`,l),e.querySelector(`#btnCloseLocationsModal2`).addEventListener(`click`,l),e.querySelector(`#locationsModalOverlay`).addEventListener(`click`,l),e.querySelector(`#btnAddLocation`).addEventListener(`click`,()=>{let t=e.querySelector(`#newLocationInput`),n=t.value.trim();if(!n)return;if(p.some(e=>e.toLowerCase()===n.toLowerCase())){L(`Location "${n}" already exists.`,`error`),t.focus();return}p.push(n),t.value=``,S(),L(`Added "${n}". Click "Save Locations" to persist.`,`info`);let r=a.querySelector(`#locationsListContainer`);r&&(r.scrollTop=r.scrollHeight)}),e.querySelector(`#newLocationInput`).addEventListener(`keydown`,t=>{t.key===`Enter`&&(t.preventDefault(),e.querySelector(`#btnAddLocation`).click())}),S(),e.querySelector(`#btnSaveLocations`).addEventListener(`click`,async e=>{m!==null&&x(m);let n=e.target;I(n,!0,`💾 Save Locations`);try{await C.adminSaveLocations(t,p),await C.adminSaveBooths(t,f),L(`Locations and booth assignments saved successfully!`,`success`),l(),g()}catch(e){L(`Failed to save: ${e.message}`,`error`)}finally{I(n,!1,`💾 Save Locations`)}}),e.querySelectorAll(`.class-booth-select`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.class,n=e.target.value;f.forEach(e=>{e.classes=e.classes.filter(e=>e!==t)}),n!==``&&f[parseInt(n,10)].classes.push(t),g()})}),e.querySelector(`#btnSaveBooths`).addEventListener(`click`,async e=>{let n=e.target;I(n,!0,`💾 Save Configuration`);try{await C.adminSaveBooths(t,f),L(`Booth configuration saved successfully!`,`success`)}catch(e){L(`Failed to save: ${e.message}`,`error`)}finally{I(n,!1,`💾 Save Configuration`)}}),e.querySelector(`#btnRegenPlan`).addEventListener(`click`,async e=>{let n=e.target,r=`🔄 Finalize Master Plan`;try{I(n,!0,r),L(`Calculating and saving Master Plan on server...`,`info`),await C.adminGenerateBallotPlan(t),L(`Master Plan finalized successfully! You can now print documents.`,`success`),c=await C.adminGetBallotPlan(t).catch(()=>null)}catch(e){L(e.message,`error`)}finally{I(n,!1,r)}}),e.querySelector(`#btnAutoAllot`).addEventListener(`click`,()=>{y(),g(),L(`Auto allotment complete. Please review and save.`,`info`)})},_=(e,t,r,i,a,o)=>{let s=l?.collegeName||n.COLLEGE_NAME||`COLLEGE UNION ELECTION`,c=l?.electionYear||new Date().getFullYear().toString(),u=l?.collegeLogo||``,d=``;return o?([...e].sort((e,t)=>e.boothNumber-t.boothNumber).forEach(e=>{if(!e.classes||e.classes.length===0)return;let n=t.filter(t=>e.classes.includes(String(t.CLASS).trim())).length,r=e.classes.map(e=>i[e]).filter(Boolean),a=o.boothAssignments[e.boothNumber]||{general:null,reps:[],assocs:[]};d+=`
      <div class="facing-sheet">
          <div class="header">
            ${u?`<img src="${u}" style="max-height:50px;max-width:130px;margin:0 auto 6px auto;display:block;object-fit:contain" alt="College Logo">`:``}
            <div class="college-name">${F(s)}</div>
            <div class="title">College Union Election ${F(c)} — Booth Facing Sheet</div>
          </div>
          
          <div style="font-size: 14px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #ccc; padding-bottom: 8px;">
            <div>
              <strong>BOOTH:</strong> <span style="font-size: 20px; border: 2px solid #000; padding: 2px 12px; margin-left: 5px;">${e.boothNumber}</span>
              <span style="margin-left: 20px;"><strong>LOCATION:</strong> ${F(e.roomName||`UNSPECIFIED`)}</span>
            </div>
            <div style="text-align: right; font-size: 10px; color: #666;">
              Ref: ${new Date().getFullYear()} Election
            </div>
          </div>

          <div style="flex: 1; display: flex; flex-direction: column; margin-bottom: 20px;">
            <h4 style="border-bottom: 2px solid #000; padding-bottom: 3px; font-size: 14px; margin: 0 0 8px 0; text-transform: uppercase;">1. Allocation Statistics</h4>
            <table class="stats-table" style="flex: 1; font-size: 13px;">
              <thead>
                <tr style="background:#f5f5f5">
                  <th style="width:25%; font-size:11px;">Department</th>
                  <th style="font-size:11px;">Class Name</th>
                  <th style="text-align:right; width:15%; font-size:11px;">Voters</th>
                </tr>
              </thead>
              <tbody>
                ${r.map(e=>`
                  <tr><td style="font-size:13px; font-weight:bold;">${F(e.dept)}</td><td style="font-size:13px;">${F(e.name)}</td><td style="text-align:right; font-size:13px; font-weight:bold;">${e.count}</td></tr>
                `).join(``)}
                <tr style="font-weight:bold; background:#eee">
                  <td colspan="2" style="font-size:12px;">TOTAL VOTERS ALLOTTED TO THIS BOOTH</td>
                  <td style="text-align:right; font-size:14px;">${n}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="flex: 1.5; display: flex; flex-direction: column; margin-bottom: 20px;">
            <h4 style="border-bottom: 2px solid #000; padding-bottom: 3px; font-size: 14px; margin: 0 0 8px 0; text-transform: uppercase;">2. Ballots &amp; Books Account (To be filled by PO)</h4>
            <table class="stats-table" style="flex: 1; font-size: 12px;">
              <thead>
                <tr>
                  <th style="width:20%; font-size:11px;">Ballot Category</th>
                  <th style="width:15%; font-size:11px;">Serial Range</th>
                  <th style="width:10%; text-align:center; font-size:11px;">Total Qty</th>
                  <th style="width:18%; font-size:11px;">Book IDs</th>
                  <th style="width:10%; text-align:center; font-size:11px;">Ballots Used</th>
                  <th style="width:10%; text-align:center; font-size:11px;">Ballots Returned</th>
                  <th style="font-size:11px;">Remarks</th>
                </tr>
              </thead>
              <tbody>
                ${a.generalParts&&a.generalParts.length>1?a.generalParts.map(e=>`
                  <tr style="font-weight:bold">
                    <td style="font-size:12px;">${F(e.title||`General Union Posts`)}</td>
                    <td style="font-size:12px;">${e.prefix===`G`?`G`:e.prefix+`-`}${e.start} - ${e.prefix===`G`?`G`:e.prefix+`-`}${e.end}</td>
                    <td style="text-align:center; font-size:13px;">${e.count}</td>
                    <td style="font-size:11px;">${e.bookIds}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `).join(``):a.general?`
                  <tr style="font-weight:bold">
                    <td style="font-size:12px;">${F(a.general.title||`General Union Posts`)}</td>
                    <td style="font-size:12px;">${a.general.prefix&&a.general.prefix!==`G`?a.general.prefix+`-`:`G`}${a.general.start} - ${a.general.prefix&&a.general.prefix!==`G`?a.general.prefix+`-`:`G`}${a.general.end}</td>
                    <td style="text-align:center; font-size:13px;">${a.general.count}</td>
                    <td style="font-size:11px;">${a.general.bookIds}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `:``}
                ${a.reps.map(e=>`
                  <tr>
                    <td style="font-size:12px; font-weight:bold;">${F(e.post)}</td>
                    <td style="font-size:12px;">R${e.start} - R${e.end}</td>
                    <td style="text-align:center; font-size:13px;">${e.count}</td>
                    <td style="font-size:11px;">${e.bookIds}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `).join(``)}
                ${a.assocs.map(e=>`
                  <tr>
                    <td style="font-size:12px; font-weight:bold;">${F(e.post)}</td>
                    <td style="font-size:12px;">A${e.start} - A${e.end}</td>
                    <td style="text-align:center; font-size:13px;">${e.count}</td>
                    <td style="font-size:11px;">${e.bookIds}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <div class="sig-line">Returning Officer</div>
            <div class="sig-line">Presiding Officer</div>
          </div>
        </div>`,r.forEach(n=>{let r=t.filter(e=>String(e.CLASS).trim()===n.name);r.sort((e,t)=>String(e.NAME).localeCompare(String(t.NAME))),d+=`
        <div class="roll-page">
          <div class="roll-header">
            <div><strong>BOOTH ${e.boothNumber}</strong> | ${F(e.roomName||`No Room`)}</div>
            <div style="text-align:center; flex-grow:1; font-weight:bold; font-size:13px;">College Union Election ${F(c)} — MARKED COPY (${F(n.name)})</div>
            <div>Dept: ${F(n.dept)}</div>
          </div>
          <table class="roll-table">
            <thead>
              <tr>
                <th style="width:38px">Sl.No</th>
                <th style="width:70px">Adm. No</th>
                <th>Student Name</th>
                <th style="width:160px">Class</th>
                <th style="width:100px">Voter Signature</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(e=>`
                <tr>
                  <td style="text-align:center; font-weight:bold;">${F(String(e[`Nominal Roll Serial Number`]||e.SL_NO||e[`SL NO`]||e[`Serial Number`]||e.serial_number||`–`))}</td>
                  <td style="font-family:monospace; font-size:9px; white-space:nowrap;">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                  <td style="font-weight:bold; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${F(e.NAME)}</td>
                  <td style="font-size:9px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${F(e.CLASS)}</td>
                  <td></td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
          <div style="display:flex; justify-content:space-between; margin-top:14px; padding:6px 12px; font-size:10px; font-weight:bold; border-top:1.5px solid #000;">
            <div>Verified by Polling Officer: ___________________</div>
            <div>Signature of Presiding Officer: ___________________</div>
          </div>
        </div>`})}),d):`<div class="alert alert-error">❌ Master Ballot Plan not generated. Please generate it from the Ballot Printing page first.</div>`},v=(e,t,r,i,a,o)=>{let s=l?.collegeName||n.COLLEGE_NAME||`COLLEGE UNION ELECTION`,c=l?.electionYear||new Date().getFullYear().toString(),u=l?.collegeLogo||``,d=``;return o?([...e].sort((e,t)=>e.boothNumber-t.boothNumber).forEach(e=>{if(!e.classes||e.classes.length===0)return;let t=o.boothAssignments[e.boothNumber]||{general:null,reps:[],assocs:[]},n=t.generalParts&&t.generalParts.length>1?t.generalParts.map(e=>({name:e.title||`General Union Posts - Part ${e.partNumber}`,count:e.count})):t.general?[{name:t.general.title||`General Union Posts`,count:t.general.count}]:[],r=t.reps.map(e=>({name:e.post,count:e.count})),i=t.assocs.map(e=>({name:e.post,count:e.count})),a=[...n,...r,...i];d+=`
      <div class="page-break">
        <div class="account-page">
          <div>
            <div class="header">
              ${u?`<img src="${u}" style="max-height:50px;max-width:130px;margin:0 auto 6px auto;display:block;object-fit:contain" alt="College Logo">`:``}
              <div class="college-name">${F(s)}</div>
              <div class="title">College Union Election ${F(c)} — Ballots &amp; Books Account</div>
            </div>
            
            <div style="font-size: 16px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; background: #f9f9f9; padding: 10px; border: 1px solid #ddd;">
              <div><strong>BOOTH NUMBER:</strong> <span style="font-size: 22px; font-weight: bold; margin-left: 10px;">${e.boothNumber}</span></div>
              <div style="text-align: right;"><strong>LOCATION:</strong> ${F(e.roomName||`UNSPECIFIED`)}</div>
            </div>

          <div style="flex: 1; display: flex; flex-direction: column; margin-top: 10px; margin-bottom: 20px;">
            <table class="stats-table" style="flex: 1; font-size: 13px;">
              <thead>
                <tr>
                  <th style="width:22%; font-size:12px;">Ballot Category</th>
                  <th style="width:18%; font-size:12px;">Serial Range</th>
                  <th style="width:10%; text-align:center; font-size:12px;">Total Qty</th>
                  <th style="width:16%; font-size:12px;">Book IDs</th>
                  <th style="width:11%; text-align:center; font-size:12px;">No. Used</th>
                  <th style="width:11%; text-align:center; font-size:12px;">No. Returned</th>
                  <th style="font-size:12px;">Remarks</th>
                </tr>
              </thead>
              <tbody>
                ${t.generalParts&&t.generalParts.length>1?t.generalParts.map(e=>`
                  <tr style="font-weight:bold;">
                    <td style="font-size:13px;">${F(e.title||`General Union Posts`)}</td>
                    <td style="font-size:13px;">${e.prefix===`G`?`G`:e.prefix+`-`}${e.start} - ${e.prefix===`G`?`G`:e.prefix+`-`}${e.end}</td>
                    <td style="text-align:center; font-size:14px;">${e.count}</td>
                    <td style="font-size:11px;">${F(e.bookIds||`-`)}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `).join(``):t.general?`
                  <tr style="font-weight:bold;">
                    <td style="font-size:13px;">${F(t.general.title||`General Union Posts`)}</td>
                    <td style="font-size:13px;">${t.general.prefix&&t.general.prefix!==`G`?t.general.prefix+`-`:`G`}${t.general.start} - ${t.general.prefix&&t.general.prefix!==`G`?t.general.prefix+`-`:`G`}${t.general.end}</td>
                    <td style="text-align:center; font-size:14px;">${t.general.count}</td>
                    <td style="font-size:11px;">${F(t.general.bookIds||`-`)}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `:``}
                ${t.reps.map(e=>`
                  <tr>
                    <td style="font-size:13px; font-weight:bold;">${F(e.post)}</td>
                    <td style="font-size:13px;">R${e.start} - R${e.end}</td>
                    <td style="text-align:center; font-size:14px;">${e.count}</td>
                    <td style="font-size:11px;">${F(e.bookIds||`-`)}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `).join(``)}
                ${t.assocs.map(e=>`
                  <tr>
                    <td style="font-size:13px; font-weight:bold;">${F(e.post)}</td>
                    <td style="font-size:13px;">A${e.start} - A${e.end}</td>
                    <td style="text-align:center; font-size:14px;">${e.count}</td>
                    <td style="font-size:11px;">${F(e.bookIds||`-`)}</td>
                    <td></td><td></td><td></td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
            
            <div style="margin-top: 15px; font-size: 12px; color: #555; background: #fffde7; padding: 10px; border: 1px dashed #fbc02d;">
              <strong>Note:</strong> Total Qty should be equal to (Number of Ballots Used + Number of Ballots Returned). Please record any discrepancies in the Remarks column.
            </div>
          </div>

          <div style="flex: 1.2; display: flex; flex-direction: column; margin-bottom: 10px;">
            <h4 style="margin: 0 0 8px 0; font-size: 15px; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 2px;">3. Account of Votes (To be filled by PO)</h4>
            <table class="stats-table" style="flex: 1; font-size: 13px;">
              <thead>
                <tr>
                  <th style="width:35%; font-size:12px;">Name of Post</th>
                  <th style="width:15%; text-align:center; font-size:12px;">Total Voters Assigned</th>
                  <th style="width:20%; text-align:center; font-size:12px;">No. of Votes Recorded</th>
                  <th style="width:30%; font-size:12px;">Remarks</th>
                </tr>
              </thead>
              <tbody>
                ${a.map(e=>`
                  <tr>
                    <td style="font-size: 13px; font-weight: bold;">${F(e.name)}</td>
                    <td style="text-align:center; font-weight:bold; font-size:14px;">${e.count}</td>
                    <td></td>
                    <td></td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
          </div>

          <div class="footer">
            <div class="sig-line">Presiding Officer</div>
          </div>
        </div>
      </div>`}),d):`<div class="alert alert-error">❌ Master Ballot Plan not generated.</div>`},y=()=>{f.forEach(e=>{e.classes=[],e.totalStudents=0});let e={};d.forEach(t=>{e[t.dept]||(e[t.dept]={name:t.dept,total:0,classes:[]}),e[t.dept].classes.push(t),e[t.dept].total+=t.count});let t=f.length,n=r.length/t*1.25;Object.values(e).sort((e,t)=>t.total-e.total).forEach(e=>{f.sort((e,t)=>e.totalStudents-t.totalStudents);let t=f[0];if(t.totalStudents+e.total>n&&e.classes.length>1){f.sort((e,t)=>e.totalStudents-t.totalStudents);let t=f[0],n=f.length>1?f[1]:f[0];[...e.classes].sort((e,t)=>t.count-e.count).forEach(e=>{let r=t.totalStudents<=n.totalStudents?t:n;r.classes.push(e.name),r.totalStudents+=e.count})}else e.classes.forEach(e=>t.classes.push(e.name)),t.totalStudents+=e.total}),f.sort((e,t)=>e.boothNumber-t.boothNumber)};g()}async function Ye(e){let t=H();if(t){U(e,`counting`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading Counting Setup...</p></div>
  `);try{let[n,r,i,a,o,s]=await Promise.all([C.adminGetCountingMatrix(t).catch(()=>null),C.getPosts(),C.adminGetNominations(t).catch(()=>[]),C.adminGetBooths(t),C.getNominalRoll(),C.adminGetSettings(t).catch(()=>({}))]),c=(Array.isArray(i)?i:[]).filter(e=>e.status===`Valid`&&e.withdrawalStatus!==`Approved`);Xe(e.querySelector(`#adminMain`),t,n,r,c,a,o,s)}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function Xe(e,t,r,i,a,o,s,c={}){let l=c?.collegeName||n.COLLEGE_NAME||`Government Victoria College Palakkad`,u=c?.electionYear||new Date().getFullYear().toString(),d=c?.collegeLogo||``;if(!o.length){e.innerHTML=`<div class="alert alert-error">❌ No booths configured.</div>`;return}if(!i.length){e.innerHTML=`<div class="alert alert-error">❌ No posts configured.</div>`;return}let f=e=>String(e.post||e.name||``),p=t=>{let{matrix:n,formSerials:r,totalRounds:s,roundLabels:c}=t,p=o.length;e.innerHTML=`
      <div class="page-enter space-y-6">
        <div class="flex items-center justify-between no-print">
          <div>
            <h3 class="text-xl font-bold text-white">Counting Matrix Setup</h3>
            <p class="text-slate-400 text-sm">${p} tables · ${s} rounds · ${i.length} posts total</p>
          </div>
          <div class="flex gap-2">
            <button id="btnRegenerate" class="btn btn-secondary bg-white/5 border-white/10 hover:bg-white/10">🔄 Regenerate</button>
            <button id="btnPrintForms" class="btn btn-primary">🖨️ Print All Forms</button>
          </div>
        </div>

        <div class="glass rounded-xl overflow-hidden no-print">
          <div class="overflow-x-auto">
            <table class="data-table text-xs">
              <thead><tr>
                <th>Table</th>
                ${c.map(e=>`<th>${F(e)}</th>`).join(``)}
              </tr></thead>
              <tbody>
                ${o.map((e,t)=>`
                  <tr>
                    <td class="font-bold text-indigo-300 whitespace-nowrap">
                      Table ${e.boothNumber}<br>
                      <span class="text-xs text-slate-500 font-normal">${F(e.roomName||``)}</span>
                    </td>
                    ${n[t].map((e,n)=>`
                      <td class="align-top py-2 min-w-[100px]">
                        ${e?`<div class="text-[10px] text-slate-500 mb-0.5 font-mono">#${r[`${t}-${n}`]}</div>
                             <div class="badge badge-valid block text-left" title="${F(f(e))}">${F(f(e))}</div>`:`<span class="text-slate-600">–</span>`}
                      </td>`).join(``)}
                  </tr>`).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,e.querySelector(`#btnRegenerate`).addEventListener(`click`,()=>{confirm(`Are you sure? This will discard the current matrix and generate a new one based on current Booths and Posts. Results entry serial numbers may change!`)&&m()}),e.querySelector(`#btnPrintForms`).addEventListener(`click`,()=>{let e=``,t=0;for(let i=0;i<s;i++)for(let s=0;s<p;s++){let c=n[s][i];if(!c)continue;let p=f(c),m=r[`${s}-${i}`],h=a.filter(e=>e.post===p).sort((e,t)=>String(e.candidateName||``).localeCompare(String(t.candidateName||``)));e+=Ze(o[s].boothNumber,i+1,p,h,m,l,u,d),t++}if(!t){alert(`No forms generated.`);return}let i=window.open(``,`_blank`);if(!i){alert(`Pop-up blocked.`);return}i.document.write(`<!DOCTYPE html><html><head><title>Counting Forms</title><style>
        @page{size:A4;margin:12mm}*{box-sizing:border-box}
        body{margin:0;font-family:Arial,sans-serif;background:#fff;color:#000}
        .pg{page-break-after:always;padding:10px;position:relative}.pg:last-child{page-break-after:avoid}
        .serial-tag{position:absolute;top:10px;right:10px;border:2px solid #000;padding:5px 12px;font-family:monospace;font-size:18px;font-weight:bold}
        table{width:100%;border-collapse:collapse;margin-bottom:18px}
        th,td{border:1.5px solid #000;padding:8px}th{background:#eee}
      </style></head><body>${e}<script>window.onload=()=>setTimeout(()=>window.print(),400)<\/script></body></html>`),i.document.close()})},m=async()=>{let n=o.length,r=e=>{if(e.restrictedDept)return String(e.restrictedDept).toUpperCase().trim();let t=f(e);return t.toUpperCase().startsWith(`ASSOCIATION SECRETARY `)?t.substring(22).toUpperCase().trim():null},c={};s.forEach(e=>{let t=String(e.CLASS||``).trim(),n=String(e.Dept||``).trim().toUpperCase();t&&n&&(c[t]=n)});let l=o.map(e=>new Set((e.classes||[]).map(e=>c[e]||``).filter(Boolean)));o.map(e=>{let t=new Set;return(e.classes||[]).forEach(e=>{let n=e.toUpperCase();[`MA`,`MSC`,`MCOM`,`M.SC`,`M.COM`,`M.A`].some(e=>n.includes(e))?t.add(`PG`):((n.includes(`1ST YEAR`)||/^\s*(1|1ST|I)\b/.test(n)||/\b1ST\b/.test(n))&&t.add(`1`),(n.includes(`2ND YEAR`)||/^\s*(2|2ND|II)\b/.test(n)||/\b2ND\b/.test(n))&&t.add(`2`),(n.includes(`3RD YEAR`)||/^\s*(3|3RD|III)\b/.test(n)||/\b3RD\b/.test(n))&&t.add(`3`))}),t});let u=i.filter(e=>a.filter(t=>t.post===f(e)).length>1),d=a.length>0&&u.length>0?u:i,m=d.filter(e=>{let t=f(e).toUpperCase();return t.includes(`UUC`)||t.includes(`UNIVERSITY UNION COUNCILLOR`)}),h=d.filter(e=>!m.includes(e)&&(f(e).toUpperCase().includes(`ASSOCIATION`)||!!e.deptRestriction)),g=d.filter(e=>!m.includes(e)&&!h.includes(e)&&(f(e).toUpperCase().includes(`REPRESENTATIVE`)||f(e).toUpperCase().includes(`REP`))),_=d.filter(e=>!m.includes(e)&&!h.includes(e)&&!g.includes(e)),v=_.length,y=Array.from({length:n},(e,t)=>{let n=[];h.forEach(e=>{let i=r(e);i&&l[t].has(i)&&n.push(e)}),g.forEach(e=>{(o[t].classes||[]).some(t=>D(t,e))&&n.push(e)});for(let e=0;e<v;e++)n.push(_[(t+e)%v]);return m.forEach(e=>n.push(e)),n}),b=Math.max(...y.map(e=>e.length),0);y.forEach(e=>{for(;e.length<b;)e.push(null)});let x={},S=1;for(let e=0;e<b;e++)for(let t=0;t<n;t++)y[t][e]&&(x[`${t}-${e}`]=S++);let w=[];for(let e=0;e<b;e++)w.push(`Round ${e+1}`);let T={matrix:y,formSerials:x,totalRounds:b,roundLabels:w};try{e.innerHTML=`<div class="text-center py-20"><span class="spinner"></span><p class="mt-4 text-slate-400">Saving Matrix...</p></div>`,await C.adminSaveCountingMatrix(t,T),L(`Counting Matrix saved successfully!`,`success`),p(T)}catch(e){L(`Error saving matrix: `+e.message,`error`),p(T)}};r?p(r):(e.innerHTML=`
      <div class="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
        <div class="text-5xl mb-4">🧩</div>
        <h3 class="text-xl font-bold text-white mb-2">No Matrix Found</h3>
        <p class="text-slate-400 mb-6">The counting matrix has not been generated and saved yet.</p>
        <button id="btnInitialGenerate" class="btn btn-primary px-10">Generate Matrix Now</button>
      </div>
    `,e.querySelector(`#btnInitialGenerate`).addEventListener(`click`,m))}function Ze(e,t,r,i,a,o=n.COLLEGE_NAME||`Government Victoria College Palakkad`,s=``,c=``){let l=s||new Date().getFullYear().toString(),u=i.length?i.map((e,t)=>`<tr>
        <td style="text-align:center;padding:18px 8px;font-weight:bold">${t+1}</td>
        <td style="padding:18px 8px;font-size:15px;font-weight:bold">
          ${F(e.candidateName||``)}
          <div style="font-size:11px;font-weight:normal;color:#333;margin-top:2px;">${F(e.candidateClass||``)}</div>
        </td>
        <td style="padding:18px 8px"></td></tr>`).join(``):`<tr><td colspan="3" style="padding:14px;text-align:center;color:#555">No Candidates Found</td></tr>`;return`<div class="pg">
    <div class="serial-tag">FORM #${a}</div>
    <div style="text-align:center;border-bottom:2px solid #000;padding-bottom:10px;margin-bottom:16px;padding-right:100px;">
      ${c?`<img src="${c}" style="max-height:45px;max-width:120px;margin:0 auto 4px auto;display:block;object-fit:contain" alt="College Logo">`:``}
      <div style="font-size:13px;font-weight:bold;color:#111;text-transform:uppercase;">${F(o)}</div>
      <div style="font-size:12px;font-weight:bold;color:#444;margin-top:2px;">College Union Election ${F(l)}</div>
      <h2 style="margin:6px 0 0;font-size:20px;text-transform:uppercase;letter-spacing:2px">Counting Form</h2>
      <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:15px;font-weight:bold">
        <span>TABLE: <u>${e}</u></span><span>ROUND: <u>${t}</u></span>
      </div>
      <h3 style="margin:10px 0 0;font-size:15px;text-decoration:underline;text-transform:uppercase">POST: ${F(r)}</h3>
    </div>
    <table>
      <thead><tr>
        <th style="width:8%;text-align:center">#</th>
        <th style="text-align:left;width:62%">Candidate Name & Class</th>
        <th style="width:30%;text-align:center">Votes</th>
      </tr></thead>
      <tbody>
        ${u}
        <tr><td style="text-align:center;padding:18px 8px">–</td><td style="padding:18px 8px;font-weight:bold">NOTA</td><td></td></tr>
        <tr><td style="text-align:center;padding:18px 8px">–</td><td style="padding:18px 8px;font-weight:bold;color:#555">INVALID</td><td></td></tr>
        <tr style="background:#eee"><td style="text-align:center;padding:18px 8px">–</td><td style="padding:18px 8px;font-weight:black;font-size:16px">TOTAL</td><td></td></tr>
      </tbody>
    </table>
    <div style="display:flex;justify-content:space-between;margin-top:60px;text-align:center">
      <div><div style="border-top:1.5px solid #000;width:200px;margin-bottom:5px"></div><div style="font-size:11px">Signature of the Agents</div></div>
      <div><div style="border-top:1.5px solid #000;width:200px;margin-bottom:5px"></div><div style="font-size:11px">Counting Supervisor Signature</div></div>
    </div>
  </div>`}var Y=[],Qe=!1,$e=null;window.addEventListener(`beforeunload`,e=>{Y.some(e=>e.status===`pending`||e.status===`syncing`||e.status===`retry`)&&(e.preventDefault(),e.returnValue=`You have unsaved forms syncing in the background. Are you sure you want to leave?`)});function et(e){Y.forEach(t=>{t.payload&&t.payload.forEach(t=>{let n=e.findIndex(e=>String(e.TableNumber)===String(t.TableNumber)&&String(e.Post)===t.Post&&e.CandidateId===t.CandidateId);n>=0?(e[n].Votes=t.Votes,e[n].RoundNumber=t.RoundNumber,e[n].FormSerial=t.FormSerial):e.push({...t})})})}async function tt(e){let t=H();if(t){U(e,`results-entry`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading data...</p></div>
  `);try{let[n,r,i,a,o,s]=await Promise.all([C.adminGetBooths(t).catch(()=>[]),C.getPosts(),C.adminGetNominations(t).catch(()=>[]),C.adminGetResults(t).catch(()=>[]),C.adminGetCountingMatrix(t).catch(()=>null),C.adminGetSettings(t).catch(()=>({}))]),c=(Array.isArray(i)?i:[]).filter(e=>e.status===`Valid`&&e.withdrawalStatus!==`Approved`);nt(e.querySelector(`#adminMain`),t,n,r,c,a,o,s)}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function nt(e,t,n,r,i,a,o,s={}){let c=s.resultsLocked===`true`,l=e=>String(e.post||e.name||``);if(!o){e.innerHTML=`
      <div class="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
        <div class="text-5xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-white mb-2">Matrix Not Set</h3>
        <p class="text-slate-400 mb-6">The Counting Matrix must be generated and saved in the "Counting Setup" page before you can enter results.</p>
      </div>
    `;return}let{matrix:u,formSerials:d}=o,f={};Object.entries(d).forEach(([e,t])=>{let[n,r]=e.split(`-`).map(Number),i=u[n][r];f[t]={t:n,r,postName:l(i)}});let p={};Object.entries(d).forEach(([e,t])=>{let[r,i]=e.split(`-`).map(Number),a=u[r][i];p[t]={serial:t,tableNum:n[r]?.boothNumber,postName:l(a),roundNum:i+1}}),e.innerHTML=`
    <div class="page-enter w-full max-w-[1500px] mx-auto">
      ${c?`
        <div class="alert alert-warning text-xs flex items-center justify-between mb-4">
          <span>🔒 <strong>Results are Locked & Frozen:</strong> Vote entries cannot be added or edited. Unlock results from the Results or Publish page if changes are needed.</span>
          <button data-nav="/admin/results" class="btn btn-secondary btn-sm">Go to Results</button>
        </div>
      `:``}
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <!-- LEFT: Entry Panel -->
        <div class="xl:col-span-7 space-y-4">
          <div>
            <h3 class="text-xl font-bold text-white">Enter Vote Counts</h3>
            <p class="text-slate-400 text-sm">Enter the Form Serial Number from the counting form to load the entry sheet.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="glass rounded-xl p-5">
              <label class="block text-sm text-slate-300 mb-1">Form Serial Number</label>
              <div class="flex gap-2">
                <input type="number" id="txtSerial" class="field" placeholder="e.g. 15" autofocus>
                <button id="btnLoadBySerial" class="btn btn-primary px-6">Load Form</button>
              </div>
            </div>

            <div class="glass rounded-xl p-5 opacity-60">
              <label class="block text-sm text-slate-300 mb-1">Manual Selection (Fallback)</label>
              <div class="flex gap-2">
                <select id="selTable" class="field text-xs">
                  <option value="">Table...</option>
                  ${n.map(e=>`<option value="${e.boothNumber}">Table ${e.boothNumber}</option>`).join(``)}
                </select>
                <select id="selPost" class="field text-xs">
                  <option value="">Post...</option>
                  ${r.map(e=>`<option value="${F(e.post||e.name)}">${F(e.post||e.name)}</option>`).join(``)}
                </select>
                <button id="btnLoadForm" class="btn btn-secondary px-4 text-xs">Load</button>
              </div>
            </div>
          </div>

          <div id="entryFormArea"></div>
        </div>

        <!-- RIGHT: Entered Forms Ledger -->
        <div class="xl:col-span-5">
          <div class="glass rounded-xl overflow-hidden border border-white/10 xl:sticky xl:top-20">
            <!-- Header -->
            <div class="bg-gradient-to-r from-slate-900/80 to-indigo-900/60 p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h4 class="font-bold text-white text-sm">Forms Ledger</h4>
                <div id="ledgerSummary" class="flex flex-wrap gap-3 text-[11px] text-slate-400 mt-0.5"></div>
              </div>
              <span id="ledgerCount" class="text-xs font-bold bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded border border-indigo-500/30 whitespace-nowrap">0/0 done</span>
            </div>
            <!-- Tabs -->
            <div class="flex border-b border-white/10 bg-slate-900/50">
              <button id="tabChips" class="ledger-tab active-tab px-4 py-2 text-xs font-semibold text-white border-b-2 border-indigo-400">All Forms</button>
              <button id="tabPending" class="ledger-tab px-4 py-2 text-xs font-semibold text-slate-400 border-b-2 border-transparent hover:text-white">⏳ Pending <span id="pendingTabCount" class="ml-1 bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded-full text-[10px]">0</span></button>
            </div>
            <!-- Legend (chips tab) -->
            <div id="panelChips" class="">
              <div class="flex flex-wrap gap-3 px-4 py-2 border-b border-white/10 bg-slate-900/60 text-[10px] text-slate-500">
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-green-500/20 border border-green-500/40 inline-block"></span>Done</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-slate-800/80 border border-slate-700 inline-block"></span>Pending</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/40 inline-block"></span>Queued</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-blue-500/20 border border-blue-500/40 inline-block"></span>Syncing</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-500/20 border border-red-500/40 inline-block"></span>Failed</span>
              </div>
              <div class="overflow-y-auto p-3" style="max-height: 55vh;">
                <div id="ledgerGrid" class="flex flex-wrap gap-1.5"></div>
              </div>
            </div>
            <!-- Pending list tab -->
            <div id="panelPending" class="hidden overflow-y-auto" style="max-height: 62vh;">
              <table class="w-full text-left">
                <thead class="sticky top-0 bg-slate-900/95 border-b border-white/10">
                  <tr>
                    <th class="px-3 py-2 text-[11px] text-slate-400 font-semibold w-14">Form #</th>
                    <th class="px-3 py-2 text-[11px] text-slate-400 font-semibold w-16">Table</th>
                    <th class="px-3 py-2 text-[11px] text-slate-400 font-semibold">Post</th>
                  </tr>
                </thead>
                <tbody id="pendingList"></tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;let m=e.querySelector(`#txtSerial`),h=e.querySelector(`#btnLoadBySerial`),g=async()=>{let e=m.value.trim();if(!e)return;let r=f[e];if(!r){L(`Invalid Serial Number: ${e}`,`error`);return}try{I(h,!0,`Loading...`),C.invalidateCache(`adminGetResults`);let i=await C.adminGetResults(t,!0).catch(()=>[]);a.length=0,a.push(...i),et(a),_(n[r.t].boothNumber,r.postName,e,r.r+1)}catch{et(a),_(n[r.t].boothNumber,r.postName,e,r.r+1)}finally{I(h,!1,`Load Form`)}};h.addEventListener(`click`,g),m.addEventListener(`keypress`,e=>{e.key===`Enter`&&g()}),e.querySelector(`#btnLoadForm`).addEventListener(`click`,async()=>{let r=e.querySelector(`#selTable`).value,i=e.querySelector(`#selPost`).value;if(!r||!i){L(`Select Table and Post`,`warning`);return}let o=n.findIndex(e=>String(e.boothNumber)===String(r)),s=null,c=null;if(o>=0){for(let e=0;e<u[o].length;e++)if(l(u[o][e])===i){c=e+1,s=d[`${o}-${e}`];break}}try{I(e.querySelector(`#btnLoadForm`),!0,`...`),C.invalidateCache(`adminGetResults`);let n=await C.adminGetResults(t,!0).catch(()=>[]);a.length=0,a.push(...n),et(a),_(r,i,s,c)}catch{et(a),_(r,i,s,c)}finally{I(e.querySelector(`#btnLoadForm`),!1,`Load`)}});let _=(n,r,o,s)=>{let l=e.querySelector(`#entryFormArea`),u=i.filter(e=>e.post===r).sort((e,t)=>String(e.candidateName||``).localeCompare(String(t.candidateName||``)));if(u.length===0){l.innerHTML=`<div class="alert alert-warning">No candidates found for ${F(r)}.</div>`;return}if(u.length===1){l.innerHTML=`
        <div class="glass p-8 rounded-2xl border border-emerald-500/30 text-center page-enter">
          <div class="text-4xl mb-3">🏆</div>
          <h3 class="text-lg font-bold text-emerald-400">Elected Unanimously (Unopposed)</h3>
          <p class="text-sm text-slate-300 mt-1"><strong>${F(u[0].candidateName)}</strong> (${F(u[0].candidateClass||``)}) is returned unopposed for <strong>${F(r)}</strong>.</p>
          <p class="text-xs text-slate-500 mt-2">No ballot voting or vote entry was conducted for this post.</p>
        </div>
      `;return}let d=a.filter(e=>String(e.TableNumber)===String(n)&&String(e.Post)===r),f=e=>d.find(t=>t.CandidateId===e)?.Votes||``;l.innerHTML=`
      <div class="glass rounded-xl overflow-hidden page-enter">
        <div class="bg-indigo-500/10 p-4 border-b border-indigo-500/20 flex justify-between items-center">
          <div>
            <h4 class="font-bold text-indigo-300">Table ${n} • Round ${s||`N/A`} • ${F(r)}</h4>
            <p class="text-[10px] text-slate-400 mt-1">Form Serial: #${o||`Manual`}</p>
          </div>
          ${o?`<div class="bg-indigo-500 text-white text-xs px-2 py-1 rounded font-bold">FORM #${o}</div>`:``}
        </div>
        <div class="p-6 space-y-4">
          ${u.map((e,t)=>`
            <div class="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold">${t+1}</div>
                <div>
                  <div class="font-bold text-white flex items-center gap-2">
                    <span>${F(e.candidateName)}</span>
                    ${e.candidateSerial?`<span class="badge bg-indigo-500/20 text-indigo-300 font-mono text-xs">Sl. #${F(e.candidateSerial)}</span>`:``}
                  </div>
                  <div class="text-xs text-slate-400 mt-0.5">${F(e.candidateClass)}</div>
                </div>
              </div>
              <div class="w-32">
                <input type="number" class="field text-center text-lg font-bold vote-input" data-cid="${F(e.id)}" data-cname="${F(e.candidateName)}" placeholder="0" value="${f(e.id)}" min="0" ${c?`disabled`:``}>
              </div>
            </div>
          `).join(``)}
          
          <div class="border-t border-white/10 my-4"></div>

          <div class="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div><div class="font-bold text-slate-300">NOTA</div></div>
            <div class="w-32">
              <input type="number" class="field text-center text-lg font-bold vote-input" data-cid="NOTA" data-cname="NOTA" placeholder="0" value="${f(`NOTA`)}" min="0" ${c?`disabled`:``}>
            </div>
          </div>
          
          <div class="flex items-center justify-between bg-red-500/5 p-4 rounded-lg border border-red-500/20">
            <div><div class="font-bold text-red-400">INVALID</div></div>
            <div class="w-32">
              <input type="number" class="field text-center text-lg font-bold border-red-500/30 vote-input" data-cid="INVALID" data-cname="Invalid" placeholder="0" value="${f(`INVALID`)}" min="0" ${c?`disabled`:``}>
            </div>
          </div>

          <div class="flex items-center justify-between bg-indigo-500/20 p-4 rounded-lg border border-indigo-500/40 mt-4">
            <div class="font-black text-indigo-300 text-xl tracking-wider">TOTAL</div>
            <div class="w-32 text-center text-2xl font-black text-white" id="totalVotesDisplay">0</div>
          </div>
        </div>
        <div class="bg-slate-900/50 p-4 border-t border-white/10 flex justify-between items-center">
          <p class="text-xs text-slate-500 italic ml-2">Verify that this total matches the physical ballot count.</p>
          <button id="btnSaveVotes" class="btn ${c?`opacity-50 cursor-not-allowed bg-slate-700 text-slate-400`:`btn-success`} px-12" ${c?`disabled`:``}>
            ${c?`🔒 Results Locked (Save Blocked)`:`💾 Save Form Results`}
          </button>
        </div>
      </div>
    `;let h=()=>{let e=0;l.querySelectorAll(`.vote-input`).forEach(t=>{e+=parseInt(t.value,10)||0});let t=l.querySelector(`#totalVotesDisplay`);t&&(t.textContent=e)};l.querySelectorAll(`.vote-input`).forEach(e=>{e.addEventListener(`input`,h)}),h(),l.querySelector(`#btnSaveVotes`).addEventListener(`click`,async()=>{if(c){L(`Results are locked and frozen. No further vote entries are allowed.`,`error`);return}let i=l.querySelectorAll(`.vote-input`),u=[];if(i.forEach(e=>{u.push({TableNumber:n,RoundNumber:s,Post:r,CandidateId:e.dataset.cid,CandidateName:e.dataset.cname,Votes:parseInt(e.value.trim(),10)||0,FormSerial:o||`N/A`})}),u.every(e=>e.Votes===0)&&!confirm(`All votes are 0. Are you sure you want to save?`))return;u.forEach(e=>{let t=a.findIndex(t=>String(t.TableNumber)===String(n)&&String(t.Post)===r&&t.CandidateId===e.CandidateId);t>=0?(a[t].Votes=e.Votes,a[t].RoundNumber=e.RoundNumber,a[t].FormSerial=e.FormSerial):a.push(e)});let d=Date.now().toString()+Math.random().toString(36).substr(2,5);Y.push({id:d,serial:o||`Manual`,tableNum:n,postName:r,roundNum:s,payload:u,status:`pending`}),L(`Form #${o||`Manual`} queued!`,`info`),l.innerHTML=``,m.value=``,m.focus(),$e=t,X(e,a,p),rt(e,a,p)})};X(e,a,p),Y.some(e=>e.status===`pending`||e.status===`retry`)&&rt(e,a,p)}async function rt(e,t,n){if(!Qe){for(Qe=!0;Y.some(e=>e.status===`pending`||e.status===`retry`);){let r=Y.find(e=>e.status===`pending`||e.status===`retry`);r.status=`syncing`,X(e,t,n);try{await C.adminSaveResults($e,r.payload),r.status=`success`}catch(e){r.status=`error`,r.errorMsg=e.message}X(e,t,n)}Qe=!1}}function X(e,t,n){let r=e.querySelector(`#ledgerGrid`),i=e.querySelector(`#ledgerCount`),a=e.querySelector(`#ledgerSummary`);if(!r)return;let o={};Object.keys(n).forEach(e=>{o[String(e)]=`pending`}),t.forEach(e=>{e.FormSerial&&e.FormSerial!==`N/A`&&(o[String(e.FormSerial)]=`server`)}),Y.forEach(e=>{o[String(e.serial)]=e.status});let s=Object.keys(n).map(Number).sort((e,t)=>e-t),c=s.length,l=0,u=0,d=0,f=0;s.forEach(e=>{let t=o[String(e)]||`pending`;t===`server`||t===`success`?l++:t===`pending`?f++:t===`error`?d++:u++}),i&&(i.textContent=`${l}/${c} done`),a&&(a.innerHTML=`
      <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>${l} Done</span>
      <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-slate-500 inline-block"></span>${f} Pending</span>
      ${u>0?`<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>${u} Queued</span>`:``}
      ${d>0?`<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>${d} Failed</span>`:``}
    `);let p=e=>{let t=`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold select-none transition-all border cursor-pointer`;switch(e){case`server`:case`success`:return`${t} bg-green-500/20 text-green-400 border-green-500/40 hover:bg-green-500/40`;case`syncing`:return`${t} bg-blue-500/20 text-blue-300 border-blue-500/40 animate-pulse cursor-default`;case`pending`:case`retry`:return`${t} bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/40`;case`error`:return`${t} bg-red-500/20 text-red-400 border-red-500/40 hover:bg-red-500/40 retry-btn`;default:return`${t} bg-slate-800/80 text-slate-500 border-slate-700 hover:bg-slate-700/80`}},m=(e,t,n)=>{let r=n[String(e)]||{},i=`Form #${e} | T-${r.tableNum||`?`} | ${r.postName||`?`}`,a=t===`syncing`?``:` | Dbl-click to load`;return t===`error`?`${i} | ❌ Failed${a} (${Y.find(t=>String(t.serial)===String(e))?.errorMsg||``})`:t===`pending`?`${i} | ⏳ Not entered yet${a}`:t===`server`?`${i} | ☁️ In DB${a}`:t===`success`?`${i} | ✅ Saved${a}`:t===`syncing`?`${i} | 🔵 Syncing...`:i+a};r.innerHTML=s.map(e=>{let t=o[String(e)]||`not-entered`,r=Y.find(t=>String(t.serial)===String(e));return`<button class="${p(t)}"
      title="${m(e,t,n)}"
      data-serial="${e}"
      ${t===`error`&&r?`data-id="${r.id}"`:``}
    >${e}</button>`}).join(``),r.querySelectorAll(`.retry-btn`).forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.id,a=Y.find(e=>e.id===i);a&&(a.status=`retry`,X(e,t,n),rt(e,t,n))})}),r.querySelectorAll(`button[data-serial]`).forEach(t=>{t.addEventListener(`dblclick`,()=>{let n=t.dataset.serial,r=e.querySelector(`#txtSerial`);r&&(r.value=n,e.querySelector(`#entryFormArea`)?.scrollIntoView({behavior:`smooth`,block:`start`}),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`Enter`,bubbles:!0})))})});let h=e.querySelector(`#pendingList`),g=e.querySelector(`#pendingTabCount`),_=s.filter(e=>(o[String(e)]||`pending`)===`pending`);if(g&&(g.textContent=_.length),h&&(_.length===0?h.innerHTML=`<tr><td colspan="3" class="px-3 py-8 text-center text-slate-500 italic text-sm">🎉 All forms entered!</td></tr>`:(h.innerHTML=_.map(e=>{let t=n[String(e)]||{};return`
          <tr class="border-b border-white/5 hover:bg-white/5 transition cursor-pointer pending-row" data-serial="${e}">
            <td class="px-3 py-2 font-bold text-slate-300 text-xs">#${e}</td>
            <td class="px-3 py-2 text-slate-400 text-xs">T-${t.tableNum||`?`}</td>
            <td class="px-3 py-2 text-slate-300 text-xs leading-tight">${F(t.postName||`?`)}</td>
          </tr>
        `}).join(``),h.querySelectorAll(`.pending-row`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.serial,r=e.querySelector(`#txtSerial`);r&&(r.value=n,r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`Enter`,bubbles:!0})))})}))),!e.dataset.tabsInit){e.dataset.tabsInit=`1`;let t=e.querySelector(`#tabChips`),n=e.querySelector(`#tabPending`),r=e.querySelector(`#panelChips`),i=e.querySelector(`#panelPending`);t?.addEventListener(`click`,()=>{t.classList.add(`text-white`,`border-indigo-400`),t.classList.remove(`text-slate-400`,`border-transparent`),n.classList.remove(`text-white`,`border-indigo-400`),n.classList.add(`text-slate-400`,`border-transparent`),r.classList.remove(`hidden`),i.classList.add(`hidden`)}),n?.addEventListener(`click`,()=>{n.classList.add(`text-white`,`border-indigo-400`),n.classList.remove(`text-slate-400`,`border-transparent`),t.classList.remove(`text-white`,`border-indigo-400`),t.classList.add(`text-slate-400`,`border-transparent`),i.classList.remove(`hidden`),r.classList.add(`hidden`)})}}async function it(e){let t=H();if(!t)return;U(e,`Ballot Printing`,`
    <div class="text-center py-16">
      <span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span>
      <p class="text-slate-400 mt-4 text-sm">Preparing ballot generator...</p>
    </div>
  `);let r=e.querySelector(`#adminMain`),i=[],a=null;try{let[e,n,r]=await Promise.all([C.adminGetPosts(t).catch(()=>[]),C.adminGetBallotConfig(t).catch(()=>null),C.adminGetBallotPlan(t).catch(()=>null)]);i=e,a=n}catch(e){console.warn(`Error fetching initial ballot data:`,e)}let o=e=>{let t=String(e.post||e.name||``).toUpperCase();return t.includes(`ASSOCIATION`)||t.includes(`ASSOC`)||!!e.deptRestriction},s=e=>{let t=String(e.post||e.name||``).toUpperCase();return t.includes(`UUC`)||t.includes(`UNIVERSITY UNION COUNCILLOR`)},c=e=>{if(o(e)||s(e))return!1;let t=String(e.post||e.name||``).toUpperCase();return t.includes(`REPRESENTATIVE`)||t.includes(`REP`)},l=e=>!o(e)&&!c(e),u=i.filter(l),d=e=>{let t=String(e||``).toLowerCase();return t.includes(`chairman`)&&!t.includes(`vice`)?`🏆`:t.includes(`vice chairman`)?`🥈`:t.includes(`joint secretary`)?`🤝`:t.includes(`secretary`)&&!t.includes(`fine arts`)?`📝`:t.includes(`councillor`)||t.includes(`uuc`)?`🏛️`:t.includes(`editor`)?`📰`:t.includes(`fine arts`)||t.includes(`arts`)?`🎨`:t.includes(`captain`)||t.includes(`sports`)?`⚽`:`🎖️`},f=[{id:`gen_1`,partNumber:1,title:`General Union Posts - Main`,shortCode:`G1`,bookPrefix:`GB1-`,paperSize:`A3`,posts:[]},{id:`gen_2`,partNumber:2,title:`Additional General Ballot (Arts, Sports & Editorial)`,shortCode:`G2`,bookPrefix:`GB2-`,paperSize:`A3`,posts:[]}],p=a||{isSplit:!1,ballots:f};(!Array.isArray(p.ballots)||p.ballots.length===0)&&(p.ballots=f),p.ballots.length===1&&p.ballots.push({id:`gen_2`,partNumber:2,title:`Additional General Ballot (Arts, Sports & Editorial)`,shortCode:`G2`,bookPrefix:`GB2-`,paperSize:`A3`,posts:[]});let m=new Set;p.isSplit&&p.ballots[1]&&Array.isArray(p.ballots[1].posts)&&p.ballots[1].posts.forEach(e=>m.add(e));let h=()=>{let e=m.size>0;p.isSplit=e;let t=u.map(e=>e.post),n=t.filter(e=>m.has(e)),r=t.filter(e=>!m.has(e));p.ballots[0].posts=r,p.ballots[0].shortCode=e?`G1`:`G`,p.ballots[0].bookPrefix=e?`GB1-`:`GB`,p.ballots[1]||(p.ballots[1]={id:`gen_2`,partNumber:2,title:`Additional General Ballot (Arts, Sports & Editorial)`,shortCode:`G2`,bookPrefix:`GB2-`,paperSize:`A3`,posts:[]}),p.ballots[1].posts=n,p.ballots[1].shortCode=`G2`,p.ballots[1].bookPrefix=`GB2-`};h();let g=()=>{let e=!!p.isSplit,t=p.ballots[0].posts||[],n=p.ballots[1]&&p.ballots[1].posts||[];r.innerHTML=`
      <div class="space-y-6 page-enter">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
          <div>
            <h2 class="text-2xl font-bold text-white flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">🗳️</span>
              Ballot Planning &amp; Printing
            </h2>
            <p class="text-slate-400 mt-1 text-sm">
              Select which posts to split in ballots, configure paper formats, and generate print-ready ballots &amp; PO accounts.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button id="btnRegenPlanTop" class="btn btn-secondary py-2.5 px-4 text-xs font-semibold flex items-center gap-2 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500 hover:text-white">
              🔄 Finalize Master Plan
            </button>
          </div>
        </div>

        <!-- Ballot Planning & Post Split Panel -->
        <div class="glass p-6 rounded-2xl border border-white/10 space-y-6 bg-gradient-to-b from-indigo-950/20 to-transparent">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span>⚙️</span> General Ballot Post Selection &amp; Splitter
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                Select the specific posts you want to detach into an <strong>Additional Ballot (Part 2)</strong>. Unselected posts remain on the <strong>Main Ballot (Part 1)</strong>.
              </p>
            </div>
            
            <div class="flex items-center gap-2">
              <span class="text-xs px-3 py-1.5 rounded-xl border ${e?`bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-bold`:`bg-slate-800 text-slate-400 border-white/10`}">
                ${e?`🔀 Split Ballot Active (`+t.length+` Main + `+n.length+` Split)`:`📄 Single Unified Ballot (`+t.length+` Posts)`}
              </span>
            </div>
          </div>

          <!-- Quick Selection Helper Actions -->
          <div class="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-slate-400 font-semibold mr-1">Quick Select:</span>
              <button id="btnQuickArtsSports" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-indigo-300 transition-all flex items-center gap-1.5">
                <span>🎨</span> Fine Arts, Sports &amp; Editor
              </button>
              <button id="btnQuickCouncil" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-300 transition-all flex items-center gap-1.5">
                <span>🏛️</span> Council &amp; Activities
              </button>
              <button id="btnInvertSelect" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-all">
                ☑️ Invert Selection
              </button>
            </div>
            <div>
              <button id="btnClearSplit" class="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 transition-all flex items-center gap-1.5">
                <span>🔄</span> Reset to Single Ballot (Clear Selection)
              </button>
            </div>
          </div>

          <!-- Post Selection Checklist -->
          <div class="space-y-2">
            <div class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>General Union Posts (${u.length})</span>
              <span class="text-slate-400 font-normal">Click a post or check the box to toggle between Main &amp; Additional ballot</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${u.map(e=>{let t=m.has(e.post),n=d(e.post);return`
                  <div class="p-3.5 rounded-xl border transition-all cursor-pointer post-select-card flex items-center justify-between select-none ${t?`bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500/50 ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-950/20`:`bg-slate-900/60 border-white/5 hover:border-white/20 hover:bg-slate-900/90`}" data-post-name="${F(e.post)}">
                    <div class="flex items-center gap-3 min-w-0">
                      <input type="checkbox" class="w-5 h-5 rounded cursor-pointer accent-emerald-500 post-checkbox pointer-events-none" ${t?`checked`:``} />
                      <div class="min-w-0">
                        <div class="font-bold text-sm text-white flex items-center gap-2 truncate">
                          <span>${n}</span>
                          <span class="truncate">${F(e.post)}</span>
                        </div>
                        <div class="text-[11px] text-slate-400 mt-0.5">
                          ${t?`Split off to Additional Ballot (Part 2)`:`Included on Main Ballot (Part 1)`}
                        </div>
                      </div>
                    </div>
                    
                    <div class="flex-shrink-0 ml-3">
                      ${t?`
                        <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                          📑 Part 2 (G2)
                        </span>
                      `:`
                        <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1">
                          📄 Main (G1)
                        </span>
                      `}
                    </div>
                  </div>
                `}).join(``)}
            </div>
            ${u.length===0?`
              <div class="p-4 rounded-xl bg-slate-800/50 text-center text-xs text-slate-400 italic">
                No general posts found. Ensure posts are created under Post Settings.
              </div>
            `:``}
          </div>

          <!-- Live Ballot Partition Preview -->
          <div class="pt-4 border-t border-white/10 space-y-4">
            <div class="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>Live Ballot Partition Preview</span>
              <span class="text-xs text-slate-400 font-normal">Continuous serial numbers &amp; 50-slip booklets</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Part 1: Main Ballot Card -->
              <div class="bg-slate-900/70 p-4 rounded-xl border border-indigo-500/30 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-500/20 text-indigo-300 uppercase tracking-wider">
                      ${e?`Ballot Part 1 (G1)`:`Single Unified Ballot (G)`}
                    </span>
                    <span class="text-xs text-slate-400">(${t.length} posts)</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">
                    ${e?`Serial: G1-1... | Books: GB1-...`:`Serial: G1... | Books: GB1...`}
                  </div>
                </div>

                <div>
                  <label class="text-[11px] font-semibold text-slate-400 block mb-1">Printed Title on Ballot:</label>
                  <input type="text" id="inputPart1Title" class="input input-sm w-full bg-slate-800 border-white/10 text-xs text-white" value="${F(p.ballots[0].title)}" placeholder="e.g. General Union Posts - Main" />
                </div>

                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-slate-400 text-[11px]">Paper:</span>
                    <select id="selectPart1Size" class="input input-sm bg-slate-800 border-white/10 text-xs text-white py-0 px-2 h-7">
                      <option value="A3" ${p.ballots[0].paperSize===`A3`?`selected`:``}>A3 (2-Column Standard)</option>
                      <option value="A4" ${p.ballots[0].paperSize===`A4`?`selected`:``}>A4 Sheet</option>
                    </select>
                  </div>
                  <div class="text-[11px] text-indigo-300 font-medium">
                    All voters receive this ballot
                  </div>
                </div>

                <div class="pt-2 border-t border-white/5">
                  <div class="text-[11px] font-semibold text-slate-400 mb-1.5">Included Posts:</div>
                  <div class="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                    ${t.map(e=>`
                      <span class="px-2 py-0.5 rounded bg-slate-800 border border-white/10 text-[11px] text-slate-200 flex items-center gap-1">
                        <span>${d(e)}</span> ${F(e)}
                      </span>
                    `).join(``)}
                    ${t.length===0?`<span class="text-xs text-amber-400 italic">No posts assigned to Part 1.</span>`:``}
                  </div>
                </div>
              </div>

              <!-- Part 2: Additional Ballot Card -->
              <div class="bg-slate-900/70 p-4 rounded-xl border ${e?`border-emerald-500/30`:`border-white/10 opacity-70`} space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded text-xs font-bold ${e?`bg-emerald-500/20 text-emerald-300`:`bg-slate-800 text-slate-500`} uppercase tracking-wider">
                      Ballot Part 2 (G2)
                    </span>
                    <span class="text-xs ${e?`text-slate-300 font-semibold`:`text-slate-500`}">
                      (${n.length} posts)
                    </span>
                  </div>
                  <div class="text-[11px] font-mono ${e?`text-emerald-400`:`text-slate-500`}">
                    ${e?`Serial: G2-1... | Books: GB2-...`:`Inactive`}
                  </div>
                </div>

                ${e?`
                  <div>
                    <label class="text-[11px] font-semibold text-slate-400 block mb-1">Printed Title on Ballot:</label>
                    <input type="text" id="inputPart2Title" class="input input-sm w-full bg-slate-800 border-white/10 text-xs text-white" value="${F(p.ballots[1]?.title||`Additional General Ballot`)}" placeholder="e.g. Additional General Ballot" />
                  </div>

                  <div class="flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2">
                      <span class="text-slate-400 text-[11px]">Paper:</span>
                      <select id="selectPart2Size" class="input input-sm bg-slate-800 border-white/10 text-xs text-white py-0 px-2 h-7">
                        <option value="A3" ${(p.ballots[1]?.paperSize||`A3`)===`A3`?`selected`:``}>A3 (2-Column Standard)</option>
                        <option value="A4" ${p.ballots[1]?.paperSize===`A4`?`selected`:``}>A4 Sheet</option>
                        <option value="A5" ${p.ballots[1]?.paperSize===`A5`?`selected`:``}>A5 Sheet</option>
                      </select>
                    </div>
                    <div class="text-[11px] text-emerald-300 font-medium">
                      All voters receive this ballot
                    </div>
                  </div>

                  <div class="pt-2 border-t border-white/5">
                    <div class="text-[11px] font-semibold text-slate-400 mb-1.5">Split Posts:</div>
                    <div class="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                      ${n.map(e=>`
                        <span class="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-200 flex items-center gap-1">
                          <span>${d(e)}</span> ${F(e)}
                        </span>
                      `).join(``)}
                    </div>
                  </div>
                `:`
                  <div class="py-8 px-4 text-center rounded-lg bg-slate-800/30 border border-dashed border-white/10 text-slate-400 text-xs space-y-1.5">
                    <div class="text-sm font-semibold text-slate-300 flex items-center justify-center gap-1.5">
                      <span>📄</span> All Posts on Single Master Ballot
                    </div>
                    <p class="text-[11px] text-slate-500 max-w-sm mx-auto">
                      No posts selected to split. To detach posts into an Additional Ballot, check any of the posts above.
                    </p>
                  </div>
                `}
              </div>
            </div>

            <!-- Save Action Button -->
            <div class="flex justify-end pt-2">
              <button id="btnSaveConfig" class="btn btn-primary py-2.5 px-6 text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2">
                💾 Save Selection &amp; Finalize Master Plan
              </button>
            </div>
          </div>
        </div>

        <!-- Ballot Generation Action Cards -->
        <div>
          <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>🖨️</span> Official Ballot Generation
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${e?`
              <!-- Part 1 Ballot -->
              <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-indigo-500/50 transition-all">
                <div class="text-indigo-400 font-bold flex items-center justify-between">
                  <span class="flex items-center gap-2"><span>🏆</span> Part 1 (G1)</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">${p.ballots[0].paperSize||`A3`}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed truncate" title="${F(p.ballots[0].title)}">
                  ${F(p.ballots[0].title)}
                </p>
                <div class="text-[11px] text-slate-500">
                  ${t.length} Posts (${F(t.slice(0,2).join(`, `)+(t.length>2?`...`:``))})
                </div>
                <button data-type="general_part:gen_1" class="btn btn-primary w-full py-2.5 text-xs preview-btn">
                  🖨️ Generate Part 1 (G1)
                </button>
              </div>

              <!-- Part 2 Ballot -->
              <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-emerald-500/50 transition-all">
                <div class="text-emerald-400 font-bold flex items-center justify-between">
                  <span class="flex items-center gap-2"><span>📑</span> Part 2 (G2)</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">${p.ballots[1]?.paperSize||`A3`}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed truncate" title="${F(p.ballots[1]?.title||`Additional General Ballot`)}">
                  ${F(p.ballots[1]?.title||`Additional General Ballot`)}
                </p>
                <div class="text-[11px] text-slate-500">
                  ${n.length} Posts (${F(n.slice(0,2).join(`, `)+(n.length>2?`...`:``))})
                </div>
                <button data-type="general_part:gen_2" class="btn btn-primary w-full py-2.5 text-xs preview-btn">
                  🖨️ Generate Part 2 (G2)
                </button>
              </div>

              <!-- All General Parts Combined -->
              <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-indigo-500/50 transition-all bg-indigo-500/5">
                <div class="text-indigo-300 font-bold flex items-center gap-2">
                  <span>📚</span> All General Ballots
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Batch generates both Part 1 and Part 2 in sequence with page breaks.
                </p>
                <div class="text-[11px] text-indigo-400/80">
                  Combined print run for press
                </div>
                <button data-type="general" class="btn btn-secondary w-full py-2.5 text-xs border-indigo-500/30 text-indigo-200 hover:bg-indigo-600 hover:text-white preview-btn">
                  🖨️ Generate All Parts
                </button>
              </div>
            `:`
              <!-- Single General Ballot Card -->
              <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-indigo-500/50 transition-all">
                <div class="text-indigo-400 font-bold flex items-center gap-2">
                  <span>🏆</span> General Union (A3)
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  All executive union posts in 2 columns. Designed for A3 paper.
                </p>
                <div class="text-[11px] text-slate-500">
                  ${t.length} Posts (Single Master Sheet)
                </div>
                <button data-type="general" class="btn btn-primary w-full py-2.5 text-xs preview-btn">🖨️ Generate General Ballot</button>
              </div>
            `}

            <!-- Year Reps -->
            <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-emerald-500/50 transition-all">
              <div class="text-emerald-400 font-bold flex items-center gap-2">
                <span>📅</span> Year Reps (A5)
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                1st, 2nd, 3rd Year &amp; PG Reps. Designed for A5 paper (one post per page).
              </p>
              <button data-type="year" class="btn btn-primary w-full py-2.5 text-xs preview-btn">🖨️ Generate Year Reps</button>
            </div>

            <!-- Association Reps -->
            <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-amber-500/50 transition-all">
              <div class="text-amber-400 font-bold flex items-center gap-2">
                <span>🤝</span> Association Reps (A5)
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Departmental Association Secretaries. Designed for A5 paper (one post per page).
              </p>
              <button data-type="assoc" class="btn btn-primary w-full py-2.5 text-xs preview-btn">🖨️ Generate Associations</button>
            </div>

            <!-- Summary Report -->
            <div class="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-purple-500/50 transition-all bg-purple-500/5">
              <div class="text-purple-400 font-bold flex items-center gap-2">
                <span>📊</span> Printing Summary
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Detailed serial number ranges, book counts, and packaging breakdown for printing press.
              </p>
              <button id="btnGenSummary" class="btn btn-secondary w-full py-2.5 text-xs border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-white">📑 View Summary Report</button>
            </div>
          </div>
        </div>
      </div>
    `,_()},_=()=>{r.querySelectorAll(`.post-select-card`).forEach(e=>{e.onclick=()=>{let t=e.dataset.postName;t&&(m.has(t)?m.delete(t):m.add(t),h(),g())}});let e=r.querySelector(`#btnQuickArtsSports`);e&&(e.onclick=()=>{m.clear(),u.forEach(e=>{let t=e.post.toLowerCase();(t.includes(`editor`)||t.includes(`arts`)||t.includes(`captain`)||t.includes(`sports`))&&m.add(e.post)}),h(),g(),L(`Selected Arts, Sports & Editorial for Additional Ballot`,`info`)});let n=r.querySelector(`#btnQuickCouncil`);n&&(n.onclick=()=>{m.clear(),u.forEach(e=>{let t=e.post.toLowerCase();(t.includes(`uuc`)||t.includes(`councillor`)||t.includes(`editor`)||t.includes(`arts`)||t.includes(`captain`)||t.includes(`sports`))&&m.add(e.post)}),h(),g(),L(`Selected Council & Activities for Additional Ballot`,`info`)});let i=r.querySelector(`#btnInvertSelect`);i&&(i.onclick=()=>{u.forEach(e=>{m.has(e.post)?m.delete(e.post):m.add(e.post)}),h(),g()});let a=r.querySelector(`#btnClearSplit`);a&&(a.onclick=()=>{m.clear(),h(),g(),L(`Selection cleared. Reset to Single Unified Ballot.`,`info`)});let o=r.querySelector(`#inputPart1Title`);o&&(o.onchange=()=>{p.ballots[0].title=o.value.trim()||`General Union Posts - Main`});let s=r.querySelector(`#selectPart1Size`);s&&(s.onchange=()=>{p.ballots[0].paperSize=s.value});let c=r.querySelector(`#inputPart2Title`);c&&(c.onchange=()=>{p.ballots[1]&&(p.ballots[1].title=c.value.trim()||`Additional General Ballot`)});let l=r.querySelector(`#selectPart2Size`);l&&(l.onchange=()=>{p.ballots[1]&&(p.ballots[1].paperSize=l.value)});let d=r.querySelector(`#btnSaveConfig`);d&&(d.onclick=async()=>{let e=d.innerHTML;try{I(d,!0,e),L(`Saving ballot selection & calculating Master Plan...`,`info`),await C.adminSaveBallotConfig(t,p),(await C.adminGenerateBallotPlan(t)).plan,L(`Ballot selection saved & Master Plan finalized!`,`success`),g()}catch(e){L(`Error: ${e.message}`,`error`)}finally{I(d,!1,e)}});let f=r.querySelector(`#btnRegenPlanTop`);f&&(f.onclick=async()=>{let e=`🔄 Finalize Master Plan`;try{I(f,!0,e),L(`Calculating and saving Master Plan on server...`,`info`),await C.adminGenerateBallotPlan(t),await C.adminGetBallotPlan(t).catch(()=>null),L(`Master Plan finalized successfully!`,`success`)}catch(e){L(e.message,`error`)}finally{I(f,!1,e)}});let _=r.querySelector(`#btnGenSummary`);_&&(_.onclick=x),r.querySelectorAll(`.preview-btn`).forEach(e=>{e.onclick=()=>b(e.dataset.type)})},v=e=>{let t=window.open(``,`_blank`);if(!t){alert(`Popup blocked! Please allow popups for this site to print.`);return}t.document.write(`
      <html>
        <head>
          <title>Official Ballots - ${n.COLLEGE_SHORT_NAME} Election</title>
          <style>
            @media print {
              .no-print { display: none !important; }
              .page-break { page-break-after: always; }
              body { background: white !important; }
              .ballot-container { margin: 0 !important; box-shadow: none !important; }
            }
            body { margin: 0; padding: 0; background: #eee; }
            
            .ballot-container {
              background: white;
              color: black;
              font-family: "Times New Roman", Times, serif;
              margin: 20px auto;
              box-shadow: 0 0 10px rgba(0,0,0,0.2);
              box-sizing: border-box;
              overflow: hidden;
            }

            .a3 { width: 297mm; min-height: 420mm; padding: 45px; }
            .a4 { width: 210mm; min-height: 297mm; padding: 30px; }
            .a5 { width: 148mm; min-height: 210mm; padding: 25px; }

            .ballot-header { text-align: center; border-bottom: 3px double #000; margin-bottom: 25px; padding-bottom: 10px; }
            .ballot-header h1 { font-size: 20px; margin: 0; text-transform: uppercase; }
            .ballot-header h2 { font-size: 16px; margin: 5px 0 0 0; }
            
            .a3 .ballot-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 30px; 
              width: 100%;
              align-items: flex-start;
            }
            .a4 .ballot-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              width: 100%;
              align-items: flex-start;
            }
            .a5 .ballot-grid { display: block; }

            .post-box { 
              border: 2px solid #000; 
              padding: 0; 
              display: flex; 
              flex-direction: column; 
              margin-bottom: 22px; 
              break-inside: avoid; 
              -webkit-column-break-inside: avoid;
              page-break-inside: avoid;
              width: 100%;
            }
            .post-title { background: #ccc; color: #000; text-align: center; padding: 7px; font-weight: bold; font-size: 13px; text-transform: uppercase; border-bottom: 1px solid #000; }
            
            .candidate-row { display: flex; align-items: center; border-bottom: 1px solid #000; height: 50px; }
            .candidate-row:last-child { border-bottom: none; }
            
            .sl-no { width: 40px; text-align: center; border-right: 1px solid #000; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 15px; }
            .c-name { flex-grow: 1; padding: 0 15px; font-weight: bold; display: flex; flex-direction: column; justify-content: center; }
            .stamp-box { width: 70px; height: 100%; border-left: 1px solid #000; display: flex; align-items: center; justify-content: center; position: relative; }
            .stamp-box::after { content: ""; width: 32px; height: 32px; border: 1px dashed #ccc; border-radius: 4px; }
            
            .instr-box { text-align: center; border: 1px solid #000; padding: 7px; margin-bottom: 20px; font-weight: bold; font-size: 12px; text-transform: uppercase; }
            .meta-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: bold; font-size: 13px; }
          </style>
        </head>
        <body>
          ${e}
        </body>
      </html>
    `),t.document.close()},y=async(e=`all`)=>{let r,i,a,s;try{[r,i,a,s]=await Promise.all([C.adminGetPosts(t),C.adminGetFinalNominations(t).catch(async()=>{let e=await C.adminGetNominations(t).catch(()=>[]);return{active:e.filter(e=>e.status!==`Rejected`&&e.withdrawalStatus!==`Approved`),withdrawn:e.filter(e=>e.withdrawalStatus===`Approved`),isPublished:!1}}),C.getPublicSchedule(),C.adminGetSettings(t).catch(()=>({}))])}catch(e){throw Error(e.message.includes(`not published`)?`Final List Not Published. Please finalize and publish the list first.`:e.message)}let u=s.collegeName||n.COLLEGE_NAME;s.collegeShortName||n.COLLEGE_SHORT_NAME;let d=s.collegeLogo||``,f=s.electionYear||a.electionYear||new Date().getFullYear().toString(),m=Array.isArray(i)?i:i?.active||[];if(m.length===0)throw Error(`No active candidates found. Please ensure candidates are nominated and verified.`);let h=r.filter(e=>m.filter(t=>t.post===e.post).length>1),g=!!p.isSplit,_=``,v=(e,t)=>{if(!t||t.length===0)return``;let n=(e.paperSize||`A3`).toLowerCase(),r=e.shortCode===`G`?`G`:(e.shortCode||`G1`)+`-`,i=e.title||`OFFICIAL BALLOT PAPER (GENERAL)`,a=[...t].sort((e,t)=>{let n=e.post.toLowerCase(),r=t.post.toLowerCase();return n.includes(`chairman`)&&!n.includes(`vice`)?-1:r.includes(`chairman`)&&!r.includes(`vice`)?1:n.includes(`vice chairman`)?-1:r.includes(`vice chairman`)||n.includes(`university union councillor`)||n.includes(`uuc`)?1:r.includes(`university union councillor`)||r.includes(`uuc`)?-1:0}),o=``,s=``;return a.forEach((e,t)=>{let n=m.filter(t=>t.post===e.post).sort((e,t)=>String(e.candidateName||``).localeCompare(String(t.candidateName||``))),r=`
          <div class="post-box">
            <div class="post-title">${F(e.post.toUpperCase())}</div>
            ${n.map((e,t)=>`
              <div class="candidate-row">
                <div class="sl-no">${t+1}</div>
                <div class="c-name">
                  <div style="font-size: 13px; text-transform: uppercase;">${F(e.candidateName)}</div>
                  <div style="font-size: 10px; font-weight: normal; color: #444;">${F(e.candidateClass)}</div>
                </div>
                <div class="stamp-box"></div>
              </div>
            `).join(``)}
            <div class="candidate-row"><div class="sl-no">${n.length+1}</div><div class="c-name">NOTA</div><div class="stamp-box"></div></div>
          </div>
        `;t%2==0?o+=r:s+=r}),`
        <div class="ballot-container ${n} page-break">
          <!-- Counterfoil -->
          <div style="border-bottom: 2px dotted #000; padding-bottom: 18px; margin-bottom: 25px; text-align: center;">
            ${d?`<img src="${d}" style="max-height:40px;max-width:110px;margin:0 auto 4px auto;display:block;object-fit:contain" alt="College Logo">`:``}
            <h1 style="font-size: 16px; margin: 2px 0; text-transform: uppercase;">${F(u)}</h1>
            <h2 style="font-size: 14px; margin: 2px 0; font-weight: bold;">COLLEGE UNION ELECTION ${f}</h2>
            <h3 style="font-size: 13px; margin: 2px 0 0 0;">${F(i.toUpperCase())} - COUNTERFOIL</h3>
            <div style="margin-top: 12px; font-weight: bold; text-align: left; display: flex; flex-direction: column; gap: 6px;">
              <div style="display: flex; justify-content: space-between;">
                <span>SL.NO. ${r}____________</span>
                <span style="font-size: 10px; color: #666; font-style: italic;">(To be detached before voting)</span>
              </div>
              <div style="font-size: 12px;">Sl. No of Voter in Marked Copy: ____________</div>
            </div>
          </div>

          <div class="ballot-header">
            ${d?`<img src="${d}" style="max-height:45px;max-width:120px;margin:0 auto 4px auto;display:block;object-fit:contain" alt="College Logo">`:``}
            <h1>${F(u)}</h1>
            <h2>COLLEGE UNION ELECTION ${f}</h2>
            <h3>${F(i.toUpperCase())}</h3>
          </div>
          <div class="meta-row"><div>SL.NO. ${r}____________</div><div>Signature of PRO</div></div>
          <div class="instr-box">MARK THE VOTER'S CHOICE WITH THE MARKING SEAL IN THE SPACE PROVIDED</div>
          <div class="ballot-grid">
            <div class="ballot-col">${o}</div>
            <div class="ballot-col">${s}</div>
          </div>
        </div>
      `};if(e===`all`||e===`general`||e.startsWith(`general_part:`)){let t=h.filter(l);if(g){let n=p.ballots;if(e.startsWith(`general_part:`)){let t=e.replace(`general_part:`,``);n=p.ballots.filter(e=>e.id===t)}n.forEach(e=>{let n=t.filter(t=>(e.posts||[]).includes(t.post));_+=v(e,n)})}else _+=v({title:`OFFICIAL BALLOT PAPER (GENERAL)`,shortCode:`G`,paperSize:`A3`},t)}let y=h.filter(e=>c(e)||o(e));return(e===`all`||e===`year`||e===`assoc`)&&y.filter(t=>e===`all`||e===`year`&&c(t)||e===`assoc`&&o(t)).forEach(e=>{let t=m.filter(t=>t.post===e.post).sort((e,t)=>String(e.candidateName||``).localeCompare(String(t.candidateName||``))),n=c(e)?`R`:`A`;_+=`
          <div class="ballot-container a5 page-break">
            <!-- Counterfoil -->
            <div style="border-bottom: 2px dotted #000; padding-bottom: 15px; margin-bottom: 20px; text-align: center;">
              ${d?`<img src="${d}" style="max-height:35px;max-width:90px;margin:0 auto 4px auto;display:block;object-fit:contain" alt="College Logo">`:``}
              <h1 style="font-size: 15px; margin: 2px 0;">${F(u)}</h1>
              <h2 style="font-size: 13px; margin: 0; font-weight: bold;">COLLEGE UNION ELECTION ${f}</h2>
              <h3 style="font-size: 11px; margin: 2px 0 0 0;">OFFICIAL BALLOT (${n}) - COUNTERFOIL</h3>
              <div style="margin-top: 10px; font-weight: bold; text-align: left; display: flex; flex-direction: column; gap: 5px; font-size: 11px;">
                <div style="display: flex; justify-content: space-between;">
                  <span>SL.NO. ${n}____________</span>
                  <span style="font-size: 9px; color: #666; font-style: italic;">(To be detached)</span>
                </div>
                <div>Sl. No of Voter in Marked Copy: ____________</div>
              </div>
            </div>

            <div class="ballot-header">
              ${d?`<img src="${d}" style="max-height:40px;max-width:100px;margin:0 auto 4px auto;display:block;object-fit:contain" alt="College Logo">`:``}
              <h1>${F(u)}</h1>
              <h2 style="font-size: 14px; margin: 2px 0; font-weight: bold;">COLLEGE UNION ELECTION ${f}</h2>
              <h3 style="font-size: 15px; margin-top: 5px; font-weight: bold;">BALLOT PAPER (${n})</h3>
            </div>
            <div class="meta-row" style="font-size: 12px;"><div>SL.NO. ${n}____________</div><div>PRO Sign</div></div>
            <div class="post-box">
              <div class="post-title">${F(e.post.toUpperCase())}</div>
              ${t.map((e,t)=>`
                <div class="candidate-row">
                  <div class="sl-no">${t+1}</div>
                  <div class="c-name">
                    <div style="font-size: 13px; text-transform: uppercase;">${F(e.candidateName)}</div>
                    <div style="font-size: 10px; font-weight: normal; color: #444;">${F(e.candidateClass)}</div>
                  </div>
                  <div class="stamp-box"></div>
                </div>
              `).join(``)}
              <div class="candidate-row"><div class="sl-no">${t.length+1}</div><div class="c-name">NOTA</div><div class="stamp-box"></div></div>
            </div>
          </div>
        `}),_},b=async e=>{try{L(`Generating ballots...`,`info`),v(await y(e))}catch(e){L(e.message,`error`)}},x=async()=>{try{L(`Calculating Master Plan...`,`info`);let[e,r,i]=await Promise.all([C.getPublicSchedule(),C.adminGetSettings(t).catch(()=>({})),C.adminGetBallotPlan(t).catch(()=>null)]),a=i;if(!a)if(confirm(`No Master Plan found. Generate it now based on current final list and booths?`))await C.adminGenerateBallotPlan(t),a=await C.adminGetBallotPlan(t).catch(()=>null);else return;let o=r.electionYear||e.electionYear||new Date().getFullYear().toString(),s=r.collegeName||n.COLLEGE_NAME,c=r.collegeLogo||``,l=e=>!e||Array.isArray(e)&&e.length===0?`-`:typeof e==`string`?e:`
          <table style="width:100%; border-collapse:collapse; font-size:10px; background:rgba(0,0,0,0.02);">
            ${e.map(e=>`
              <tr>
                <td style="padding:4px; border:1px solid #eee; font-weight:bold; width:45px;">${e.qty} x ${e.size}</td>
                <td style="padding:4px; border:1px solid #eee; line-height:1.4;">
                  ${e.items.map(e=>`<span style="display:inline-block; margin-right:8px;"><strong style="color:#4f46e5;">${e.id}:</strong> ${e.range}</span>`).join(` `)}
                </td>
              </tr>
            `).join(``)}
          </table>
        `,u=!!(a.isSplit&&Array.isArray(a.generalParts)&&a.generalParts.length>1);v(`
        <div style="padding: 40px; font-family: sans-serif; color: #333;">
          <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px;">
            ${c?`<img src="${c}" style="max-height:55px;max-width:130px;margin:0 auto 6px auto;display:block;object-fit:contain" alt="College Logo">`:``}
            <h2 style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">${F(s)}</h2>
            <h1 style="margin: 6px 0 0 0; font-size: 22px;">College Union Election ${o} — Ballot Printing Summary</h1>
          </div>

          <p style="font-size: 14px; margin-bottom: 20px;">
            This document provides the sequential serial number ranges and booklet packaging for each ballot category.
            ${u?`<br><strong>Note:</strong> General Union posts are split into <strong>`+a.generalParts.length+` separate ballot papers</strong> with distinct series numbering and booklet codes.`:``}
          </p>

          ${u?`
            <!-- Split General Parts Tables -->
            ${a.generalParts.map((e,t)=>`
              <h3 style="background: #eee; padding: 8px 15px; border-left: 5px solid #4f46e5; margin-top: 25px;">
                1.${t+1} ${F(e.title)} (Series: ${e.shortCode}-1, ${e.shortCode}-2... / Books: ${e.bookPrefix}1...)
              </h3>
              <div style="font-size: 12px; margin-bottom: 8px; color: #555;">
                <strong>Assigned Posts:</strong> ${(e.posts||[]).map(e=>F(e)).join(`, `)}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; border: 2px solid #000;">
                <thead>
                  <tr style="background: #f8fafc;">
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left; width: 15%;">Booth No</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: center; width: 10%;">Voters</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: center; width: 15%;">Sl No From</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: center; width: 15%;">Sl No To</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left; width: 45%;">Book Breakdowns</th>
                  </tr>
                </thead>
                <tbody>
                  ${e.results.map(t=>`
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">Booth ${t.booth}</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${t.count}</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">${e.shortCode}-${t.start}</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">${e.shortCode}-${t.end}</td>
                      <td style="border: 1px solid #ddd; padding: 4px;">${l(t.books)}</td>
                    </tr>
                  `).join(``)}
                  <tr style="background: #f1f5f9; font-weight: bold;">
                    <td style="border: 1px solid #ddd; padding: 8px;">TOTAL PART ${t+1}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${e.total}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${e.shortCode}-1</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${e.shortCode}-${e.total}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">—</td>
                  </tr>
                </tbody>
              </table>
            `).join(``)}
          `:`
            <!-- Single General Ballots Table -->
            <h3 style="background: #eee; padding: 8px 15px; border-left: 5px solid #4f46e5;">1. General Union Ballots (Series: G1, G2, G3...)</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; border: 2px solid #000;">
              <thead>
                <tr style="background: #f8fafc;">
                  <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 15%;">Booth No</th>
                  <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">Voters</th>
                  <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 15%;">Sl No From</th>
                  <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 15%;">Sl No To</th>
                  <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 45%;">Book Breakdowns</th>
                </tr>
              </thead>
              <tbody>
                ${(a.general?.results||[]).map(e=>`
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 10px;">Booth ${e.booth}</td>
                    <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${e.count}</td>
                    <td style="border: 1px solid #ddd; padding: 10px; text-align: center; font-weight: bold;">G${e.start}</td>
                    <td style="border: 1px solid #ddd; padding: 10px; text-align: center; font-weight: bold;">G${e.end}</td>
                    <td style="border: 1px solid #ddd; padding: 4px;">${l(e.books||e.bookHtml)}</td>
                  </tr>
                `).join(``)}
                <tr style="background: #f1f5f9; font-weight: bold;">
                  <td style="border: 1px solid #ddd; padding: 10px;">TOTAL GENERAL</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${a.general?.total||0}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">G1</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">G${a.general?.total||0}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">—</td>
                </tr>
              </tbody>
            </table>
          `}

          <h3 style="background: #eee; padding: 8px 15px; border-left: 5px solid #10b981; margin-top: 30px;">2. Year Representative Ballots (Series: R1, R2, R3...)</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; border: 2px solid #000;">
            <thead>
              <tr style="background: #f8fafc;">
                <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 25%;">Post Name</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 10%;">Booth</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">Voters</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">From</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">To</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 35%;">Book Breakdowns</th>
              </tr>
            </thead>
            <tbody>
              ${(a.reps?.results||[]).map(e=>`
                <tr>
                  <td style="border: 1px solid #ddd; padding: 10px; font-size: 11px;">${F(e.post)}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">B${e.booth}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${e.count}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center; font-weight: bold;">R${e.start}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center; font-weight: bold;">R${e.end}</td>
                  <td style="border: 1px solid #ddd; padding: 4px;">${l(e.books||e.bookHtml)}</td>
                </tr>
              `).join(``)}
              <tr style="background: #f1f5f9; font-weight: bold;">
                <td colspan="2" style="border: 1px solid #ddd; padding: 10px;">TOTAL REPRESENTATIVE</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${a.reps?.total||0}</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">R1</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">R${a.reps?.total||0}</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">—</td>
              </tr>
            </tbody>
          </table>

          <h3 style="background: #eee; padding: 8px 15px; border-left: 5px solid #f59e0b;">3. Association Secretary Ballots (Series: A1, A2, A3...)</h3>
          <table style="width: 100%; border-collapse: collapse; border: 2px solid #000;">
            <thead>
              <tr style="background: #f8fafc;">
                <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 25%;">Post Name</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 10%;">Booth</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">Voters</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">From</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: center; width: 10%;">To</th>
                <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width: 35%;">Book Breakdowns</th>
              </tr>
            </thead>
            <tbody>
              ${(a.assocs?.results||[]).map(e=>`
                <tr>
                  <td style="border: 1px solid #ddd; padding: 10px; font-size: 11px;">${F(e.post)}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">B${e.booth}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${e.count}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center; font-weight: bold;">A${e.start}</td>
                  <td style="border: 1px solid #ddd; padding: 10px; text-align: center; font-weight: bold;">A${e.end}</td>
                  <td style="border: 1px solid #ddd; padding: 4px;">${l(e.books||e.bookHtml)}</td>
                </tr>
              `).join(``)}
              <tr style="background: #f1f5f9; font-weight: bold;">
                <td colspan="2" style="border: 1px solid #ddd; padding: 10px;">TOTAL ASSOCIATION</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${a.assocs?.total||0}</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">A1</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">A${a.assocs?.total||0}</td>
                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">—</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 50px; border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #666; text-align: center;">
            Generated on ${new Date().toLocaleString()} | Official ${n.COLLEGE_SHORT_NAME} Election Portal
          </div>
        </div>
      `)}catch(e){L(e.message,`error`)}};g()}function at(e){let t=H();if(!t)return;U(e,`testing`,`
    <div class="page-enter space-y-8 max-w-3xl mx-auto">

      <!-- Warning Banner -->
      <div class="rounded-xl border border-amber-500/40 bg-amber-500/10 p-5 flex items-start gap-4">
        <div class="text-3xl">⚠️</div>
        <div>
          <h4 class="font-bold text-amber-400 text-lg">Testing Environment Tools</h4>
          <p class="text-amber-200/70 text-sm mt-1">
            These tools are for <strong>testing and debugging only</strong>. 
            Do not inject test data during or after the actual election process begins.
            Wiping data is <strong>irreversible</strong> — always confirm before acting.
          </p>
        </div>
      </div>

      <!-- Inject Test Data -->
      <div class="glass rounded-2xl overflow-hidden border border-indigo-500/20">
        <div class="bg-indigo-500/10 p-5 border-b border-indigo-500/20 flex items-center gap-3">
          <div class="text-2xl">🧪</div>
          <div>
            <h4 class="font-bold text-white text-lg">Inject Test Data</h4>
            <p class="text-slate-400 text-sm">Creates 2 synthetic candidates for every post and <strong>automatically injects random vote counts</strong> for immediate results testing.</p>
          </div>
        </div>
        <div class="p-6 space-y-4">
          <ul class="text-sm text-slate-400 space-y-1 list-disc list-inside">
            <li>Reads all posts from the <strong class="text-white">Posts</strong> table.</li>
            <li>Picks real students from <strong class="text-white">NominalRoll</strong> as candidates, proposers, and seconders.</li>
            <li>Sets status to <strong class="text-green-400">Valid</strong> and populates <strong class="text-white">Nominations, ValidList, and FinalList</strong>.</li>
            <li>IDs are prefixed with <code class="text-indigo-300 bg-black/30 px-1 rounded">TEST</code> for easy identification.</li>
          </ul>
          <div class="pt-2">
            <button id="btnInjectData" class="btn btn-primary gap-2">
              🧪 Inject Test Nominations
            </button>
          </div>
          <div id="injectStatus"></div>
        </div>
      </div>

      <!-- Wipe All Data -->
      <div class="glass rounded-2xl overflow-hidden border border-red-500/30">
        <div class="bg-red-500/10 p-5 border-b border-red-500/30 flex items-center gap-3">
          <div class="text-2xl">🗑️</div>
          <div>
            <h4 class="font-bold text-red-400 text-lg">Wipe All Transactional Data</h4>
            <p class="text-slate-400 text-sm">Permanently deletes all nominations, results, and resets the publish flags. Leaves NominalRoll, Posts, and Booth configuration intact.</p>
          </div>
        </div>
        <div class="p-6 space-y-4">
          <div class="rounded-lg bg-red-900/20 border border-red-800/40 p-4 text-sm text-red-300 space-y-1">
            <p>🗑️ <strong>Nominations</strong> table — will be cleared</p>
            <p>🗑️ <strong>ValidList</strong> cache — will be cleared</p>
            <p>🗑️ <strong>FinalList</strong> cache — will be cleared</p>
            <p>🗑️ <strong>Results</strong> data — will be cleared</p>
            <p>🔄 <strong>Publish flags</strong> — will be reset to false</p>
            <p class="text-green-400 mt-2">✅ NominalRoll, Posts, Booths, Settings (locations) — <strong>preserved</strong></p>
          </div>
          
          <!-- Password confirmation -->
          <div class="space-y-2 pt-2">
            <label class="block text-sm text-slate-300 font-medium">Confirm Admin Password</label>
            <input type="password" id="wipePasswordInput" class="field max-w-xs" placeholder="Enter admin password to confirm...">
          </div>
          
          <div>
            <button id="btnWipeData" class="btn bg-red-600 hover:bg-red-500 text-white border-none gap-2 px-6">
              🗑️ Permanently Wipe All Data
            </button>
          </div>
          <div id="wipeStatus"></div>
        </div>
      </div>

    </div>
  `);let n=e.querySelector(`#adminMain`);n.querySelector(`#btnInjectData`).addEventListener(`click`,async e=>{let r=e.target;if(!confirm(`This will inject test nominations for ALL configured posts.

Proceed?`))return;I(r,!0,`🧪 Inject Test Nominations`);let i=n.querySelector(`#injectStatus`);i.innerHTML=``;try{let e=await C.adminInjectTestData(t),n=e.skipped>0?`<br><span class="text-amber-400 text-xs mt-1 block">⚠️ ${e.skipped} post(s) skipped — not enough eligible students in NominalRoll: <em>${e.skippedPosts.join(`, `)}</em></span>`:``;i.innerHTML=`
        <div class="alert mt-3" style="background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: #6ee7b7;">
          ✅ Successfully injected <strong>${e.injected}</strong> test nominations across posts. All rules (gender, year, dept) were respected.${n}
        </div>`,L(`Injected ${e.injected} test nominations!`,`success`)}catch(e){i.innerHTML=`<div class="alert alert-error mt-3">❌ ${F(e.message)}</div>`,L(`Failed: ${e.message}`,`error`)}finally{I(r,!1,`🧪 Inject Test Nominations`)}}),n.querySelector(`#btnWipeData`).addEventListener(`click`,async e=>{let t=e.target,r=n.querySelector(`#wipePasswordInput`).value.trim();if(!r){L(`Please enter the admin password to confirm the wipe.`,`warning`),n.querySelector(`#wipePasswordInput`).focus();return}if(!confirm(`⚠️ DANGER ZONE ⚠️

This will PERMANENTLY DELETE:
• All Nominations
• ValidList
• FinalList
• Results

This action CANNOT be undone.

Are you absolutely sure?`))return;I(t,!0,`🗑️ Wiping...`);let i=n.querySelector(`#wipeStatus`);i.innerHTML=``;try{await C.adminWipeData(r),n.querySelector(`#wipePasswordInput`).value=``,i.innerHTML=`
        <div class="alert mt-3" style="background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3); color: #fca5a5;">
          ✅ All transactional data has been wiped. Publish flags reset to false.
        </div>`,L(`All data wiped successfully.`,`success`)}catch(e){i.innerHTML=`<div class="alert alert-error mt-3">❌ ${F(e.message)}</div>`,L(`Failed: ${e.message}`,`error`)}finally{I(t,!1,`🗑️ Permanently Wipe All Data`)}})}async function ot(e){let t=H();if(!t)return;U(e,`results`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Aggregating results...</p></div>
  `);async function n(r=!1){let i=e.querySelector(`#adminMain`);if(i){r&&(C.invalidateCache(`adminGetResults`),C.invalidateCache(`getResults`),C.invalidateCache(`adminGetFinalNominations`),C.invalidateCache(`adminGetNominations`),C.invalidateCache(`adminGetSettings`),C.invalidateCache(`getSettings`),C.invalidateCache(`getPosts`),C.invalidateCache(`getPublicSchedule`));try{let[e,a,o,s,c]=await Promise.all([C.getPosts(),C.adminGetFinalNominations(t).catch(async()=>{let e=await C.adminGetNominations(t).catch(()=>[]);return{active:e.filter(e=>e.status!==`Rejected`&&e.withdrawalStatus!==`Approved`),withdrawn:e.filter(e=>e.withdrawalStatus===`Approved`),isPublished:!1}}),C.adminGetResults(t,r).catch(()=>C.getResults(r).catch(()=>[])),C.getPublicSchedule().catch(()=>({})),C.adminGetSettings(t).catch(()=>({}))]);st(i,t,e,a.active||[],o,s,c,a.isPublished,n)}catch(e){i.innerHTML=`<div class="alert alert-error">❌ ${F(e.message)}</div>`}}}await n(!1)}function st(e,t,n,r,i,a,o,s=!1,c=null){let l=o.electionYear||a.electionYear||new Date().getFullYear(),u=o.collegeName||`GOVERNMENT VICTORIA COLLEGE PALAKKAD`;o.collegeShortName;let d=o.collegeLogo||``,f=o.resultsLocked===`true`,p=o.resultsPublished===`true`,m=o.countingActive===`true`||a.countingActive===`true`,h={};i.forEach(e=>{h[e.Post]||(h[e.Post]={}),h[e.Post][e.CandidateId]||(h[e.Post][e.CandidateId]=0),h[e.Post][e.CandidateId]+=Number(e.Votes)||0});let g=n.map(e=>{let t=r.filter(t=>t.post===e.post),n=h[e.post]||{};if(t.length===1)return{post:e.post,type:`unanimous`,winner:t[0],candidates:t};if(t.length===0)return{post:e.post,type:`no-candidates`};let i=t.map(e=>({...e,votes:n[e.id]||0}));i.sort((e,t)=>t.votes-e.votes);let a=i[0].votes,o=i.filter(e=>e.votes===a&&e.votes>0),s=o.length>1;return{post:e.post,type:`election`,candidates:i,winner:s?null:o[0],isTie:s,totalVotes:Object.values(n).reduce((e,t)=>e+t,0),nota:n.NOTA||0,invalid:n.INVALID||0}});e.innerHTML=`
    <div class="page-enter space-y-6">
      ${s?``:`
        <div class="alert alert-warning text-xs flex items-center justify-between">
          <span>ℹ️ <strong>Preview Mode:</strong> Final candidate list has not been published yet. Showing active nominations for internal review.</span>
          <button data-nav="/admin/publish" class="btn btn-secondary btn-sm">Publish Lists</button>
        </div>
      `}

      <!-- Control Panels: Lock/Freeze, Live Counting, and Public Visibility -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 rounded-xl border ${m?`bg-amber-500/10 border-amber-500/30`:`bg-slate-500/10 border-slate-500/30`} flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${m?`🗳️`:`⏳`}</span>
            <div>
              <div class="font-bold text-sm text-white">${m?`Counting: Active`:`Counting: Inactive`}</div>
              <div class="text-xs text-slate-400">${m?`Public sees "Counting in Progress"`:`Public sees "Counting Not Started"`}</div>
            </div>
          </div>
          <button id="btnToggleCounting" class="btn btn-sm ${m?`bg-rose-500/80 hover:bg-rose-600 text-white font-bold`:`bg-amber-500 hover:bg-amber-600 text-black font-bold`}">
            ${m?`⏸️ Stop Counting`:`⚡ Set Counting Active`}
          </button>
        </div>

        <div class="p-4 rounded-xl border ${f?`bg-amber-500/10 border-amber-500/30`:`bg-white/5 border-white/10`} flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${f?`🔒`:`🔓`}</span>
            <div>
              <div class="font-bold text-sm text-white">${f?`Results: Locked & Frozen`:`Results: Unlocked`}</div>
              <div class="text-xs text-slate-400">${f?`Vote entry blocked`:`Vote entry portal open`}</div>
            </div>
          </div>
          <button id="btnToggleLock" class="btn btn-sm ${f?`btn-secondary`:`bg-amber-500 hover:bg-amber-600 text-black font-bold`}">
            ${f?`🔓 Unlock`:`🔒 Freeze / Lock`}
          </button>
        </div>

        <div class="p-4 rounded-xl border ${p?`bg-emerald-500/10 border-emerald-500/30`:`bg-slate-500/10 border-slate-500/30`} flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${p?`🌐`:`👁️‍🗨️`}</span>
            <div>
              <div class="font-bold text-sm text-white">${p?`Public View: Published`:`Public View: Hidden`}</div>
              <div class="text-xs text-slate-400">${p?`Results visible to public`:`Only admins see results`}</div>
            </div>
          </div>
          <button id="btnTogglePublic" class="btn btn-sm ${p?`bg-rose-500/80 hover:bg-rose-600 text-white font-bold`:`btn-success font-bold`}">
            ${p?`👁️‍🗨️ Hide`:`📢 Publish`}
          </button>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
        <div>
          <h2 class="text-xl font-bold text-white tracking-tight">Vote Counting Overview</h2>
          <p class="text-slate-400 text-sm">Post-wise breakdown of votes and leading candidates.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <button id="btnAdminRefreshResults" class="btn btn-secondary px-5 flex items-center gap-2">
            <span>🔄</span> Refresh Results
          </button>
          <button id="btnPrintOfficial" class="btn btn-primary px-6 flex items-center gap-2">
            <span>🖨️</span> Print Official Result Sheet
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6">
        ${g.map(e=>{let t=e.post.toUpperCase().includes(`UUC`)||e.post.toUpperCase().includes(`UNIVERSITY`)?2:1,n=0;return e.type===`election`&&e.candidates.length>t&&(n=e.candidates[t].votes),`
            <div class="glass rounded-2xl overflow-hidden border border-white/5 page-enter shadow-lg">
              <div class="px-6 py-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                <h4 class="font-bold text-indigo-400 uppercase tracking-wider text-sm">${F(e.post)}</h4>
                ${e.type===`unanimous`?`<span class="badge bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ELECTED UNANIMOUSLY</span>`:`<span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">${e.isTie?`⚖️ TIE DETECTED`:`CONTESTED ELECTION`}</span>`}
              </div>
              <div class="p-6">
                ${e.type===`no-candidates`?`<p class="text-slate-500 italic text-sm text-center py-4">No valid nominations received for this post.</p>`:`
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="text-slate-500 text-[10px] uppercase tracking-widest text-left border-b border-white/5">
                        <th class="pb-3 font-bold">Candidate Name</th>
                        <th class="pb-3 font-bold text-center">Class</th>
                        <th class="pb-3 font-bold text-right">Votes</th>
                        <th class="pb-3 font-bold text-center w-24">Status</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                      ${e.candidates.map((r,i)=>{let a=i<t&&r.votes>0,o=a?r.votes-n:0;return`
                          <tr class="${a?`bg-white/[0.02]`:``}">
                            <td class="py-4">
                              <div class="flex items-center gap-2">
                                <span class="font-bold text-white">${F(r.candidateName)}</span>
                                ${r.candidateSerial?`<span class="badge bg-indigo-500/20 text-indigo-300 font-mono text-[9px]">Sl. #${F(r.candidateSerial)}</span>`:``}
                                ${o>0?`<span class="bg-green-500/20 text-green-400 text-[9px] px-1.5 py-0.5 rounded font-black border border-green-500/30">LEAD: ${o}</span>`:``}
                              </div>
                            </td>
                            <td class="py-4 text-slate-400 text-center text-[11px]">${F(r.candidateClass)}</td>
                            <td class="py-4 text-right font-mono text-lg ${a?`text-amber-400`:`text-slate-300`}">
                              ${e.type===`unanimous`?`—`:r.votes}
                            </td>
                            <td class="py-4 text-center">
                              ${a?f?`<span class="text-emerald-400 text-[10px] font-black border border-emerald-400/30 px-2 py-0.5 rounded bg-emerald-500/10 tracking-wider">ELECTED</span>`:`<span class="text-amber-400 text-[10px] font-black border border-amber-400/30 px-2 py-0.5 rounded bg-amber-500/10 tracking-wider">LEADING</span>`:``}
                            </td>
                          </tr>
                        `}).join(``)}
                    </tbody>
                  </table>

                  ${e.type===`election`?`
                    <div class="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                      <div class="flex justify-between items-center py-2 px-3 bg-white/5 rounded border border-white/5 text-[11px]">
                        <span class="text-slate-500 uppercase tracking-widest font-bold">NOTA</span>
                        <span class="text-white font-bold">${e.nota}</span>
                      </div>
                      <div class="flex justify-between items-center py-2 px-3 bg-white/5 rounded border border-white/5 text-[11px]">
                        <span class="text-slate-500 uppercase tracking-widest font-bold">Invalid</span>
                        <span class="text-red-400/70 font-bold">${e.invalid}</span>
                      </div>
                      <div class="flex justify-between items-center py-2 px-3 bg-indigo-500/10 rounded border border-indigo-500/20 text-[11px]">
                        <span class="text-indigo-300 uppercase tracking-widest font-bold">Valid Votes</span>
                        <span class="text-white font-black text-sm">${e.totalVotes-e.invalid}</span>
                      </div>
                      <div class="flex justify-between items-center py-2 px-3 bg-purple-500/10 rounded border border-purple-500/20 text-[11px]">
                        <span class="text-purple-300 uppercase tracking-widest font-bold">Grand Total</span>
                        <span class="text-white font-black text-sm">${e.totalVotes}</span>
                      </div>
                    </div>
                  `:``}
                  `}
              </div>
            </div>
          `}).join(``)}
      </div>
    </div>
  `,e.querySelector(`#btnPrintOfficial`).addEventListener(`click`,()=>{let e=`
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; padding: 20px; }
        .official-sheet { max-w: 850px; margin: 0 auto; padding: 40px; border: 1px solid #ddd; background: white; }
        .header { text-align: center; border-bottom: 3px double #000; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
        .header h2 { margin: 5px 0 0 0; font-size: 16px; color: #444; font-weight: 600; }
        .result-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
        .result-table th, .result-table td { border: 1px solid #000; padding: 12px 10px; font-size: 13px; }
        .result-table th { background: #f2f2f2; text-align: left; text-transform: uppercase; font-size: 11px; }
        .post-header { background: #f9f9f9; font-weight: bold; font-size: 14px; text-transform: uppercase; color: #000; }
        .winner-row { background: #fafff9 !important; font-weight: bold; }
        .footer { margin-top: 80px; display: flex; justify-content: space-between; align-items: flex-start; }
        .sig-box { width: 250px; border-top: 1px solid #000; text-align: center; padding-top: 8px; font-size: 12px; font-weight: bold; margin-top: 40px; }
        @media print {
          body { padding: 0; }
          .official-sheet { border: none; width: 100%; max-width: 100%; padding: 0; }
          .post-header { background-color: #eee !important; -webkit-print-color-adjust: exact; }
          .winner-row { background-color: #fafff9 !important; -webkit-print-color-adjust: exact; }
        }
      </style>
      <div class="official-sheet">
        <div class="header">
          ${d?`<img src="${d}" style="max-height:60px;max-width:140px;margin:0 auto 8px auto;display:block;object-fit:contain" alt="College Logo">`:``}
          <h2>${F(u)}</h2>
          <h1>College Union Election ${l}</h1>
          <div style="font-size: 18px; margin-top: 15px; font-weight: 900; text-decoration: underline;">OFFICIAL RESULT NOTIFICATION</div>
        </div>

        <p style="font-size: 14px; margin-bottom: 25px; text-align: justify;">
          The following candidates are hereby declared to have been duly elected to the respective offices of the College Union for the academic year ${l}, 
          based on the counting of votes held on ${new Date().toLocaleDateString(`en-IN`,{day:`numeric`,month:`long`,year:`numeric`})}.
        </p>

        <table class="result-table">
          <thead>
            <tr>
              <th style="width: 10%; text-align: center;">Sl. No.</th>
              <th style="width: 45%;">Name of Candidate</th>
              <th style="text-align: center; width: 15%;">Votes Secured</th>
              <th style="width: 30%;">Remarks</th>
            </tr>
          </thead>
          <tbody>
            ${g.map(e=>e.type===`no-candidates`?``:`
                <tr class="post-header">
                  <td colspan="4" style="background: #eaeaea; padding: 15px 10px; border-bottom: 2px solid #000;">
                    ${F(e.post)}
                  </td>
                </tr>
                ${e.candidates.map((t,n)=>{let r=e.winner&&e.winner.id===t.id;return`
                    <tr class="${r?`winner-row`:``}">
                      <td style="text-align: center; color: #555; font-size: 12px;">${n+1}</td>
                      <td style="font-weight: ${r?`bold`:`normal`}; font-size: 14px;">
                        ${F(t.candidateName)} ${t.candidateSerial?`<span style="font-size: 11px; font-weight: normal; color: #555;">(Roll Sl. #${F(t.candidateSerial)})</span>`:``}
                      </td>
                      <td style="text-align: center; font-weight: bold; font-size: 14px;">${e.type===`unanimous`?`—`:t.votes||0}</td>
                      <td style="font-size: 12px; font-weight: bold;">
                        ${r?e.type===`unanimous`?`ELECTED UNANIMOUSLY`:`✓ ELECTED`:``}
                      </td>
                    </tr>
                  `}).join(``)}
              `).join(``)}
          </tbody>
        </table>

        <div class="footer">
          <div style="font-size: 13px;">
            <p><strong>Date:</strong> ${new Date().toLocaleDateString(`en-IN`)}</p>
            <p><strong>Place:</strong> Palakkad</p>
          </div>
          <div class="sig-box">
            RETURNING OFFICER<br>
            <span style="font-weight: normal; font-size: 11px;">College Union Election ${l}</span>
          </div>
        </div>
      </div>
    `,t=window.open(``,`_blank`);if(!t){L(`Popup blocked! Please allow popups to print.`,`error`);return}t.document.write(`
      <html>
        <head><title>Election Results ${l}</title></head>
        <body>
          ${e}
          <script>
            window.addEventListener('load', () => {
              setTimeout(() => {
                window.print();
              }, 500);
            });
          <\/script>
        </body>
      </html>
    `),t.document.close()});let _=e.querySelector(`#btnAdminRefreshResults`);_&&c&&(_.onclick=async()=>{_.disabled=!0,_.innerHTML=`<span>⏳</span> Refreshing...`;try{await c(!0),L(`Election results refreshed with latest counts.`,`success`)}catch(e){L(`Refresh failed: ${e.message}`,`error`),_.disabled=!1,_.innerHTML=`<span>🔄</span> Refresh Results`}});let v=e.querySelector(`#btnToggleCounting`);v&&(v.onclick=async()=>{if(confirm(m?`Set Counting Mode Inactive? Visitors to the public portal will be asked to wait for counting to begin.`:`Set Counting Mode Active? Visitors to the public portal will see "Counting in Progress".`)){v.disabled=!0,v.textContent=`Please wait...`;try{m=(await C.adminToggleCounting(t)).active,o.countingActive=m?`true`:`false`,L(m?`⚡ Counting mode active! Public sees "Counting in Progress".`:`⏳ Counting mode inactive. Public asked to wait.`,`success`),st(e,t,n,r,i,a,o,s,c)}catch(e){L(e.message,`error`),v.disabled=!1,v.textContent=m?`⏸️ Stop Counting`:`⚡ Set Counting Active`}}});let y=e.querySelector(`#btnToggleLock`);y&&(y.onclick=async()=>{if(confirm(f?`Unlock election results? Vote entries will be re-enabled.`:`Lock and freeze election results? No further vote entries will be allowed.`)){y.disabled=!0,y.textContent=`Please wait...`;try{f=(await C.adminToggleLockResults(t)).locked,o.resultsLocked=f?`true`:`false`,L(f?`🔒 Results locked and frozen.`:`🔓 Results unlocked for editing.`,`success`),st(e,t,n,r,i,a,o,s,c)}catch(e){L(e.message,`error`),y.disabled=!1,y.textContent=f?`🔓 Unlock Results`:`🔒 Freeze / Lock`}}});let b=e.querySelector(`#btnTogglePublic`);b&&(b.onclick=async()=>{if(confirm(p?`Hide election results from public view? The public portal will show counting in progress.`:`Publish election results to the public portal? Anyone visiting the site will see live results.`)){b.disabled=!0,b.textContent=`Please wait...`;try{p=(await C.adminTogglePublishResults(t)).published,o.resultsPublished=p?`true`:`false`,L(p?`📢 Results published to public portal!`:`👁️‍🗨️ Results hidden from public view.`,`success`),st(e,t,n,r,i,a,o,s,c)}catch(e){L(e.message,`error`),b.disabled=!1,b.textContent=p?`👁️‍🗨️ Hide Public View`:`📢 Publish to Public`}}})}var ct=`election_results_cache`,lt=`election_results_last_fetch`,ut=300*1e3;async function dt(e){e.innerHTML=`
    <div class="page-enter min-h-screen">
      <header class="no-print sticky top-0 z-10 border-b border-white/10 glass">
        <div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <button id="backToHome" class="text-slate-400 hover:text-white transition text-sm">← Home</button>
            <span class="text-slate-600">|</span>
            <h1 class="font-bold text-white text-sm">Live Election Results</h1>
          </div>
          <div class="flex items-center gap-3">
            <span id="cacheTimer" class="text-[10px] text-slate-500 font-mono"></span>
            <button id="btnRefresh" class="btn btn-secondary btn-sm">🔄 Refresh</button>
          </div>
        </div>
      </header>
      <main id="resultsMain" class="max-w-5xl mx-auto px-4 py-8">
        <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Fetching Live Results...</p></div>
      </main>
    </div>
  `;let t=e.querySelector(`#cacheTimer`),n=e.querySelector(`#btnRefresh`),r=()=>{let e=localStorage.getItem(lt);if(!e){t.textContent=``,n.disabled=!1,n.classList.remove(`opacity-50`,`cursor-not-allowed`);return}let r=parseInt(e,10)+ut,i=Math.max(0,r-Date.now());i<=0?(t.textContent=`Live Update Available`,t.classList.add(`text-green-400`),n.disabled=!1,n.classList.remove(`opacity-50`,`cursor-not-allowed`,`pointer-events-none`)):(t.textContent=`Update in ${Math.floor(i/6e4)}:${Math.floor(i%6e4/1e3).toString().padStart(2,`0`)}`,t.classList.remove(`text-green-400`),n.disabled=!0,n.classList.add(`opacity-50`,`cursor-not-allowed`,`pointer-events-none`))};setInterval(r,1e3),r(),e.querySelector(`#backToHome`).addEventListener(`click`,()=>o.navigate(`/`)),n.addEventListener(`click`,t=>{if(n.disabled||n.classList.contains(`pointer-events-none`)){t.preventDefault();return}ft(e.querySelector(`#resultsMain`),!0)}),await ft(e.querySelector(`#resultsMain`))}async function ft(e,t=!1){try{let n=localStorage.getItem(lt),r=localStorage.getItem(ct),i,a,s=!1,c=!1,l=!1;if(!t&&n&&r&&Date.now()-parseInt(n,10)<ut)try{let t=JSON.parse(r);i=t.posts,a=t.results;let n=t.schedule||{};s=t.isCountingActive||n.countingActive===`true`,c=t.isResultsPublished||n.resultsPublished===`true`,l=t.isResultsLocked||!1,u(e,n.electionYear||new Date().getFullYear())}catch{localStorage.removeItem(ct),localStorage.removeItem(lt),i=null}if(!i){e.innerHTML=`
        <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Fetching Live Results...</p></div>
      `,t&&(C.invalidateCache(`getResults`),C.invalidateCache(`getPosts`),C.invalidateCache(`getPublicSchedule`),C.invalidateCache(`getSettings`));let n,r,o;[i,r,n,o]=await Promise.all([C.getPosts(),C.getResults(t).catch(()=>({results:[],published:!1,countingActive:!1})),C.getPublicSchedule().catch(()=>({})),C.getSettings().catch(()=>({}))]),a=Array.isArray(r)?r:r?.results||[],s=r&&r.countingActive===!0||n?.countingActive===`true`||o?.countingActive===`true`,c=r&&r.published===!0||n?.resultsPublished===`true`||o?.resultsPublished===`true`,l=r&&r.locked===!0||o?.resultsLocked===`true`,localStorage.setItem(lt,Date.now().toString()),localStorage.setItem(ct,JSON.stringify({posts:i,results:a,schedule:n,isCountingActive:s,isResultsPublished:c,isResultsLocked:l})),u(e,n?.electionYear||o?.electionYear||new Date().getFullYear())}function u(e,t){let n=e.closest(`.page-enter`)?.querySelector(`h1`);n&&(n.textContent=`Live Election Results ${t}`)}if(a.length===0||!c){s?(e.innerHTML=`
          <div class="text-center py-20 bg-amber-500/10 rounded-2xl border border-amber-500/30 page-enter shadow-2xl">
            <div class="text-6xl mb-4 animate-bounce">🗳️</div>
            <div class="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span> Live Counting Underway
            </div>
            <h2 class="text-3xl font-black text-white mb-2">Counting in Progress</h2>
            <p class="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed mb-6">
              Vote counting is actively in progress under the supervision of the Returning Officer.
              Official post-wise counts and leaderboards will appear as rounds are completed. Please check back shortly.
            </p>
            <button id="btnCountingRefresh" class="btn btn-primary px-6">🔄 Check for Updates</button>
          </div>
        `,e.querySelector(`#btnCountingRefresh`)?.addEventListener(`click`,()=>ft(e,!0))):(e.innerHTML=`
          <div class="text-center py-20 bg-white/5 rounded-2xl border border-white/10 page-enter shadow-xl">
            <div class="text-6xl mb-4">⏳</div>
            <div class="inline-block bg-slate-500/20 text-slate-400 border border-slate-500/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              Awaiting Counting
            </div>
            <h2 class="text-3xl font-black text-white mb-2">Counting Not Started</h2>
            <p class="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed mb-6">
              The counting of votes has not commenced yet. Please wait for the Returning Officer to initiate the official counting process.
            </p>
            <div class="flex justify-center gap-3">
              <button id="btnWaitHome" class="btn btn-secondary">← Return to Home</button>
              <button id="btnWaitRefresh" class="btn btn-secondary bg-white/5 border-white/10 hover:bg-white/10">🔄 Refresh</button>
            </div>
          </div>
        `,e.querySelector(`#btnWaitHome`)?.addEventListener(`click`,()=>o.navigate(`/`)),e.querySelector(`#btnWaitRefresh`)?.addEventListener(`click`,()=>ft(e,!0)));return}let d={};i.forEach(e=>{let t=e.post||e.name;d[t]={}}),a.forEach(e=>{let t=e.Post;d[t]||(d[t]={}),d[t][e.CandidateId]||(d[t][e.CandidateId]={name:e.CandidateName,votes:0}),d[t][e.CandidateId].votes+=Number(e.Votes)||0});let f=``,p=i.filter(e=>{let t=e.post||e.name;return!e.deptRestriction&&!t.toUpperCase().includes(`ASSOCIATION`)});if(p.length>0){let e=``;p.forEach(t=>{let n=t.post||t.name,r=d[n];if(!r)return;let i=Object.keys(r).filter(e=>e!==`INVALID`&&e!==`NOTA`);if(i.length===0)return;let a=i.map(e=>r[e]);a.sort((e,t)=>t.votes-e.votes);let o=n.toUpperCase().includes(`UUC`)||n.toUpperCase().includes(`UNIVERSITY`)?2:1,s=0;a.length>o&&(s=a[o].votes);let c=a.filter((e,t)=>t<o&&e.votes>0),l=c.length>0?c.map(e=>{let t=e.votes-s;return`<div class="flex flex-wrap items-center gap-1.5 mb-1.5 last:mb-0">
                        <span class="whitespace-nowrap">${F(e.name)}</span>
                        <span class="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">${e.votes} votes</span>
                        ${t>0?`<span class="bg-green-500/20 text-green-400 text-[10px] px-1.5 py-0.5 rounded font-bold border border-green-500/30 whitespace-nowrap">Lead: ${t}</span>`:``}
                      </div>`}).join(``):`<span class="text-slate-500 italic text-xs font-normal">Awaiting Results</span>`;e+=`
          <tr class="border-b border-white/5 hover:bg-white/5 transition">
            <td class="py-3 px-4 font-bold text-slate-300 text-xs sm:text-sm leading-tight w-1/2">${F(n)}</td>
            <td class="py-3 px-4 text-amber-400 font-bold text-sm leading-tight w-1/2">${l}</td>
          </tr>
        `}),e&&(f+=`
          <div class="glass rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl mb-12 page-enter">
            <div class="bg-gradient-to-r from-slate-900/90 to-amber-900/40 p-4 border-b border-amber-500/20 flex items-center justify-center gap-2">
              <span class="text-2xl">🏆</span>
              <h2 class="text-lg font-black text-amber-400 uppercase tracking-widest m-0">Leading Candidates</h2>
            </div>
            <div class="overflow-x-auto bg-slate-900/40">
              <table class="w-full text-left">
                <tbody>
                  ${e}
                </tbody>
              </table>
            </div>
          </div>
        `)}f+=`<div class="space-y-12">`,i.forEach(e=>{let t=e.post||e.name,n=d[t];if(!n)return;let r=Object.keys(n);if(r.length===0)return;let i=r.filter(e=>e!==`INVALID`&&e!==`NOTA`).map(e=>n[e]),a=n.INVALID,o=n.NOTA,s=t.toUpperCase().includes(`UUC`)||t.toUpperCase().includes(`UNIVERSITY`)?2:1;i.sort((e,t)=>t.votes-e.votes);let c=i.length?i[0].votes:0,u=i.reduce((e,t)=>e+t.votes,0)+(o?o.votes:0),p=u+(a?a.votes:0),m=0;i.length>s?m=i[s].votes:i.length>0&&(m=0),f+=`
        <div class="glass rounded-2xl overflow-hidden border border-white/10 page-enter shadow-2xl">
          <div class="bg-gradient-to-r from-slate-900/80 to-indigo-900/80 p-6 border-b border-white/10">
            <h2 class="text-2xl font-bold text-white tracking-tight">${F(t)}</h2>
          </div>
          <div class="p-6 space-y-6 bg-slate-900/20">
            ${i.map((e,t)=>{let n=p>0?(e.votes/p*100).toFixed(1):0,r=c>0?e.votes/c*100:0,i=t<s&&e.votes>0,a=i?e.votes-m:0;return`
                <div class="relative">
                  <div class="flex justify-between items-end mb-2 relative z-10">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full ${i?l?`bg-emerald-500 text-emerald-950`:`bg-amber-500 text-amber-950`:`bg-white/10 text-white`} flex items-center justify-center font-bold text-sm shadow-lg">
                        ${i?l?`🏆`:`★`:t+1}
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="font-bold text-white text-lg">${F(e.name)}</span>
                          ${i?l?`<span class="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-black border border-emerald-500/30 tracking-wider">ELECTED</span>`:`<span class="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-black border border-amber-500/30 tracking-wider">LEADING</span>`:``}
                          ${a>0?`<span class="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-bold border border-green-500/30">LEAD: ${a}</span>`:``}
                        </div>
                      </div>
                    </div>
                    <div class="text-right">
                      <span class="text-2xl font-black text-white">${e.votes}</span>
                      <span class="text-xs text-slate-400 ml-1">votes (${n}%)</span>
                    </div>
                  </div>
                  <div class="h-4 w-full bg-slate-800 rounded-full overflow-hidden relative">
                    <div class="h-full rounded-full transition-all duration-1000 ease-out ${i?l?`bg-gradient-to-r from-emerald-400 to-emerald-600`:`bg-gradient-to-r from-amber-400 to-amber-600`:`bg-gradient-to-r from-indigo-500 to-purple-600`}" style="width: ${r}%"></div>
                  </div>
                </div>
              `}).join(``)}
            
            <div class="mt-8 pt-6 border-t border-white/10 space-y-3">
              ${o&&o.votes>0?`
                <div class="flex justify-between text-sm text-slate-400">
                  <span>None of the Above (NOTA)</span>
                  <span class="font-bold text-white">${o.votes} <span class="text-xs text-slate-500 font-normal ml-1">(${(o.votes/p*100).toFixed(1)}%)</span></span>
                </div>
              `:``}

              ${a&&a.votes>0?`
                <div class="flex justify-between text-sm text-slate-500">
                  <span>Invalid / Rejected</span>
                  <span class="font-bold text-red-400">${a.votes} <span class="text-xs text-slate-500 font-normal ml-1">(${(a.votes/p*100).toFixed(1)}%)</span></span>
                </div>
              `:``}

              <div class="flex justify-between items-center py-2 px-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20 mt-4">
                <span class="text-xs font-bold text-indigo-300 uppercase tracking-widest">Total Valid Votes</span>
                <span class="text-lg font-black text-white">${u}</span>
              </div>

              <div class="flex justify-between items-center py-2 px-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <span class="text-xs font-bold text-purple-300 uppercase tracking-widest">Grand Total</span>
                <span class="text-lg font-black text-white">${p}</span>
              </div>
            </div>
          </div>
        </div>
      `}),f+=`</div>`,f===`<div class="space-y-12"></div>`?e.innerHTML=`
        <div class="alert alert-info text-center">Results backend is initialized, but no votes have been aggregated for the configured posts yet.</div>
      `:e.innerHTML=f}catch(t){e.innerHTML=`<div class="alert alert-error">❌ Failed to load results: ${F(t.message)}</div>`}}async function pt(e){e.innerHTML=`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading nominal roll...</p></div>
  `;try{let[t,n]=await Promise.all([C.getNominalRoll().catch(()=>[]),C.getSettings().catch(()=>({}))]);mt(e,t,n)}catch(t){e.innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}function mt(e,t,r){let i=r.nominalRollFinalized===`true`||r.isRollFinalized===`true`,a=!i&&r.draftRollPublished===`true`,o=i||a,s=r.collegeName||n.COLLEGE_NAME;if(!o){e.innerHTML=`
      <div class="page-enter min-h-[75vh] flex items-center justify-center p-4">
        <div class="glass rounded-2xl p-10 max-w-md w-full text-center space-y-5 border border-white/10 shadow-2xl">
          <div class="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-inner">⏳</div>
          <h3 class="text-2xl font-bold text-white tracking-tight">Nominal Roll Not Published</h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            The voter list / nominal roll has not yet been published by the election authorities of <strong class="text-slate-300">${F(s)}</strong>. Please check back later or view the election schedule.
          </p>
          <div class="pt-2">
            <button data-nav="/" class="btn btn-secondary w-full flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    `;return}let c=Array.isArray(t)?[...t]:[],l=e=>{let t=String(e[`Nominal Roll Serial Number`]||e.serial_number||e.SL_NO||e[`SL. NO`]||``),n=parseInt(t.replace(/\D/g,``),10);return isNaN(n)?999999999:n};c.sort((e,t)=>l(e)-l(t));let u=Array.from(new Set(c.map(e=>(e.Dept||e.DEPT||e.department||``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),d=e=>Array.from(new Set(c.filter(t=>!e||(t.Dept||``).trim().toLowerCase()===e.toLowerCase()).map(e=>(e.CLASS||e.Class||``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),f=``,p=``,m=``,h=`dept-class`,g=1,_=e=>{let t=String(e||``).toUpperCase().trim();return t.includes(`RESEARCH`)||t.includes(`PH.D`)||t.includes(`PHD`)?6e3:/^I\s+M(SC|A|COM|BA|CA)/.test(t)||/^I\s+PG/.test(t)?4e3:/^II\s+M(SC|A|COM|BA|CA)/.test(t)||/^II\s+PG/.test(t)?5e3:/^III\s+M(SC|A|COM|BA|CA)/.test(t)?5500:/^I\s+(B|UG)/.test(t)||/^1ST\s+YEAR/.test(t)?1e3:/^II\s+(B|UG)/.test(t)||/^2ND\s+YEAR/.test(t)?2e3:/^III\s+(B|UG)/.test(t)||/^3RD\s+YEAR/.test(t)?3e3:3500},v=e=>{let t=String(e||``);return a?`D${t}`:t},y=()=>{let e=c.filter(e=>{if(p&&(e.Dept||``).trim().toLowerCase()!==p.toLowerCase()||m&&(e.CLASS||``).trim().toLowerCase()!==m.toLowerCase())return!1;if(f){let t=f.toLowerCase();if(![e.NAME,e.CLASS,e[`ADMISION NO`]||e[`ADMISSION NO`],e[`Nominal Roll Serial Number`],e.Dept].some(e=>String(e||``).toLowerCase().includes(t)))return!1}return!0});return h===`dept-class`?e.sort((e,t)=>{let n=String(e.Dept||``).trim().toUpperCase(),r=String(t.Dept||``).trim().toUpperCase();if(n!==r)return n.localeCompare(r);let i=String(e.CLASS||``).trim().toUpperCase(),a=String(t.CLASS||``).trim().toUpperCase(),o=_(i),s=_(a);if(o!==s)return o-s;if(i!==a)return i.localeCompare(a);let c=l(e),u=l(t);return c===u?String(e.NAME||``).trim().toUpperCase().localeCompare(String(t.NAME||``).trim().toUpperCase()):c-u}):h===`name`?e.sort((e,t)=>String(e.NAME||``).trim().toUpperCase().localeCompare(String(t.NAME||``).trim().toUpperCase())):e.sort((e,t)=>l(e)-l(t)),e};e.innerHTML=`
    <div class="page-enter space-y-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <button data-nav="/" class="text-slate-400 hover:text-white mb-2 flex items-center gap-2 text-sm transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Home
          </button>
          <div class="flex items-center gap-3">
            <h3 class="text-2xl font-bold text-white">Nominal Roll</h3>
            ${a?`<span class="badge badge-pending text-xs py-1.5 px-3 border border-amber-500/30 text-amber-300">📋 DRAFT LIST (SUBJECT TO CORRECTION)</span>`:`<span class="badge badge-valid text-xs py-1.5 px-3">✅ FINALIZED VOTER LIST</span>`}
          </div>
          <p class="text-slate-400 text-sm mt-0.5">${F(s)} — College Union Election</p>
        </div>
      </div>

      ${a?`
        <!-- Draft Notice Banner -->
        <div class="glass rounded-xl p-4 border border-amber-500/30 bg-amber-500/10 flex items-start gap-3 text-amber-200 text-sm shadow-lg">
          <span class="text-2xl">⚠️</span>
          <div>
            <strong class="text-amber-100 font-semibold block mb-0.5">DRAFT NOMINAL ROLL PUBLISHED</strong>
            Serial numbers shown as <strong>D1, D2, D3...</strong> are provisional and subject to change upon finalization. Students are advised to verify their Name, Class, and Department.
          </div>
        </div>
      `:``}

      <!-- Search & Multi-Level Filters Bar -->
      <div class="glass rounded-xl p-4 space-y-3 shadow-xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-center">
          <!-- Text Search -->
          <div class="relative md:col-span-4">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
            <input type="text" id="searchInput" class="field pl-10 w-full text-sm py-2" placeholder="Search name, adm. no, serial...">
          </div>

          <!-- Arrangement / Sort Option -->
          <div class="md:col-span-3">
            <select id="arrangeSelect" class="field text-xs sm:text-sm py-2 w-full bg-slate-900 border-white/10 text-white font-medium" title="Arrange nominal roll by department, class, or serial">
              <option value="dept-class" selected>🏢 Arrange: Dept ➔ Class ➔ Sl. No</option>
              <option value="serial">🔢 Arrange: Serial Number</option>
              <option value="name">🔤 Arrange: Student Name (A–Z)</option>
            </select>
          </div>

          <!-- Department Filter -->
          <div class="md:col-span-2">
            <select id="deptFilter" class="field text-xs sm:text-sm py-2 w-full bg-slate-900 border-white/10 text-white">
              <option value="">All Depts (${u.length})</option>
              ${u.map(e=>`<option value="${F(e)}">${F(e)}</option>`).join(``)}
            </select>
          </div>

          <!-- Class Filter -->
          <div class="md:col-span-2">
            <select id="classFilter" class="field text-xs sm:text-sm py-2 w-full bg-slate-900 border-white/10 text-white">
              <option value="">All Classes</option>
            </select>
          </div>

          <!-- Reset Filter Button -->
          <div class="md:col-span-1 flex justify-end">
            <button id="btnClearFilters" class="btn btn-secondary text-xs px-2.5 py-2 w-full text-slate-400 hover:text-white" title="Reset all filters">
              ✕ Reset
            </button>
          </div>
        </div>

        <!-- Filter info summary & items per page -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-white/5 text-xs text-slate-400">
          <div id="filterSummaryText">
            Loading voters...
          </div>
          <div class="flex items-center gap-1.5 font-mono text-slate-500">
            <span>📄 50 entries per page</span>
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <div class="glass rounded-xl overflow-hidden shadow-2xl">
        <div class="overflow-x-auto">
          <table class="data-table">
            <thead><tr>
              <th class="w-24 text-center">${a?`Draft Sl. No`:`Sl. No`}</th>
              <th>Admission No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Department</th>
            </tr></thead>
            <tbody id="rollTableBody"></tbody>
          </table>
        </div>

        <!-- Pagination Controls Footer -->
        <div id="paginationBar" class="p-4 border-t border-white/10 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div id="paginationInfo">Showing 0 of 0 students</div>
          <div id="paginationControls" class="flex items-center gap-1 flex-wrap justify-center"></div>
        </div>
      </div>
    </div>
  `;let b=t=>{let n=e.querySelector(`#classFilter`),r=d(t);r.includes(m)||(m=``),n.innerHTML=`
      <option value="">🎓 All Classes (${r.length})</option>
      ${r.map(e=>`<option value="${F(e)}" ${e===m?`selected`:``}>${F(e)}</option>`).join(``)}
    `};b(``);let x=()=>{let t=y(),n=Math.max(1,Math.ceil(t.length/50));g>n&&(g=n),g<1&&(g=1);let r=(g-1)*50,i=Math.min(r+50,t.length),o=t.slice(r,i),s=e.querySelector(`#rollTableBody`);o.length===0?s.innerHTML=`
        <tr>
          <td colspan="5" class="text-center py-12 text-slate-500">
            <div class="text-3xl mb-2">🔍</div>
            <p class="text-slate-300 font-medium text-sm">No students found</p>
            <p class="text-xs text-slate-500 mt-1">Try broadening your search term or resetting the class/department filters.</p>
          </td>
        </tr>`:s.innerHTML=o.map(e=>`
        <tr>
          <td class="text-center font-bold font-mono ${a?`text-amber-400`:`text-indigo-400`}">${F(v(e[`Nominal Roll Serial Number`]))}</td>
          <td class="font-mono text-xs text-slate-300">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
          <td class="text-white font-medium">${F(e.NAME)}</td>
          <td class="text-slate-300 text-sm">${F(e.CLASS)}</td>
          <td class="text-slate-400 text-xs">${F(e.Dept||`–`)}</td>
        </tr>
      `).join(``);let c=e.querySelector(`#filterSummaryText`),l=!!(f||p||m),u=[];p&&u.push(`Dept: <strong>${F(p)}</strong>`),m&&u.push(`Class: <strong>${F(m)}</strong>`),f&&u.push(`Search: "<strong>${F(f)}</strong>"`),c.innerHTML=`
      Showing <strong class="text-white">${t.length?r+1:0}</strong> to <strong class="text-white">${i}</strong> of <strong class="text-white">${t.length}</strong> students
      ${l?`<span class="text-indigo-300/80 ml-1">(${u.join(`, `)})</span>`:``}
    `;let d=e.querySelector(`#paginationInfo`);d.innerHTML=`Page <strong class="text-white">${g}</strong> of <strong class="text-white">${n}</strong> (${t.length} total students)`;let h=e.querySelector(`#paginationControls`);if(n<=1){h.innerHTML=``;return}let _=`
      <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="1" ${g===1?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="First Page">« First</button>
      <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="${g-1}" ${g===1?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="Previous Page">‹ Prev</button>
    `,b=[];for(let e=1;e<=n;e++)(e===1||e===n||e>=g-2&&e<=g+2)&&b.push(e);let x=0;b.forEach(e=>{x&&e-x>1&&(_+=`<span class="px-1 text-slate-500 font-bold">…</span>`),_+=`
        <button class="btn btn-sm px-3 py-1 text-xs font-mono rounded-lg pg-btn transition-colors ${e===g?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`btn-secondary text-slate-300 hover:text-white`}" data-page="${e}">
          ${e}
        </button>
      `,x=e}),_+=`
      <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="${g+1}" ${g===n?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="Next Page">Next ›</button>
      <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="${n}" ${g===n?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="Last Page">Last »</button>
    `,h.innerHTML=_};x();let S=e.querySelector(`#searchInput`);S.addEventListener(`input`,e=>{f=e.target.value.trim(),g=1,x()});let C=e.querySelector(`#deptFilter`);C.addEventListener(`change`,e=>{p=e.target.value,b(p),g=1,x()}),e.querySelector(`#classFilter`).addEventListener(`change`,e=>{m=e.target.value,g=1,x()});let w=e.querySelector(`#arrangeSelect`);w&&w.addEventListener(`change`,e=>{h=e.target.value,g=1,x()}),e.querySelector(`#btnClearFilters`).addEventListener(`click`,()=>{f=``,p=``,m=``,h=`dept-class`,g=1,S.value=``,C.value=``,w&&(w.value=`dept-class`),b(``),x(),L(`Filters reset.`,`info`)}),e.querySelector(`#paginationControls`).addEventListener(`click`,t=>{let n=t.target.closest(`.pg-btn`);if(!n||n.disabled)return;let r=Number(n.dataset.page);r&&r!==g&&(g=r,x(),e.querySelector(`#rollTableBody`).scrollIntoView({behavior:`smooth`,block:`nearest`}))})}async function ht(e){let t=H();t&&(U(e,`nominal-roll`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading nominal roll...</p></div>
  `),await Z(e.querySelector(`#adminMain`),t))}async function Z(e,t){if(e){e.innerHTML=`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading nominal roll...</p></div>
  `;try{let[n,r,i]=await Promise.all([C.getNominalRoll().catch(()=>[]),C.adminGetSettings(t),C.adminGetRollCorrections(t).catch(()=>[])]);gt(e,t,n,r,i)}catch(t){e.innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function gt(e,t,n,r,i=[]){let a=r.nominalRollFinalized===`true`||r.isRollFinalized===`true`,o=!a&&r.draftRollPublished===`true`,s=!a&&!o,c=[...n],l=e=>{let t=String(e[`Nominal Roll Serial Number`]||e.serial_number||e.SL_NO||e[`SL. NO`]||``),n=parseInt(t.replace(/\D/g,``),10);return isNaN(n)?999999999:n};c.sort((e,t)=>l(e)-l(t));let u=``,d=`dept-class`,f=1,p=`cards`,m=e=>{let t=String(e||``).toUpperCase().trim();return t.includes(`RESEARCH`)||t.includes(`PH.D`)||t.includes(`PHD`)?6e3:/^I\s+M(SC|A|COM|BA|CA)/.test(t)||/^I\s+PG/.test(t)?4e3:/^II\s+M(SC|A|COM|BA|CA)/.test(t)||/^II\s+PG/.test(t)?5e3:/^III\s+M(SC|A|COM|BA|CA)/.test(t)?5500:/^I\s+(B|UG)/.test(t)||/^1ST\s+YEAR/.test(t)?1e3:/^II\s+(B|UG)/.test(t)||/^2ND\s+YEAR/.test(t)?2e3:/^III\s+(B|UG)/.test(t)||/^3RD\s+YEAR/.test(t)?3e3:3500},h=[...new Set(n.map(e=>String(e.CLASS).trim()).filter(Boolean))].sort(),g=[...new Set(n.map(e=>String(e.Dept||``).trim()).filter(e=>e&&e!==`-`&&e!==`–`))].sort(),_=a?`
    <div id="uploadPanel" class="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div class="w-full flex items-center justify-between px-6 py-4 bg-white/5 opacity-80 cursor-not-allowed">
        <div class="flex items-center gap-3">
          <span class="text-2xl">🔒</span>
          <div class="text-left">
            <div class="text-slate-300 font-bold text-sm flex items-center gap-2">
              Upload New Nominal Roll
              <span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] py-0.5 px-2">LOCKED</span>
            </div>
            <div class="text-slate-400 text-xs">Uploading or replacing the roll is disabled while Nominal Roll is finalized. Unfinalize first to upload new data.</div>
          </div>
        </div>
      </div>
    </div>
  `:`
    <div id="uploadPanel" class="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <button id="toggleUploadPanel" class="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors">
        <div class="flex items-center gap-3">
          <span class="text-2xl">📤</span>
          <div class="text-left">
            <div class="text-white font-bold text-sm">Upload New Nominal Roll</div>
            <div class="text-slate-400 text-xs">Replace entire roll from CSV — resets all nominations & results</div>
          </div>
        </div>
        <span id="uploadChevron" class="text-slate-400 text-lg transition-transform duration-200">▼</span>
      </button>

      <div id="uploadPanelBody" class="hidden border-t border-white/10">
        <div class="p-6 space-y-6">

          <!-- Step 1: Download Template -->
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
            <div>
              <div class="text-white font-bold text-sm mb-1">📥 Step 1 — Download the CSV Template</div>
              <div class="text-slate-400 text-xs">The template contains both Format 1 (Class) and Format 2 (Year/Stream) examples.<br><strong>CRITICAL:</strong> Keep ONLY the header row of the format you want to use. Delete ALL other sample rows and titles before saving.</div>
            </div>
            <button id="btnDownloadTemplate" class="btn btn-secondary shrink-0">
              <span id="templateBtnText">⬇️ Download Template</span>
            </button>
          </div>

          <!-- Step 2: Pick CSV File -->
          <div>
            <div class="text-white font-bold text-sm mb-3">📂 Step 2 — Select Your CSV File</div>
            <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-indigo-400/50 hover:bg-indigo-500/5 transition-all group">
              <div class="text-center">
                <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">📁</div>
                <div class="text-slate-400 text-sm" id="filePickerLabel">Click to select a .csv file</div>
              </div>
              <input type="file" id="csvFileInput" accept=".csv" class="hidden">
            </label>
          </div>

          <!-- Preview (hidden until file selected) -->
          <div id="csvPreview" class="hidden space-y-4">
            <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-sm">
              <div class="text-emerald-300 font-bold mb-2">✅ File Parsed Successfully</div>
              <div id="csvSummary" class="text-slate-300 space-y-1 text-xs"></div>
            </div>

            <!-- Roll Update Notice -->
            <div class="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
              <div class="text-indigo-300 font-bold text-sm mb-2">🔄 Nominal Roll Update & Automatic Re-mapping</div>
              <ul class="text-indigo-200/90 text-xs space-y-1.5 list-disc list-inside">
                <li>The Nominal Roll student voter records will be <strong>replaced</strong> with the uploaded CSV data</li>
                <li><strong>Existing Nominations are SAFELY PRESERVED:</strong> All candidates, proposers, and seconders will be <strong>automatically re-mapped</strong> using their Admission Numbers!</li>
                <li>Serial numbers for candidates, proposers, and seconders will be recalculated based on the new roll</li>
                <li>Draft and finalized roll publication flags will be reset so you can review before publishing</li>
              </ul>
            </div>

            <!-- Confirmation -->
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Type <span class="text-indigo-400 font-mono">CONFIRM</span> to upload
                </label>
                <input type="text" id="confirmResetText" class="field font-mono tracking-widest uppercase" placeholder="CONFIRM" autocomplete="off">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Re-enter Admin Password</label>
                <input type="password" id="confirmPwd" class="field" placeholder="Admin password" autocomplete="current-password">
              </div>
              <button id="btnUploadRoll" class="btn w-full py-3 text-sm font-bold opacity-50 cursor-not-allowed" disabled
                style="background: linear-gradient(135deg, #4f46e5, #4338ca); color: white; border: none;">
                📤 Upload Roll & Auto-Remap Nominations
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,v=()=>{let n=c.filter(e=>[e.NAME,e.CLASS,e[`ADMISION NO`]||e[`ADMISSION NO`],e[`Nominal Roll Serial Number`],e.Dept].some(e=>String(e||``).toLowerCase().includes(u.toLowerCase())));d===`dept-class`?n.sort((e,t)=>{let n=String(e.Dept||``).trim().toUpperCase(),r=String(t.Dept||``).trim().toUpperCase();if(n!==r)return n.localeCompare(r);let i=String(e.CLASS||``).trim().toUpperCase(),a=String(t.CLASS||``).trim().toUpperCase(),o=m(i),s=m(a);if(o!==s)return o-s;if(i!==a)return i.localeCompare(a);let c=l(e),u=l(t);return c===u?String(e.NAME||``).trim().toUpperCase().localeCompare(String(t.NAME||``).trim().toUpperCase()):c-u}):d===`name`?n.sort((e,t)=>String(e.NAME||``).trim().toUpperCase().localeCompare(String(t.NAME||``).trim().toUpperCase())):n.sort((e,t)=>l(e)-l(t));let y=Math.max(1,Math.ceil(n.length/50));f>y&&(f=y),f<1&&(f=1);let b=(f-1)*50,x=Math.min(b+50,n.length),S=n.slice(b,x),w=``;if(y>1){w=`
        <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="1" ${f===1?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="First Page">« First</button>
        <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="${f-1}" ${f===1?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="Previous Page">‹ Prev</button>
      `;let e=[];for(let t=1;t<=y;t++)(t===1||t===y||t>=f-2&&t<=f+2)&&e.push(t);let t=0;e.forEach(e=>{t&&e-t>1&&(w+=`<span class="px-1 text-slate-500 font-bold">…</span>`),w+=`
          <button class="btn btn-sm px-3 py-1 text-xs font-mono rounded-lg pg-btn transition-colors ${e===f?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`btn-secondary text-slate-300 hover:text-white`}" data-page="${e}">
            ${e}
          </button>
        `,t=e}),w+=`
        <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="${f+1}" ${f===y?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="Next Page">Next ›</button>
        <button class="btn btn-sm btn-secondary px-2.5 py-1 text-xs pg-btn" data-page="${y}" ${f===y?`disabled style="opacity:0.35;cursor:not-allowed;"`:``} title="Last Page">Last »</button>
      `}e.innerHTML=`
      <div class="page-enter space-y-6">
        ${_}

        <!-- Publication Stage Status Banner -->
        <div class="glass rounded-xl p-4 border ${a?`border-emerald-500/30 bg-emerald-500/10`:o?`border-amber-500/30 bg-amber-500/10`:`border-slate-700 bg-slate-800/40`} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${a?`🔒`:o?`📋`:`⏳`}</span>
            <div>
              <div class="font-bold text-sm flex items-center gap-2 ${a?`text-emerald-300`:o?`text-amber-300`:`text-slate-300`}">
                ${a?`Nominal Roll Finalized & Locked`:o?`Draft Nominal Roll Published`:`Nominal Roll Unpublished`}
                <span class="badge ${a?`badge-valid`:o?`badge-pending`:`bg-slate-700 text-slate-300`} text-[10px] py-0.5 px-2">
                  ${a?`PUBLIC (1, 2, 3...)`:o?`PUBLIC (D1, D2, D3...)`:`HIDDEN FROM PUBLIC`}
                </span>
              </div>
              <div class="text-slate-400 text-xs mt-0.5">
                ${a?`Voter list is locked and read-only. Standard 1, 2, 3... serial numbers are active.`:o?`Draft list is live to students with provisional D1, D2... Sl. numbers. Editing is enabled and student correction requests can be submitted.`:`The voter list is currently not published to the public. Publish draft when ready for student review.`}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${s?`
              <button id="btnPublishDraft" class="btn btn-sm btn-primary bg-amber-600 hover:bg-amber-500 text-white font-medium">📢 Publish Draft Roll</button>
            `:``}
            ${o?`
              <button id="btnUnpublishDraft" class="btn btn-sm btn-secondary border-rose-500/30 text-rose-300 hover:bg-rose-500/20">🚫 Unpublish Draft</button>
            `:``}
            ${a?`
              <button id="btnUnfinalizeBanner" class="btn bg-rose-500/20 text-rose-300 border border-rose-500/50 hover:bg-rose-500/30 text-xs py-2 px-3">🔓 Unfinalize Roll</button>
            `:``}
          </div>
        </div>

        <!-- Student Correction Requests (if any exist) -->
        ${i&&i.length>0?`
          <div class="glass rounded-xl border border-amber-500/30 overflow-hidden shadow-lg">
            <div class="flex items-center justify-between p-4 bg-amber-500/10 cursor-pointer select-none" id="toggleCorrectionsPanel">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">📝</span>
                <div>
                  <strong class="text-white text-sm">Student Correction Requests</strong>
                  <span class="text-xs text-amber-300 ml-2">(${i.filter(e=>e.status===`Pending`).length} Pending / ${i.length} Total)</span>
                </div>
              </div>
              <span id="corrChevron" class="text-slate-400 text-sm">▼ View Requests</span>
            </div>
            <div id="correctionsPanelBody" class="p-4 space-y-3 bg-black/20 border-t border-amber-500/20 hidden">
              <!-- Mobile Card View for Corrections -->
              <div class="md:hidden space-y-3">
                ${i.map(e=>`
                  <div class="glass p-3.5 rounded-xl border border-amber-500/30 space-y-2 bg-slate-900/80">
                    <div class="flex items-center justify-between gap-2">
                      <span class="badge ${e.status===`Resolved`?`badge-valid`:e.status===`Dismissed`?`bg-slate-700 text-slate-400`:`badge-pending`} text-[10px]">
                        ${F(e.status)}
                      </span>
                      <span class="text-slate-400 font-mono text-[10px]">${e.timestamp?new Date(e.timestamp).toLocaleDateString():`–`}</span>
                    </div>
                    <div>
                      <div class="font-bold text-white text-sm">${F(e.student_name)}</div>
                      <div class="text-xs text-indigo-300 font-mono mt-0.5">Adm: <strong>${F(e.admission_no)}</strong> • ${F(e.class_name||`–`)} (${F(e.department||`–`)})</div>
                    </div>
                    <div class="text-xs bg-black/40 p-2.5 rounded-lg border border-white/10 space-y-1">
                      <div class="text-amber-300 font-semibold text-[11px]">📝 ${F(e.correction_type)}</div>
                      <div class="text-slate-300 leading-relaxed">${F(e.details)}</div>
                    </div>
                    ${e.contact_info?`<div class="text-[11px] text-slate-400">📞 Contact: ${F(e.contact_info)}</div>`:``}
                    <div class="flex gap-2 pt-1.5 border-t border-white/10">
                      ${e.status===`Resolved`?``:`<button class="btn btn-xs btn-success flex-1 resolve-corr py-1.5 font-medium" data-id="${F(e.id)}">✅ Resolve</button>`}
                      ${e.status===`Dismissed`?``:`<button class="btn btn-xs btn-secondary flex-1 dismiss-corr py-1.5 font-medium" data-id="${F(e.id)}">✕ Dismiss</button>`}
                    </div>
                  </div>
                `).join(``)}
              </div>

              <!-- Desktop Table View for Corrections -->
              <div class="hidden md:block overflow-x-auto">
                <table class="data-table text-xs">
                  <thead><tr>
                    <th>Date</th>
                    <th>Adm. No</th>
                    <th>Student Name</th>
                    <th>Class / Dept</th>
                    <th>Issue Type</th>
                    <th>Details</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr></thead>
                  <tbody>
                    ${i.map(e=>`
                      <tr>
                        <td class="whitespace-nowrap text-slate-400 font-mono text-[10px]">${e.timestamp?new Date(e.timestamp).toLocaleDateString():`–`}</td>
                        <td class="font-mono text-indigo-300 font-bold">${F(e.admission_no)}</td>
                        <td class="font-bold text-white">${F(e.student_name)}</td>
                        <td class="text-slate-300">${F(e.class_name||`–`)} / ${F(e.department||`–`)}</td>
                        <td><span class="badge badge-pending text-[10px]">${F(e.correction_type)}</span></td>
                        <td class="max-w-xs text-slate-300">${F(e.details)}</td>
                        <td class="text-slate-400 text-[10px]">${F(e.contact_info||`–`)}</td>
                        <td><span class="badge ${e.status===`Resolved`?`badge-valid`:e.status===`Dismissed`?`bg-slate-700 text-slate-400`:`badge-pending`} text-[10px]">${F(e.status)}</span></td>
                        <td>
                          <div class="flex gap-1.5">
                            ${e.status===`Resolved`?``:`<button class="btn btn-xs btn-success resolve-corr" data-id="${F(e.id)}">Resolve</button>`}
                            ${e.status===`Dismissed`?``:`<button class="btn btn-xs btn-secondary dismiss-corr" data-id="${F(e.id)}">Dismiss</button>`}
                          </div>
                        </td>
                      </tr>
                    `).join(``)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `:``}

        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 class="text-xl font-bold text-white">Nominal Roll Management</h3>
            <p class="text-slate-400 text-sm">Manage student data, review draft edits, and finalize the official voter list.</p>
          </div>
          <div class="flex flex-wrap gap-2">
            ${s?`<button id="btnPublishDraftTop" class="btn btn-warning bg-amber-600 hover:bg-amber-500 text-white">📢 Publish Draft Roll</button>`:``}
            ${o?`<button id="btnUnpublishDraftTop" class="btn btn-secondary border-rose-500/30 text-rose-300 hover:bg-rose-500/20">🚫 Unpublish Draft</button>`:``}
            ${a?``:`<button id="btnAddNew" class="btn btn-success">➕ Add Student</button>`}
            <button id="btnPrintRoll" class="btn btn-secondary">🖨️ Print Roll</button>
            ${!a&&c.length>0?`<button id="btnFixSerialsDept" class="btn bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 text-xs py-2 px-3 flex items-center gap-1.5" title="Fix serial numbers department-by-department finishing each department at a time">🔢 Fix Sl. No (Dept-wise)</button>`:``}
            ${a?``:`<button id="btnRemapNoms" class="btn bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 text-xs py-2 px-3">🔄 Re-map Nominations</button>`}
            ${!a&&c.length>0?`<button id="btnClearRoll" class="btn bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 text-xs py-2 px-3">🗑️ Clear Roll Data</button>`:``}
            ${a?``:`<button id="btnFinalize" class="btn btn-primary">🔒 Finalize & Lock Roll</button>`}
            ${a?`<span class="badge badge-valid py-2 px-4 flex items-center gap-2">✅ ROLL FINALIZED</span>`:``}
            ${a?`<button id="btnUnfinalize" class="btn bg-rose-500/20 text-rose-300 border border-rose-500/50 hover:bg-rose-500/30">🔓 Unfinalize</button>`:``}
          </div>
        </div>

        <div class="glass rounded-xl p-4 flex flex-col md:flex-row gap-3 items-center w-full shadow-lg mb-2">
          <div class="relative flex-1 w-full">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
            <input type="text" id="searchInput" class="field w-full pl-10 bg-black/20 focus:bg-black/40 transition-colors text-sm" placeholder="Search by student name, class, admission no, or serial..." value="${F(u)}">
          </div>
          <div class="w-full md:w-60 shrink-0">
            <select id="adminArrangeSelect" class="field text-xs bg-slate-900 border-white/10 text-white w-full py-2">
              <option value="dept-class" ${d===`dept-class`?`selected`:``}>🏢 Arrange: Dept ➔ Class ➔ Sl. No</option>
              <option value="serial" ${d===`serial`?`selected`:``}>🔢 Arrange: Serial Number</option>
              <option value="name" ${d===`name`?`selected`:``}>🔤 Arrange: Student Name (A–Z)</option>
            </select>
          </div>
          <div class="flex items-center rounded-lg bg-black/40 p-1 border border-white/10 shrink-0 self-end md:self-center">
            <button type="button" id="btnModeCards" class="btn btn-xs py-1.5 px-3 rounded text-xs flex items-center gap-1.5 transition-all ${p===`cards`?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`text-slate-400 hover:text-white`}" title="Card View (Optimized for Mobile/Phone)">
              <span>📇</span> <span>Cards</span>
            </button>
            <button type="button" id="btnModeTable" class="btn btn-xs py-1.5 px-3 rounded text-xs flex items-center gap-1.5 transition-all ${p===`table`?`bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/40`:`text-slate-400 hover:text-white`}" title="Table View">
              <span>📑</span> <span>Table</span>
            </button>
          </div>
          <div class="text-slate-400 text-xs md:w-auto w-full text-right shrink-0">
            Showing <strong class="text-white">${n.length?b+1:0}</strong> to <strong class="text-white">${x}</strong> of <strong class="text-white">${n.length}</strong> students
          </div>
        </div>

        <div class="glass rounded-xl overflow-hidden shadow-2xl" id="adminRollListView">
          ${p===`cards`?`
            <!-- Card View (Mobile-First Responsive Grid) -->
            <div class="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" id="adminRollCards">
              ${S.length?S.map(e=>`
                <div class="bg-slate-900/70 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-3 shadow-lg">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between gap-2">
                      <span class="badge ${o?`badge-pending text-amber-300 border border-amber-500/30`:`bg-indigo-500/20 text-indigo-300 border border-indigo-500/40`} font-mono font-bold text-xs py-1 px-2.5">
                        ${o?`Draft Sl. D`:`Sl. #`}${F(e[`Nominal Roll Serial Number`])}
                      </span>
                      <span class="font-mono text-xs text-slate-300 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                        Adm: <strong class="text-indigo-300">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</strong>
                      </span>
                    </div>
                    
                    <div>
                      <h4 class="text-white font-bold text-base leading-snug break-words">${F(e.NAME)}</h4>
                      <div class="text-slate-300 text-xs mt-2 space-y-1">
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="text-slate-400 font-medium">🎓 Class:</span>
                          <span class="text-slate-200 font-medium">${F(e.CLASS)}</span>
                        </div>
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="text-slate-400 font-medium">🏢 Dept:</span>
                          <span class="text-slate-300">${F(e.Dept||`–`)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  ${a?``:`
                    <div class="flex items-center gap-2 pt-2.5 border-t border-white/10">
                      <button type="button" class="btn btn-sm btn-secondary text-indigo-300 hover:text-white edit-student flex-1 py-1.5 text-xs flex items-center justify-center gap-1.5 font-medium border-indigo-500/30 hover:border-indigo-400"
                        data-serial="${F(e[`Nominal Roll Serial Number`])}"
                        data-name="${F(e.NAME)}"
                        data-class="${F(e.CLASS)}"
                        data-adm="${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||``)}"
                        data-dept="${F(e.Dept||``)}">
                        ✏️ Edit
                      </button>
                      <button type="button" class="btn btn-sm bg-rose-500/15 text-rose-300 hover:bg-rose-600 hover:text-white border border-rose-500/30 delete-student flex-1 py-1.5 text-xs flex items-center justify-center gap-1.5 font-medium"
                        data-serial="${e[`Nominal Roll Serial Number`]}">
                        🗑️ Delete
                      </button>
                    </div>
                  `}
                </div>
              `).join(``):`
                <div class="col-span-full text-center py-12 text-slate-500">
                  <div class="text-3xl mb-2">🔍</div>
                  <p class="text-slate-300 font-medium text-sm">No students found</p>
                  <p class="text-xs text-slate-500 mt-1">Try broadening your search term.</p>
                </div>
              `}
            </div>
          `:`
            <!-- Table View (Desktop Table) -->
            <div class="overflow-x-auto">
              <table class="data-table">
                <thead><tr>
                  <th class="w-24 text-center">${o?`Draft Sl. No`:`Sl. No`}</th>
                  <th>Admission No</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Department</th>
                  ${a?``:`<th>Actions</th>`}
                </tr></thead>
                <tbody id="adminRollTableBody">
                  ${S.length?S.map(e=>`
                    <tr>
                      <td class="text-center font-bold font-mono ${o?`text-amber-400`:`text-indigo-400`}">${o?`D`:``}${F(e[`Nominal Roll Serial Number`])}</td>
                      <td class="font-mono text-xs">${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||`–`)}</td>
                      <td class="text-white font-medium">${F(e.NAME)}</td>
                      <td class="text-slate-300 text-sm">${F(e.CLASS)}</td>
                      <td class="text-slate-400 text-xs">${F(e.Dept||`–`)}</td>
                      ${a?``:`
                        <td>
                          <button class="text-indigo-400 hover:text-indigo-300 edit-student mr-3" data-serial="${F(e[`Nominal Roll Serial Number`])}" data-name="${F(e.NAME)}" data-class="${F(e.CLASS)}" data-adm="${F(e[`ADMISION NO`]||e[`ADMISSION NO`]||``)}" data-dept="${F(e.Dept||``)}">Edit</button>
                          <button class="text-rose-400 hover:text-rose-300 delete-student" data-serial="${e[`Nominal Roll Serial Number`]}">Delete</button>
                        </td>
                      `}
                    </tr>
                  `).join(``):`<tr><td colspan="${a?`5`:`6`}" class="text-center py-10 text-slate-500">No students found matching your search.</td></tr>`}
                </tbody>
              </table>
            </div>
          `}

          <!-- Pagination Controls Footer -->
          <div id="adminPaginationBar" class="p-4 border-t border-white/10 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div id="adminPaginationInfo">Page <strong class="text-white">${f}</strong> of <strong class="text-white">${y}</strong> (${n.length} total students)</div>
            <div id="adminPaginationControls" class="flex items-center gap-1 flex-wrap justify-center">
              ${y>1?w:``}
            </div>
          </div>
        </div>
      </div>

      <!-- Add / Edit Student Modal -->
      ${a?``:`
      <div id="addModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4">
        <div class="glass w-full max-w-md rounded-2xl p-6 shadow-2xl border border-white/10">
          <h4 id="modalTitle" class="text-xl font-bold text-white mb-4">Add New Student</h4>
          <div class="space-y-4">
            <input type="hidden" id="editOldSerial" value="">
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name</label>
              <input type="text" id="addName" class="field" placeholder="Student Name">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Class Name</label>
              <select id="addClass" class="field">
                <option value="">-- Select Class --</option>
                ${h.map(e=>`<option value="${F(e)}">${F(e)}</option>`).join(``)}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Admission No</label>
              <input type="text" id="addAdm" class="field" placeholder="Adm No">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Department</label>
              <select id="addDept" class="field">
                <option value="">-- Select Department --</option>
                ${g.map(e=>`<option value="${F(e)}">${F(e)}</option>`).join(``)}
              </select>
            </div>
          </div>
          <div class="flex gap-2 mt-8">
            <button id="btnCancelAdd" class="btn btn-secondary flex-1">Cancel</button>
            <button id="btnConfirmAdd" class="btn btn-primary flex-1">Save Student</button>
          </div>
        </div>
      </div>
      `}

      <!-- Unfinalize Modal -->
      <div id="unfinalizeModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4">
        <div class="glass w-full max-w-md rounded-2xl p-6 shadow-2xl border border-white/10">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl font-bold border border-rose-500/30">🔓</div>
            <div>
              <h4 class="text-xl font-bold text-white">Unfinalize Nominal Roll</h4>
              <p class="text-slate-400 text-xs">Unlock roll for editing, adding, or deleting</p>
            </div>
          </div>
          <div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 my-4 text-xs text-amber-200 leading-relaxed">
            ⚠️ <strong>Admin Verification:</strong> Enter your Admin Password below to unlock the Nominal Roll. (No OTP required).
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Admin Password</label>
              <input type="password" id="unfinalizePwdInput" class="field w-full" placeholder="Enter Admin Password" autocomplete="current-password">
            </div>
            <div id="unfinalizeError" class="text-rose-400 text-xs font-medium hidden"></div>
          </div>
          <div class="flex gap-2 mt-6">
            <button type="button" id="btnCancelUnfinalize" class="btn btn-secondary flex-1">Cancel</button>
            <button type="button" id="btnConfirmUnfinalize" class="btn bg-rose-600 hover:bg-rose-500 text-white flex-1 font-bold">Confirm & Unlock</button>
          </div>
        </div>
      </div>

      <!-- Clear Nominal Roll Modal -->
      <div id="clearRollModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4">
        <div class="glass w-full max-w-md rounded-2xl p-6 shadow-2xl border border-rose-500/30">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl font-bold border border-rose-500/30">🗑️</div>
            <div>
              <h4 class="text-xl font-bold text-white">Clear Nominal Roll Alone</h4>
              <p class="text-slate-400 text-xs">Delete student records without deleting nominations</p>
            </div>
          </div>
          
          <div class="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-3 my-3 text-xs text-indigo-200 leading-relaxed space-y-1.5">
            <div class="font-bold text-indigo-300 flex items-center gap-1.5">
              <span>🛡️</span> Nominations Safety Guarantee
            </div>
            <div>This will clear all <strong>${c.length}</strong> student records from the Nominal Roll <strong>alone</strong>.</div>
            <div class="text-indigo-200/80">Existing nominations will <strong>NOT</strong> be deleted. When you upload a new nominal roll or add students, the system will <strong>automatically re-map</strong> candidate, proposer, and seconder serial numbers using their Admission Numbers.</div>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Type <span class="text-rose-400 font-mono">CLEAR</span> to confirm
              </label>
              <input type="text" id="clearRollConfirmText" class="field w-full font-mono uppercase" placeholder="CLEAR" autocomplete="off">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Admin Password</label>
              <input type="password" id="clearRollPwdInput" class="field w-full" placeholder="Enter Admin Password" autocomplete="current-password">
            </div>
            <div id="clearRollError" class="text-rose-400 text-xs font-medium hidden"></div>
          </div>

          <div class="flex gap-2 mt-6">
            <button type="button" id="btnCancelClearRoll" class="btn btn-secondary flex-1">Cancel</button>
            <button type="button" id="btnConfirmClearRoll" class="btn bg-rose-600 hover:bg-rose-500 text-white flex-1 font-bold">🗑️ Clear Roll Data</button>
          </div>
        </div>
      </div>
    `,e.querySelector(`#searchInput`).oninput=t=>{u=t.target.value,f=1,v(),e.querySelector(`#searchInput`).focus();let n=e.querySelector(`#searchInput`).value;e.querySelector(`#searchInput`).value=``,e.querySelector(`#searchInput`).value=n};let T=e.querySelector(`#adminArrangeSelect`);T&&(T.onchange=e=>{d=e.target.value,f=1,v()});let E=e.querySelector(`#btnModeCards`);E&&(E.onclick=()=>{p!==`cards`&&(p=`cards`,v())});let D=e.querySelector(`#btnModeTable`);D&&(D.onclick=()=>{p!==`table`&&(p=`table`,v())});let O=e.querySelector(`#adminPaginationControls`);if(O&&(O.onclick=t=>{let n=t.target.closest(`.pg-btn`);if(!n||n.disabled)return;let r=Number(n.dataset.page);r&&r!==f&&(f=r,v(),e.querySelector(`#adminRollListView`)?.scrollIntoView({behavior:`smooth`,block:`nearest`}))}),!a){let n=(t,n={})=>{e.querySelector(`#modalTitle`).textContent=t?`Edit Student`:`Add New Student`,e.querySelector(`#editOldSerial`).value=t?n.serial:``,e.querySelector(`#addName`).value=n.name||``,e.querySelector(`#addClass`).value=n.class||``,e.querySelector(`#addAdm`).value=n.adm||``,e.querySelector(`#addDept`).value=n.dept||``,e.querySelector(`#addModal`).classList.remove(`hidden`)};e.querySelector(`#btnAddNew`)&&(e.querySelector(`#btnAddNew`).onclick=()=>n(!1)),e.querySelector(`#btnCancelAdd`)&&(e.querySelector(`#btnCancelAdd`).onclick=()=>e.querySelector(`#addModal`).classList.add(`hidden`)),e.querySelector(`#btnConfirmAdd`)&&(e.querySelector(`#btnConfirmAdd`).onclick=async n=>{let r={old_serial:e.querySelector(`#editOldSerial`).value,name:e.querySelector(`#addName`).value,class:e.querySelector(`#addClass`).value,admission_no:e.querySelector(`#addAdm`).value,dept:e.querySelector(`#addDept`).value};if(!r.name||!r.class)return L(`Please fill required fields.`,`warning`);I(n.target,!0,`Save Student`);try{r.old_serial?(await C.adminUpdateStudent(t,r),L(`Student updated.`,`success`)):(await C.adminAddStudent(t,r),L(`Student added.`,`success`)),e.querySelector(`#addModal`).classList.add(`hidden`),await Z(e,t)}catch(e){L(e.message,`error`),I(n.target,!1,`Save Student`)}}),e.querySelectorAll(`.edit-student`).forEach(e=>{e.onclick=()=>{n(!0,{serial:e.dataset.serial,name:e.dataset.name,class:e.dataset.class,adm:e.dataset.adm,dept:e.dataset.dept})}}),e.querySelectorAll(`.delete-student`).forEach(n=>{n.onclick=async()=>{if(confirm(`Delete student #${n.dataset.serial}?`))try{await C.adminDeleteStudent(t,n.dataset.serial),L(`Student removed.`,`success`),await Z(e,t)}catch(e){L(e.message,`error`)}}}),e.querySelector(`#toggleUploadPanel`)&&(e.querySelector(`#toggleUploadPanel`).onclick=()=>{let t=e.querySelector(`#uploadPanelBody`),n=e.querySelector(`#uploadChevron`);t&&t.classList.toggle(`hidden`),n&&(n.style.transform=t&&t.classList.contains(`hidden`)?``:`rotate(180deg)`)}),e.querySelector(`#btnDownloadTemplate`)&&(e.querySelector(`#btnDownloadTemplate`).onclick=async e=>{let n=e.currentTarget;I(n,!0,`Downloading...`);try{let e=await C.adminGetNominalRollTemplate(t),n=[e.headers.join(`,`)];e.rows.forEach(e=>{n.push(e.map(e=>{let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}).join(`,`))});let r=new Blob([n.join(`\r
`)],{type:`text/csv;charset=utf-8;`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`NominalRoll_Template.csv`,a.click(),URL.revokeObjectURL(i),L(`Template downloaded!`,`success`)}catch(e){L(e.message,`error`)}finally{I(n,!1,`⬇️ Download Template`)}});let r=null,i=[],a=[`Nominal Roll Serial Number`,`NAME`,`CLASS`,`ADMISION NO`,`Dept`],o=[`Nominal Roll Serial Number`,`NAME`,`YEAR`,`STREAM`,`ADMISION NO`,`Dept`];e.querySelector(`#csvFileInput`)&&(e.querySelector(`#csvFileInput`).onchange=t=>{let n=t.target.files[0];if(!n)return;e.querySelector(`#filePickerLabel`).textContent=`📄 ${n.name}`;let c=new FileReader;c.onload=t=>{let n=t.target.result.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).filter(e=>e.trim());if(n.length<2){L(`CSV file appears empty.`,`error`);return}let c=-1,l=`,`,u=e=>String(e||``).trim().replace(/^"|"$/g,``).toUpperCase().replace(/\s+/g,` `),d=e=>{let t=u(e);return t===`ADMISION NO`||t===`ADMISSION NO`||t===`ADMISION NUMBER`||t===`ADMISSION NUMBER`||t===`ADM NO`};for(let e=0;e<Math.min(n.length,20);e++){let t=n[e].includes(`	`)&&!n[e].includes(`,`)?`	`:`,`,r=n[e].split(t).map(u),s=r.some(e=>e===`NOMINAL ROLL SERIAL NUMBER`||e===`SERIAL NUMBER`||e===`SL. NO`||e===`SL NO`),f=r.includes(`NAME`),p=r.includes(`DEPT`)||r.includes(`DEPARTMENT`),m=r.some(d);r.includes(`CLASS`);let h=r.includes(`YEAR`),g=r.includes(`STREAM`);if(s&&f&&p&&m){c=e,l=t,i=h&&g?o:a;break}}if(c===-1){L(`Missing required columns. Please use one of the standard templates.`,`error`),e.querySelector(`#csvPreview`)?.classList.add(`hidden`);return}let f=n[c].split(l).map(e=>e.trim().replace(/^"|"$/g,``)).map(u),p;p=i===o?[f.findIndex(e=>e===`NOMINAL ROLL SERIAL NUMBER`||e===`SERIAL NUMBER`||e===`SL. NO`||e===`SL NO`),f.indexOf(`NAME`),f.indexOf(`YEAR`),f.indexOf(`STREAM`),f.findIndex(d),f.findIndex(e=>e===`DEPT`||e===`DEPARTMENT`)]:[f.findIndex(e=>e===`NOMINAL ROLL SERIAL NUMBER`||e===`SERIAL NUMBER`||e===`SL. NO`||e===`SL NO`),f.indexOf(`NAME`),f.indexOf(`CLASS`),f.findIndex(d),f.findIndex(e=>e===`DEPT`||e===`DEPARTMENT`)],r=n.slice(c+1).map(e=>{let t=[],n=``,r=!1;for(let i of e+l)i===`"`?r=!r:i===l&&!r?(t.push(n.trim()),n=``):n+=i;return p.map(e=>e>=0?t[e]??``:``)}).filter(e=>e[1]&&e[1].trim()!==``&&e[1].toUpperCase()!==`NAME`);let m=i.indexOf(`Dept`),h=[];if(i===a)h=[...new Set(r.map(e=>e[i.indexOf(`CLASS`)]))].sort();else{let e=e=>{let t=String(e||``).trim().toUpperCase();return t===`1`||t===`1ST`||t===`I`?`1ST YEAR`:t===`2`||t===`2ND`||t===`II`?`2ND YEAR`:t===`3`||t===`3RD`||t===`III`?`3RD YEAR`:t&&!t.includes(`YEAR`)?`${t} YEAR`:t};h=[...new Set(r.map(t=>`${e(t[i.indexOf(`YEAR`)])} ${t[i.indexOf(`STREAM`)]} ${t[m]}`.replace(/\s+/g,` `).trim()))].sort()}let g=[...new Set(r.map(e=>e[m]))].sort();e.querySelector(`#csvSummary`).innerHTML=`
              <div>👥 <strong class="text-white">${r.length}</strong> students detected using <strong>${i===a?`Legacy Format`:`Explicit Format`}</strong></div>
              <div>🏛️ <strong class="text-white">${g.length}</strong> departments: ${g.map(e=>`<span class="text-indigo-300">${F(e)}</span>`).join(`, `)}</div>
              <div>📚 <strong class="text-white">${h.length}</strong> unique classes found</div>
            `,e.querySelector(`#csvPreview`)?.classList.remove(`hidden`),s()},c.readAsText(n)});let s=()=>{let t=e.querySelector(`#confirmResetText`)?.value.trim().toUpperCase()||``,n=t===`RESET`||t===`CONFIRM`,i=(e.querySelector(`#confirmPwd`)?.value.trim()||``)!==``,a=e.querySelector(`#btnUploadRoll`);if(!a)return;let o=n&&i&&r&&r.length>0;a.disabled=!o,a.classList.toggle(`opacity-50`,!o),a.classList.toggle(`cursor-not-allowed`,!o)};e.querySelector(`#confirmResetText`)?.addEventListener(`input`,s),e.querySelector(`#confirmPwd`)?.addEventListener(`input`,s),e.querySelector(`#btnUploadRoll`)&&(e.querySelector(`#btnUploadRoll`).onclick=async n=>{let a=e.querySelector(`#confirmPwd`).value.trim();if(!r||r.length===0)return L(`No data to upload.`,`error`);if(confirm(`CONFIRMATION\n\nYou are about to update the Nominal Roll with ${r.length} students.\nExisting nominations will be preserved and automatically re-mapped by Admission Number.\n\nProceed?`)){I(n.target,!0,`Uploading & Re-mapping...`);try{let n=await C.adminUploadNominalRoll(a,{headers:i,rows:r}),o=n.remappedNominations===void 0?``:` Re-mapped ${n.remappedNominations} existing nominations.`;L(`✅ Nominal Roll updated with ${n.count||r.length} students.${o}`,`success`),await Z(e,t)}catch(e){L(e.message,`error`),I(n.target,!1,`📤 Upload Roll & Auto-Remap Nominations`)}}});let c=()=>{let t=e.querySelector(`#clearRollModal`),n=e.querySelector(`#clearRollConfirmText`),r=e.querySelector(`#clearRollPwdInput`),i=e.querySelector(`#clearRollError`);n&&(n.value=``),r&&(r.value=``),i&&(i.textContent=``,i.classList.add(`hidden`)),t&&(t.classList.remove(`hidden`),n&&setTimeout(()=>n.focus(),50))};e.querySelector(`#btnClearRoll`)&&(e.querySelector(`#btnClearRoll`).onclick=c),e.querySelector(`#btnCancelClearRoll`)&&(e.querySelector(`#btnCancelClearRoll`).onclick=()=>{e.querySelector(`#clearRollModal`)?.classList.add(`hidden`)}),e.querySelector(`#btnConfirmClearRoll`)&&(e.querySelector(`#btnConfirmClearRoll`).onclick=async n=>{let r=(e.querySelector(`#clearRollConfirmText`)?.value||``).trim().toUpperCase(),i=(e.querySelector(`#clearRollPwdInput`)?.value||``).trim(),a=e.querySelector(`#clearRollError`),o=n.target;if(r!==`CLEAR`){a&&(a.textContent=`❌ Please type CLEAR to confirm deletion.`,a.classList.remove(`hidden`)),e.querySelector(`#clearRollConfirmText`)?.focus();return}if(!i){a&&(a.textContent=`❌ Please enter your admin password.`,a.classList.remove(`hidden`)),e.querySelector(`#clearRollPwdInput`)?.focus();return}I(o,!0,`Clearing Roll Data...`),a&&a.classList.add(`hidden`);try{let n=await C.adminClearNominalRoll(i);L(`🗑️ Cleared ${n.clearedCount} students from Nominal Roll. ${n.preservedNominations||0} nominations remain preserved.`,`success`),e.querySelector(`#clearRollModal`)?.classList.add(`hidden`),await Z(e,t)}catch(e){a&&(a.textContent=`❌ ${e.message}`,a.classList.remove(`hidden`)),I(o,!1,`🗑️ Clear Roll Data`)}}),e.querySelector(`#btnFixSerialsDept`)&&(e.querySelector(`#btnFixSerialsDept`).onclick=async n=>{let r=n.currentTarget;if(confirm(`🔢 Fix Serial Numbers Department-wise?

This will reassign continuous 1..N serial numbers finishing each department completely:
• Botany (I UG -> II UG -> III UG)
• Chemistry (I UG -> II UG -> III UG)
• Commerce ... through Zoology

Any existing nominations will be automatically remapped using Admission Numbers.

Do you want to proceed?`)){I(r,!0,`Fixing Sl. No...`);try{let n=await C.adminFixSerialNumbersDeptWise(t);L(`🔢 Sequential Sl. No successfully assigned for ${n.count} students across all departments! ${n.remappedNominations||0} nominations re-mapped.`,`success`),await Z(e,t)}catch(e){L(e.message,`error`),I(r,!1,`🔢 Fix Sl. No (Dept-wise)`)}}}),e.querySelector(`#btnRemapNoms`)&&(e.querySelector(`#btnRemapNoms`).onclick=async n=>{I(n.target,!0,`Re-mapping...`);try{let n=await C.adminRemapNominations(t);L(`🔄 Re-mapping complete: ${n.remapped||0} of ${n.total||0} nominations re-linked to Nominal Roll.`,`success`),await Z(e,t)}catch(e){L(e.message,`error`),I(n.target,!1,`🔄 Re-map Nominations`)}})}let k=async n=>{I(n.target,!0,`Publishing Draft...`);try{await C.adminPublishDraftRoll(t),L(`Draft Nominal Roll published! Serial numbers are set to D1, D2...`,`success`),await Z(e,t)}catch(e){L(e.message,`error`),I(n.target,!1,`📢 Publish Draft Roll`)}};e.querySelector(`#btnPublishDraft`)&&(e.querySelector(`#btnPublishDraft`).onclick=k),e.querySelector(`#btnPublishDraftTop`)&&(e.querySelector(`#btnPublishDraftTop`).onclick=k);let A=async n=>{if(confirm(`Unpublish the Draft Nominal Roll? Public visitors will no longer be able to see it.`)){I(n.target,!0,`Unpublishing...`);try{await C.adminUnpublishDraftRoll(t),L(`Draft Nominal Roll unpublished.`,`success`),await Z(e,t)}catch(e){L(e.message,`error`),I(n.target,!1,`🚫 Unpublish Draft`)}}};e.querySelector(`#btnUnpublishDraft`)&&(e.querySelector(`#btnUnpublishDraft`).onclick=A),e.querySelector(`#btnUnpublishDraftTop`)&&(e.querySelector(`#btnUnpublishDraftTop`).onclick=A);let j=e.querySelector(`#toggleCorrectionsPanel`);j&&(j.onclick=()=>{let t=e.querySelector(`#correctionsPanelBody`),n=e.querySelector(`#corrChevron`);if(t){let e=t.classList.toggle(`hidden`);n&&(n.textContent=e?`▼ View Requests`:`▲ Hide Requests`)}}),e.querySelectorAll(`.resolve-corr`).forEach(n=>{n.onclick=async()=>{let r=n.dataset.id;try{await C.adminUpdateRollCorrection(t,r,`Resolved`),L(`Correction marked as Resolved.`,`success`),await Z(e,t)}catch(e){L(e.message,`error`)}}}),e.querySelectorAll(`.dismiss-corr`).forEach(n=>{n.onclick=async()=>{let r=n.dataset.id;try{await C.adminUpdateRollCorrection(t,r,`Dismissed`),L(`Correction marked as Dismissed.`,`success`),await Z(e,t)}catch(e){L(e.message,`error`)}}});let M=async n=>{if(!confirm(`Are you sure you want to finalize the Nominal Roll?

This will lock the list and prevent any further additions, edits, or deletions.`))return;let r=async(i=!1)=>{I(n.target,!0,`Finalizing...`);try{let a=await C.adminFinalizeRoll(t,{matchNominations:i});if(a&&a.requiresMatching)return I(n.target,!1,`🔒 Finalize & Lock Roll`),confirm(`⚠️ ${a.count} existing nominations found!\n\nBecause you edited the Nominal Roll, their Serial Numbers have shifted.\n\nWould you like the system to automatically remap them using their Admission Numbers?`)?await r(!0):void 0;L(`Nominal Roll Finalized & Locked Successfully!`,`success`),await Z(e,t)}catch(e){L(e.message,`error`),I(n.target,!1,`🔒 Finalize & Lock Roll`)}};await r(!1)};e.querySelector(`#btnFinalize`)&&(e.querySelector(`#btnFinalize`).onclick=M),e.querySelector(`#btnFinalizeTop`)&&(e.querySelector(`#btnFinalizeTop`).onclick=M);let N=()=>{let t=e.querySelector(`#unfinalizeModal`),n=e.querySelector(`#unfinalizePwdInput`),r=e.querySelector(`#unfinalizeError`);n&&(n.value=``),r&&(r.textContent=``,r.classList.add(`hidden`)),t&&(t.classList.remove(`hidden`),n&&setTimeout(()=>n.focus(),50))};e.querySelector(`#btnUnfinalize`)&&(e.querySelector(`#btnUnfinalize`).onclick=N),e.querySelector(`#btnUnfinalizeBanner`)&&(e.querySelector(`#btnUnfinalizeBanner`).onclick=N),e.querySelector(`#btnCancelUnfinalize`)&&(e.querySelector(`#btnCancelUnfinalize`).onclick=()=>{e.querySelector(`#unfinalizeModal`)?.classList.add(`hidden`)});let P=async()=>{let n=e.querySelector(`#unfinalizePwdInput`),r=(n?.value||``).trim(),i=e.querySelector(`#unfinalizeError`),a=e.querySelector(`#btnConfirmUnfinalize`);if(!r){i&&(i.textContent=`❌ Please enter your admin password.`,i.classList.remove(`hidden`)),n?.focus();return}I(a,!0,`Unlocking...`),i&&i.classList.add(`hidden`);try{await C.adminUnfinalizeRoll(r),L(`Nominal Roll Unlocked! You can now add, edit, or delete students.`,`success`),e.querySelector(`#unfinalizeModal`)?.classList.add(`hidden`),await Z(e,t)}catch(e){let t=e.message&&(e.message.includes(`UNAUTHORIZED`)||e.message.includes(`password`))?`Incorrect admin password. Please try again.`:e.message||`Incorrect password`;i&&(i.textContent=`❌ ${t}`,i.classList.remove(`hidden`)),L(t,`error`),I(a,!1,`Confirm & Unlock`),n?.focus()}};e.querySelector(`#btnConfirmUnfinalize`)&&(e.querySelector(`#btnConfirmUnfinalize`).onclick=P),e.querySelector(`#unfinalizePwdInput`)&&(e.querySelector(`#unfinalizePwdInput`).onkeydown=e=>{e.key===`Enter`&&P()}),e.querySelector(`#btnPrintRoll`)&&(e.querySelector(`#btnPrintRoll`).onclick=()=>{ze({students:c,isFinal:a,isDraft:o,collegeName:r.collegeName,collegeLogo:r.collegeLogo,electionYear:r.electionYear,initialSort:d===`dept-class`?`dept-class`:d===`name`?`class`:`serial`})})};v()}async function _t(e){let t=H();t&&(U(e,`schedule`,`
    <div class="text-center py-16">
      <span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span>
      <p class="text-slate-400 mt-4 text-sm">Loading election lifecycle & operational schedule...</p>
    </div>
  `),await vt(e.querySelector(`#adminMain`),t))}async function vt(e,t){if(e)try{yt(e,t,await C.getPublicSchedule())}catch(t){e.innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}function yt(e,t,n){let r=e=>{if(!e)return``;let t=new Date(e);if(isNaN(t.getTime()))return``;let n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`},i=e=>{if(!e)return``;let t=new Date(e);return isNaN(t.getTime())?``:t.toISOString()},a=(e,t,n,r)=>{let i=new Date,a=t?new Date(t):null,s=n?new Date(n):null,c=a&&!isNaN(a.getTime()),l=s&&!isNaN(s.getTime());return e===`FORCE_OPEN`?{badge:`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold animate-pulse">⚡ MANUAL OVERRIDE (FORCED OPEN / LIVE)</span>`,statusText:`Active immediately via Administrator Manual Override (Schedule bypassed)`,color:`emerald`,isActive:!0}:e===`FORCE_CLOSED`?{badge:`<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold">🛑 MANUAL OVERRIDE (FORCED CLOSED)</span>`,statusText:`Closed / Hidden immediately via Administrator Manual Override`,color:`rose`,isActive:!1}:c&&l?i<a?{badge:`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">🟡 SCHEDULED (Opens ${a.toLocaleDateString(`en-IN`,{month:`short`,day:`numeric`})} at ${a.toLocaleTimeString(`en-IN`,{hour:`2-digit`,minute:`2-digit`})})</span>`,statusText:`Opens in ${o(a-i)} (Auto-Schedule)`,color:`amber`,isActive:!1}:i>s?{badge:`<span class="badge bg-slate-700 text-slate-300 border border-slate-600 text-xs font-bold">🔴 CLOSED (Schedule ended)</span>`,statusText:`Window expired on ${s.toLocaleString(`en-IN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}`,color:`slate`,isActive:!1}:{badge:`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">🟢 ACTIVE (Auto Schedule)</span>`,statusText:`Currently live until ${s.toLocaleString(`en-IN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}`,color:`emerald`,isActive:!0}:c?i<a?{badge:`<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">🟡 SCHEDULED (Opens ${a.toLocaleDateString(`en-IN`,{month:`short`,day:`numeric`})})</span>`,statusText:`Opens in ${o(a-i)} (Auto-Schedule)`,color:`amber`,isActive:!1}:{badge:`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">🟢 ACTIVE (Published via Schedule)</span>`,statusText:`Published on ${a.toLocaleString(`en-IN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}`,color:`emerald`,isActive:!0}:r===!0||r===`true`?{badge:`<span class="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">🟢 ACTIVE (Flag Active)</span>`,statusText:`Active (No timed schedule configured; follow manual flag)`,color:`emerald`,isActive:!0}:{badge:`<span class="badge bg-slate-800 text-slate-400 border border-slate-700 text-xs">⚪ NOT SET / INACTIVE</span>`,statusText:`Schedule timing not set (Set dates or force manual override)`,color:`slate`,isActive:!1}};function o(e){if(e<=0)return`0m`;let t=Math.floor(e/(1e3*60)),n=Math.floor(t/60),r=Math.floor(n/24);return r>0?`${r}d ${n%24}h`:n>0?`${n}h ${t%60}m`:`${t}m`}e.innerHTML=`
    <div class="page-enter space-y-8 max-w-5xl mx-auto pb-16">
      <!-- Header Banner -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-5">
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-2xl font-black text-white tracking-tight">Election Lifecycle & Operations Hub</h3>
            <span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs">Dual-Control</span>
          </div>
          <p class="text-slate-400 text-sm mt-1">
            Automate stage publications by specific date and time, or exercise real-time Returning Officer manual overrides for all 8 milestones.
          </p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button id="btnSaveScheduleTop" class="btn btn-primary px-6 flex items-center gap-2">
            <span>💾</span> Save All Schedules
          </button>
          <button id="btnRefreshSchedule" class="btn btn-secondary btn-sm" title="Refresh Live Status">
            <span>🔄</span>
          </button>
        </div>
      </div>

      <!-- General Statutory Foundation -->
      <div class="glass rounded-2xl p-6 border-l-4 border-l-indigo-500 space-y-4">
        <h4 class="text-sm font-bold uppercase tracking-wider text-indigo-300">🏛️ General Statutory Framework</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-2">Election Year</label>
            <input type="number" id="electionYear" class="field w-full font-mono text-base" value="${n.electionYear||new Date().getFullYear()}">
            <p class="text-[11px] text-slate-400 mt-1">Rendered on all ballot papers, nominal rolls, lists, and declarations.</p>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-2">Notification Date (Lyngdoh Age Cut-Off)</label>
            <input type="date" id="notificationDate" class="field w-full font-mono text-base" value="${n.notificationDate||``}">
            <p class="text-[11px] text-slate-400 mt-1">Student age limits (UG: &lt;22, PG: &lt;25) are strictly computed as of this official date.</p>
          </div>
        </div>
      </div>

      <!-- Live Operations Pipeline Quick Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" id="quickPipelineGrid">
        <!-- Will be populated dynamically -->
      </div>

      <!-- 8 Modular Operation Cards -->
      <div class="space-y-6">

        <!-- 1. Draft Nominal Roll -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_draftRoll">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">📜</span>
                <h4 class="font-bold text-white text-base">1. Draft Nominal Roll Publication & Claims Window</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Publish provisional electoral roll (D1, D2...) for student verification, claims, and objections.</p>
            </div>
            <div id="badge_draftRoll"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Scheduled Publication</label>
                <input type="datetime-local" id="draftRollStart" class="field w-full text-xs font-mono" value="${r(n.draftRollStart)}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Claims / Objections Deadline</label>
                <input type="datetime-local" id="draftRollEnd" class="field w-full text-xs font-mono" value="${r(n.draftRollEnd)}">
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.draftRollOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="draftRoll" data-mode="FORCE_OPEN">
                  ⚡ Force Publish
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.draftRollOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="draftRoll" data-mode="FORCE_CLOSED">
                  🛑 Force Unpublish
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.draftRollOverride||n.draftRollOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="draftRoll" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Final Nominal Roll -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_finalRoll">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">🔒</span>
                <h4 class="font-bold text-white text-base">2. Final Nominal Roll Publication & Roll Lock</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Freezes voter list with permanent sequential serial numbers (1, 2, 3...). Prerequisite for nomination filing.</p>
            </div>
            <div id="badge_finalRoll"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Scheduled Finalization Time</label>
                <input type="datetime-local" id="finalRollStart" class="field w-full text-xs font-mono" value="${r(n.finalRollStart)}">
              </div>
              <div class="flex items-end">
                <p class="text-[11px] text-slate-400">When final roll becomes active, student correction claims close and official candidate nominations unlock.</p>
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.finalRollOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="finalRoll" data-mode="FORCE_OPEN">
                  ⚡ Force Finalize
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.finalRollOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="finalRoll" data-mode="FORCE_CLOSED">
                  🔓 Force Unfinalize
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.finalRollOverride||n.finalRollOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="finalRoll" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Nomination Window -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_nomination">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">📝</span>
                <h4 class="font-bold text-white text-base">3. Nomination Submission Window</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Online candidate nomination filing window for candidates, proposers, and seconders.</p>
            </div>
            <div id="badge_nomination"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Nomination Start Date & Time</label>
                <input type="datetime-local" id="nominationStart" class="field w-full text-xs font-mono" value="${r(n.nominationStart)}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Nomination Deadline Date & Time</label>
                <input type="datetime-local" id="nominationDeadline" class="field w-full text-xs font-mono" value="${r(n.nominationDeadline)}">
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.nominationOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="nomination" data-mode="FORCE_OPEN">
                  ⚡ Force Open
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.nominationOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="nomination" data-mode="FORCE_CLOSED">
                  🛑 Force Close
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.nominationOverride||n.nominationOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="nomination" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Valid Nominations List -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_validList">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">📋</span>
                <h4 class="font-bold text-white text-base">4. Publication of Valid Nominations List (Scrutiny)</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Pre-withdrawal scrutinized candidates list. Necessary prerequisite for candidate withdrawals.</p>
            </div>
            <div id="badge_validList"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Scheduled Publication Date & Time</label>
                <input type="datetime-local" id="validListStart" class="field w-full text-xs font-mono" value="${r(n.validListStart)}">
              </div>
              <div class="flex items-end">
                <p class="text-[11px] text-slate-400">Publishing this list allows candidates whose papers were accepted to inspect valid contestants and submit withdrawals.</p>
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.validListOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="validList" data-mode="FORCE_OPEN">
                  ⚡ Force Publish
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.validListOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="validList" data-mode="FORCE_CLOSED">
                  🛑 Force Unpublish
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.validListOverride||n.validListOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="validList" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Withdrawal Window -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_withdrawal">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">↩️</span>
                <h4 class="font-bold text-white text-base">5. Candidature Withdrawal Window</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Formal submission window for candidates wishing to withdraw their nomination with admission authentication.</p>
            </div>
            <div id="badge_withdrawal"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Withdrawal Start Date & Time</label>
                <input type="datetime-local" id="withdrawalStart" class="field w-full text-xs font-mono" value="${r(n.withdrawalStart)}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Withdrawal Deadline Date & Time</label>
                <input type="datetime-local" id="withdrawalEnd" class="field w-full text-xs font-mono" value="${r(n.withdrawalEnd)}">
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.withdrawalOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="withdrawal" data-mode="FORCE_OPEN">
                  ⚡ Force Open
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.withdrawalOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="withdrawal" data-mode="FORCE_CLOSED">
                  🛑 Force Close
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.withdrawalOverride||n.withdrawalOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="withdrawal" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 6. Final Candidates List -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_finalList">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">🏁</span>
                <h4 class="font-bold text-white text-base">6. Publication of Final List of Contesting Candidates</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Post-withdrawal approved contesting candidates. Automatically flags unopposed/uncontested candidates.</p>
            </div>
            <div id="badge_finalList"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Scheduled Publication Date & Time</label>
                <input type="datetime-local" id="finalListStart" class="field w-full text-xs font-mono" value="${r(n.finalListStart)}">
              </div>
              <div class="flex items-end">
                <p class="text-[11px] text-slate-400">When published, the public portal displays official contesting candidates and enables ballot sheet printing.</p>
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.finalListOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="finalList" data-mode="FORCE_OPEN">
                  ⚡ Force Publish
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.finalListOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="finalList" data-mode="FORCE_CLOSED">
                  🛑 Force Unpublish
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.finalListOverride||n.finalListOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="finalList" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 7. Polling / Voting Window -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_polling">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">🗳️</span>
                <h4 class="font-bold text-white text-base">7. Polling / Voting Day Hours</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Designated voting hours at physical booths. Displayed on student portal and polling officer notices.</p>
            </div>
            <div id="badge_polling"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Polling Commencement Date & Time</label>
                <input type="datetime-local" id="pollingStart" class="field w-full text-xs font-mono" value="${r(n.pollingStart)}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Polling Conclusion Date & Time</label>
                <input type="datetime-local" id="pollingEnd" class="field w-full text-xs font-mono" value="${r(n.pollingEnd)}">
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.pollingOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="polling" data-mode="FORCE_OPEN">
                  ⚡ Force Open Polling
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.pollingOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="polling" data-mode="FORCE_CLOSED">
                  🛑 Force Close Polling
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.pollingOverride||n.pollingOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="polling" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 8. Results & Counting -->
        <div class="glass rounded-2xl p-6 border border-white/10 space-y-5" id="card_results">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">📊</span>
                <h4 class="font-bold text-white text-base">8. Vote Counting & Official Results Declaration</h4>
              </div>
              <p class="text-slate-400 text-xs mt-0.5">Control "Counting in Progress" live ticker and scheduled or instant release of election results.</p>
            </div>
            <div id="badge_results"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Scheduled Results Release Date & Time</label>
                <input type="datetime-local" id="resultsStart" class="field w-full text-xs font-mono" value="${r(n.resultsStart)}">
              </div>
              <div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between gap-3">
                <div>
                  <div class="text-xs font-bold text-amber-300 uppercase">Live Counting Mode Switch</div>
                  <div class="text-[11px] text-slate-400">When enabled, public results portal displays animated "Counting in Progress" banner.</div>
                </div>
                <label class="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" id="countingActiveCheckbox" class="sr-only peer" ${n.countingActive===`true`?`checked`:``}>
                  <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
            </div>
            <div class="lg:col-span-5 bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Manual Real-Time Override:</div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-override ${n.resultsOverride===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="results" data-mode="FORCE_OPEN">
                  ⚡ Force Publish Results
                </button>
                <button type="button" class="btn btn-sm btn-override ${n.resultsOverride===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="results" data-mode="FORCE_CLOSED">
                  🛑 Force Hide Results
                </button>
                <button type="button" class="btn btn-sm btn-override ${!n.resultsOverride||n.resultsOverride===`AUTO`?`bg-indigo-600 text-white font-bold`:`btn-secondary text-xs`}" data-stage="results" data-mode="AUTO">
                  🔄 Auto (Schedule)
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Save Action -->
      <div class="glass rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h4 class="font-bold text-white text-base">Save All Schedule Changes</h4>
          <p class="text-slate-400 text-xs">All scheduled dates, times, and overrides will be recorded into system settings.</p>
        </div>
        <button id="btnSaveScheduleBottom" class="btn btn-primary px-8 py-3 font-bold text-base flex items-center gap-2">
          <span>💾</span> Save All Election Schedules
        </button>
      </div>

    </div>
  `;let s={draftRoll:n.draftRollOverride||`AUTO`,finalRoll:n.finalRollOverride||`AUTO`,nomination:n.nominationOverride||`AUTO`,validList:n.validListOverride||`AUTO`,withdrawal:n.withdrawalOverride||`AUTO`,finalList:n.finalListOverride||`AUTO`,polling:n.pollingOverride||`AUTO`,results:n.resultsOverride||`AUTO`},c=()=>{let t=[{id:`draftRoll`,name:`Draft Roll`,icon:`📜`,start:i(e.querySelector(`#draftRollStart`)?.value),end:i(e.querySelector(`#draftRollEnd`)?.value),override:s.draftRoll,legacy:n.draftRollPublished},{id:`finalRoll`,name:`Final Roll`,icon:`🔒`,start:i(e.querySelector(`#finalRollStart`)?.value),end:null,override:s.finalRoll,legacy:n.isRollFinalized},{id:`nomination`,name:`Nominations`,icon:`📝`,start:i(e.querySelector(`#nominationStart`)?.value),end:i(e.querySelector(`#nominationDeadline`)?.value),override:s.nomination,legacy:!1},{id:`validList`,name:`Valid List`,icon:`📋`,start:i(e.querySelector(`#validListStart`)?.value),end:null,override:s.validList,legacy:n.validListPublished},{id:`withdrawal`,name:`Withdrawals`,icon:`↩️`,start:i(e.querySelector(`#withdrawalStart`)?.value),end:i(e.querySelector(`#withdrawalEnd`)?.value),override:s.withdrawal,legacy:!1},{id:`finalList`,name:`Final List`,icon:`🏁`,start:i(e.querySelector(`#finalListStart`)?.value),end:null,override:s.finalList,legacy:n.finalListPublished},{id:`polling`,name:`Polling`,icon:`🗳️`,start:i(e.querySelector(`#pollingStart`)?.value),end:i(e.querySelector(`#pollingEnd`)?.value),override:s.polling,legacy:!1},{id:`results`,name:`Results`,icon:`📊`,start:i(e.querySelector(`#resultsStart`)?.value),end:null,override:s.results,legacy:n.resultsPublished}];t.forEach(t=>{let n=a(t.override,t.start,t.end,t.legacy),r=e.querySelector(`#badge_${t.id}`);r&&(r.innerHTML=n.badge);let i=e.querySelector(`#card_${t.id}`);i&&i.querySelectorAll(`.btn-override`).forEach(e=>{let n=e.dataset.mode;n===t.override?e.className=`btn btn-sm btn-override ${n===`FORCE_OPEN`?`bg-emerald-600 text-white font-bold`:n===`FORCE_CLOSED`?`bg-rose-600 text-white font-bold`:`bg-indigo-600 text-white font-bold`}`:e.className=`btn btn-sm btn-override btn-secondary text-xs`})});let r=e.querySelector(`#quickPipelineGrid`);r&&(r.innerHTML=t.map((e,t)=>{let n=a(e.override,e.start,e.end,e.legacy),r=n.isActive?`border-emerald-500/30 bg-emerald-500/10`:`border-white/10 bg-white/5`,i=n.isActive?`text-emerald-400`:`text-slate-400`;return`
          <div class="glass rounded-xl p-3 border ${r} transition-all">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${t+1}. ${F(e.name)}</span>
              <span>${e.icon}</span>
            </div>
            <div class="text-xs font-bold ${i} mt-1 truncate">${n.isActive?`● Live`:`○ Inactive`}</div>
            <div class="text-[10px] text-slate-500 truncate mt-0.5">${F(n.statusText)}</div>
          </div>
        `}).join(``))};c(),e.querySelectorAll(`input`).forEach(e=>{e.addEventListener(`input`,c),e.addEventListener(`change`,c)}),e.querySelectorAll(`.btn-override`).forEach(e=>{e.addEventListener(`click`,async n=>{let r=e.dataset.stage,i=e.dataset.mode;if(!(!r||!i)){I(e,!0,`...`);try{await C.adminSetStageOverride(t,r,i),s[r]=i,L(`${r.toUpperCase()} override updated to ${i}!`,`success`),c()}catch(e){L(`Override failed: ${e.message}`,`error`)}finally{I(e,!1),c()}}})});let l=async n=>{I(n,!0,`Saving...`);let r={electionYear:e.querySelector(`#electionYear`)?.value||new Date().getFullYear().toString(),notificationDate:e.querySelector(`#notificationDate`)?.value||``,draftRollStart:i(e.querySelector(`#draftRollStart`)?.value),draftRollEnd:i(e.querySelector(`#draftRollEnd`)?.value),draftRollOverride:s.draftRoll,finalRollStart:i(e.querySelector(`#finalRollStart`)?.value),finalRollOverride:s.finalRoll,nominationStart:i(e.querySelector(`#nominationStart`)?.value),nominationDeadline:i(e.querySelector(`#nominationDeadline`)?.value),nominationOverride:s.nomination,validListStart:i(e.querySelector(`#validListStart`)?.value),validListOverride:s.validList,withdrawalStart:i(e.querySelector(`#withdrawalStart`)?.value),withdrawalEnd:i(e.querySelector(`#withdrawalEnd`)?.value),withdrawalOverride:s.withdrawal,finalListStart:i(e.querySelector(`#finalListStart`)?.value),finalListOverride:s.finalList,pollingStart:i(e.querySelector(`#pollingStart`)?.value),pollingEnd:i(e.querySelector(`#pollingEnd`)?.value),pollingOverride:s.polling,resultsStart:i(e.querySelector(`#resultsStart`)?.value),resultsOverride:s.results,countingActive:e.querySelector(`#countingActiveCheckbox`)?.checked?`true`:`false`};try{await C.adminSaveSchedule(t,r),L(`Election schedule & operational rules saved successfully!`,`success`),await vt(e,t)}catch(e){L(`Save failed: ${e.message}`,`error`),I(n,!1,`💾 Save All Schedules`)}};e.querySelector(`#btnSaveScheduleTop`)?.addEventListener(`click`,e=>l(e.currentTarget)),e.querySelector(`#btnSaveScheduleBottom`)?.addEventListener(`click`,e=>l(e.currentTarget)),e.querySelector(`#btnRefreshSchedule`)?.addEventListener(`click`,()=>vt(e,t))}async function bt(e){let t=H();t&&(window.ADMIN_BYPASS_PWD=t,U(e,`direct-nomination`,`
    <div id="adminFormContainer" class="p-6">
       <div class="alert alert-info mb-6">
         🛡️ <strong>Admin Direct Entry Mode:</strong> Deadlines and window restrictions are bypassed.
       </div>
       <div id="nominationWrapper"></div>
    </div>
  `),await ae(e.querySelector(`#nominationWrapper`)))}async function xt(e){let t=H();if(!t)return;U(e,`audit`,`
    <div class="page-enter space-y-8">
      <div class="flex items-end justify-between">
        <div>
          <h3 class="text-2xl font-bold text-white">Internal Audit System</h3>
          <p class="text-slate-400 text-sm mt-1">Cross-check nominal roll, ballot plans, nominations, and counting matrices for discrepancies.</p>
        </div>
        <button id="btnRunAudit" class="btn btn-primary">
          <span class="mr-2">🔍</span> Run Full System Audit
        </button>
      </div>

      <div id="auditResults" class="space-y-6">
        <div class="glass rounded-2xl p-8 text-center text-slate-400 border border-white/5">
          <div class="text-4xl mb-4 opacity-50">🛡️</div>
          <p>Click "Run Full System Audit" to begin verifying data integrity.</p>
        </div>
      </div>
    </div>
  `);let n=e.querySelector(`#btnRunAudit`),r=e.querySelector(`#auditResults`);n.addEventListener(`click`,async()=>{n.disabled=!0,n.innerHTML=`<span class="spinner w-4 h-4 mr-2 border-2"></span> Running Audit...`,r.innerHTML=`
      <div class="glass rounded-2xl p-12 text-center text-slate-400 border border-white/5">
        <div class="spinner w-10 h-10 border-4 border-indigo-500 mb-4 mx-auto"></div>
        <p class="font-bold text-white">Analyzing Data...</p>
        <p class="text-xs mt-2">This may take a few seconds as the system cross-references all data layers.</p>
      </div>
    `;try{let e=(await C.adminRunAudit(t)).report,n=(e,t)=>t.pass?`
            <div class="glass rounded-2xl p-6 border-l-4 border-emerald-500 bg-emerald-500/5">
              <div class="flex items-center text-emerald-400 font-bold mb-2">
                <span class="mr-2">✅</span> ${F(e)}
              </div>
              <p class="text-xs text-slate-400">All data points passed the integrity check perfectly.</p>
            </div>
          `:`
            <div class="glass rounded-2xl p-6 border-l-4 border-rose-500 bg-rose-500/5">
              <div class="flex items-center text-rose-400 font-bold mb-4">
                <span class="mr-2">❌</span> ${F(e)}
              </div>
              <ul class="list-disc pl-5 space-y-2 text-xs text-rose-300">
                ${t.details.map(e=>`<li>${F(e)}</li>`).join(``)}
              </ul>
            </div>
          `;r.innerHTML=`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${n(`1. Nominal Roll vs Ballot Plan`,e.rollCheck)}
          ${n(`2. Serial Number Integrity (Nominations)`,e.serialCheck)}
          ${n(`3. Counting Matrix vs Results Math`,e.resultsCheck)}
          ${n(`4. Ballot Forms Accounting`,e.formsCheck)}
        </div>
      `,e.rollCheck.pass&&e.serialCheck.pass&&e.resultsCheck.pass&&e.formsCheck.pass?r.innerHTML=`
           <div class="glass rounded-2xl p-8 text-center border border-emerald-500/30 bg-emerald-500/10 mb-6">
             <div class="text-4xl mb-4">🎉</div>
             <h3 class="text-xl font-bold text-emerald-400">All Systems Go!</h3>
             <p class="text-sm text-slate-300 mt-2">The audit found absolutely zero discrepancies. The data is perfectly synchronized.</p>
           </div>
         `+r.innerHTML:r.innerHTML=`
           <div class="glass rounded-2xl p-8 text-center border border-rose-500/30 bg-rose-500/10 mb-6">
             <div class="text-4xl mb-4">⚠️</div>
             <h3 class="text-xl font-bold text-rose-400">Discrepancies Found</h3>
             <p class="text-sm text-slate-300 mt-2">Please review the failed checks below and resolve the inconsistencies.</p>
           </div>
         `+r.innerHTML,L(`Audit completed.`,`info`)}catch(e){r.innerHTML=`<div class="alert alert-error">❌ Audit failed: ${F(e.message)}</div>`,L(e.message,`error`)}finally{n.disabled=!1,n.innerHTML=`<span class="mr-2">🔍</span> Run Full System Audit`}})}async function St(e){let t=H();if(t){U(e,`settings`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading settings...</p></div>
  `);try{let n=await C.adminGetSettings(t),r=e.querySelector(`#adminMain`);r.innerHTML=`
      <div class="page-enter space-y-8 max-w-4xl mx-auto">
        <div>
          <h3 class="text-2xl font-bold text-white">System Settings</h3>
          <p class="text-slate-400 text-sm mt-1">Manage your college branding and security credentials.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- College Information -->
          <div class="glass rounded-2xl p-8 space-y-6">
            <div>
              <h4 class="font-bold text-white text-lg">College Information &amp; Branding</h4>
              <p class="text-slate-400 text-xs mt-1">This branding and logo appear on the public portal and all official print documents.</p>
            </div>
            
            <div class="space-y-5">
              <!-- College Logo Upload & Preview -->
              <div>
                <label class="text-xs text-slate-400 uppercase tracking-wider block mb-2">College Logo (Printed Above College Name)</label>
                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div id="logoPreviewBox" class="w-20 h-20 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    ${n.collegeLogo?`<img id="logoPreviewImg" src="${n.collegeLogo}" class="w-full h-full object-contain" alt="College Logo">`:`<span id="logoPlaceholder" class="text-xs text-slate-500 text-center px-1">No Logo</span>`}
                  </div>
                  <div class="flex-1 space-y-2">
                    <div class="flex flex-wrap gap-2">
                      <label class="btn btn-secondary text-xs py-1.5 px-3 cursor-pointer">
                        <span>📁 Choose Logo Image</span>
                        <input type="file" id="inputCollegeLogo" accept="image/*" class="hidden">
                      </label>
                      <button type="button" id="btnRemoveLogo" class="btn text-xs py-1.5 px-3 bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 ${n.collegeLogo?``:`hidden`}">
                        🗑️ Remove
                      </button>
                    </div>
                    <p class="text-[11px] text-slate-400">PNG, JPG, or SVG. Auto-scaled for sharp, crisp print headers.</p>
                  </div>
                </div>
              </div>

              <div>
                <label class="text-xs text-slate-400 uppercase tracking-wider block mb-2">Full College Name</label>
                <input type="text" id="inputCollegeName" class="field text-sm py-2.5" value="${F(n.collegeName)}">
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-xs text-slate-400 uppercase tracking-wider block mb-2">Short Form (Abbreviation)</label>
                  <input type="text" id="inputCollegeShort" class="field text-sm py-2.5" value="${F(n.collegeShortName)}">
                </div>
                <div>
                  <label class="text-xs text-slate-400 uppercase tracking-wider block mb-2">Election Year</label>
                  <input type="text" id="inputElectionYear" class="field text-sm py-2.5" value="${F(n.electionYear||new Date().getFullYear().toString())}" placeholder="e.g. 2026">
                </div>
              </div>
              <button id="btnUpdateBranding" class="btn btn-primary w-full py-3 mt-2">Save Branding</button>
            </div>
          </div>

          <!-- Security & Access -->
          <div class="glass rounded-2xl p-8 space-y-6 border border-rose-500/20">
            <div>
              <h4 class="font-bold text-rose-300 text-lg">Security & Access</h4>
              <p class="text-rose-300/60 text-xs mt-1">Update your login credentials and OTP email destination.</p>
            </div>
            
            <div class="space-y-5">
              <div>
                <label class="text-xs text-slate-400 uppercase tracking-wider block mb-2">New Admin Password</label>
                <input type="password" id="inputAdminPassword" class="field text-sm py-2.5" placeholder="Leave blank to keep current">
              </div>
              <div>
                <label class="text-xs text-slate-400 uppercase tracking-wider block mb-2">Admin Email (For OTP)</label>
                <input type="email" id="inputAdminEmail" class="field text-sm py-2.5" value="${F(n.adminEmail||``)}" placeholder="admin@college.edu">
              </div>
              <button id="btnUpdateSecurity" class="btn bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 w-full py-3 mt-2">Update Credentials</button>
            </div>
          </div>
        </div>
        
        <!-- Backup & Disaster Recovery -->
        <div class="mt-8 border border-sky-500/30 bg-sky-950/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-start gap-4">
            <div class="text-3xl">💾</div>
            <div>
              <h4 class="font-bold text-sky-400 text-lg">Full Data Backup & Disaster Recovery</h4>
              <p class="text-sky-200/70 text-sm mt-1">Export or restore the entire election database: Nominal Roll, Corrections, Nominations, Booths, Ballots, Counting Matrices, and Certified Results. Includes automatic pre-restore safety snapshots and 1-click rollbacks.</p>
            </div>
          </div>
          <a href="#/admin/backup" data-nav="/admin/backup" class="btn bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 whitespace-nowrap shadow-lg shadow-sky-900/40">
            Open Backup Center &rarr;
          </a>
        </div>

        <!-- Danger Zone -->
        <div class="mt-8 border border-rose-500/30 bg-rose-950/20 rounded-2xl p-6">
          <div class="flex items-start gap-4">
            <div class="text-3xl">⚠️</div>
            <div class="flex-1">
              <h4 class="font-bold text-rose-400 text-lg">Danger Zone: New Election Year</h4>
              <p class="text-rose-200/60 text-sm mt-1">This action permanently deletes all Nominal Roll students, Nominations, and resets election state flags. Your configuration (Posts, Booths, Passwords) will be kept.</p>
              
              <div class="mt-5 space-y-4 max-w-md">
                <button id="btnInitReset" class="btn bg-rose-600 text-white hover:bg-rose-700 w-full">🚨 Start Factory Reset</button>
                
                <div id="resetFlow" class="hidden space-y-4 mt-4 p-4 bg-black/40 rounded-xl border border-rose-500/20">
                  <div id="resetStep1">
                    <label class="text-xs font-bold text-rose-300 block mb-2">1. Enter Admin Password to request OTP</label>
                    <input type="password" id="resetPwd" class="field text-sm mb-2" placeholder="Admin Password">
                    <button id="btnResetSendOTP" class="btn btn-secondary w-full">Send OTP to Email</button>
                  </div>
                  
                  <div id="resetStep2" class="hidden">
                    <label class="text-xs font-bold text-emerald-400 block mb-2">2. Check Email for OTP</label>
                    <input type="text" id="resetOTP" class="field text-center tracking-widest text-lg font-mono mb-3" placeholder="000000" maxlength="6">
                    <label class="text-xs font-bold text-rose-300 block mb-2">3. Type RESET to confirm</label>
                    <input type="text" id="resetConfirmText" class="field text-center font-mono uppercase text-rose-400 mb-3" placeholder="RESET">
                    <button id="btnResetConfirm" class="btn bg-rose-600 text-white hover:bg-rose-700 w-full font-bold">PERMANENTLY WIPE DATA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;let i=n.collegeLogo||``,a=e.querySelector(`#inputCollegeLogo`),o=e.querySelector(`#logoPreviewBox`),s=e.querySelector(`#btnRemoveLogo`);a?.addEventListener(`change`,e=>{let t=e.target.files?.[0];if(!t)return;if(!t.type.startsWith(`image/`))return L(`Please select a valid image file.`,`error`);let n=new FileReader;n.onload=e=>{let t=new Image;t.onload=()=>{let e=t.width,n=t.height;e>n?e>260&&(n=Math.round(260/e*n),e=260):n>130&&(e=Math.round(130/n*e),n=130);let r=document.createElement(`canvas`);r.width=e,r.height=n,r.getContext(`2d`).drawImage(t,0,0,e,n),i=r.toDataURL(`image/png`),o.innerHTML=`<img id="logoPreviewImg" src="${i}" class="w-full h-full object-contain" alt="College Logo">`,s?.classList.remove(`hidden`),L(`Logo image selected and ready to save!`,`info`)},t.onerror=()=>L(`Failed to parse selected image.`,`error`),t.src=e.target.result},n.readAsDataURL(t)}),s?.addEventListener(`click`,()=>{i=``,o.innerHTML=`<span id="logoPlaceholder" class="text-xs text-slate-500 text-center px-1">No Logo</span>`,s.classList.add(`hidden`),a&&(a.value=``),L(`Logo cleared. Click "Save Branding" to apply.`,`info`)}),e.querySelector(`#btnUpdateBranding`).addEventListener(`click`,async n=>{let r=e.querySelector(`#inputCollegeName`).value.trim(),a=e.querySelector(`#inputCollegeShort`).value.trim(),o=e.querySelector(`#inputElectionYear`).value.trim()||new Date().getFullYear().toString();if(!r||!a)return L(`Please fill all branding fields.`,`error`);let s=n.currentTarget;I(s,!0,`Saving...`);try{await C.adminUpdateSettings(t,{collegeName:r,collegeShortName:a,electionYear:o,collegeLogo:i}),L(`College branding & logo updated successfully! Refresh to see changes system-wide.`,`success`)}catch(e){L(e.message,`error`)}finally{I(s,!1,`Save Branding`)}}),e.querySelector(`#btnUpdateSecurity`).addEventListener(`click`,async()=>{let n=e.querySelector(`#inputAdminPassword`).value.trim(),r=e.querySelector(`#inputAdminEmail`).value.trim();try{await C.adminUpdateCredentials(t,{newPassword:n,newEmail:r}),L(`Security credentials updated successfully!`,`success`),e.querySelector(`#inputAdminPassword`).value=``}catch(e){L(e.message,`error`)}});let c=e.querySelector(`#btnInitReset`),l=e.querySelector(`#resetFlow`),u=e.querySelector(`#resetStep1`),d=e.querySelector(`#resetStep2`);c.addEventListener(`click`,()=>{l.classList.remove(`hidden`),c.classList.add(`hidden`)}),e.querySelector(`#btnResetSendOTP`).addEventListener(`click`,async t=>{let n=e.querySelector(`#resetPwd`).value;if(!n)return L(`Password required`,`error`);let r=t.target,i=r.textContent;r.textContent=`Sending...`,r.disabled=!0;try{await C.post({action:`adminSendOTP`,password:n}),L(`OTP sent to your admin email!`,`success`),u.classList.add(`hidden`),d.classList.remove(`hidden`)}catch(e){L(e.message,`error`),r.textContent=i,r.disabled=!1}}),e.querySelector(`#btnResetConfirm`).addEventListener(`click`,async t=>{let n=e.querySelector(`#resetPwd`).value,r=e.querySelector(`#resetOTP`).value.trim(),i=e.querySelector(`#resetConfirmText`).value.trim().toUpperCase();if(!r||r.length!==6)return L(`Enter 6-digit OTP`,`error`);if(i!==`RESET`)return L(`Type RESET to confirm`,`error`);let a=t.target;a.textContent=`WIPING DATA...`,a.disabled=!0;try{await C.post({action:`adminFactoryReset`,password:n,otp:r}),L(`✅ System Reset Successful! Reloading...`,`success`),setTimeout(()=>window.location.reload(),2e3)}catch(e){L(e.message,`error`),a.textContent=`PERMANENTLY WIPE DATA`,a.disabled=!1}})}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}async function Q(e){let t=H();if(t){U(e,`backup`,`
    <div class="text-center py-16"><span class="spinner" style="width:2.5rem;height:2.5rem;border-width:4px;"></span><p class="text-slate-400 mt-4 text-sm">Loading backup & recovery system...</p></div>
  `);try{let[n,r,i,a,o]=await Promise.all([C.adminGetSettings(t).catch(()=>({})),C.getNominalRoll().catch(()=>[]),C.getPosts().catch(()=>[]),C.adminGetNominations(t).catch(()=>[]),C.adminGetSnapshots(t).catch(()=>[])]);Ct(e.querySelector(`#adminMain`),t,{settings:n,rollCount:r.length,postsCount:i.length,nomsCount:a.length,snapshots:o})}catch(t){e.querySelector(`#adminMain`).innerHTML=`<div class="alert alert-error">❌ ${F(t.message)}</div>`}}}function Ct(e,t,{settings:r,rollCount:i,postsCount:a,nomsCount:o,snapshots:s}){let c=r.collegeName||n.COLLEGE_NAME,l=r.collegeShortName||n.COLLEGE_SHORT_NAME,u=r.electionYear||new Date().getFullYear(),d=r.nominalRollFinalized===`true`||r.isRollFinalized===`true`,f=r.resultsPublished===`true`;e.innerHTML=`
    <div class="page-enter space-y-8 max-w-5xl mx-auto pb-12">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div class="flex items-center gap-3">
            <h3 class="text-2xl font-black text-white tracking-tight">Full System Backup &amp; Restore</h3>
            <span class="badge badge-valid text-xs px-2.5 py-1 font-mono">v2.0 Enterprise</span>
          </div>
          <p class="text-slate-400 text-sm mt-1">
            Complete data protection suite covering the entire lifecycle from Nominal Roll to Live &amp; Final Election Results.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button id="btnRefreshSnapshots" class="btn btn-secondary btn-sm flex items-center gap-2">
            <span>🔄</span> Refresh Stats
          </button>
        </div>
      </div>

      <!-- Live System Snapshot Stats Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="glass rounded-xl p-4 border border-white/5">
          <p class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Nominal Roll</p>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-2xl font-bold text-white">${i.toLocaleString()}</span>
            <span class="text-xs ${d?`text-emerald-400`:`text-amber-400`}">
              ${d?`🔒 Locked`:`📋 Draft`}
            </span>
          </div>
        </div>
        <div class="glass rounded-xl p-4 border border-white/5">
          <p class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Election Posts</p>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-2xl font-bold text-white">${a}</span>
            <span class="text-xs text-slate-400">Registered</span>
          </div>
        </div>
        <div class="glass rounded-xl p-4 border border-white/5">
          <p class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Nominations</p>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-2xl font-bold text-white">${o}</span>
            <span class="text-xs text-indigo-300">Total Filed</span>
          </div>
        </div>
        <div class="glass rounded-xl p-4 border border-white/5">
          <p class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Election Results</p>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-base font-bold ${f?`text-emerald-400`:`text-slate-300`}">
              ${f?`📢 Published`:`⏳ Pending`}
            </span>
          </div>
        </div>
      </div>

      <!-- Module 1: Export Backup Archive -->
      <div class="glass rounded-2xl overflow-hidden border border-indigo-500/20 shadow-xl">
        <div class="bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/50 p-6 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl shadow-inner">
              💾
            </div>
            <div>
              <h4 class="font-bold text-white text-lg">1. Export Full System Backup</h4>
              <p class="text-slate-400 text-xs mt-0.5">Generates a cryptographically verified JSON archive of your entire database.</p>
            </div>
          </div>
          <span class="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30 hidden sm:inline-block">
            SHA-256 Verified
          </span>
        </div>

        <div class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <p class="text-sm text-slate-300 font-semibold">Included in this Backup Archive:</p>
              <ul class="text-xs text-slate-400 space-y-2">
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Full Nominal Roll Voters (${i} records) &amp; Student Correction Requests</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Posts &amp; Eligibility Rules (${a} posts)</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Nominations (${o} candidates, proposers &amp; seconders)</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Polling Booths, Locations &amp; Department Mappings</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Master Ballot Plans (Executive, Year Reps &amp; Associations)</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Counting Matrices &amp; Live/Final Election Results</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Election Schedule, College Branding &amp; Settings</li>
              </ul>
              <div class="p-3 rounded-lg bg-slate-900/60 border border-white/5 text-[11px] text-slate-400">
                🔒 <strong>Security Note:</strong> Admin passwords and temporary one-time passcodes are automatically excluded from the archive for credential safety.
              </div>
            </div>

            <div class="flex flex-col justify-between p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/10 space-y-4">
              <div>
                <p class="text-xs text-indigo-300 uppercase tracking-wider font-semibold mb-1">Target Package</p>
                <p class="text-white font-mono text-sm break-all font-semibold">
                  ELECTION_BACKUP_${l.toUpperCase()}_${u}_${new Date().toISOString().slice(0,10)}.json
                </p>
                <p class="text-slate-400 text-xs mt-2">
                  Source: <strong>${F(c)}</strong> (Year: ${u})
                </p>
              </div>
              <button id="btnExportFullBackup" class="btn btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-base font-bold shadow-lg shadow-indigo-600/30">
                <span>💾</span> Download Full System Backup (.JSON)
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Module 2: System Restore & Inspection Wizard -->
      <div class="glass rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl">
        <div class="bg-gradient-to-r from-amber-950/40 via-rose-950/30 to-slate-900/50 p-6 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shadow-inner">
              📥
            </div>
            <div>
              <h4 class="font-bold text-white text-lg">2. Restore Database from Backup</h4>
              <p class="text-slate-400 text-xs mt-0.5">Upload a previously generated backup archive with dry-run inspection and safety snapshots.</p>
            </div>
          </div>
          <span class="text-xs bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30 hidden sm:inline-block">
            Fail-Safe Snapshot Guard
          </span>
        </div>

        <div class="p-6 space-y-6">
          <!-- Step A: File Selection -->
          <div id="restoreUploadArea" class="border-2 border-dashed border-white/20 hover:border-indigo-400/50 rounded-2xl p-8 text-center transition-all bg-slate-900/40">
            <input type="file" id="backupFileInput" accept=".json,application/json" class="hidden" />
            <div class="text-5xl mb-3">📁</div>
            <h5 class="text-base font-bold text-white">Select or Drag &amp; Drop Backup File</h5>
            <p class="text-slate-400 text-xs mt-1">Upload a valid <code>.json</code> election backup archive exported from this portal.</p>
            <div class="mt-4">
              <button type="button" id="btnBrowseFile" class="btn btn-secondary btn-sm px-6">
                Browse File
              </button>
            </div>
          </div>

          <!-- Step B: Deep Inspection Report (Hidden until file selected) -->
          <div id="inspectionSection" class="hidden space-y-6">
            <div class="p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400 text-lg">✅</span>
                  <h5 class="font-bold text-white text-base">Backup Archive Validated</h5>
                  <span id="inspectChecksumBadge" class="badge badge-valid text-[10px] font-mono">SHA-256 OK</span>
                </div>
                <p id="inspectMetaDetails" class="text-xs text-slate-300 mt-1 font-mono"></p>
              </div>
              <button type="button" id="btnRemoveFile" class="btn btn-secondary btn-sm text-xs self-start md:self-auto">
                Change File
              </button>
            </div>

            <!-- Comparison Table: Live vs Backup -->
            <div>
              <h5 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span>🔍</span> Side-by-Side Inventory Comparison
              </h5>
              <div class="overflow-x-auto rounded-xl border border-white/10">
                <table class="data-table text-xs">
                  <thead>
                    <tr>
                      <th>Module / Entity</th>
                      <th>Current Live Count</th>
                      <th>Backup File Count</th>
                      <th>Variance</th>
                      <th class="text-center">Include in Restore</th>
                    </tr>
                  </thead>
                  <tbody id="inventoryComparisonTbody">
                    <!-- Populated dynamically -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Restore Mode Options -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="glass p-4 rounded-xl border border-white/10 flex items-start gap-3 cursor-pointer hover:border-indigo-500/40 transition">
                <input type="radio" name="restoreMode" value="full_wipe_and_replace" checked class="mt-1 accent-indigo-500" />
                <div>
                  <p class="font-bold text-white text-sm">Clean Wipe &amp; Replace (Recommended)</p>
                  <p class="text-slate-400 text-xs mt-0.5">Clears existing records in the selected tables and replaces them with exact backup state.</p>
                </div>
              </label>
              <label class="glass p-4 rounded-xl border border-white/10 flex items-start gap-3 cursor-pointer hover:border-indigo-500/40 transition">
                <input type="radio" name="restoreMode" value="merge_and_update" class="mt-1 accent-indigo-500" />
                <div>
                  <p class="font-bold text-white text-sm">Merge &amp; Overwrite</p>
                  <p class="text-slate-400 text-xs mt-0.5">Updates matching IDs and inserts missing records without deleting records added since the backup.</p>
                </div>
              </label>
            </div>

            <!-- Security & Confirmation Challenge -->
            <div class="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-2xl text-rose-400">🛡️</span>
                <div>
                  <h5 class="font-bold text-rose-300 text-sm">Fail-Safe Protection &amp; Confirmation</h5>
                  <p class="text-rose-200/70 text-xs mt-0.5">
                    An automatic <strong>Pre-Restore Safety Snapshot</strong> will be saved in the database before changes are applied. You can revert instantly if needed.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">
                    Enter Admin Password <span class="text-rose-400">*</span>
                  </label>
                  <input type="password" id="restoreAdminPwd" class="field text-sm" placeholder="Your admin password" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">
                    Type <code class="text-rose-400 font-bold bg-black/40 px-1 py-0.5 rounded">CONFIRM RESTORE</code> <span class="text-rose-400">*</span>
                  </label>
                  <input type="text" id="restoreConfirmPhrase" class="field text-sm font-mono" placeholder="CONFIRM RESTORE" />
                </div>
              </div>

              <div class="pt-2">
                <button type="button" id="btnExecuteRestore" class="btn btn-danger w-full py-3.5 flex items-center justify-center gap-2 font-bold text-base shadow-lg shadow-rose-900/30">
                  <span>⚠️</span> Execute System Restore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Module 3: In-System Cloud Snapshots & Quick Revert -->
      <div class="glass rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <div class="p-6 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl shadow-inner">
              ⏱️
            </div>
            <div>
              <h4 class="font-bold text-white text-lg">3. Internal Database Checkpoints &amp; Rollbacks</h4>
              <p class="text-slate-400 text-xs mt-0.5">Automatic snapshots preserved inside PostgreSQL. Revert state instantly with one click.</p>
            </div>
          </div>
          <span class="text-xs text-slate-400 font-mono">${s.length} Snapshots Saved</span>
        </div>

        <div class="p-6">
          ${s.length===0?`
            <div class="text-center py-10 text-slate-500 text-sm">
              <p class="text-3xl mb-2">📦</p>
              <p>No internal snapshots recorded yet.</p>
              <p class="text-xs mt-1">Snapshots are automatically captured whenever backups are exported or restores are initiated.</p>
            </div>
          `:`
            <div class="overflow-x-auto rounded-xl border border-white/10">
              <table class="data-table text-xs">
                <thead>
                  <tr>
                    <th>Checkpoint Name</th>
                    <th>Type</th>
                    <th>Created At</th>
                    <th>Saved Records</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${s.map(e=>{let t=e.summary||{},n=e.triggerType===`pre_restore`;return`
                      <tr class="hover:bg-white/[0.02] transition">
                        <td>
                          <div class="font-bold text-white text-sm">${F(e.snapshotName)}</div>
                          <div class="text-[10px] text-slate-500 font-mono">${F(e.id)}</div>
                        </td>
                        <td>
                          <span class="badge ${n?`badge-valid`:`badge-pending`} text-[10px]">
                            ${n?`🛡️ Pre-Restore Safety`:`💾 Export`}
                          </span>
                        </td>
                        <td class="text-slate-300 font-mono">${new Date(e.createdAt).toLocaleString()}</td>
                        <td>
                          <div class="flex flex-wrap gap-1">
                            ${t.nominalRoll===void 0?``:`<span class="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-mono">${t.nominalRoll} Voters</span>`}
                            ${t.nominations===void 0?``:`<span class="bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded text-[10px] font-mono">${t.nominations} Noms</span>`}
                            ${t.posts===void 0?``:`<span class="bg-slate-800 text-purple-300 px-1.5 py-0.5 rounded text-[10px] font-mono">${t.posts} Posts</span>`}
                          </div>
                        </td>
                        <td class="text-right">
                          <div class="flex items-center justify-end gap-2">
                            <button data-download-snap="${F(e.id)}" class="btn btn-secondary btn-xs">
                              📥 Download
                            </button>
                            <button data-revert-snap="${F(e.id)}" data-name="${F(e.snapshotName)}" class="btn btn-danger btn-xs">
                              🔄 Revert
                            </button>
                          </div>
                        </td>
                      </tr>
                    `}).join(``)}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    </div>
  `,wt(e,t,{settings:r,rollCount:i,postsCount:a,nomsCount:o})}function wt(e,t,n){e.querySelector(`#btnRefreshSnapshots`)?.addEventListener(`click`,()=>{Q(e.closest(`#app`))});let r=e.querySelector(`#btnExportFullBackup`);r?.addEventListener(`click`,async()=>{I(r,!0,`Generating Archive...`);try{let n=await C.adminExportBackup(t),r=n.metadata||{},i=`ELECTION_BACKUP_${r.collegeShortName||`GVC`}_${r.electionYear||`2026`}_${new Date().toISOString().slice(0,10)}.json`,a=new Blob([JSON.stringify(n,null,2)],{type:`application/json`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o),L(`Backup exported successfully! File: ${i}`,`success`),setTimeout(()=>Q(e.closest(`#app`)),1200)}catch(e){L(`Export failed: ${e.message}`,`error`)}finally{I(r,!1,`💾 Download Full System Backup (.JSON)`)}});let i=e.querySelector(`#backupFileInput`),a=e.querySelector(`#btnBrowseFile`),o=e.querySelector(`#restoreUploadArea`),s=e.querySelector(`#inspectionSection`),c=null;a?.addEventListener(`click`,()=>i.click()),o?.addEventListener(`click`,e=>{e.target!==a&&i.click()}),o?.addEventListener(`dragover`,e=>{e.preventDefault(),o.classList.add(`border-indigo-400`,`bg-indigo-950/20`)}),o?.addEventListener(`dragleave`,()=>{o.classList.remove(`border-indigo-400`,`bg-indigo-950/20`)}),o?.addEventListener(`drop`,e=>{e.preventDefault(),o.classList.remove(`border-indigo-400`,`bg-indigo-950/20`),e.dataTransfer.files?.length&&l(e.dataTransfer.files[0])}),i?.addEventListener(`change`,e=>{e.target.files?.length&&l(e.target.files[0])});let l=e=>{if(!e.name.endsWith(`.json`)){L(`Please select a valid JSON backup file.`,`error`);return}let t=new FileReader;t.onload=e=>{try{let t=JSON.parse(e.target.result);if(!t.data||!t.metadata)throw Error(`Invalid election backup format: Missing data or metadata blocks.`);c=t,u(t)}catch(e){L(`Failed to parse backup file: ${e.message}`,`error`)}},t.readAsText(e)},u=t=>{o.classList.add(`hidden`),s.classList.remove(`hidden`);let r=t.metadata||{},i=t.data||{};e.querySelector(`#inspectMetaDetails`).textContent=`Source: ${r.collegeName||`Unknown`} (${r.collegeShortName||``}) | Year: ${r.electionYear||`N/A`} | Exported: ${new Date(r.exportedAt||Date.now()).toLocaleString()}`;let a=Array.isArray(i.nominal_roll)?i.nominal_roll.length:0,c=Array.isArray(i.posts)?i.posts.length:0,l=Array.isArray(i.nominations)?i.nominations.length:0,u=Array.isArray(i.roll_corrections)?i.roll_corrections.length:0,d=Array.isArray(i.settings)?i.settings.length:0,f=[{name:`Nominal Roll (Voters)`,id:`modRoll`,live:n.rollCount,backup:a},{name:`Student Correction Requests`,id:`modCorr`,live:`—`,backup:u},{name:`Election Posts & Rules`,id:`modPosts`,live:n.postsCount,backup:c},{name:`Nominations & Verification`,id:`modNoms`,live:n.nomsCount,backup:l},{name:`Settings, Booths, Ballots & Results`,id:`modSets`,live:`Configured`,backup:d}],p=e.querySelector(`#inventoryComparisonTbody`);p.innerHTML=f.map(e=>{let t=typeof e.live==`number`?e.backup-e.live:0,n=t>0?`+${t}`:`${t}`;return`
        <tr>
          <td class="font-bold text-white">${e.name}</td>
          <td class="font-mono text-slate-300">${e.live}</td>
          <td class="font-mono font-bold text-indigo-300">${e.backup}</td>
          <td class="font-mono ${t===0?`text-slate-500`:t>0?`text-emerald-400`:`text-rose-400`}">
            ${typeof e.live==`number`?n:`—`}
          </td>
          <td class="text-center">
            <input type="checkbox" id="${e.id}" checked class="accent-indigo-500 w-4 h-4 cursor-pointer" />
          </td>
        </tr>
      `}).join(``)};e.querySelector(`#btnRemoveFile`)?.addEventListener(`click`,()=>{c=null,i.value=``,s.classList.add(`hidden`),o.classList.remove(`hidden`)});let d=e.querySelector(`#btnExecuteRestore`);d?.addEventListener(`click`,async()=>{if(!c){L(`No backup file loaded.`,`error`);return}let t=e.querySelector(`#restoreAdminPwd`).value.trim(),n=e.querySelector(`#restoreConfirmPhrase`).value.trim();if(!t){L(`Please enter your Admin Password.`,`error`);return}if(n!==`CONFIRM RESTORE`){L(`Please type "CONFIRM RESTORE" exactly to verify safety.`,`error`);return}let r={nominalRoll:e.querySelector(`#modRoll`)?.checked??!0,rollCorrections:e.querySelector(`#modCorr`)?.checked??!0,posts:e.querySelector(`#modPosts`)?.checked??!0,nominations:e.querySelector(`#modNoms`)?.checked??!0,settings:e.querySelector(`#modSets`)?.checked??!0},i=e.querySelector(`[name="restoreMode"]:checked`)?.value||`full_wipe_and_replace`;I(d,!0,`Restoring System State...`);try{let a=await C.adminRestoreBackup(t,{confirmPhrase:n,restoreMode:i,selectedModules:r,backupData:c});L(`🎉 System restore completed successfully!`,`success`),alert(`System restore successful!\n\nRestored:\n• Voters: ${a.restoredCounts?.nominalRoll||0}\n• Posts: ${a.restoredCounts?.posts||0}\n• Nominations: ${a.restoredCounts?.nominations||0}\n• Settings: ${a.restoredCounts?.settings||0}\n\nPre-Restore snapshot saved: ${a.preRestoreSnapshotId}`),Q(e.closest(`#app`))}catch(e){L(`Restore failed: ${e.message}`,`error`),I(d,!1,`⚠️ Execute System Restore`)}}),e.querySelectorAll(`[data-download-snap]`).forEach(e=>{e.addEventListener(`click`,async()=>{let n=e.getAttribute(`data-download-snap`);I(e,!0,`...`);try{let e=await C.adminDownloadSnapshot(t,n),r=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`${n}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),L(`Snapshot downloaded!`,`success`)}catch(e){L(`Download failed: ${e.message}`,`error`)}finally{I(e,!1,`📥 Download`)}})}),e.querySelectorAll(`[data-revert-snap]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=t.getAttribute(`data-revert-snap`),r=t.getAttribute(`data-name`);if(!confirm(`Are you sure you want to REVERT the database to:\n"${r}"?\n\nThis will restore all records to this checkpoint.`))return;let i=prompt(`Please enter your Admin Password to confirm reversion:`);if(i){I(t,!0,`Reverting...`);try{await C.adminRevertSnapshot(i,n),L(`Database reverted to snapshot successfully!`,`success`),alert(`System successfully reverted to checkpoint:\n${r}`),Q(e.closest(`#app`))}catch(e){L(`Revert failed: ${e.message}`,`error`),I(t,!1,`🔄 Revert`)}}})})}var Tt=document.getElementById(`app`);document.body.insertAdjacentHTML(`afterbegin`,`
  <div class="bg-blob bg-blob-1"></div>
  <div class="bg-blob bg-blob-2"></div>
  <div class="bg-blob bg-blob-3"></div>
`),C.getSettings().then(e=>{let t=e.collegeShortName||n.COLLEGE_SHORT_NAME,r=e.electionYear||new Date().getFullYear();document.title=`${t} Election Portal ${r}`}).catch(()=>{});var $=e=>t=>{Tt.innerHTML=``,e(Tt,t)};o.on(`/`,$(te)).on(`/submit`,$(ae)).on(`/find`,$(he)).on(`/valid-list`,$(ve)).on(`/final-list`,$(xe)).on(`/withdraw`,$(we)).on(`/results`,$(dt)).on(`/nominal-roll`,$(pt)).on(`/admin`,$(Me)).on(`/admin/dashboard`,$(Ne)).on(`/admin/verify`,$(Fe)).on(`/admin/withdrawals`,$(Le)).on(`/admin/publish`,$(Ve)).on(`/admin/posts`,$(Ue)).on(`/admin/ballots`,$(it)).on(`/admin/booths`,$(qe)).on(`/admin/counting`,$(Ye)).on(`/admin/results-entry`,$(tt)).on(`/admin/results`,$(ot)).on(`/admin/nominal-roll`,$(ht)).on(`/admin/schedule`,$(_t)).on(`/admin/direct-nomination`,$(bt)).on(`/admin/testing`,$(at)).on(`/admin/audit`,$(xt)).on(`/admin/settings`,$(St)).on(`/admin/backup`,$(Q)).setDefault(`/`),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-nav]`);if(t){e.preventDefault(),o.navigate(t.dataset.nav);return}let n=e.target.closest(`a[href^="#/"]`);if(n){e.preventDefault();let t=n.getAttribute(`href`).replace(/^#/,``);o.navigate(t)}}),o.start(),document.body.insertAdjacentHTML(`beforeend`,`
  <div id="sync-status" class="fixed top-4 right-4 z-[9999] bg-black/80 backdrop-blur border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-medium text-white shadow-xl transition-all duration-300 transform translate-y-[-150%] opacity-0">
    <span id="sync-icon" class="animate-spin inline-block">🔄</span>
    <span id="sync-text">Saving changes...</span>
  </div>
`);var Et=document.getElementById(`sync-status`),Dt=document.getElementById(`sync-icon`),Ot=document.getElementById(`sync-text`);m(e=>{e===`saving`?(Et.classList.remove(`translate-y-[-150%]`,`opacity-0`),Et.classList.add(`translate-y-0`,`opacity-100`),Dt.className=`animate-spin inline-block text-indigo-400`,Dt.innerHTML=`&#8635;`,Ot.innerText=`Saving changes...`):e===`saved`?(Dt.className=`inline-block text-emerald-400`,Dt.innerHTML=`&#10003;`,Ot.innerText=`All changes saved`):e===`idle`&&(Et.classList.remove(`translate-y-0`,`opacity-100`),Et.classList.add(`translate-y-[-150%]`,`opacity-0`))}),C.initPublicData();