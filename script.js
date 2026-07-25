document.addEventListener("DOMContentLoaded", () => {
    // 1. 漢堡選單控制
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => { e.stopPropagation(); sidebar.classList.add('active'); });
    }
    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => { sidebar.classList.remove('active'); });
    }

    // 2. 齒輪設定選單控制
    const desktopSettingsBtn = document.getElementById('desktopSettingsBtn');
    const desktopDropdown = document.getElementById('desktopDropdown');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    if (desktopSettingsBtn && desktopDropdown) {
        desktopSettingsBtn.addEventListener('click', (e) => { e.stopPropagation(); desktopDropdown.classList.toggle('active'); });
        desktopDropdown.addEventListener('click', (e) => { e.stopPropagation(); });
    }
    if (mobileSettingsBtn && mobileDropdown) {
        mobileSettingsBtn.addEventListener('click', (e) => { e.stopPropagation(); mobileDropdown.classList.toggle('active'); });
        mobileDropdown.addEventListener('click', (e) => { e.stopPropagation(); });
    }
    document.addEventListener('click', () => {
        if (desktopDropdown) desktopDropdown.classList.remove('active');
        if (mobileDropdown) mobileDropdown.classList.remove('active');
    });

    // 3. 多國語言翻譯引擎 (加入日夜模式翻譯)
    const translations = {
        "zh-TW": {
            "theme_light": "日間模式", "theme_dark": "夜間模式",
            "nav_about": "關於我", "nav_resume": "專業履歷", "nav_portfolio": "作品集", "nav_games": "遊戲日常",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力於網頁開發、多媒體設計與創意專案。歡迎與我聯繫交流！", "footer_title_2": "快速導覽", "footer_title_3": "社群平台",
            "social_douyin": "抖音",
            "page_title_home": "首頁 | BroQiangStudio", "hero_title": "嗨，我是 余樂銨", "hero_subtitle": "熱愛用程式解決問題的開發者 / 喜歡用設計說故事的創作者。", "intro_btn": "了解更多",
            "page_title_games": "遊戲日常 | BroQiangStudio", "games_header": "我的遊戲日常", "game_1_title": "王牌競速 (國服版)", "game_1_desc": "在賽道上享受極速狂飆的快感，釋放王牌技能。", "game_2_title": "第五人格 (國際服)", "game_2_desc": "非對稱競技的刺激追逐，考驗策略與心理戰。", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "與朋友跨平台連線，打造屬於我們的方塊世界。", "game_4_title": "Minecraft (Java)", "game_4_desc": "體驗原汁原味的麥塊生存，探索豐富的社群模組與伺服器。", "game_btn": "查看遊戲詳情 >",
            "page_title_resume": "專業履歷 | BroQiangStudio", "resume_header": "專業履歷",
            "resume_sec_work": "💼 工作經驗", "resume_work_title": "無數據", "resume_work_desc": "目前專注於學業與個人專案開發，期待未來的實戰機會。",
            "resume_sec_edu": "🎓 教育背景", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "專業：互動式多媒體證書",
            "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Form 5 畢業，持有 SPM 文憑",
            "resume_sec_skill": "🛠️ 專業技能", "resume_skill1_title": "網頁前端開發", "resume_skill1_desc": "熟悉 HTML, CSS, JavaScript，並能實作 RWD 響應式網頁與互動特效。", "resume_skill2_title": "多媒體視覺設計", "resume_skill2_desc": "熱愛剪輯與視覺排版，致力於結合設計美學與程式邏輯。",
            "resume_sec_contact": "📩 聯繫我", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "歡迎隨時透過電子郵件與我聯繫，我會盡快回覆您！期待與您的交流與合作。",
            "page_title_portfolio": "作品集 | BroQiangStudio", "portfolio_header": "作品集", 
            "pf_btn": "查看專案詳情 >",
            "pf_1_title": "網頁開發專案 A", "pf_1_desc": "結合 HTML/CSS 的響應式個人網站設計。", "pf_2_title": "多媒體設計專案 B", "pf_2_desc": "視覺動畫與特效短片製作。", "pf_3_title": "互動 UI 專案 C", "pf_3_desc": "專注於使用者體驗的介面設計。", "pf_4_title": "遊戲模組開發", "pf_4_desc": "Minecraft 客製化素材與整合包。", "pf_5_title": "創意剪輯作品", "pf_5_desc": "結合節奏與特效的影音創作。", "pf_6_title": "敬請期待", "pf_6_desc": "更多精彩網頁與設計專案即將上線...",
            "page_title_about": "關於我 | BroQiangStudio", "about_header": "關於 余樂銨", "about_content_1": "你好！我是余樂銨，一位充滿熱情的網頁開發者與多媒體創作者。", "about_content_2": "我喜歡將天馬行空的設計想法，透過程式碼轉化為真實互動的網頁。對我來說，科技與藝術不是兩條平行線，而是能創造無限可能的交叉點。在這個網站裡，你可以看到我的專業履歷、作品集，以及我平時熱愛的遊戲日常。感謝你的來訪！"
        },
        "zh-CN": {
            "theme_light": "日间模式", "theme_dark": "夜间模式",
            "nav_about": "关于我", "nav_resume": "专业履历", "nav_portfolio": "作品集", "nav_games": "游戏日常",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力于网页开发、多媒体设计与创意专案。欢迎与我联系交流！", "footer_title_2": "快速导航", "footer_title_3": "社群平台",
            "social_douyin": "抖音",
            "page_title_home": "首页 | BroQiangStudio", "hero_title": "嗨，我是 余乐铵", "hero_subtitle": "热爱用程式解决问题的开发者 / 喜欢用设计说故事的创作者。", "intro_btn": "了解更多",
            "page_title_games": "游戏日常 | BroQiangStudio", "games_header": "我的游戏日常", "game_1_title": "王牌竞速 (国服版)", "game_1_desc": "在赛道上享受极速狂飙的快感，释放王牌技能。", "game_2_title": "第五人格 (国际服)", "game_2_desc": "非对称竞技的刺激追逐，考验策略与心理战。", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "与朋友跨平台连线，打造属于我们的方块世界。", "game_4_title": "Minecraft (Java)", "game_4_desc": "体验原汁原味的麦块生存，探索丰富的社群模组。", "game_btn": "查看游戏详情 >",
            "page_title_resume": "专业履历 | BroQiangStudio", "resume_header": "专业履历",
            "resume_sec_work": "💼 工作经验", "resume_work_title": "无数据", "resume_work_desc": "目前专注于学业与个人专案开发，期待未来的实战机会。",
            "resume_sec_edu": "🎓 教育背景", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "专业：互动式多媒体证书",
            "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Form 5 毕业，持有 SPM 文凭",
            "resume_sec_skill": "🛠️ 专业技能", "resume_skill1_title": "网页前端开发", "resume_skill1_desc": "熟悉 HTML, CSS, JavaScript，并能实作 RWD 响应式网页与互动特效。", "resume_skill2_title": "多媒体视觉设计", "resume_skill2_desc": "热爱剪辑与视觉排版，致力于结合设计美学与程式逻辑。",
            "resume_sec_contact": "📩 联系我", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "欢迎随时透过电子邮件与我联系，我会尽快回覆您！期待与您的交流与合作。",
            "page_title_portfolio": "作品集 | BroQiangStudio", "portfolio_header": "作品集", 
            "pf_btn": "查看专案详情 >",
            "pf_1_title": "网页开发专案 A", "pf_1_desc": "结合 HTML/CSS 的响应式个人网站设计。", "pf_2_title": "多媒体设计专案 B", "pf_2_desc": "视觉动画与特效短片制作。", "pf_3_title": "互动 UI 专案 C", "pf_3_desc": "专注于使用者体验的介面设计。", "pf_4_title": "游戏模组开发", "pf_4_desc": "Minecraft 客制化素材与整合包。", "pf_5_title": "创意剪辑作品", "pf_5_desc": "结合节奏与特效的影音创作。", "pf_6_title": "敬请期待", "pf_6_desc": "更多精彩网页与设计专案即将上线...",
            "page_title_about": "关于我 | BroQiangStudio", "about_header": "关于 余乐铵", "about_content_1": "你好！我是余乐铵，一位充满热情的网页开发者与多媒体创作者。", "about_content_2": "我喜欢将天马行空的设计想法，透过程式码转化为真实互动的网页。对我来说，科技与艺术不是两条平行线，而是能创造无限可能的交叉点。感谢你的来访！"
        },
        "en": {
            "theme_light": "Light Mode", "theme_dark": "Dark Mode",
            "nav_about": "About Me", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Gaming Life",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Dedicated to web development and multimedia design. Contact me!", "footer_title_2": "Quick Links", "footer_title_3": "Social Media",
            "social_douyin": "TikTok (CN)",
            "page_title_home": "Home | BroQiangStudio", "hero_title": "Hi, I'm Michael Er", "hero_subtitle": "Developer solving problems with code / Creator telling stories with design.", "intro_btn": "Learn More",
            "page_title_games": "Gaming Life | BroQiangStudio", "games_header": "My Gaming Life", "game_1_title": "Ace Racer (CN)", "game_1_desc": "Enjoy the thrill of extreme speed on the track, unleash ultimate skills.", "game_2_title": "Identity V (Global)", "game_2_desc": "Asymmetrical competitive thrilling chase, testing strategy.", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Cross-platform multiplayer, building our blocky world.", "game_4_title": "Minecraft (Java)", "game_4_desc": "Original survival experience, explore rich community mods.", "game_btn": "View Details >",
            "page_title_resume": "Resume | BroQiangStudio", "resume_header": "Professional Resume",
            "resume_sec_work": "💼 Work Experience", "resume_work_title": "No Data Yet", "resume_work_desc": "Currently focusing on studies and personal projects. Looking forward to future opportunities.",
            "resume_sec_edu": "🎓 Education", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "Major: Interactive Multimedia Certificate",
            "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Graduated Form 5 with SPM Certificate",
            "resume_sec_skill": "🛠️ Professional Skills", "resume_skill1_title": "Front-end Development", "resume_skill1_desc": "Proficient in HTML, CSS, JS with Responsive Web Design.", "resume_skill2_title": "Multimedia Design", "resume_skill2_desc": "Passionate about video editing and visual layouts.",
            "resume_sec_contact": "📩 Contact Me", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "Feel free to reach out to me via email. I will get back to you as soon as possible!",
            "page_title_portfolio": "Portfolio | BroQiangStudio", "portfolio_header": "Portfolio", 
            "pf_btn": "View Project Details >",
            "pf_1_title": "Web Dev Project A", "pf_1_desc": "Responsive personal website using HTML/CSS.", "pf_2_title": "Multimedia Project B", "pf_2_desc": "Visual animations and short film production.", "pf_3_title": "Interactive UI Project C", "pf_3_desc": "User experience focused interface design.", "pf_4_title": "Game Modding", "pf_4_desc": "Minecraft customized resources and modpacks.", "pf_5_title": "Creative Editing", "pf_5_desc": "Audio-visual creation combining rhythm and effects.", "pf_6_title": "Coming Soon", "pf_6_desc": "More exciting projects are on the way...",
            "page_title_about": "About Me | BroQiangStudio", "about_header": "About Michael Er", "about_content_1": "Hello! I'm Michael Er, a passionate web developer and multimedia creator.", "about_content_2": "I love turning imaginative design ideas into real, interactive web pages through code. To me, tech and art are an intersection of infinite possibilities. Thanks for visiting!"
        },
        "ms": {
            "theme_light": "Mod Cerah", "theme_dark": "Mod Gelap",
            "nav_about": "Tentang Saya", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Permainan",
            "footer_title_1": "BroQiangStudio", "footer_desc": "Berdedikasi untuk pembangunan web & reka bentuk. Hubungi saya!", "footer_title_2": "Pautan Pantas", "footer_title_3": "Media Sosial",
            "social_douyin": "TikTok (CN)",
            "page_title_home": "Utama | BroQiangStudio", "hero_title": "Hai, Saya Er Le An", "hero_subtitle": "Pembangun menyelesaikan masalah dengan kod / Pencipta bercerita dengan reka bentuk.", "intro_btn": "Ketahui Lebih Lanjut",
            "page_title_games": "Permainan | BroQiangStudio", "games_header": "Kehidupan Permainan Saya", "game_1_title": "Ace Racer (CN)", "game_1_desc": "Nikmati keseronokan kelajuan melampau di litar perlumbaan.", "game_2_title": "Identity V (Global)", "game_2_desc": "Pengejaran mendebarkan kompetitif tidak simetri.", "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Bermain merentas platform bersama rakan, bina dunia blok kita.", "game_4_title": "Minecraft (Java)", "game_4_desc": "Pengalaman kelangsungan hidup asal, terokai mod komuniti.", "game_btn": "Lihat Butiran >",
            "page_title_resume": "Resume | BroQiangStudio", "resume_header": "Resume Profesional",
            "resume_sec_work": "💼 Pengalaman Kerja", "resume_work_title": "Tiada Data", "resume_work_desc": "Kini menumpukan pada pelajaran dan projek peribadi.",
            "resume_sec_edu": "🎓 Latar Belakang Pendidikan", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "Jurusan: Sijil Multimedia Interaktif",
            "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Tamat Tingkatan 5 dengan Sijil SPM",
            "resume_sec_skill": "🛠️ Kemahiran", "resume_skill1_title": "Pembangunan Web", "resume_skill1_desc": "Mahir dalam HTML, CSS, JS dengan reka bentuk responsif.", "resume_skill2_title": "Reka Bentuk Multimedia", "resume_skill2_desc": "Meminati penyuntingan video dan susun atur visual.",
            "resume_sec_contact": "📩 Hubungi Saya", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "Sila hubungi saya melalui e-mel. Saya akan membalas secepat mungkin!",
            "page_title_portfolio": "Portfolio | BroQiangStudio", "portfolio_header": "Portfolio", 
            "pf_btn": "Lihat Butiran Projek >",
            "pf_1_title": "Projek Web A", "pf_1_desc": "Laman web peribadi responsif menggunakan HTML/CSS.", "pf_2_title": "Projek Multimedia B", "pf_2_desc": "Animasi visual dan pengeluaran filem pendek.", "pf_3_title": "Projek UI Interaktif C", "pf_3_desc": "Reka bentuk antara muka fokus pengalaman pengguna.", "pf_4_title": "Modifikasi Permainan", "pf_4_desc": "Pek sumber dan modifikasi Minecraft yang disesuaikan.", "pf_5_title": "Suntingan Kreatif", "pf_5_desc": "Penciptaan audio-visual menggabungkan irama dan kesan.", "pf_6_title": "Akan Datang", "pf_6_desc": "Lebih banyak projek menarik akan tiba...",
            "page_title_about": "Tentang Saya | BroQiangStudio", "about_header": "Tentang Er Le An", "about_content_1": "Helo! Saya Er Le An, pembangun web dan pencipta multimedia.", "about_content_2": "Saya suka menukar idea reka bentuk imaginatif ke laman web interaktif sebenar melalui kod. Terima kasih kerana melawat!"
        }
    };

    const langSelectors = document.querySelectorAll('.lang-selector');
    
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) { el.textContent = translations[lang][key]; }
        });
        langSelectors.forEach(selector => { if(selector.value !== lang) selector.value = lang; });
        localStorage.setItem('preferredLang', lang);

        // 同步翻譯「日間模式/夜間模式」按鈕文字
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const themeKey = currentTheme === 'dark' ? 'theme_light' : 'theme_dark';
        document.querySelectorAll('.theme-text').forEach(textEl => {
            textEl.textContent = translations[lang][themeKey];
        });
    }

    langSelectors.forEach(selector => { selector.addEventListener('change', (e) => { updateLanguage(e.target.value); }); });
    const savedLang = localStorage.getItem('preferredLang') || 'zh-TW';
    updateLanguage(savedLang);

    // 4. 日夜模式切換 (加入語言判斷)
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const htmlElement = document.documentElement;

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            
            const currentLang = localStorage.getItem('preferredLang') || 'zh-TW';
            const newThemeTextKey = newTheme === 'dark' ? 'theme_light' : 'theme_dark';
            
            themeToggleBtns.forEach(updateBtn => {
                const icon = updateBtn.querySelector('.theme-icon');
                const text = updateBtn.querySelector('.theme-text');
                icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
                text.textContent = translations[currentLang][newThemeTextKey];
            });
        });
    });
});
