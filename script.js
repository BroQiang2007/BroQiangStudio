document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. 漢堡選單控制 (手機版)
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // ==========================================
    // 2. Telegram風格 設定下拉選單互動邏輯
    // ==========================================
    const desktopSettingsBtn = document.getElementById('desktopSettingsBtn');
    const desktopDropdown = document.getElementById('desktopDropdown');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    if(desktopSettingsBtn) {
        desktopSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('active');
        });
    }

    if(mobileSettingsBtn) {
        mobileSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if(desktopDropdown && desktopDropdown.classList.contains('active') && !desktopDropdown.contains(e.target)) {
            desktopDropdown.classList.remove('active');
        }
        if(mobileDropdown && mobileDropdown.classList.contains('active') && !mobileDropdown.contains(e.target)) {
            mobileDropdown.classList.remove('active');
        }
    });

    // ==========================================
    // 3. 日夜模式切換 (同步所有按鈕)
    // ==========================================
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // 初始化主題
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeUI(currentTheme);

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            updateThemeUI(currentTheme);
        });
    });

    function updateThemeUI(theme) {
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('.theme-icon');
            const text = btn.querySelector('.theme-text');
            if(theme === 'light') {
                if(icon) icon.textContent = '🌙';
                if(text) text.textContent = '夜間模式';
            } else {
                if(icon) icon.textContent = '☀️';
                if(text) text.textContent = '日間模式';
            }
        });
    }

    // ==========================================
    // 4. 多語言切換 (同步所有選單)
    // ==========================================
    const langSelectors = document.querySelectorAll('.lang-selector');
    let currentLang = localStorage.getItem('lang') || 'zh-TW';

    // 初始化選單狀態
    langSelectors.forEach(selector => {
        selector.value = currentLang;
        selector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            // 同步所有下拉選單的值 (確保電腦和手機選項一致)
            langSelectors.forEach(s => s.value = selectedLang);
            localStorage.setItem('lang', selectedLang);
            changeLanguage(selectedLang);
        });
    });

    function changeLanguage(lang) {
        // 這裡是你原本寫的讀取 JSON 或切換文字的邏輯
        // 假設你有用 data-i18n 屬性搭配 JSON 檔案，例如：
        fetch('lang.json')
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll('[data-i18n]').forEach(element => {
                    const key = element.getAttribute('data-i18n');
                    if (data[lang] && data[lang][key]) {
                        element.textContent = data[lang][key];
                    }
                });
            })
            .catch(error => console.log('語言檔案載入失敗', error));
    }
    
    // 初次載入時執行翻譯
    changeLanguage(currentLang);
});
