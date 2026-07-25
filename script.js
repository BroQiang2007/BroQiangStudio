// 語言切換邏輯 (請保留你原有的多語言對照表，這裡僅示範結構)
function changeLanguage() {
    const lang = document.getElementById("languageSelect").value;
    // 這裡放入你原本的翻譯邏輯
    console.log("Language changed to: " + lang);
}

// =========================
// 黑白模式切換邏輯
// =========================
const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

// 檢查本地儲存的主題偏好
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// 點擊切換主題
themeBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// 更新按鈕圖示
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeBtn.innerHTML = '☀️'; // 暗黑模式顯示太陽(切換到亮白)
    } else {
        themeBtn.innerHTML = '🌙'; // 亮白模式顯示月亮(切換到暗黑)
    }
}

// =========================
// 頁面跳轉平滑動畫邏輯
// =========================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // 如果點擊的是當前頁面，或是另開新分頁的連結，就不執行退出動畫
        if (this.href === window.location.href || this.target === '_blank') return;
        
        e.preventDefault(); // 暫停原本瞬間跳轉的動作
        const targetUrl = this.href;
        
        // 替整個網頁加上淡出的 CSS 動畫
        document.body.classList.add('fade-out');
        
        // 等待 300 毫秒（配合 CSS 動畫時間）後，再前往下一頁
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 300);
    });
});
