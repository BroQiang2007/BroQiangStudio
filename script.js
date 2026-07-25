// =========================
// 1. 多語言切換邏輯 (完整記憶版)
// =========================

// 這裡是你的多語言翻譯字典 (你可以依照這個格式，把其他頁面的內容繼續加進來)
const translations = {
    "zh-TW": {
        "nav_about": "關於我",
        "nav_resume": "專業履歷",
        "nav_portfolio": "作品集",
        "nav_games": "遊戲日常"
    },
    "zh-CN": {
        "nav_about": "关于我",
        "nav_resume": "专业履历",
        "nav_portfolio": "作品集",
        "nav_games": "游戏日常"
    },
    "en": {
        "nav_about": "About Me",
        "nav_resume": "Resume",
        "nav_portfolio": "Portfolio",
        "nav_games": "Gaming"
    },
    "ms": {
        "nav_about": "Tentang Saya",
        "nav_resume": "Resume",
        "nav_portfolio": "Portfolio",
        "nav_games": "Permainan"
    }
};

// 選擇語言時觸發的函數
function changeLanguage() {
    const lang = document.getElementById("languageSelect").value;
    localStorage.setItem("selectedLanguage", lang); // 把選擇的語言存進瀏覽器記憶
    applyLanguage(lang);
}

// 執行文字替換
function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        // 如果字典裡有這個翻譯，就替換上去
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// 網頁載入時，初始化語言
function initLanguage() {
    // 檢查瀏覽器有沒有記憶，沒有的話預設為繁體中文
    const savedLang = localStorage.getItem("selectedLanguage") || "zh-TW";
    const langSelect = document.getElementById("languageSelect");
    
    if (langSelect) {
        langSelect.value = savedLang; // 讓下拉式選單顯示正確的語言
    }
    applyLanguage(savedLang); // 套用翻譯
}


// =========================
// 2. 黑白模式切換邏輯 (完整記憶版)
// =========================
const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

// 更新右上角的太陽/月亮圖示
function updateThemeIcon(theme) {
    if(themeBtn) {
        themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
}

// 網頁載入時，初始化主題
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// 點擊按鈕切換並儲存
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}


// =========================
// 3. 頁面跳轉平滑動畫邏輯
// =========================
function initPageTransitions() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果點擊的是當前頁面，或是外連網址，就不執行動畫
            if (this.href === window.location.href || this.target === '_blank') return;
            
            e.preventDefault(); 
            const targetUrl = this.href;
            
            // 加上淡出的 CSS 類別
            document.body.classList.add('fade-out');
            
            // 等待 300 毫秒後跳轉
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
}


// =========================
// 4. 終極啟動器 (確保網頁載入後，所有功能一起發動！)
// =========================
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();       // 啟動語言記憶
    initTheme();          // 啟動黑白模式記憶
    initPageTransitions();// 啟動跳轉動畫攔截
});
