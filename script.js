document.addEventListener("DOMContentLoaded", () => {
    // 1. 漢堡選單控制
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            sidebar.classList.add('active');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // 2. 齒輪設定選單控制 (已修復事件冒泡 Bug)
    const desktopSettingsBtn = document.getElementById('desktopSettingsBtn');
    const desktopDropdown = document.getElementById('desktopDropdown');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    if (desktopSettingsBtn && desktopDropdown) {
        desktopSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('active');
        });
        
        // 【修復關鍵】：防止點擊下拉選單內部時，觸發外層的關閉事件
        desktopDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    if (mobileSettingsBtn && mobileDropdown) {
        mobileSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
        });
        
        // 【修復關鍵】：防止點擊下拉選單內部時，觸發外層的關閉事件
        mobileDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 點擊網頁其他空白處時，關閉設定選單
    document.addEventListener('click', () => {
        if (desktopDropdown) desktopDropdown.classList.remove('active');
        if (mobileDropdown) mobileDropdown.classList.remove('active');
    });

    // 3. 日夜模式
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const htmlElement = document.documentElement;

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            
            themeToggleBtns.forEach(updateBtn => {
                const icon = updateBtn.querySelector('.theme-icon');
                const text = updateBtn.querySelector('.theme-text');
                if (newTheme === 'dark') {
                    icon.textContent = '☀️'; text.textContent = '日間模式';
                } else {
                    icon.textContent = '🌙'; text.textContent = '夜間模式';
                }
            });
        });
    });
});
