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

    // 3. 多國語言字典 (🔥 已新增「恢復預設中...」與「網站更新日誌」翻譯)
    const translations = {
        "zh-TW": {
            "initializing": "網站初始化中...", "loading": "載入中...", "resetting": "恢復預設中...",
            "theme_light": "日間模式", "theme_dark": "夜間模式", "sound_on": "聲音：開啟", "sound_off": "聲音：靜音", "perf_high": "效能：極致", "perf_low": "效能：省電", "color_picker_title": "主題色", "reset_btn": "🔄 恢復預設", "reset_confirm": "確定要將所有設定恢復預設嗎？", "sidebar_menu": "選單",
            "nav_about": "關於我", "nav_resume": "專業履歷", "nav_portfolio": "作品集", "nav_games": "遊戲日常",
            "footer_title_1": "BroQiangStudio", "footer_desc": "致力於網頁開發、多媒體設計與創意專案。歡迎與我聯繫交流！", "footer_title_2": "快速導覽", "footer_title_3": "社群平台", "footer_contact": "聯繫我：", "footer_changelog": "網站更新日誌 (Changelog)",
            "social_ig": "Instagram", "social_yt": "YouTube", "social_fb": "Facebook", "social_tk": "TikTok", "social_dy": "抖音",
            
            "page_title_home": "首頁 | BroQiangStudio", 
            "hero_title": "嗨，我是強某！", 
            "hero_subtitle": "熱愛用程式解決問題的開發者 / 喜歡用設計說故事的創作者。", 
            "intro_btn": "了解更多", "stat_daily": "今日訪客：", "stat_total": "歷史總量：",
            "page_title_about": "關於我 | BroQiangStudio", 
            "about_header": "關於強某", 
            "about_content_1": "你好！我是強某，一位充滿熱情的網頁開發者與多媒體創作者。", 
            "about_content_2": "我喜歡將天馬行空的設計想法，透過程式碼轉化為真實互動的網頁。對我來說，科技與藝術不是兩條平行線，而是能創造無限可能的交叉點。感謝你的來訪！",
            
            "page_title_games": "遊戲日常 | BroQiangStudio", "games_header": "我的遊戲日常", 
            "game_1_title": "王牌競速 (國服版)", "game_1_desc": "在賽道上享受極速狂飆的快感，釋放王牌技能。", 
            "game_2_title": "第五人格 (國際服)", "game_2_desc": "非對稱競技的刺激追逐，考驗策略與心理戰。", 
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "與朋友跨平台連線，打造屬於我們的方塊世界。", 
            "game_4_title": "Minecraft (Java)", "game_4_desc": "體驗原汁原味的麥塊生存，探索豐富的社群模組與伺服器。", "game_btn": "查看遊戲詳情 >",
            
            "page_title_resume": "專業履歷 | BroQiangStudio", "resume_header": "專業履歷", "resume_sec_work": "💼 工作經驗", "resume_work_title": "無數據", "resume_work_desc": "目前專注於學業與個人專案開發，期待未來的實戰機會。", "resume_sec_edu": "🎓 教育背景", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "專業：互動式多媒體證書", "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Form 5 畢業，持有 SPM 文憑", "resume_sec_skill": "🛠️ 專業技能", "resume_skill1_title": "網頁前端開發", "resume_skill1_desc": "熟悉 HTML, CSS, JavaScript，並能實作 RWD 響應式網頁與互動特效。", "resume_skill2_title": "多媒體視覺設計", "resume_skill2_desc": "熱愛剪輯與視覺排版，致力於結合設計美學與程式邏輯。", "resume_sec_contact": "📩 聯繫我", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "歡迎隨時透過電子郵件與我聯繫，我會盡快回覆您！期待與您的交流與合作。",
            "page_title_portfolio": "作品集 | BroQiangStudio", "portfolio_header": "作品集", "pf_btn": "查看專案詳情 >", "pf_1_title": "網頁開發專案 A", "pf_1_desc": "結合 HTML/CSS 的響應式個人網站設計。", "pf_2_title": "多媒體設計專案 B", "pf_2_desc": "視覺動畫與特效短片製作。", "pf_3_title": "互動 UI 專案 C", "pf_3_desc": "專注於使用者體驗的介面設計。", "pf_4_title": "遊戲模組開發", "pf_4_desc": "Minecraft 客製化素材與整合包。", "pf_5_title": "創意剪輯作品", "pf_5_desc": "結合節奏與特效的影音創作。", "pf_6_title": "敬請期待", "pf_6_desc": "更多精彩網頁與設計專案即將上線...",
            
            "detail_back": "← 返回遊戲列表", "btn_website": "🌐 官方網站", "btn_mobile": "📱 手機版下載", "btn_pc_emu": "💻 PC 模擬器版", "btn_pc_sync": "💻 PC 互通版", "btn_pc_win": "💻 PC 版 (Win10/11)", "btn_pc_launcher": "💻 PC 啟動器下載",
            "g1_p1": "《王牌競速》是一款由網易遊戲開發的寫實風格創新賽車手遊。遊戲內不僅擁有海量授權真車，更有造型誇張的試製車。每台車都擁有專屬的「王牌技能」，讓你在賽道上體驗閃現穿牆、變身劍客等顛覆傳統的競速快感。", "g1_p2": "📍 <strong>特色亮點：</strong> 寫實畫風、專屬大招、豐富的世界實景賽道。",
            "g2_p1": "《第五人格》是網易首款非對稱性對抗競技手遊。荒誕的哥德畫風、懸疑燒腦的劇情，以及刺激的 1V4 追逃玩法，帶來全新的遊戲體驗。玩家可以選擇扮演監管者或求生者，在莊園中展開激烈的心理與策略博弈。", "g2_p2": "📍 <strong>特色亮點：</strong> 1V4 非對稱競技、豐富的角色技能搭配、獨特的懸疑畫風。",
            "g3_p1": "《Minecraft 基岩版》是專為跨平台遊玩打造的版本。無論你的朋友是使用手機 (iOS/Android)、主機 (Xbox/PlayStation/Switch) 還是 Windows PC，大家都可以無縫連接，共同在同一個方塊世界中建造、生存與探險。", "g3_p2": "📍 <strong>特色亮點：</strong> 強大的跨平台連線、官方市集 (Marketplace)、極佳的遊戲效能優化。",
            "g4_p1": "《Minecraft Java版》是遊戲最初、最經典的版本，僅支援 Windows、Mac 和 Linux 電腦遊玩。這個版本擁有全世界最龐大、最活躍的開源社群，你可以自由安裝無數的第三方模組 (Mods)、光影包、材質包，並加入各種大型多人線上伺服器。", "g4_p2": "📍 <strong>特色亮點：</strong> 豐富的第三方模組支援、頂級光影特效、硬核紅石與生存機制。<br><br><small><i>*註：Java 版為電腦獨佔，無官方手機版本。</i></small>"
        },
        "zh-CN": {
            "initializing": "网站初始化中...", "loading": "加载中...", "resetting": "恢复默认中...",
            "theme_light": "日间模式", "theme_dark": "夜间模式", "sound_on": "声音：开启", "sound_off": "声音：静音", "perf_high": "性能：极致", "perf_low": "性能：省电", "color_picker_title": "主题色", "reset_btn": "🔄 恢复默认", "reset_confirm": "确定要将所有设置恢复默认吗？", "sidebar_menu": "菜单", "nav_about": "关于我", "nav_resume": "专业履历", "nav_portfolio": "作品集", "nav_games": "游戏日常", "footer_title_1": "BroQiangStudio", "footer_desc": "致力于网页开发、多媒体设计与创意专案。欢迎与我联系交流！", "footer_title_2": "快速导航", "footer_title_3": "社群平台", "footer_contact": "联系我：", "footer_changelog": "网站更新日志 (Changelog)",
            "social_ig": "Instagram", "social_yt": "YouTube", "social_fb": "Facebook", "social_tk": "TikTok", "social_dy": "抖音", 
            
            "page_title_home": "首页 | BroQiangStudio", 
            "hero_title": "嗨，我是强某！", 
            "hero_subtitle": "热爱用程序解决问题的开发者 / 喜欢用设计说故事的创作者。", 
            "intro_btn": "了解更多", "stat_daily": "今日访客：", "stat_total": "历史总量：", 
            "page_title_about": "关于我 | BroQiangStudio", 
            "about_header": "关于强某", 
            "about_content_1": "你好！我是强某，一位充满热情的网页开发者与多媒体创作者。", 
            "about_content_2": "我喜欢将天马行空的设计想法，透过代码转化为真实互动的网页。对我来说，科技与艺术不是两条平行线，而是能创造无限可能的交叉点。感谢你的来访！",
            
            "page_title_games": "游戏日常 | BroQiangStudio", "games_header": "我的游戏日常", 
            "game_1_title": "王牌竞速 (国服版)", "game_1_desc": "在赛道上享受极速狂飙的快感，释放王牌技能。", 
            "game_2_title": "第五人格 (国际服)", "game_2_desc": "非对称竞技的刺激追逐，考验策略与心理战。", 
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "与朋友跨平台连线，打造属于我们的方块世界。", 
            "game_4_title": "Minecraft (Java)", "game_4_desc": "体验原汁原味的麦块生存，探索丰富的社群模组与伺服器。", "game_btn": "查看游戏详情 >", 
            
            "page_title_resume": "专业履历 | BroQiangStudio", "resume_header": "专业履历", "resume_sec_work": "💼 工作经验", "resume_work_title": "无数据", "resume_work_desc": "目前专注于学业与个人专案开发，期待未来的实战机会。", "resume_sec_edu": "🎓 教育背景", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "专业：互动式多媒体证书", "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Form 5 毕业，持有 SPM 文凭", "resume_sec_skill": "🛠️ 专业技能", "resume_skill1_title": "网页前端开发", "resume_skill1_desc": "熟悉 HTML, CSS, JavaScript，并能实作 RWD 响应式网页与互动特效。", "resume_skill2_title": "多媒体视觉设计", "resume_skill2_desc": "热爱剪辑与视觉排版，致力于结合设计美学与程式逻辑。", "resume_sec_contact": "📩 联系我", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "欢迎随时透过电子邮件与我联系，我会尽快回覆您！期待与您的交流与合作。", "page_title_portfolio": "作品集 | BroQiangStudio", "portfolio_header": "作品集", "pf_btn": "查看专案详情 >", "pf_1_title": "网页开发专案 A", "pf_1_desc": "结合 HTML/CSS 的响应式个人网站设计。", "pf_2_title": "多媒体设计专案 B", "pf_2_desc": "视觉动画与特效短片制作。", "pf_3_title": "互动 UI 专案 C", "pf_3_desc": "专注于使用者体验的介面设计。", "pf_4_title": "游戏模组开发", "pf_4_desc": "Minecraft 客制化素材与整合包。", "pf_5_title": "创意剪辑作品", "pf_5_desc": "结合节奏与特效的影音创作。", "pf_6_title": "敬请期待", "pf_6_desc": "更多精彩网页与设计专案即将上线...", 
            
            "detail_back": "← 返回游戏列表", "btn_website": "🌐 官方网站", "btn_mobile": "📱 手机版下载", "btn_pc_emu": "💻 PC 模拟器版", "btn_pc_sync": "💻 PC 互通版", "btn_pc_win": "💻 PC 版 (Win10/11)", "btn_pc_launcher": "💻 PC 启动器下载",
            "g1_p1": "《王牌竞速》是一款由网易游戏开发的写实风格创新赛车手游。游戏内拥有海量授权真车及造型夸张的试制车，每台车拥有专属的「王牌技能」，带给你颠覆传统的竞速快感。", "g1_p2": "📍 <strong>特色亮点：</strong> 写实画风、专属大招、丰富的世界实景赛道。",
            "g2_p1": "《第五人格》是网易首款非对称性对抗竞技手游。荒诞的哥特画风、悬疑烧脑的剧情以及刺激的 1V4 追逃玩法，玩家可以扮演监管者或求生者展开激烈博弈。", "g2_p2": "📍 <strong>特色亮点：</strong> 1V4 非对称竞技、丰富的角色技能搭配、独特的悬疑画风。",
            "g3_p1": "《Minecraft 基岩版》是专为跨平台游玩打造的版本。无论使用手机、主机还是 PC，都可以无缝连接，共同在同一个方块世界中建造与探险。", "g3_p2": "📍 <strong>特色亮点：</strong> 强大的跨平台连线、官方市集 (Marketplace)、极佳的游戏效能优化。",
            "g4_p1": "《Minecraft Java版》是最经典的版本，仅支援 Windows、Mac 和 Linux。拥有全世界最庞大活跃的开源社群，可自由安装第三方模组、光影包及加入大型伺服器。", "g4_p2": "📍 <strong>特色亮点：</strong> 丰富的第三方模组支援、顶级光影特效、硬核红石机制。<br><br><small><i>*注：Java 版为电脑独占，无官方手机版本。</i></small>"
        },
        "en": {
            "initializing": "INITIALIZING...", "loading": "LOADING...", "resetting": "Resetting...",
            "theme_light": "Light Mode", "theme_dark": "Dark Mode", "sound_on": "Sound: On", "sound_off": "Sound: Muted", "perf_high": "Performance: High", "perf_low": "Performance: Low", "color_picker_title": "Accent Color", "reset_btn": "🔄 Reset Settings", "reset_confirm": "Reset all settings to default?", "sidebar_menu": "Menu", "nav_about": "About Me", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Gaming Life", "footer_title_1": "BroQiangStudio", "footer_desc": "Dedicated to web development, multimedia design, and creative projects. Let's connect!", "footer_title_2": "Quick Links", "footer_title_3": "Social Media", "footer_contact": "Contact Me:", "footer_changelog": "Website Changelog",
            "social_ig": "Instagram", "social_yt": "YouTube", "social_fb": "Facebook", "social_tk": "TikTok", "social_dy": "TikTok (CN)", 
            
            "page_title_home": "Home | BroQiangStudio", 
            "hero_title": "Hi, I'm BRO QIANG!", 
            "hero_subtitle": "A developer passionate about solving problems with code / A creator who loves telling stories through design.", 
            "intro_btn": "Learn More", "stat_daily": "Today's Visitors: ", "stat_total": "Total Visitors: ", 
            "page_title_about": "About Me | BroQiangStudio", 
            "about_header": "About BRO QIANG", 
            "about_content_1": "Hello! I'm BRO QIANG, a passionate web developer and multimedia creator.", 
            "about_content_2": "I love turning imaginative design ideas into real, interactive web pages through programming. To me, technology and art are not two parallel lines, but an intersection that creates infinite possibilities. Thank you for visiting!",
            
            "page_title_games": "Gaming Life | BroQiangStudio", "games_header": "My Gaming Life", 
            "game_1_title": "Ace Racer (CN)", "game_1_desc": "Enjoy the thrill of extreme speed on the track and unleash your ultimate skills.", 
            "game_2_title": "Identity V (Global)", "game_2_desc": "An asymmetrical competitive thrilling chase that tests your strategy and psychological warfare.", 
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Connect cross-platform with friends to build our own blocky world.", 
            "game_4_title": "Minecraft (Java)", "game_4_desc": "Experience authentic Minecraft survival and explore rich community mods and servers.", "game_btn": "View Details >", 
            
            "page_title_resume": "Resume | BroQiangStudio", "resume_header": "Professional Resume", "resume_sec_work": "💼 Work Experience", "resume_work_title": "No Data", "resume_work_desc": "Currently focusing on studies and personal project development, looking forward to future opportunities.", "resume_sec_edu": "🎓 Education", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "Major: Interactive Multimedia Certificate", "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Form 5 Graduate, SPM Certificate", "resume_sec_skill": "🛠️ Skills", "resume_skill1_title": "Front-end Web Development", "resume_skill1_desc": "Proficient in HTML, CSS, JavaScript, and implementing RWD responsive web pages and interactive effects.", "resume_skill2_title": "Multimedia Visual Design", "resume_skill2_desc": "Passionate about video editing and visual layout, dedicated to combining design aesthetics with programming logic.", "resume_sec_contact": "📩 Contact Me", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "Feel free to contact me via email anytime, I will reply as soon as possible! Looking forward to communicating and cooperating with you.", "page_title_portfolio": "Portfolio | BroQiangStudio", "portfolio_header": "Portfolio", "pf_btn": "View Details >", "pf_1_title": "Web Dev Project A", "pf_1_desc": "Responsive personal website design combining HTML/CSS.", "pf_2_title": "Multimedia Project B", "pf_2_desc": "Visual animation and special effects short film production.", "pf_3_title": "Interactive UI Project C", "pf_3_desc": "User experience focused interface design.", "pf_4_title": "Game Mod Development", "pf_4_desc": "Minecraft customized resources and modpacks.", "pf_5_title": "Creative Video Editing", "pf_5_desc": "Audio-visual creation combining rhythm and special effects.", "pf_6_title": "Coming Soon", "pf_6_desc": "More exciting web and design projects are coming soon...", 
            
            "detail_back": "← Back to Games", "btn_website": "🌐 Official Site", "btn_mobile": "📱 Mobile DL", "btn_pc_emu": "💻 PC Emulator", "btn_pc_sync": "💻 PC Cross-play", "btn_pc_win": "💻 PC (Win10/11)", "btn_pc_launcher": "💻 PC Launcher",
            "g1_p1": "Ace Racer is an innovative racing mobile game developed by NetEase. It features heavily authorized real cars and exaggerated prototype cars. Each car has an exclusive 'Ultimate Skill', bringing you an unconventional racing experience.", "g1_p2": "📍 <strong>Key Features:</strong> Realistic graphics, Ultimate Skills, real-world tracks.",
            "g2_p1": "Identity V is NetEase's first asymmetrical horror mobile game. With a gothic art style, mysterious storylines, and thrilling 1v4 gameplay, it offers a breathtaking experience where you play as Hunter or Survivor.", "g2_p2": "📍 <strong>Key Features:</strong> 1v4 gameplay, rich character skills, unique gothic aesthetic.",
            "g3_p1": "Minecraft Bedrock Edition is built for cross-platform play. Connect seamlessly with friends across Mobile, Consoles, and PC, surviving and building together in the same blocky universe.", "g3_p2": "📍 <strong>Key Features:</strong> True cross-play, official Marketplace, highly optimized performance.",
            "g4_p1": "Minecraft Java Edition is the original classic version for Windows, Mac, and Linux. It boasts the most massive open-source community, allowing you to freely install Mods, Shaders, and join massive multiplayer servers.", "g4_p2": "📍 <strong>Key Features:</strong> Infinite Mod support, top-tier Shaders, hardcore mechanics.<br><br><small><i>*Note: Java Edition is PC exclusive.</i></small>"
        },
        "ms": {
            "initializing": "MEMULAKAN...", "loading": "MEMUATKAN...", "resetting": "Menetapkan Semula...",
            "theme_light": "Mod Cerah", "theme_dark": "Mod Gelap", "sound_on": "Bunyi: Buka", "sound_off": "Bunyi: Senyap", "perf_high": "Prestasi: Tinggi", "perf_low": "Prestasi: Jimat", "color_picker_title": "Warna Tema", "reset_btn": "🔄 Tetap Semula", "reset_confirm": "Adakah anda pasti mahu menetapkan semula semua tetapan?", "sidebar_menu": "Menu", "nav_about": "Tentang Saya", "nav_resume": "Resume", "nav_portfolio": "Portfolio", "nav_games": "Permainan", "footer_title_1": "BroQiangStudio", "footer_desc": "Berdedikasi untuk pembangunan web, reka bentuk multimedia dan projek kreatif. Sila hubungi saya!", "footer_title_2": "Pautan Pantas", "footer_title_3": "Media Sosial", "footer_contact": "Hubungi Saya:", "footer_changelog": "Log Kemas Kini Laman Web",
            "social_ig": "Instagram", "social_yt": "YouTube", "social_fb": "Facebook", "social_tk": "TikTok", "social_dy": "TikTok (CN)", 
            
            "page_title_home": "Utama | BroQiangStudio", 
            "hero_title": "Hai, Saya BRO QIANG!", 
            "hero_subtitle": "Pembangun yang bersemangat menyelesaikan masalah dengan kod / Pencipta yang suka bercerita melalui reka bentuk.", 
            "intro_btn": "Ketahui Lebih Lanjut", "stat_daily": "Pelawat Hari Ini: ", "stat_total": "Jumlah Pelawat: ", 
            "page_title_about": "Tentang Saya | BroQiangStudio", 
            "about_header": "Tentang BRO QIANG", 
            "about_content_1": "Helo! Saya BRO QIANG, seorang pembangun web dan pencipta multimedia yang bersemangat.", 
            "about_content_2": "Saya suka mengubah idea reka bentuk yang imaginatif kepada halaman web interaktif yang nyata melalui pengaturcaraan. Bagi saya, teknologi dan seni bukanlah dua garisan selari, tetapi titik pertemuan yang mampu mencipta kemungkinan yang tidak terhingga. Terima kasih kerana melawat!",
            
            "page_title_games": "Permainan | BroQiangStudio", "games_header": "Permainan Harian Saya", 
            "game_1_title": "Ace Racer (CN)", "game_1_desc": "Nikmati keseronokan kelajuan melampau di litar dan lepaskan kemahiran ultimate anda.", 
            "game_2_title": "Identity V (Global)", "game_2_desc": "Pengejaran mendebarkan kompetitif tidak simetri yang menguji strategi dan perang psikologi anda.", 
            "game_3_title": "Minecraft (Bedrock)", "game_3_desc": "Berhubung merentas platform bersama rakan untuk membina dunia blok kita sendiri.", 
            "game_4_title": "Minecraft (Java)", "game_4_desc": "Alami kelangsungan hidup Minecraft yang asli dan terokai mod komuniti dan pelayan yang kaya.", "game_btn": "Lihat Butiran Permainan >", 
            
            "page_title_resume": "Resume | BroQiangStudio", "resume_header": "Resume Profesional", "resume_sec_work": "💼 Pengalaman Kerja", "resume_work_title": "Tiada Data", "resume_work_desc": "Kini memberi tumpuan kepada pengajian dan pembangunan projek peribadi, menantikan peluang praktikal pada masa hadapan.", "resume_sec_edu": "🎓 Pendidikan", "resume_edu1_school": "ADTEC JTM Kampus Nibong Tebal", "resume_edu1_date": "07/2025 - 07/2027", "resume_edu1_major": "Jurusan: Sijil Multimedia Interaktif", "resume_edu2_school": "SMK Bukit Gambir", "resume_edu2_date": "2020 - 2025", "resume_edu2_major": "Lulusan Tingkatan 5, Sijil SPM", "resume_sec_skill": "🛠️ Kemahiran", "resume_skill1_title": "Pembangunan Web Front-end", "resume_skill1_desc": "Mahir dalam HTML, CSS, JavaScript, dan mampu melaksanakan halaman web responsif RWD serta kesan interaktif.", "resume_skill2_title": "Reka Bentuk Visual Multimedia", "resume_skill2_desc": "Bersemangat dalam penyuntingan video dan susun atur visual, berdedikasi untuk menggabungkan estetika reka bentuk dengan logik pengaturcaraan.", "resume_sec_contact": "📩 Hubungi Saya", "resume_contact_email": "anle82760@gmail.com", "resume_contact_desc": "Sila hubungi saya melalui e-mel pada bila-bila masa, saya akan membalas secepat mungkin! Menantikan komunikasi dan kerjasama dengan anda.", "page_title_portfolio": "Portfolio | BroQiangStudio", "portfolio_header": "Portfolio", "pf_btn": "Lihat Butiran Projek >", "pf_1_title": "Projek Pembangunan Web A", "pf_1_desc": "Reka bentuk laman web peribadi responsif menggabungkan HTML/CSS.", "pf_2_title": "Projek Reka Bentuk Multimedia B", "pf_2_desc": "Penghasilan filem pendek animasi visual dan kesan khas.", "pf_3_title": "Projek UI Interaktif C", "pf_3_desc": "Reka bentuk antara muka memfokuskan kepada pengalaman pengguna.", "pf_4_title": "Pembangunan Mod Permainan", "pf_4_desc": "Bahan tersuai dan pek mod Minecraft.", "pf_5_title": "Penyuntingan Video Kreatif", "pf_5_desc": "Penciptaan audio-visual menggabungkan irama dan kesan khas.", "pf_6_title": "Akan Datang", "pf_6_desc": "Lebih banyak projek web dan reka bentuk yang menarik akan datang...", 
            
            "detail_back": "← Kembali ke Senarai", "btn_website": "🌐 Laman Web Rasmi", "btn_mobile": "📱 Muat Turun Mudah Alih", "btn_pc_emu": "💻 PC Emulator", "btn_pc_sync": "💻 PC Cross-play", "btn_pc_win": "💻 PC (Win10/11)", "btn_pc_launcher": "💻 Muat Turun Pelancar PC",
            "g1_p1": "Ace Racer ialah permainan mudah alih perlumbaan inovatif gaya realistik yang dibangunkan oleh NetEase. Ia bukan sahaja menampilkan kereta sebenar yang dilesenkan, tetapi juga kereta prototaip dengan reka bentuk yang menakjubkan. Setiap kereta mempunyai 'Kemahiran Ultimate' eksklusif, memberikan anda pengalaman perlumbaan yang melanggar tradisi.", "g1_p2": "📍 <strong>Ciri-ciri Utama:</strong> Grafik realistik, kemahiran ultimate eksklusif, litar pemandangan dunia sebenar yang kaya.",
            "g2_p1": "Identity V ialah permainan mudah alih e-sukan berlawan tidak simetri pertama NetEase. Dengan gaya seni gotik yang pelik, jalan cerita yang penuh misteri, dan permainan kejar-mengejar 1V4 yang merangsang, ia membawa pengalaman permainan yang serba baharu. Pemain boleh memilih untuk bermain sebagai Pemburu atau Yang Selamat.", "g2_p2": "📍 <strong>Ciri-ciri Utama:</strong> E-sukan tidak simetri 1V4, padanan kemahiran watak yang kaya, gaya seni misteri yang unik.",
            "g3_p1": "Minecraft Edisi Bedrock direka khas untuk permainan merentas platform. Sama ada rakan anda menggunakan telefon bimbit, konsol (Xbox/PlayStation/Switch) atau PC Windows, semua orang boleh bersambung dengan lancar, membina, bertahan dan meneroka bersama dalam dunia blok yang sama.", "g3_p2": "📍 <strong>Ciri-ciri Utama:</strong> Sambungan merentas platform yang hebat, pasaran rasmi (Marketplace), pengoptimuman prestasi permainan yang sangat baik.",
            "g4_p1": "Minecraft Edisi Java ialah versi permainan yang terawal dan paling klasik, hanya menyokong permainan komputer Windows, Mac dan Linux. Versi ini mempunyai komuniti sumber terbuka terbesar dan paling aktif di dunia, anda boleh memasang pelbagai Mod pihak ketiga, pek Shaders, dan menyertai pelbagai pelayan dalam talian.", "g4_p2": "📍 <strong>Ciri-ciri Utama:</strong> Sokongan Mod pihak ketiga yang kaya, kesan Shaders kelas atas, mekanik batu merah (Redstone) dan kelangsungan hidup tegar.<br><br><small><i>*Nota: Edisi Java adalah eksklusif untuk komputer, tiada versi rasmi untuk telefon bimbit.</i></small>"
        }
    };

    // --- 核心更新介面與同步狀態邏輯 ---
    function updateLanguageAndSettings(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) { 
                el.innerHTML = translations[lang][key]; 
            }
        });
        
        document.querySelectorAll('.lang-selector').forEach(selector => { 
            if(selector.value !== lang) selector.value = lang; 
        });
        localStorage.setItem('preferredLang', lang);

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const themeKey = currentTheme === 'dark' ? 'theme_light' : 'theme_dark';
        document.querySelectorAll('.theme-text').forEach(textEl => { textEl.textContent = translations[lang][themeKey]; });

        const isMuted = localStorage.getItem('globalMuted') !== 'false';
        const soundKey = isMuted ? 'sound_off' : 'sound_on';
        document.querySelectorAll('.sound-text').forEach(textEl => { textEl.textContent = translations[lang][soundKey]; });
        document.querySelectorAll('.sound-icon').forEach(iconEl => { iconEl.textContent = isMuted ? '🔇' : '🔊'; });

        const isLowPerf = localStorage.getItem('performanceMode') === 'low';
        const perfKey = isLowPerf ? 'perf_low' : 'perf_high';
        document.querySelectorAll('.perf-text').forEach(textEl => { textEl.textContent = translations[lang][perfKey]; });
        document.querySelectorAll('.perf-icon').forEach(iconEl => { iconEl.textContent = isLowPerf ? '🔋' : '⚡'; });
    }

    // --- 網頁載入時的初始化 ---
    const savedTheme = localStorage.getItem('preferredTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.querySelector('.theme-icon').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    });

    let savedLang = localStorage.getItem('preferredLang');
    if (!savedLang) {
        const navLang = navigator.language.toLowerCase(); 
        if (navLang.includes('zh-tw') || navLang.includes('zh-hk')) { savedLang = 'zh-TW'; }
        else if (navLang.includes('zh')) { savedLang = 'zh-CN'; }
        else if (navLang.includes('ms') || navLang.includes('id')) { savedLang = 'ms'; }
        else if (navLang.includes('en')) { savedLang = 'en'; }
        else { savedLang = 'en'; }
        localStorage.setItem('preferredLang', savedLang);
    }
    updateLanguageAndSettings(savedLang);

    const initMuted = localStorage.getItem('globalMuted') !== 'false'; 
    const savedColor = localStorage.getItem('preferredColor') || '#e50914';
    document.documentElement.style.setProperty('--accent-color', savedColor);
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-color') === savedColor);
    });

    const initPerf = localStorage.getItem('performanceMode') || 'high';
    document.documentElement.setAttribute('data-performance', initPerf);
    
    // 背景影片控制
    const bgVideo = document.getElementById('bgVideo');
    if (bgVideo) {
        bgVideo.muted = initMuted;
        if (initPerf === 'low') { bgVideo.pause(); } 
        else if (!initMuted) {
            bgVideo.play().catch(e => {
                console.log("自動播放被阻擋，已切換回靜音");
                bgVideo.muted = true;
                localStorage.setItem('globalMuted', 'true');
                updateLanguageAndSettings(localStorage.getItem('preferredLang') || 'zh-TW');
            });
        }
    }

    // 遊戲頁與作品集懸停控制
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const video = card.querySelector('video.media-back');
        if (video) {
            video.muted = initMuted;
            card.addEventListener('mouseenter', () => {
                if (localStorage.getItem('performanceMode') !== 'low') {
                    video.muted = localStorage.getItem('globalMuted') !== 'false';
                    video.play().catch(err => console.log(err));
                }
            });
            card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
        }
    });

    // --- 事件綁定 ---
    document.querySelectorAll('.lang-selector').forEach(selector => { 
        selector.addEventListener('change', (e) => { updateLanguageAndSettings(e.target.value); }); 
    });

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('preferredTheme', newTheme);
            const currentLang = localStorage.getItem('preferredLang') || 'zh-TW';
            document.querySelectorAll('.theme-toggle-btn').forEach(updateBtn => {
                updateBtn.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
                updateBtn.querySelector('.theme-text').textContent = translations[currentLang][newTheme === 'dark' ? 'theme_light' : 'theme_dark'];
            });
        });
    });

    document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let isMuted = localStorage.getItem('globalMuted') !== 'false';
            isMuted = !isMuted; 
            localStorage.setItem('globalMuted', isMuted);
            const currentLang = localStorage.getItem('preferredLang') || 'zh-TW';
            updateLanguageAndSettings(currentLang);
            if (bgVideo) bgVideo.muted = isMuted;
            document.querySelectorAll('video.media-back').forEach(vid => { vid.muted = isMuted; });
        });
    });

    document.querySelectorAll('.perf-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            let isLowPerf = localStorage.getItem('performanceMode') === 'low';
            isLowPerf = !isLowPerf;
            localStorage.setItem('performanceMode', isLowPerf ? 'low' : 'high');
            document.documentElement.setAttribute('data-performance', isLowPerf ? 'low' : 'high');
            
            if (bgVideo) {
                if (isLowPerf) bgVideo.pause();
                else bgVideo.play().catch(err=>console.log(err));
            }
            const currentLang = localStorage.getItem('preferredLang') || 'zh-TW';
            updateLanguageAndSettings(currentLang);
        });
    });

    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const newColor = dot.getAttribute('data-color');
            document.documentElement.style.setProperty('--accent-color', newColor);
            localStorage.setItem('preferredColor', newColor);
            document.querySelectorAll('.color-dot').forEach(d => {
                d.classList.toggle('active', d.getAttribute('data-color') === newColor);
            });
        });
    });

    // 🔥 全新升級：恢復預設按鈕邏輯 (加入高級過渡動畫)
    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentLang = localStorage.getItem('preferredLang') || 'zh-TW';
            
            if (confirm(translations[currentLang]['reset_confirm'])) {
                // 1. 抓取開屏動畫元素
                const splashScreen = document.getElementById('splash-screen');
                const splashText = document.getElementById('splash-text');
                
                if (splashScreen && splashText) {
                    // 2. 更改文字為「恢復預設中...」並顯示出來
                    splashText.textContent = translations[currentLang]['resetting'];
                    splashScreen.classList.remove('hidden');
                    
                    // 3. 重新凍結背景動畫 (防穿幫)
                    document.documentElement.classList.add('splash-active');
                    
                    // 4. 等待 1.5 秒讓用戶看到轉圈圈，再清除資料與重整頁面
                    setTimeout(() => {
                        localStorage.clear();
                        location.reload();
                    }, 1500); 
                } else {
                    // 備用方案 (如果找不到元素就直接重整)
                    localStorage.clear();
                    location.reload();
                }
            }
        });
    });

    // 📊 模擬訪客統計動畫
    function updateVisitorStats() {
        let total = parseInt(localStorage.getItem('totalVisitors') || '12048');
        let daily = parseInt(localStorage.getItem('dailyVisitors') || '132');
        total += Math.floor(Math.random() * 3) + 1; daily += Math.floor(Math.random() * 2) + 1;
        localStorage.setItem('totalVisitors', total); localStorage.setItem('dailyVisitors', daily);
        
        const dailyEl = document.getElementById('daily-visitors');
        const totalEl = document.getElementById('total-visitors');
        if(dailyEl && totalEl) {
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
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }
    updateVisitorStats();
});

// ==================== 開屏動畫結束機制 ====================
window.addEventListener('load', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const splashScreen = document.getElementById('splash-screen');
    
    if (window.showWelcome) {
        // 【剛點進網站的第一次 (包含新老用戶)，播完整雙層動畫】
        setTimeout(() => {
            if (welcomeScreen) welcomeScreen.classList.add('hidden');
            
            // 播完後，做記號！
            localStorage.setItem('hasVisitedBroQiang', 'true'); // 標記已來過，下次變老用戶
            sessionStorage.setItem('siteInitialized', 'true');  // 標記本次連線已看過，內部切換頁面就不再播
            
            // 底下的轉圈圈再轉 1.5 秒
            setTimeout(() => {
                if (splashScreen) splashScreen.classList.add('hidden');
                document.documentElement.classList.remove('splash-active');
            }, 1500);
            
        }, 2500); 
        
    } else {
        // 【網站內部切換頁面】
        // 迎賓畫面早已隱藏，只顯示 0.5 秒的「載入中...」極速通關
        setTimeout(() => {
            if (splashScreen) splashScreen.classList.add('hidden');
            document.documentElement.classList.remove('splash-active');
        }, 500); 
    }
});

// ==================== 滑鼠點擊水波紋特效 ====================
document.addEventListener('click', function(e) {
    // 檢查是否處於「省電模式」，如果是，則不觸發特效以節省效能
    if (localStorage.getItem('performanceMode') === 'low') return;

    // 創建一個新的 div 元素來當作水波紋
    const ripple = document.createElement('div');
    ripple.className = 'click-effect';
    
    // 將水波紋的位置設定在滑鼠點擊的座標
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    // 把水波紋加到網頁中
    document.body.appendChild(ripple);
    
    // 0.5 秒後（配合 CSS 動畫時間）自動刪除該元素，避免網頁塞滿垃圾代碼
    setTimeout(() => {
        ripple.remove();
    }, 500);
});
