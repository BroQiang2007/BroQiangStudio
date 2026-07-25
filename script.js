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
