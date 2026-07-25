/* =========================
   隱藏影片懸浮播放控制 (強制觸發版)
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
    // 找出所有帶有卡片的區塊
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 尋找卡片內的隱藏影片
        const video = card.querySelector('.media-back');
        
        if (video) {
            // 當滑鼠移入卡片時 -> 強制播放影片
            card.addEventListener('mouseenter', () => {
                video.play().catch(error => {
                    console.log("影片自動播放被瀏覽器阻擋:", error);
                });
            });

            // 當滑鼠移出卡片時 -> 暫停影片並回到 0 秒
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // 讓下次滑上去時可以從頭開始看
            });
        }
    });
});
