document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       1. 漢堡選單 (三條線) 控制
       ========================= */
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止點擊穿透引發其他事件
            sidebar.classList.add('active');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    /* =========================
       2. 設定選單 (齒輪) 下拉控制
       ========================= */
    const desktopSettingsBtn = document.getElementById('desktopSettingsBtn');
    const desktopDropdown = document.getElementById('desktopDropdown');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    if (desktopSettingsBtn && desktopDropdown) {
        desktopSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('active');
        });
    }

    if (mobileSettingsBtn && mobileDropdown) {
        mobileSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
        });
    }

    // 點擊空白處自動關閉設定選單
    document.addEventListener('click', () => {
        if (desktopDropdown) desktopDropdown.classList.remove('active');
        if (mobileDropdown) mobileDropdown.classList.remove('active');
    });

    /* =========================
       3. 日夜模式切換
       ========================= */
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const htmlElement = document.documentElement;

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            
            // 更新按鈕文字和圖示
            themeToggleBtns.forEach(updateBtn => {
                const icon = updateBtn.querySelector('.theme-icon');
                const text = updateBtn.querySelector('.theme-text');
                if (newTheme === 'dark') {
                    icon.textContent = '☀️';
                    text.textContent = '日間模式';
                } else {
                    icon.textContent = '🌙';
                    text.textContent = '夜間模式';
                }
            });
        });
    });
});
