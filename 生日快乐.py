import tkinter as tk
import math
import random
import time
import os
import sys

# 尝试载入 pygame 以播放音乐
try:
    import pygame
    pygame.mixer.init()
    HAS_MUSIC = True
except ImportError:
    HAS_MUSIC = False

class Particle:
    def __init__(self, canvas, x, y, color, speed_x, speed_y, life, size):
        self.canvas = canvas
        self.id = canvas.create_oval(x-size, y-size, x+size, y+size, fill=color, outline="")
        self.x = x
        self.y = y
        self.sx = speed_x
        self.sy = speed_y
        self.life = life
        self.max_life = life
        self.size = size

    def update(self):
        self.x += self.sx
        self.y += self.sy
        self.sy += 0.15  # 重力
        self.life -= 1
        self.canvas.coords(self.id, self.x-self.size, self.y-self.size, self.x+self.size, self.y+self.size)
        return self.life > 0

    def destroy(self):
        self.canvas.delete(self.id)


class BirthdayApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Happy Birthday - Epic Edition")
        
        # 全屏与置顶
        self.root.attributes('-fullscreen', True)
        self.root.attributes('-topmost', True)
        
        # 背景透明化设定 (Windows)
        self.bg_color = '#000001'
        self.root.configure(bg=self.bg_color)
        self.root.wm_attributes('-transparentcolor', self.bg_color)
        
        self.w = root.winfo_screenwidth()
        self.h = root.winfo_screenheight()
        
        self.canvas = tk.Canvas(root, width=self.w, height=self.h, bg=self.bg_color, highlightthickness=0)
        self.canvas.pack()
        
        self.root.bind("<Escape>", lambda e: self.quit())
        
        self.start_time = time.time()
        
        self.particles = []      # 烟花粒子
        self.heart_points = []   # 爱心粒子
        self.meteors = []        # 流星雨
        self.balloons = []       # 气球
        self.phase = 0
        self.heart_beat_scale = 1.0
        self.heart_beat_dir = 0.02
        
        # 播放音乐
        if HAS_MUSIC:
            music_path = self.resource_path("song.mp3")
            if os.path.exists(music_path):
                pygame.mixer.music.load(music_path)
                pygame.mixer.music.play(-1)
                
        self.update_frame()
        
    def resource_path(self, relative_path):
        try:
            base_path = sys._MEIPASS
        except Exception:
            base_path = os.path.abspath(".")
        return os.path.join(base_path, relative_path)
        
    def spawn_firework(self, x, y):
        colors = ["#FF1493", "#00FFFF", "#FFD700", "#FF4500", "#7FFF00", "#9400D3"]
        fc = random.choice(colors)
        for _ in range(40):
            angle = random.uniform(0, math.pi * 2)
            speed = random.uniform(2, 8)
            sx = math.cos(angle) * speed
            sy = math.sin(angle) * speed
            p = Particle(self.canvas, x, y, random.choice([fc, "#FFFFFF"]), sx, sy, random.randint(30, 60), random.uniform(2, 4))
            self.particles.append(p)

    def update_frame(self):
        now = time.time()
        elapsed = now - self.start_time
        
        # 更新烟花粒子
        for p in self.particles[:]:
            if not p.update():
                p.destroy()
                self.particles.remove(p)

        # 随机流星雨 (阶段2之后)
        if self.phase >= 1 and random.random() < 0.05:
            self.spawn_meteor()
            
        for m in self.meteors[:]:
            self.canvas.move(m["id"], m["sx"], m["sy"])
            m["life"] -= 1
            if m["life"] <= 0:
                self.canvas.delete(m["id"])
                self.meteors.remove(m)

        # 状态机机制
        if elapsed < 1.0:
            self.show_countdown("3", "#87CEFA", elapsed)
        elif elapsed < 2.0:
            self.show_countdown("2", "#98FB98", elapsed - 1.0)
        elif elapsed < 3.0:
            self.show_countdown("1", "#FFD700", elapsed - 2.0)
        elif elapsed < 4.0:
            self.canvas.delete("countdown")
            if self.phase == 0:
                self.init_heart()
                self.spawn_firework(self.w//2, self.h//2)
                self.phase = 1
            self.animate_heart_form()
        elif elapsed < 8.0:
            self.animate_heart_beat()
        else:
            if self.phase == 1:
                self.canvas.delete("heart")
                self.init_epic_cake()
                self.init_poetry()
                self.init_balloons()
                for _ in range(5):
                    self.spawn_firework(random.randint(100, self.w-100), random.randint(100, self.h-100))
                self.phase = 2
                
            self.animate_balloons()
            self.animate_epic_cake()
            
            # 持续放烟花
            if random.random() < 0.03:
                self.spawn_firework(random.randint(100, self.w-100), random.randint(100, self.h//2))

        self.root.after(30, self.update_frame)
        
    def show_countdown(self, num, color, t):
        self.canvas.delete("countdown")
        cx, cy = self.w // 2, self.h // 2
        
        # 数字缩放与淡入效果 (模拟)
        size = int(300 - t * 100)
        
        self.canvas.create_text(cx+5, cy+5, text=num, font=("Arial", size, "bold"), fill="#333333", tags="countdown")
        self.canvas.create_text(cx, cy, text=num, font=("Arial", size, "bold"), fill=color, tags="countdown")
        
        if t == 0.05: # 每个数字刚出现时放个小烟花
            self.spawn_firework(cx, cy)

    def spawn_meteor(self):
        x = random.randint(0, self.w)
        y = -50
        sx = random.uniform(-15, -5)
        sy = random.uniform(10, 20)
        id = self.canvas.create_line(x, y, x-sx*2, y-sy*2, fill="#FFFFFF", width=2, tags="meteor")
        self.meteors.append({"id": id, "sx": sx, "sy": sy, "life": 100})

    def init_heart(self):
        cx, cy = self.w // 2, self.h // 2
        scale = min(self.w, self.h) / 45
        
        for t in range(0, 628, 1):  # 增加密度
            rad = t / 100.0
            x = 16 * (math.sin(rad) ** 3)
            y = 13 * math.cos(rad) - 5 * math.cos(2*rad) - 2 * math.cos(3*rad) - math.cos(4*rad)
            tx = cx + x * scale
            ty = cy - y * scale
            
            c = random.choice(["#FF1493", "#FF69B4", "#FF0000", "#DC143C", "#FFC0CB"])
            size = random.uniform(2, 6)
            
            # 初始从四周飞入中心
            start_x = cx + random.uniform(-self.w, self.w)
            start_y = cy + random.uniform(-self.h, self.h)
            
            id = self.canvas.create_oval(start_x-size, start_y-size, start_x+size, start_y+size, fill=c, outline="", tags="heart")
            self.heart_points.append({
                "id": id, "cx": start_x, "cy": start_y, "tx": tx, "ty": ty, 
                "base_x": tx, "base_y": ty, "center_x": cx, "center_y": cy,
                "progress": 0.0, "speed": random.uniform(0.02, 0.05), "size": size
            })

    def animate_heart_form(self):
        for p in self.heart_points:
            if p["progress"] < 1.0:
                p["progress"] += p["speed"]
                ease = 1 - (1 - p["progress"]) ** 3
                nx = p["cx"] + (p["tx"] - p["cx"]) * ease
                ny = p["cy"] + (p["ty"] - p["cy"]) * ease
                self.canvas.coords(p["id"], nx-p["size"], ny-p["size"], nx+p["size"], ny+p["size"])

    def animate_heart_beat(self):
        self.heart_beat_scale += self.heart_beat_dir
        if self.heart_beat_scale > 1.15:
            self.heart_beat_dir = -0.04
        elif self.heart_beat_scale < 0.95:
            self.heart_beat_dir = 0.04
            
        for p in self.heart_points:
            dx = p["base_x"] - p["center_x"]
            dy = p["base_y"] - p["center_y"]
            nx = p["center_x"] + dx * self.heart_beat_scale + random.uniform(-1, 1)
            ny = p["center_y"] + dy * self.heart_beat_scale + random.uniform(-1, 1)
            self.canvas.coords(p["id"], nx-p["size"], ny-p["size"], nx+p["size"], ny+p["size"])

    def draw_3d_cylinder(self, cx, cy, w, h, color_top, color_side):
        # 侧面
        self.canvas.create_rectangle(cx-w, cy, cx+w, cy+h, fill=color_side, outline="", tags="cake")
        # 底部弧度
        self.canvas.create_oval(cx-w, cy+h-w*0.3, cx+w, cy+h+w*0.3, fill=color_side, outline="", tags="cake")
        # 顶部
        self.canvas.create_oval(cx-w, cy-w*0.3, cx+w, cy+w*0.3, fill=color_top, outline="", tags="cake")

    def init_epic_cake(self):
        cx, cy = self.w // 2, self.h // 2 + 100
        
        # 绘制代码版精美多层蛋糕 (取代简陋的Emoji)
        # 底盘
        self.canvas.create_oval(cx-220, cy+130, cx+220, cy+200, fill="#555555", outline="#777777", width=3, tags="cake")
        self.canvas.create_oval(cx-200, cy+130, cx+200, cy+180, fill="#FFFAF0", outline="", tags="cake")
        
        # 第一层 (底层)
        self.draw_3d_cylinder(cx, cy+70, 160, 80, "#FFF0F5", "#FFB6C1")
        # 奶油波浪
        for i in range(-150, 160, 30):
            self.canvas.create_oval(cx+i-20, cy+60, cx+i+20, cy+90, fill="#FFF0F5", outline="", tags="cake")
            
        # 第二层 (中层)
        self.draw_3d_cylinder(cx, cy, 110, 70, "#E0FFFF", "#87CEFA")
        for i in range(-100, 110, 25):
            self.canvas.create_oval(cx+i-15, cy-10, cx+i+15, cy+15, fill="#E0FFFF", outline="", tags="cake")

        # 第三层 (顶层)
        self.draw_3d_cylinder(cx, cy-60, 70, 60, "#FFFFE0", "#FFD700")
        for i in range(-60, 70, 20):
            self.canvas.create_oval(cx+i-12, cy-70, cx+i+12, cy-50, fill="#FFFFE0", outline="", tags="cake")

        # 蜡烛与火焰特效
        self.candles = []
        for offset in [-30, 0, 30]:
            # 蜡烛身体
            self.canvas.create_rectangle(cx+offset-5, cy-110, cx+offset+5, cy-60, fill="#FF4500", outline="", tags="cake")
            # 动态火焰
            flame = self.canvas.create_oval(cx+offset-8, cy-140, cx+offset+8, cy-110, fill="#FFD700", outline="", tags="cake")
            self.candles.append({"id": flame, "x": cx+offset, "y": cy-135})

    def animate_epic_cake(self):
        # 蜡烛火焰闪烁动画
        for c in self.candles:
            flicker_x = random.uniform(-2, 2)
            flicker_y = random.uniform(-3, 3)
            size_x = random.uniform(6, 10)
            size_y = random.uniform(15, 25)
            self.canvas.coords(c["id"], c["x"]-size_x+flicker_x, c["y"]-size_y+flicker_y, 
                               c["x"]+size_x+flicker_x, c["y"]+size_y+flicker_y)

    def draw_text_with_shadow(self, x, y, text, font, fill, shadow_color="#222222"):
        self.canvas.create_text(x+3, y+3, text=text, font=font, fill=shadow_color, tags="final_text", justify="center")
        self.canvas.create_text(x, y, text=text, font=font, fill=fill, tags="final_text", justify="center")

    def init_poetry(self):
        cx, cy = self.w // 2, self.h // 2
        
        font_title = ("Microsoft YaHei", 55, "bold")
        font_poetry = ("STXingkai", 40) # 华文行楷 (中国风优美字体)
        # 如果系统没有华文行楷，tkinter会自动降级到默认字体，但依然有效
        fallback_font = ("KaiTi", 35, "italic")
        
        # 唯美诗词 (左右两侧)
        poetry_left = "且 停\n且 忘\n且 随 风"
        poetry_right = "且 行\n且 看\n且 从 容"
        
        self.draw_text_with_shadow(cx - 400, cy - 50, poetry_left, fallback_font, "#FFB6C1")
        self.draw_text_with_shadow(cx + 400, cy - 50, poetry_right, fallback_font, "#87CEFA")
        
        # 顶部大字祝语
        self.draw_text_with_shadow(cx, cy - 320, "✨ 岁岁常欢愉 · 万事皆胜意 ✨", ("Microsoft YaHei", 45, "bold"), "#FFD700")
        self.draw_text_with_shadow(cx, cy - 230, "Happy Birthday", ("Comic Sans MS", 65, "bold"), "#FF69B4")
        
        # 底部提示
        self.canvas.create_text(cx, self.h - 30, text="[ 按 ESC 键关闭这场浪漫 ]", font=("Microsoft YaHei", 12), fill="#AAAAAA", tags="final_text")

    def init_balloons(self):
        colors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E8BAFF']
        for _ in range(25):
            bx = random.randint(50, self.w - 50)
            by = self.h + random.randint(100, 1000)
            c = random.choice(colors)
            s = random.randint(30, 60)
            
            line = self.canvas.create_line(bx, by+s, bx, by+s*3, fill="white", width=1.5, tags="balloon")
            oval = self.canvas.create_oval(bx-s, by-s*1.2, bx+s, by+s*1.2, fill=c, outline=c, tags="balloon")
            hl = self.canvas.create_oval(bx-s*0.5, by-s*0.8, bx-s*0.2, by-s*0.4, fill="#FFFFFF", outline="", tags="balloon")
            
            self.balloons.append({
                "oval": oval, "line": line, "hl": hl, 
                "speed": random.uniform(3.0, 6.0), "ang": random.uniform(0, 6.28)
            })

    def animate_balloons(self):
        for b in self.balloons:
            b["ang"] += 0.05
            dx = math.sin(b["ang"]) * 2.0
            dy = -b["speed"]
            self.canvas.move(b["oval"], dx, dy)
            self.canvas.move(b["line"], dx, dy)
            self.canvas.move(b["hl"], dx, dy)

    def quit(self):
        if HAS_MUSIC:
            pygame.mixer.music.stop()
        self.root.destroy()
        sys.exit()

if __name__ == "__main__":
    root = tk.Tk()
    app = BirthdayApp(root)
    root.mainloop()
