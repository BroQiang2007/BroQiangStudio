document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       1. 漢堡選單控制
       ========================= */
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

    /* =========================
       2. 齒輪設定選單控制 (已修復事件冒泡 Bug)
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
        
        desktopDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    if (mobileSettingsBtn && mobileDropdown) {
        mobileSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
        });
        
        mobileDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

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

    /* =========================
       4. 多國語言翻譯 (i18n) - 涵蓋全部 7 個頁面
       ========================= */
    const translations = {
        "zh-TW": {
            "nav_about": "關於我", "nav_resume": "專業履歷", "nav_portfolio": "作品集", "nav_games": "遊戲日常",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力於網頁開發、多媒體設計與創意專案。歡迎與我聯繫交流！", "footer_title_2": "快速導覽", "footer_title_3": "社群平台",
            "page_title_home": "首頁 | BroQiangStudio", "hero_title": "嗨，我是 余樂銨", "hero_subtitle": "熱愛用程式解決問題的開發者 / 喜歡用設計說故事的創作者。", "intro_btn": "了解更多",
            "page_title_games": "遊戲日常 | BroQiangStudio", "games_header": "我的遊戲日常", "game_1_title": "王牌競速 (國服版)", "game_1_desc": "在賽道上享受極速狂飆的快感，釋放王牌技能。", "game_2_title": "第五人格 (國際服)", "game_2_desc": "非對稱競技的刺激追逐，考驗策略與心理戰。", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "與朋友跨平台連線，打造屬於我們的方塊世界。", "game_4_title": "Minecraft (Java)", "game_4_desc": "體驗原汁原味的麥塊生存，探索豐富的社群模組與伺服器。", "game_btn": "查看遊戲詳情 >",
            "page_title_resume": "專業履歷 | BroQiangStudio", "resume_header": "專業履歷", "resume_content": "這裡即將展示我的專業技能與經歷...",
            "page_title_portfolio": "作品集 | BroQiangStudio", "portfolio_header": "作品集", "portfolio_item_1": "敬請期待", "portfolio_desc_1": "更多精彩網頁與設計專案即將上線...",
            "page_title_about": "關於我 | BroQiangStudio", "about_header": "關於我 - 詳細介紹", "about_content": "你好！我是余樂銨，歡迎來到我的個人網站..."
        },
        "zh-CN": {
            "nav_about": "关于我", "nav_resume": "专业履历", "nav_portfolio": "作品集", "nav_games": "游戏日常",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力于网页开发、多媒体设计与创意专案。欢迎与我联系交流！", "footer_title_2": "快速导航", "footer_title_3": "社群平台",
            "page_title_home": "首页 | BroQiangStudio", "hero_title": "嗨，我是 余乐铵", "hero_subtitle": "热爱用程式解决问题的开发者 / 喜欢用设计说故事的创作者。", "intro_btn": "了解更多",
            "page_title_games": "游戏日常 | BroQiangStudio", "games_header": "我的游戏日常", "game_1_title": "王牌竞速 (国服版)", "game_1_desc": "在赛道上享受极速狂飙的快感，释放王牌技能。", "game_2_title": "第五人格 (国际服)", "game_2_desc": "非对称竞技的刺激追逐，考验策略与心理战。", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "与朋友跨平台连线，打造属于我们的方块世界。", "game_4_title": "Minecraft (Java)", "game_4_desc": "体验原汁原味的麦块生存，探索丰富的社群模组。", "game_btn": "查看游戏详情 >",
            "page_title_resume": "专业履历 | BroQiangStudio", "resume_header": "专业履历", "resume_content": "这里即将展示我的专业技能与经历...",
            "page_title_portfolio": "作品集 | BroQiangStudio", "portfolio_header": "作品集", "portfolio_item_1": "敬请期待", "portfolio_desc_1": "更多精彩网页与设计专案即将上线...",
            "page_title_about": "关于我 | BroQiangStudio", "about_header": "关于我 - 详细介绍", "about_content": "你好！我是余乐铵，欢迎来到我的个人网站..."
        },
        "en": {
            "nav_about": "About Me", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Gaming Life",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Dedicated to web development and multimedia design. Contact me!", "footer_title_2": "Quick Links", "footer_title_3": "Social Media",
            "page_title_home": "Home | BroQiangStudio", "hero_title": "Hi, I'm Yu Le An", "hero_subtitle": "Developer solving problems with code / Creator telling stories with design.", "intro_btn": "Learn More",
            "page_title_games": "Gaming Life | BroQiangStudio", "games_header": "My Gaming Life", "game_1_title": "Ace Racer (CN)", "game_1_desc": "Enjoy the thrill of extreme speed on the track, unleash ultimate skills.", "game_2_title": "Identity V (Global)", "game_2_desc": "Asymmetrical competitive thrilling chase, testing strategy.", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Cross-platform multiplayer, building our blocky world.", "game_4_title": "Minecraft (Java)", "game_4_desc": "Original survival experience, explore rich community mods.", "game_btn": "View Details >",
            "page_title_resume": "Resume | BroQiangStudio", "resume_header": "Professional Resume", "resume_content": "My professional skills and experience will be showcased here...",
            "page_title_portfolio": "Portfolio | BroQiangStudio", "portfolio_header": "Portfolio", "portfolio_item_1": "Coming Soon", "portfolio_desc_1": "More exciting web and design projects are on the way...",
            "page_title_about": "About Me | BroQiangStudio", "about_header": "About Me - Details", "about_content": "Hello! I'm Yu Le An, welcome to my personal website..."
        },
        "ms": {
            "nav_about": "Tentang Saya", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Permainan",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Berdedikasi untuk pembangunan web & reka bentuk. Hubungi saya!", "footer_title_2": "Pautan Pantas", "footer_title_3": "Media Sosial",
            "page_title_home": "Utama | BroQiangStudio", "hero_title": "Hai, Saya Yu Le An", "hero_subtitle": "Pembangun menyelesaikan masalah dengan kod / Pencipta bercerita dengan reka bentuk.", "intro_btn": "Ketahui Lebih Lanjut",
            "page_title_games": "Permainan | BroQiangStudio", "games_header": "Kehidupan Permainan Saya", "game_1_title": "Ace Racer (CN)", "game_1_desc": "Nikmati keseronokan kelajuan melampau di litar perlumbaan.", "game_2_title": "Identity V (Global)", "game_2_desc": "Pengejaran mendebarkan kompetitif tidak simetri.", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Bermain merentas platform bersama rakan, bina dunia blok kita.", "game_4_title": "Minecraft (Java)", "game_4_desc": "Pengalaman kelangsungan hidup asal, terokai mod komuniti.", "game_btn": "Lihat Butiran >",
            "page_title_resume": "Resume | BroQiangStudio", "resume_header": "Resume Profesional", "resume_content": "Kemahiran dan pengalaman profesional saya akan dipamerkan di sini...",
            "page_title_portfolio": "Portfolio | BroQiangStudio", "portfolio_header": "Portfolio", "portfolio_item_1": "Akan Datang", "portfolio_desc_1": "Lebih banyak projek web dan reka bentuk yang menarik akan tiba...",
            "page_title_about": "Tentang Saya | BroQiangStudio", "about_header": "Tentang Saya - Butiran", "about_content": "Helo! Saya Yu Le An, selamat datang ke laman web peribadi saya..."
        }
    };

    const langSelectors = document.querySelectorAll('.lang-selector');
    
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        langSelectors.forEach(selector => {
            if(selector.value !== lang) selector.value = lang;
        });
        
        localStorage.setItem('preferredLang', lang);
    }

    langSelectors.forEach(selector => {
        selector.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    });

    const savedLang = localStorage.getItem('preferredLang') || 'zh-TW';
    updateLanguage(savedLang);
});
