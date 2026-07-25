// =========================
// 1. 全站多語言翻譯字典 (完整版)
// =========================
const translations = {
    "zh-TW": {
        "nav_about": "關於我", "nav_resume": "專業履歷", "nav_portfolio": "作品集", "nav_games": "遊戲日常",
        "index_greeting": "嗨，我是 余樂鈜",
        "index_subtitle": "熱愛用程式解決問題的開發者 / 喜歡用設計說故事的創作者。",
        "social_ig": "Instagram", "social_yt": "YouTube", "social_tt": "抖音", "social_gh": "GitHub",
        "resume_title": "專業履歷",
        "resume_exp": "💼 工作經驗",
        "resume_exp_1_title": "[公司名稱 (無數據)] - [職稱 (無數據)]",
        "resume_exp_1_date": "日期無數據 - 至今",
        "resume_exp_1_desc": "工作內容或達成的專案成就。(無數據)",
        "resume_exp_2_title": "[前公司名稱 (無數據)] - [職稱 (無數據)]",
        "resume_exp_2_date": "日期無數據 - 日期無數據",
        "resume_exp_2_desc": "工作內容或達成的專案成就。(無數據)",
        "resume_skill": "🛠️ 專業技能",
        "resume_skill_list": "AI, HTML / CSS, JavaScript, 專案管理, 視覺設計, Adobe Illustrator, Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects",
        "resume_edu": "🎓 學歷",
        "resume_edu_1_title": "[Adtect JTM AP Nibong Tebal] - [交互式多媒體技術證書]",
        "resume_edu_1_date": "07/2025 - 07/2027",
        "resume_edu_2_title": "[SMK BUKIT GAMBIR] - [SPM]",
        "resume_edu_2_date": "2020 - 2025",
        "port_title": "作品集與專案",
        "port_1_title": "企業品牌形象重塑與網站開發",
        "port_1_desc": "結合現代美學與流暢的 UI/UX 設計，使用 HTML/CSS/JS 為客戶打造響應式官方網站，大幅提升品牌專業度與使用者停留時間。",
        "port_1_btn": "查看專案 →",
        "port_2_title": "商業宣傳影片與特效剪輯",
        "port_2_desc": "運用 Adobe Premiere Pro 與 After Effects 製作高質感的商業短片。透過精準的節奏掌控與視覺特效，有效提升產品曝光率。",
        "port_2_btn": "觀看影片 →",
        "port_3_title": "跨平台應用程式開發",
        "port_3_desc": "參與前/後端技術整合，開發兼具流暢度與實用性的應用程式，致力於用程式碼解決生活中的實際問題。",
        "port_3_btn": "查看專案 →",
        "games_title": "我的遊戲日常",
        "games_subtitle": "工作與學習之餘，我也熱愛在遊戲世界中探索與競技。",
        "game_1_title": "王牌競速 (國服版)",
        "game_1_desc": "在賽道上享受極速狂飆的快感，釋放王牌技能。",
        "game_2_title": "第五人格 (國際服)",
        "game_2_desc": "非對稱競技的刺激追逃，考驗策略與心理戰。",
        "game_3_title": "Minecraft (Bedrock)",
        "game_3_desc": "與朋友跨平台連線，打造屬於我們的方塊世界。",
        "game_4_title": "Minecraft (Java)",
        "game_4_desc": "體驗豐富的模組與伺服器，探索無限可能。",
        "game_btn": "查看遊戲詳情 →",
        "game_screenshot": "Game Screenshot",
        "footer_desc": "致力於網頁開發、多媒體設計與創意專案。歡迎與我聯繫交流！",
        "footer_nav": "快速導覽",
        "footer_social": "社群平台",
        "footer_copy": "© 2026 BroQiangStudio. All rights reserved. | 聯絡我：anle82760@gmail.com"
    },
    "zh-CN": {
        "nav_about": "关于我", "nav_resume": "专业履历", "nav_portfolio": "作品集", "nav_games": "游戏日常",
        "index_greeting": "嗨，我是 余乐鈜",
        "index_subtitle": "热爱用程式解决问题的开发者 / 喜欢用设计说故事的创作者。",
        "social_ig": "Instagram", "social_yt": "YouTube", "social_tt": "抖音", "social_gh": "GitHub",
        "resume_title": "专业履历",
        "resume_exp": "💼 工作经验",
        "resume_exp_1_title": "[公司名称 (无数据)] - [职称 (无数据)]",
        "resume_exp_1_date": "日期无数据 - 至今",
        "resume_exp_1_desc": "工作内容或达成的专案成就。(无数据)",
        "resume_exp_2_title": "[前公司名称 (无数据)] - [职称 (无数据)]",
        "resume_exp_2_date": "日期无数据 - 日期无数据",
        "resume_exp_2_desc": "工作内容或达成的专案成就。(无数据)",
        "resume_skill": "🛠️ 专业技能",
        "resume_skill_list": "AI, HTML / CSS, JavaScript, 专案管理, 视觉设计, Adobe Illustrator, Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects",
        "resume_edu": "🎓 学历",
        "resume_edu_1_title": "[Adtect JTM AP Nibong Tebal] - [交互式多媒体技术证书]",
        "resume_edu_1_date": "07/2025 - 07/2027",
        "resume_edu_2_title": "[SMK BUKIT GAMBIR] - [SPM]",
        "resume_edu_2_date": "2020 - 2025",
        "port_title": "作品集与专案",
        "port_1_title": "企业品牌形象重塑与网站开发",
        "port_1_desc": "结合现代美学与流畅的 UI/UX 设计，使用 HTML/CSS/JS 为客户打造响应式官方网站，大幅提升品牌专业度与使用者停留时间。",
        "port_1_btn": "查看专案 →",
        "port_2_title": "商业宣传影片与特效剪辑",
        "port_2_desc": "运用 Adobe Premiere Pro 与 After Effects 制作高质感的商业短片。透过精准的节奏掌控与视觉特效，有效提升产品曝光率。",
        "port_2_btn": "观看影片 →",
        "port_3_title": "跨平台应用程式开发",
        "port_3_desc": "参与前/后端技术整合，开发兼具流畅度与实用性的应用程式，致力于用程式码解决生活中的实际问题。",
        "port_3_btn": "查看专案 →",
        "games_title": "我的游戏日常",
        "games_subtitle": "工作与学习之余，我也热爱在游戏世界中探索与竞技。",
        "game_1_title": "王牌竞速 (国服版)",
        "game_1_desc": "在赛道上享受极速狂飙的快感，释放王牌技能。",
        "game_2_title": "第五人格 (国际服)",
        "game_2_desc": "非对称竞技的刺激追逃，考验策略与心理战。",
        "game_3_title": "Minecraft (Bedrock)",
        "game_3_desc": "与朋友跨平台连线，打造属于我们的方块世界。",
        "game_4_title": "Minecraft (Java)",
        "game_4_desc": "体验丰富的模组与伺服器，探索无限可能。",
        "game_btn": "查看游戏详情 →",
        "game_screenshot": "Game Screenshot",
        "footer_desc": "致力于网页开发、多媒体设计与创意专案。欢迎与我联系交流！",
        "footer_nav": "快速导览",
        "footer_social": "社群平台",
        "footer_copy": "© 2026 BroQiangStudio. All rights reserved. | 联系我：anle82760@gmail.com"
    },
    "en": {
        "nav_about": "About Me", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Gaming",
        "index_greeting": "Hi, I'm Yu Le Hong",
        "index_subtitle": "A developer passionate about solving problems with code / A creator who loves storytelling through design.",
        "social_ig": "Instagram", "social_yt": "YouTube", "social_tt": "TikTok", "social_gh": "GitHub",
        "resume_title": "Professional Resume",
        "resume_exp": "💼 Experience",
        "resume_exp_1_title": "[Company Name] - [Job Title]",
        "resume_exp_1_date": "No Data - Present",
        "resume_exp_1_desc": "Job description or project achievements. (No Data)",
        "resume_exp_2_title": "[Previous Company] - [Job Title]",
        "resume_exp_2_date": "No Data - No Data",
        "resume_exp_2_desc": "Job description or project achievements. (No Data)",
        "resume_skill": "🛠️ Skills",
        "resume_skill_list": "AI, HTML / CSS, JavaScript, Project Management, Visual Design, Adobe Illustrator, Photoshop, Premiere Pro, After Effects",
        "resume_edu": "🎓 Education",
        "resume_edu_1_title": "[Adtect JTM AP Nibong Tebal] - [Interactive Multimedia Tech Cert]",
        "resume_edu_1_date": "07/2025 - 07/2027",
        "resume_edu_2_title": "[SMK BUKIT GAMBIR] - [SPM]",
        "resume_edu_2_date": "2020 - 2025",
        "port_title": "Portfolio & Projects",
        "port_1_title": "Brand Identity & Web Development",
        "port_1_desc": "Built responsive official websites using HTML/CSS/JS, combining modern aesthetics with smooth UI/UX design to enhance professional branding.",
        "port_1_btn": "View Project →",
        "port_2_title": "Commercial Promo & VFX Editing",
        "port_2_desc": "Produced high-quality commercial shorts using Premiere Pro and After Effects. Enhanced product exposure through precise pacing and visual effects.",
        "port_2_btn": "Watch Video →",
        "port_3_title": "Cross-Platform App Development",
        "port_3_desc": "Integrated front-end and back-end technologies to develop smooth and practical applications, solving real-world problems with code.",
        "port_3_btn": "View Project →",
        "games_title": "My Gaming Life",
        "games_subtitle": "Outside of work and study, I love exploring and competing in the gaming world.",
        "game_1_title": "Ace Racer (CN)",
        "game_1_desc": "Enjoying the thrill of extreme speed and releasing ultimate skills on the track.",
        "game_2_title": "Identity V (Global)",
        "game_2_desc": "Thrilling asymmetrical competitive pursuits testing strategy and psychological warfare.",
        "game_3_title": "Minecraft (Bedrock)",
        "game_3_desc": "Connecting with friends cross-platform to build our own blocky world.",
        "game_4_title": "Minecraft (Java)",
        "game_4_desc": "Experiencing rich mods and servers, exploring infinite possibilities.",
        "game_btn": "View Details →",
        "game_screenshot": "Game Screenshot",
        "footer_desc": "Dedicated to web development, multimedia design, and creative projects. Feel free to contact me!",
        "footer_nav": "Quick Links",
        "footer_social": "Socials",
        "footer_copy": "© 2026 BroQiangStudio. All rights reserved. | Contact: anle82760@gmail.com"
    },
    "ms": {
        "nav_about": "Tentang Saya", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Permainan",
        "index_greeting": "Hai, saya Yu Le Hong",
        "index_subtitle": "Pembangun yang gemar menyelesaikan masalah dengan kod / Pencipta yang suka bercerita melalui reka bentuk.",
        "social_ig": "Instagram", "social_yt": "YouTube", "social_tt": "TikTok", "social_gh": "GitHub",
        "resume_title": "Resume Profesional",
        "resume_exp": "💼 Pengalaman Kerja",
        "resume_exp_1_title": "[Nama Syarikat] - [Jawatan]",
        "resume_exp_1_date": "Tiada Data - Kini",
        "resume_exp_1_desc": "Penerangan tugas atau pencapaian projek. (Tiada Data)",
        "resume_exp_2_title": "[Syarikat Terdahulu] - [Jawatan]",
        "resume_exp_2_date": "Tiada Data - Tiada Data",
        "resume_exp_2_desc": "Penerangan tugas atau pencapaian projek. (Tiada Data)",
        "resume_skill": "🛠️ Kemahiran",
        "resume_skill_list": "AI, HTML / CSS, JavaScript, Pengurusan Projek, Reka Bentuk Visual, Adobe Illustrator, Photoshop, Premiere Pro, After Effects",
        "resume_edu": "🎓 Pendidikan",
        "resume_edu_1_title": "[Adtect JTM AP Nibong Tebal] - [Sijil Teknologi Multimedia Interaktif]",
        "resume_edu_1_date": "07/2025 - 07/2027",
        "resume_edu_2_title": "[SMK BUKIT GAMBIR] - [SPM]",
        "resume_edu_2_date": "2020 - 2025",
        "port_title": "Portfolio & Projek",
        "port_1_title": "Identiti Jenama & Pembangunan Web",
        "port_1_desc": "Membina laman web rasmi responsif menggunakan HTML/CSS/JS, menggabungkan estetika moden dengan reka bentuk UI/UX yang lancar.",
        "port_1_btn": "Lihat Projek →",
        "port_2_title": "Promo Komersial & Suntingan VFX",
        "port_2_desc": "Menghasilkan video pendek komersial berkualiti tinggi menggunakan Premiere Pro dan After Effects.",
        "port_2_btn": "Tonton Video →",
        "port_3_title": "Pembangunan Aplikasi Merentas Platform",
        "port_3_desc": "Mengintegrasikan teknologi front-end dan back-end untuk membangunkan aplikasi yang lancar dan praktikal.",
        "port_3_btn": "Lihat Projek →",
        "games_title": "Kehidupan Permainan Saya",
        "games_subtitle": "Di luar waktu kerja dan belajar, saya suka meneroka dan bersaing dalam dunia permainan.",
        "game_1_title": "Ace Racer (CN)",
        "game_1_desc": "Menikmati keseronokan kelajuan melampau dan melepaskan kemahiran utama di litar.",
        "game_2_title": "Identity V (Global)",
        "game_2_desc": "Pengejaran kompetitif tidak simetri yang menguji strategi dan perang psikologi.",
        "game_3_title": "Minecraft (Bedrock)",
        "game_3_desc": "Berhubung dengan rakan merentas platform untuk membina dunia blok kami sendiri.",
        "game_4_title": "Minecraft (Java)",
        "game_4_desc": "Mengalami pelbagai mod dan pelayan, meneroka kemungkinan yang tidak terhad.",
        "game_btn": "Lihat Butiran →",
        "game_screenshot": "Game Screenshot",
        "footer_desc": "Berdedikasi dalam pembangunan web, reka bentuk multimedia, dan projek kreatif. Hubungi saya!",
        "footer_nav": "Pautan Pantas",
        "footer_social": "Media Sosial",
        "footer_copy": "© 2026 BroQiangStudio. Hak Cipta Terpelihara. | Hubungi: anle82760@gmail.com"
    }
};

// =========================
// 2. 語言切換核心邏輯
// =========================
function changeLanguage() {
    const lang = document.getElementById("languageSelect").value;
    localStorage.setItem("selectedLanguage", lang); 
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem("selectedLanguage") || "zh-TW";
    const langSelect = document.getElementById("languageSelect");
    if (langSelect) langSelect.value = savedLang; 
    applyLanguage(savedLang); 
}

// =========================
// 3. 黑白模式切換邏輯
// =========================
const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

function updateThemeIcon(theme) {
    if(themeBtn) themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

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
// 4. 頁面跳轉平滑動畫邏輯
// =========================
function initPageTransitions() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href === window.location.href || this.target === '_blank') return;
            e.preventDefault(); 
            const targetUrl = this.href;
            document.body.classList.add('fade-out');
            setTimeout(() => { window.location.href = targetUrl; }, 300);
        });
    });
}

// =========================
// 啟動器
// =========================
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();       
    initTheme();          
    initPageTransitions();
});
