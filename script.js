/* ==========================================================================
   Cyber-Premium Portfolio 核心腳本 (script.js)
   包含：多國語言、主題切換、色彩管理、效能模式、開屏動畫控制
   ========================================================================== */

/* ==================== 1. 多國語言字典 (Dictionary) ==================== */
const translations = {
  // --- 系統保留字詞 (請勿刪除) ---
  "initializing": {
    "en": "INITIALIZING...",
    "zh-TW": "系統初始化中...",
    "zh-CN": "系统初始化中...",
    "ms": "MEMULAKAN..."
  },
  "loading": {
    "en": "LOADING...",
    "zh-TW": "載入中...",
    "zh-CN": "加载中...",
    "ms": "MEMUATKAN..."
  },
  
  // --- 網站內容詞彙 (你可以繼續往下新增你的作品集內容) ---
  "nav-home": {
    "en": "HOME",
    "zh-TW": "首頁",
    "zh-CN": "首页",
    "ms": "LAMAN UTAMA"
  },
  "nav-about": {
    "en": "ABOUT",
    "zh-TW": "關於",
    "zh-CN": "关于",
    "ms": "TENTANG"
  },
  "nav-portfolio": {
    "en": "PORTFOLIO",
    "zh-TW": "作品集",
    "zh-CN": "作品集",
    "ms": "PORTFOLIO"
  }
  // 繼續新增...
};

/* ==================== 2. 核心狀態控制函數 ==================== */

/**
 * 變更網站語言並即時翻譯畫面
 */
function changeLanguage(lang) {
  // 1. 儲存設定
  localStorage.setItem('preferredLang', lang);
  
  // 2. 尋找所有帶有 data-i18n 屬性的標籤並更新文字
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    // 如果字典裡有這個詞彙，且有對應的語言翻譯
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
}

/**
 * 變更日/夜間模式 (Light / Dark Theme)
 */
function changeTheme(theme) {
  localStorage.setItem('preferredTheme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * 變更主題強調色 (Accent Color)
 */
function changeColor(color) {
  localStorage.setItem('preferredColor', color);
  document.documentElement.style.setProperty('--accent-color', color);
}

/**
 * 變更效能模式 (High / Low Performance)
 */
function changePerformance(mode) {
  localStorage.setItem('performanceMode', mode);
  document.documentElement.setAttribute('data-performance', mode);
}

/* ==================== 3. 網頁載入初始化 UI ==================== */
// DOMContentLoaded: 當 HTML 架構讀取完畢時執行 (比圖片/影片快)
document.addEventListener('DOMContentLoaded', () => {
  // 讀取使用者上次設定的語言，如果沒有則預設為繁體中文
  const currentLang = localStorage.getItem('preferredLang') || 'zh-TW';
  
  // 執行首次文字翻譯 (顏色和主題已經由 HTML 攔截器處理了)
  changeLanguage(currentLang);

  /* 
     這裡可以綁定你的選單按鈕事件 (請根據你的 HTML id 進行修改)
     範例：
     document.getElementById('btn-lang-en').addEventListener('click', () => changeLanguage('en'));
     document.getElementById('btn-theme-dark').addEventListener('click', () => changeTheme('dark'));
     document.getElementById('btn-color-blue').addEventListener('click', () => changeColor('#00f0ff'));
  */
});

/* ==================== 4. 開屏動畫控制與動畫解鎖 ==================== */
// window.addEventListener('load'): 當網頁「所有資源」(包含影片、圖片) 都載入完畢時才執行
window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  
  if (splashScreen) {
    // 延遲 0.6 秒，讓使用者稍微看一下動畫，然後開始淡出
    setTimeout(() => {
      splashScreen.classList.add('hidden');
      
      // 🔥 關鍵：在開屏畫面開始淡出的瞬間，解除 HTML 上的時間暫停鎖 (splash-active)
      // 確保底層的極致模式進場動畫在此刻才完美觸發
      document.documentElement.classList.remove('splash-active');
      
    }, 600); 
  } else {
    // 防呆機制：如果當前頁面沒有放置開屏動畫 HTML，也確保動畫解鎖
    document.documentElement.classList.remove('splash-active');
  }
});
