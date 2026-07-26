// ===== ⚡ 效能模式 3 段切換邏輯 (極致 -> 均衡 -> 省電) =====
const perfToggleBtn = document.querySelector('.perf-toggle-btn');
const perfModes = ['high', 'medium', 'low'];
const perfLabels = ['極致', '均衡', '省電'];
// 讀取本地儲存，預設為 high
let currentPerf = localStorage.getItem('performance') || 'high';
let perfIndex = perfModes.indexOf(currentPerf);
if(perfIndex === -1) perfIndex = 0;

// 初始化按鈕文字與狀態
document.documentElement.setAttribute('data-performance', currentPerf);
if(perfToggleBtn) perfToggleBtn.innerHTML = `⚡ 效能：${perfLabels[perfIndex]}`;

if(perfToggleBtn) {
    perfToggleBtn.addEventListener('click', () => {
        perfIndex = (perfIndex + 1) % 3; // 在 0, 1, 2 之間循環
        const newMode = perfModes[perfIndex];
        
        document.documentElement.setAttribute('data-performance', newMode);
        perfToggleBtn.innerHTML = `⚡ 效能：${perfLabels[perfIndex]}`;
        localStorage.setItem('performance', newMode);
    });
}

// ===== 📊 模擬訪客統計邏輯 =====
// 利用 localStorage 製造真實的數字跳動感
function updateVisitorStats() {
    let total = parseInt(localStorage.getItem('totalVisitors') || '12048');
    let daily = parseInt(localStorage.getItem('dailyVisitors') || '132');
    
    // 每次重新整理，隨機增加一點瀏覽量 (模擬真實感)
    total += Math.floor(Math.random() * 3) + 1;
    daily += Math.floor(Math.random() * 2) + 1;
    
    localStorage.setItem('totalVisitors', total);
    localStorage.setItem('dailyVisitors', daily);
    
    const dailyEl = document.getElementById('daily-visitors');
    const totalEl = document.getElementById('total-visitors');
    
    if(dailyEl && totalEl) {
        // 數字跑動動畫效果
        animateValue(dailyEl, daily - 10, daily, 1000);
        animateValue(totalEl, total - 15, total, 1500);
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
// 執行統計
updateVisitorStats();
