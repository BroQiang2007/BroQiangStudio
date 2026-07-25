document.addEventListener('DOMContentLoaded', () => {
    // 1. 漢堡選單控制
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn) menuBtn.addEventListener('click', () => sidebar.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

    // 2. Telegram風格 設定下拉選單
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

    // 3. 多語言切換字典 (新增日夜模式翻譯)
    const translations = {
        "zh-TW": {
            "theme_light": "日間模式", "theme_dark": "夜間模式",
            "nav_intro_btn": "了解更多",
            "about_page_title": "自我介紹",
            "about_bio_title": "用代碼刻劃未來，用設計訴說故事。",
            "about_bio_p1": "你好！我是余樂銨 (MICHAEL ER)。我是一個對網頁開發與多媒體設計充滿狂熱的創作者。對我來說，寫程式不僅僅是敲擊鍵盤，更是把腦海中天馬行空的想像，轉化為真實互動體驗的魔法。",
            "about_bio_p2": "近期我幾乎全心投入於網站架構與代碼的鑽研，日夜打磨每一個 UI 細節。連身邊的室友和朋友都看見了我這份對完美近乎固執的追求。我深信，這份對技術的狂熱與堅持，必定能在未來開花結果，迎來屬於我的成功。",
            "about_bio_p3": "無論是極簡的玻璃擬物化介面、流暢的動態效果，還是跨語言的系統架構，我都樂於挑戰。期待能與同樣熱愛科技與設計的你，一起創造出更多令人驚豔的作品！",
            "nav_about": "關於我", "nav_resume": "專業履歷", "nav_portfolio": "作品集", "nav_games": "遊戲日常",
            "hero_title": "嗨，我是 余樂銨", "hero_subtitle": "熱愛用程式解決問題的開發者 / 喜歡用設計說故事的創作者。",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力於網頁開發、多媒體設計與創意專案。歡迎與我聯繫交流！",
            "footer_title_2": "快速導覽", "footer_title_3": "社群平台",
            "resume_header": "專業技能",
            "skill_title_1": "網頁前端開發", "skill_desc_1": "精通 HTML5, CSS3, JavaScript，並能獨立完成 RWD 響應式網頁設計，追求像素級的 UI 還原與順暢的 UX 體驗。",
            "skill_title_2": "UI/UX 設計", "skill_desc_2": "熟悉現代化的設計語言（如 Apple Glassmorphism、布加迪極簡風），善用透明度與動畫提升視覺質感。",
            "skill_title_3": "多語言架構 (i18n)", "skill_desc_3": "具備構建多語言切換系統的經驗，能夠靈活處理中、英、馬來文等本地化需求。",
            "resume_exp_header": "工作經驗",
            "exp_title": "無數據",
            "resume_edu_header": "教育背景",
            "edu_title_1": "互動式多媒體證書", "edu_desc_1": "專注於多媒體設計、影音剪輯與互動式技術。",
            "edu_title_2": "SPM 文憑", "edu_desc_2": "完成中學基礎教育，培養良好的學習與問題解決能力。",
            "resume_contact_header": "聯絡方式",
            "contact_title": "隨時歡迎與我聯繫！", "contact_desc": "你可以透過 Email 或底部的社群平台找到我。",
            "portfolio_header": "精選專案", "project_img": "專案圖片",
            "project_1_title": "個人品牌官方網站", "project_1_desc": "結合深色模式與多語言支持的現代化個人網站，採用 Telegram 風格 UI 交互設計。",
            "project_2_title": "多媒體影音剪輯", "project_2_desc": "高質感的動態影片製作，包含車輛追焦、跑車動態剪輯，展現視覺衝擊力。",
            "project_3_title": "UI/UX 介面設計", "project_3_desc": "探索使用者體驗，打造直覺且美觀的互動式應用程式介面。",
            "project_4_title": "3D 模型與渲染", "project_4_desc": "運用 3D 軟體建立高精度的產品模型與逼真的場景渲染圖。",
            "project_5_title": "品牌視覺識別", "project_5_desc": "為企業或個人打造獨特的 Logo 與品牌視覺系統設計。",
            "project_6_title": "客製化網頁系統", "project_6_desc": "根據客戶需求，開發具備後台管理與資料串接的網頁應用。",
            "view_project": "查看詳情 >",
            "games_header": "我的遊戲日常", "game_screenshot": "遊戲截圖",
            "game_1_title": "王牌競速 (國服版)", "game_1_desc": "在賽道上享受極速狂飆的快感，釋放王牌技能。",
            "game_2_title": "第五人格 (國際服)", "game_2_desc": "非對稱競技的刺激追逐，考驗策略與心理戰。",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "與朋友跨平台連線，打造屬於我們的方塊世界。",
            "game_4_title": "Minecraft (Java)", "game_4_desc": "體驗原汁原味的麥塊生存，探索豐富的社群模組與伺服器。",
            "game_btn": "查看遊戲詳情 >"
        },
        "zh-CN": {
            "theme_light": "日间模式", "theme_dark": "夜间模式",
            "nav_intro_btn": "了解更多",
            "about_page_title": "自我介绍",
            "about_bio_title": "用代码刻画未来，用设计诉说故事。",
            "about_bio_p1": "你好！我是余乐铵 (MICHAEL ER)。我是一个对网页开发与多媒体设计充满狂热的创作者。对我来说，写程序不仅是敲击键盘，更是把脑海中天马行空的想象，转化为真实互动体验的魔法。",
            "about_bio_p2": "近期我几乎全心投入于网站架构与代码的钻研，日夜打磨每一个 UI 细节。连身边的室友和朋友都看见了我这份对完美近乎固执的追求。我深信，这份对技术的克制与坚持，必定能在未来开花结果，迎来属于我的成功。",
            "about_bio_p3": "无论是极简的玻璃拟物化界面、流畅的动态效果，还是跨语言的系统架构，我都乐于挑战。期待能与同样热爱科技与设计的你，一起创造出更多令人惊艳的作品！",
            "nav_about": "关于我", "nav_resume": "专业履历", "nav_portfolio": "作品集", "nav_games": "游戏日常",
            "hero_title": "嗨，我是 余乐铵", "hero_subtitle": "热爱用代码解决问题的开发者 / 喜欢用设计讲故事的创作者。",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力于网页开发、多媒体设计与创意项目。欢迎与我联系交流！",
            "footer_title_2": "快速导航", "footer_title_3": "社交平台",
            "resume_header": "专业技能",
            "skill_title_1": "网页前端开发", "skill_desc_1": "精通 HTML5, CSS3, JavaScript，独立完成 RWD 响应式网页设计，追求像素级 UI 还原。",
            "skill_title_2": "UI/UX 设计", "skill_desc_2": "熟悉现代化设计语言，善用透明度与动画提升视觉质感。",
            "skill_title_3": "多语言架构 (i18n)", "skill_desc_3": "具备构建多语言切换系统的经验，灵活处理本地化需求。",
            "resume_exp_header": "工作经验", 
            "exp_title": "无数据", 
            "resume_edu_header": "教育背景", 
            "edu_title_1": "互动式多媒体证书", "edu_desc_1": "专注于多媒体设计、影音剪辑与互动式技术。",
            "edu_title_2": "SPM 文凭", "edu_desc_2": "完成中学基础教育，培养良好的学习与问题解决能力。",
            "resume_contact_header": "联系方式", 
            "contact_title": "随时欢迎与我联系！", "contact_desc": "你可以通过 Email 或底部的社交平台找到我。",
            "portfolio_header": "精选项目", "project_img": "项目图片",
            "project_1_title": "个人品牌官方网站", "project_1_desc": "结合深色模式与多语言支持的现代化个人网站，采用 Telegram 风格 UI 交互设计。",
            "project_2_title": "多媒体影音剪辑", "project_2_desc": "高质感的动态视频制作，展现视觉冲击力。",
            "project_3_title": "UI/UX 界面设计", "project_3_desc": "探索用户体验，打造直观且美观的互动式应用程序界面。",
            "project_4_title": "3D 模型与渲染", "project_4_desc": "运用 3D 软件建立高精度的产品模型与逼真的场景渲染图。",
            "project_5_title": "品牌视觉识别", "project_5_desc": "为企业或个人打造独特的 Logo 与品牌视觉系统设计。",
            "project_6_title": "定制化网页系统", "project_6_desc": "根据客户需求，开发具备后台管理与数据串接的网页应用。",
            "view_project": "查看详情 >",
            "games_header": "我的游戏日常", "game_screenshot": "游戏截图",
            "game_1_title": "王牌竞速 (国服版)", "game_1_desc": "在赛道上享受极速狂飙的快感，释放王牌技能。",
            "game_2_title": "第五人格 (国际服)", "game_2_desc": "非对称竞技的刺激追逐，考验策略与心理战。",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "与朋友跨平台联机，打造属于我们的方块世界。",
            "game_4_title": "Minecraft (Java)", "game_4_desc": "体验原汁原味的麦块生存，探索丰富的社区模组与服务器。",
            "game_btn": "查看游戏详情 >"
        },
        "en": {
            "theme_light": "Light Mode", "theme_dark": "Dark Mode",
            "nav_intro_btn": "Learn More",
            "about_page_title": "About Me",
            "about_bio_title": "Coding the future, designing stories.",
            "about_bio_p1": "Hi! I'm MICHAEL ER. I am a creator deeply passionate about web development and multimedia design. For me, coding isn't just about typing; it's the magic of turning wild imagination into real interactive experiences.",
            "about_bio_p2": "Lately, I've poured my heart into mastering web architecture and code, polishing every UI detail day and night. Even my roommates and friends have witnessed this relentless pursuit of perfection. I firmly believe this dedication to tech will blossom into massive success in the future.",
            "about_bio_p3": "Whether it's minimalist glassmorphism, smooth animations, or multilingual systems, I love the challenge. I look forward to creating stunning projects with those who share the same passion!",
            "nav_about": "About Me", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Gaming Life",
            "hero_title": "Hi, I'm MICHAEL ER",
            "hero_subtitle": "Developer solving problems with code / Creator telling stories through design.",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Dedicated to web development, multimedia design, and creative projects. Let's connect!",
            "footer_title_2": "Quick Links", "footer_title_3": "Social Media",
            "resume_header": "Professional Skills",
            "skill_title_1": "Front-End Development", "skill_desc_1": "Proficient in HTML5, CSS3, JS, and RWD. Striving for pixel-perfect UI.",
            "skill_title_2": "UI/UX Design", "skill_desc_2": "Familiar with modern design languages like Glassmorphism.",
            "skill_title_3": "i18n Architecture", "skill_desc_3": "Experienced in building multilingual systems.",
            "resume_exp_header": "Work Experience", 
            "exp_title": "No Data", 
            "resume_edu_header": "Education", 
            "edu_title_1": "Interactive Multimedia Certificate", "edu_desc_1": "Focused on multimedia design, video editing, and interactive technologies.",
            "edu_title_2": "SPM Certificate", "edu_desc_2": "Completed secondary education, fostering learning and problem-solving skills.",
            "resume_contact_header": "Contact", "contact_title": "Feel free to reach out!", "contact_desc": "You can find me via Email or social media below.",
            "portfolio_header": "Featured Projects", "project_img": "Project Image",
            "project_1_title": "Personal Brand Website", "project_1_desc": "Modern personal website with Dark Mode and i18n.",
            "project_2_title": "Multimedia Editing", "project_2_desc": "High-quality dynamic video production.",
            "project_3_title": "UI/UX Interface Design", "project_3_desc": "Exploring user experience to build intuitive and beautiful app interfaces.",
            "project_4_title": "3D Modeling & Rendering", "project_4_desc": "Using 3D software to create high-precision models and realistic renders.",
            "project_5_title": "Brand Visual Identity", "project_5_desc": "Creating unique logos and visual systems for brands.",
            "project_6_title": "Custom Web Systems", "project_6_desc": "Developing web applications with backend management based on client needs.",
            "view_project": "View Details >",
            "games_header": "My Gaming Life", "game_screenshot": "Game Screenshot",
            "game_1_title": "Ace Racer (CN)", "game_1_desc": "Enjoy the thrill of racing and releasing ultimate skills.",
            "game_2_title": "Identity V (Global)", "game_2_desc": "Asymmetrical horror game testing strategy and psychology.",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Cross-platform multiplayer, building our blocky world.",
            "game_4_title": "Minecraft (Java)", "game_4_desc": "Experience classic Minecraft survival with endless community mods.",
            "game_btn": "View Details >"
        },
        "ms": {
            "theme_light": "Mod Cerah", "theme_dark": "Mod Gelap",
            "nav_intro_btn": "Ketahui Lanjut",
            "about_page_title": "Tentang Saya",
            "about_bio_title": "Mengekod masa depan, mereka bentuk cerita.",
            "about_bio_p1": "Hai! Saya ER LE AN. Saya seorang pencipta yang sangat meminati pembangunan web dan reka bentuk multimedia. Mengekod adalah magis yang menukar imaginasi kepada realiti interaktif.",
            "about_bio_p2": "Kebelakangan ini, saya banyak meluangkan masa mendalami kod dan seni bina web siang dan malam. Malah rakan sebilik saya turut melihat keghairahan ini. Saya yakin, usaha keras ini pasti akan membuahkan kejayaan yang besar pada masa hadapan.",
            "about_bio_p3": "Sama ada UI minimalis, animasi lancar, atau sistem pelbagai bahasa, saya sentiasa bersedia menyahut cabaran. Mari cipta sesuatu yang menakjubkan bersama!",
            "nav_about": "Tentang Saya", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Kehidupan Permainan",
            "hero_title": "Hai, Saya ER LE AN",
            "hero_subtitle": "Pembangun yang menyelesaikan masalah dengan kod / Pencipta yang bercerita melalui reka bentuk.",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Berdedikasi untuk pembangunan web, reka bentuk multimedia dan projek kreatif. Mari berhubung!",
            "footer_title_2": "Pautan Pantas", "footer_title_3": "Media Sosial",
            "resume_header": "Kemahiran Profesional",
            "skill_title_1": "Pembangunan Front-End", "skill_desc_1": "Mahir dalam HTML5, CSS3, JS, dan RWD.",
            "skill_title_2": "Reka Bentuk UI/UX", "skill_desc_2": "Biasa dengan bahasa reka bentuk moden.",
            "skill_title_3": "Sistem Pelbagai Bahasa", "skill_desc_3": "Berpengalaman membina sistem pelbagai bahasa (i18n).",
            "resume_exp_header": "Pengalaman Kerja", 
            "exp_title": "Tiada Data", 
            "resume_edu_header": "Pendidikan", 
            "edu_title_1": "Sijil Multimedia Interaktif", "edu_desc_1": "Fokus pada reka bentuk multimedia dan teknologi interaktif.",
            "edu_title_2": "Sijil Pelajaran Malaysia (SPM)", "edu_desc_2": "Menamatkan pendidikan menengah, memupuk kemahiran pembelajaran.",
            "resume_contact_header": "Hubungi Saya", "contact_title": "Sila hubungi saya!", "contact_desc": "Anda boleh mencari saya melalui E-mel atau media sosial di bawah.",
            "portfolio_header": "Projek Pilihan", "project_img": "Imej Projek",
            "project_1_title": "Laman Web Jenama Peribadi", "project_1_desc": "Laman web peribadi moden dengan Mod Gelap dan sokongan pelbagai bahasa.",
            "project_2_title": "Penyuntingan Multimedia", "project_2_desc": "Penghasilan video dinamik berkualiti tinggi.",
            "project_3_title": "Reka Bentuk Antara Muka UI/UX", "project_3_desc": "Membina antara muka aplikasi yang intuitif dan cantik.",
            "project_4_title": "Pemodelan 3D", "project_4_desc": "Menggunakan perisian 3D untuk membina model produk berketepatan tinggi.",
            "project_5_title": "Identiti Visual Jenama", "project_5_desc": "Mereka bentuk sistem visual dan logo yang unik.",
            "project_6_title": "Sistem Web Tersuai", "project_6_desc": "Membangunkan aplikasi web mengikut keperluan pelanggan.",
            "view_project": "Lihat Butiran >",
            "games_header": "Kehidupan Permainan", "game_screenshot": "Tangkapan Skrin",
            "game_1_title": "Ace Racer (CN)", "game_1_desc": "Nikmati keseronokan berlumba di litar.",
            "game_2_title": "Identity V (Global)", "game_2_desc": "Permainan seram asimetri yang menguji strategi.",
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Bermain merentas platform bersama rakan.",
            "game_4_title": "Minecraft (Java)", "game_4_desc": "Alami kelangsungan hidup Minecraft klasik dengan pelbagai mod.",
            "game_btn": "Lihat Butiran >"
        }
    };

    // 4. 語言與主題狀態管理
    const langSelectors = document.querySelectorAll('.lang-selector');
    let currentLang = localStorage.getItem('lang') || 'zh-TW';
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // 初始化主題
    document.documentElement.setAttribute('data-theme', currentTheme);

    // 5. 更新主題 UI 的函式 (綁定語言)
    function updateThemeUI(theme, lang) {
        const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('.theme-icon');
            const text = btn.querySelector('.theme-text');
            if(theme === 'light') {
                if(icon) icon.textContent = '🌙';
                if(text) text.textContent = translations[lang]["theme_dark"]; // 提示切換成夜間
            } else {
                if(icon) icon.textContent = '☀️';
                if(text) text.textContent = translations[lang]["theme_light"]; // 提示切換成日間
            }
        });
    }

    // 6. 綁定主題切換按鈕事件
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            updateThemeUI(currentTheme, currentLang); // 更新文字
        });
    });

    // 7. 切換語言函式
    function changeLanguage(lang) {
        currentLang = lang; // 記住當前語言
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // 語言切換時，也要同步更新日夜模式的文字！
        updateThemeUI(currentTheme, currentLang);
    }

    // 綁定語言選擇器事件
    langSelectors.forEach(selector => {
        selector.value = currentLang;
        selector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            langSelectors.forEach(s => s.value = selectedLang);
            localStorage.setItem('lang', selectedLang);
            changeLanguage(selectedLang);
        });
    });
    
    // 網頁初次載入執行語言與主題更新
    changeLanguage(currentLang);
});
