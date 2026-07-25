document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. 漢堡選單控制
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn) menuBtn.addEventListener('click', () => sidebar.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

    // ==========================================
    // 2. Telegram風格 設定下拉選單
    // ==========================================
    const desktopSettingsBtn = document.getElementById('desktopSettingsBtn');
    const desktopDropdown = document.getElementById('desktopDropdown');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    if(desktopSettingsBtn) {
        desktopSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); desktopDropdown.classList.toggle('active');
        });
    }
    if(mobileSettingsBtn) {
        mobileSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); mobileDropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if(desktopDropdown && desktopDropdown.classList.contains('active') && !desktopDropdown.contains(e.target)) desktopDropdown.classList.remove('active');
        if(mobileDropdown && mobileDropdown.classList.contains('active') && !mobileDropdown.contains(e.target)) mobileDropdown.classList.remove('active');
    });

    // ==========================================
    // 3. 日夜模式切換
    // ==========================================
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
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
    // 4. 多語言切換字典
    // ==========================================
    const translations = {
        "zh-TW": {
            "nav_about": "關於我", "nav_resume": "專業履歷", "nav_portfolio": "作品集", "nav_games": "遊戲日常",
            "hero_title": "嗨，我是 余樂鈜", "hero_subtitle": "熱愛用程式解決問題的開發者 / 喜歡用設計說故事的創作者。",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力於網頁開發、多媒體設計與創意專案。歡迎與我聯繫交流！",
            "footer_title_2": "快速導覽", "footer_title_3": "社群平台",
            "resume_header": "專業技能",
            "skill_title_1": "網頁前端開發", "skill_desc_1": "精通 HTML5, CSS3, JavaScript，並能獨立完成 RWD 響應式網頁設計，追求像素級的 UI 還原與順暢的 UX 體驗。",
            "skill_title_2": "UI/UX 設計", "skill_desc_2": "熟悉現代化的設計語言（如 Apple Glassmorphism、布加迪極簡風），善用透明度與動畫提升視覺質感。",
            "skill_title_3": "多語言架構 (i18n)", "skill_desc_3": "具備構建多語言切換系統的經驗，能夠靈活處理中、英、馬來文等本地化需求。",
            "resume_exp_header": "工作經驗",
            "exp_title": "前端工程師 / 網頁設計師", "exp_desc": "BroQiangStudio | 2024 - 至今 | 負責網站開發、UI/UX設計，並導入多語言與深色模式架構。",
            "resume_edu_header": "教育背景",
            "edu_title": "資訊工程 / 相關科系", "edu_desc": "XXX 學校 | 畢業年份 | 專注於網頁前端技術與軟體開發。",
            "resume_contact_header": "聯絡方式",
            "contact_title": "隨時歡迎與我聯繫！", "contact_desc": "你可以透過 Email 或底部的社群平台找到我。",
            "portfolio_header": "精選專案", "project_img": "專案圖片",
            "project_1_title": "個人品牌官方網站", "project_1_desc": "結合深色模式與多語言支持的現代化個人網站，採用 Telegram 風格 UI 交互設計。",
            "project_2_title": "多媒體影音剪輯", "project_2_desc": "高質感的動態影片製作，包含車輛追焦、跑車動態剪輯，展現視覺衝擊力。",
            "view_project": "查看詳情 >",
            "games_header": "我的遊戲日常", "game_screenshot": "遊戲截圖",
            "game_1_title": "王牌競速 (國服版)", "game_1_desc": "在賽道上享受極速狂飆的快感，釋放王牌技能。",
            "game_2_title": "第五人格 (國際服)", "game_2_desc": "非對稱競技的刺激追逐，考驗策略與心理戰。",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "與朋友跨平台連線，打造屬於我們的方塊世界。",
            "game_btn": "查看遊戲詳情 >"
        },
        "zh-CN": {
            "nav_about": "关于我", "nav_resume": "专业履历", "nav_portfolio": "作品集", "nav_games": "游戏日常",
            "hero_title": "嗨，我是 余乐鈜", "hero_subtitle": "热爱用代码解决问题的开发者 / 喜欢用设计讲故事的创作者。",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力于网页开发、多媒体设计与创意项目。欢迎与我联系交流！",
            "footer_title_2": "快速导航", "footer_title_3": "社交平台",
            "resume_header": "专业技能",
            "skill_title_1": "网页前端开发", "skill_desc_1": "精通 HTML5, CSS3, JavaScript，独立完成 RWD 响应式网页设计，追求像素级 UI 还原。",
            "skill_title_2": "UI/UX 设计", "skill_desc_2": "熟悉现代化设计语言，善用透明度与动画提升视觉质感。",
            "skill_title_3": "多语言架构 (i18n)", "skill_desc_3": "具备构建多语言切换系统的经验，灵活处理本地化需求。",
            "resume_exp_header": "工作经验", "exp_title": "前端工程师 / 网页设计师", "exp_desc": "BroQiangStudio | 2024 - 至今 | 负责网站开发、UI/UX设计。",
            "resume_edu_header": "教育背景", "edu_title": "信息工程 / 相关科系", "edu_desc": "XXX 学校 | 毕业年份 | 专注于网页前端技术。",
            "resume_contact_header": "联系方式", "contact_title": "随时欢迎与我联系！", "contact_desc": "你可以通过 Email 或底部的社交平台找到我。",
            "portfolio_header": "精选项目", "project_img": "项目图片",
            "project_1_title": "个人品牌官方网站", "project_1_desc": "结合深色模式与多语言支持的现代化个人网站，采用 Telegram 风格 UI 交互设计。",
            "project_2_title": "多媒体影音剪辑", "project_2_desc": "高质感的动态视频制作，展现视觉冲击力。",
            "view_project": "查看详情 >",
            "games_header": "我的游戏日常", "game_screenshot": "游戏截图",
            "game_1_title": "王牌竞速 (国服版)", "game_1_desc": "在赛道上享受极速狂飙的快感，释放王牌技能。",
            "game_2_title": "第五人格 (国际服)", "game_2_desc": "非对称竞技的刺激追逐，考验策略与心理战。",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "与朋友跨平台联机，打造属于我们的方块世界。",
            "game_btn": "查看游戏详情 >"
        },
        "en": {
            "nav_about": "About Me", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Gaming Life",
            "hero_title": "Hi, I'm Yu Le Hong", "hero_subtitle": "Developer solving problems with code / Creator telling stories through design.",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Dedicated to web development, multimedia design, and creative projects. Let's connect!",
            "footer_title_2": "Quick Links", "footer_title_3": "Social Media",
            "resume_header": "Professional Skills",
            "skill_title_1": "Front-End Development", "skill_desc_1": "Proficient in HTML5, CSS3, JS, and RWD. Striving for pixel-perfect UI.",
            "skill_title_2": "UI/UX Design", "skill_desc_2": "Familiar with modern design languages like Glassmorphism.",
            "skill_title_3": "i18n Architecture", "skill_desc_3": "Experienced in building multilingual systems.",
            "resume_exp_header": "Work Experience", "exp_title": "Front-End Engineer / Web Designer", "exp_desc": "BroQiangStudio | 2024 - Present | Web development and UI/UX design.",
            "resume_edu_header": "Education", "edu_title": "Computer Science / Related Field", "edu_desc": "XXX School | Graduation Year | Focused on web technologies.",
            "resume_contact_header": "Contact", "contact_title": "Feel free to reach out!", "contact_desc": "You can find me via Email or social media below.",
            "portfolio_header": "Featured Projects", "project_img": "Project Image",
            "project_1_title": "Personal Brand Website", "project_1_desc": "Modern personal website with Dark Mode and i18n.",
            "project_2_title": "Multimedia Editing", "project_2_desc": "High-quality dynamic video production.",
            "view_project": "View Details >",
            "games_header": "My Gaming Life", "game_screenshot": "Game Screenshot",
            "game_1_title": "Ace Racer (CN)", "game_1_desc": "Enjoy the thrill of racing and releasing ultimate skills.",
            "game_2_title": "Identity V (Global)", "game_2_desc": "Asymmetrical horror game testing strategy and psychology.",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Cross-platform multiplayer, building our blocky world.",
            "game_btn": "View Details >"
        },
        "ms": {
            "nav_about": "Tentang Saya", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Kehidupan Permainan",
            "hero_title": "Hai, Saya Yu Le Hong", "hero_subtitle": "Pembangun yang menyelesaikan masalah dengan kod / Pencipta yang bercerita melalui reka bentuk.",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Berdedikasi untuk pembangunan web, reka bentuk multimedia dan projek kreatif. Mari berhubung!",
            "footer_title_2": "Pautan Pantas", "footer_title_3": "Media Sosial",
            "resume_header": "Kemahiran Profesional",
            "skill_title_1": "Pembangunan Front-End", "skill_desc_1": "Mahir dalam HTML5, CSS3, JS, dan RWD.",
            "skill_title_2": "Reka Bentuk UI/UX", "skill_desc_2": "Biasa dengan bahasa reka bentuk moden.",
            "skill_title_3": "Sistem Pelbagai Bahasa", "skill_desc_3": "Berpengalaman membina sistem pelbagai bahasa (i18n).",
            "resume_exp_header": "Pengalaman Kerja", "exp_title": "Jurutera Front-End / Pereka Web", "exp_desc": "BroQiangStudio | 2024 - Kini | Pembangunan web dan reka bentuk UI/UX.",
            "resume_edu_header": "Pendidikan", "edu_title": "Sains Komputer", "edu_desc": "Sekolah XXX | Tahun Graduasi | Fokus pada teknologi web.",
            "resume_contact_header": "Hubungi Saya", "contact_title": "Sila hubungi saya!", "contact_desc": "Anda boleh mencari saya melalui E-mel atau media sosial di bawah.",
            "portfolio_header": "Projek Pilihan", "project_img": "Imej Projek",
            "project_1_title": "Laman Web Jenama Peribadi", "project_1_desc": "Laman web peribadi moden dengan Mod Gelap dan sokongan pelbagai bahasa.",
            "project_2_title": "Penyuntingan Multimedia", "project_2_desc": "Penghasilan video dinamik berkualiti tinggi.",
            "view_project": "Lihat Butiran >",
            "games_header": "Kehidupan Permainan", "game_screenshot": "Tangkapan Skrin",
            "game_1_title": "Ace Racer (CN)", "game_1_desc": "Nikmati keseronokan berlumba di litar.",
            "game_2_title": "Identity V (Global)", "game_2_desc": "Permainan seram asimetri yang menguji strategi.",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Bermain merentas platform bersama rakan.",
            "game_btn": "Lihat Butiran >"
        }
    };

    const langSelectors = document.querySelectorAll('.lang-selector');
    let currentLang = localStorage.getItem('lang') || 'zh-TW';

    langSelectors.forEach(selector => {
        selector.value = currentLang;
        selector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            langSelectors.forEach(s => s.value = selectedLang);
            localStorage.setItem('lang', selectedLang);
            changeLanguage(selectedLang);
        });
    });

    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
    
    // 初次載入執行語言切換
    changeLanguage(currentLang);
});
