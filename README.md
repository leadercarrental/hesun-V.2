# 賀森包車旅遊 | Hesun Private Tour & Chauffeur

🚗 **台灣頂級包車旅遊服務官方網站**

> 一頁式豪華包車形象網站 + 可手動更新的部落格系統。
> 採用「黑金反光」奢華高級感配色,完全免費部署在 GitHub Pages 上。

## 🌐 訪問網站

**官方網站：** https://leadercarrental.github.io/hesun-V.2

## 📋 關於本網站

這是賀森包車旅遊的官方網站，使用 GitHub Pages 免費託管。網站展示我們的服務項目、豪華車隊、熱門路線、關於我們和部落格。

### 網站特色

✨ **奢華高級設計**
- 黑金主題配色，展現尊榮感
- 現代化響應式設計
- 流暢的過渡動畫效果
- 無障礙友善的 HTML 結構

📱 **完全響應式**
- 桌面、平板、手機完美適配
- 移動端優化菜單
- 優化的加載速度

🔍 **SEO 優化**
- 完整的 Meta 標籤
- 語義化 HTML
- 快速的頁面加載

## 📁 網站結構

```
hesun-V.2/
├── index.html                # 首頁
├── 404.html                  # 404 錯誤頁面
├── README.md                 # 本文件
├── assets/
│   ├── css/
│   │   └── styles.css        # 全站樣式（黑金主題）
│   └── js/
│       └── main.js           # 互動功能腳本
└── blog/
    └── index.html            # 部落格頁面
```

## 📄 頁面介紹

### 首頁（index.html）
- **Hero 區塊**：企業品牌介紹和主要 CTA 按鈕
- **服務項目**：6大核心服務（機場接送、景點包車、商務接送、婚禮用車、環島旅遊、長期包車）
- **豪華車隊**：3種車型介紹（豪華轎車、豪華七人座、九人座商務車）
- **熱門路線**：精選台灣包車路線和報價
- **關於我們**：公司背景與成就統計數據
- **預約表單**：客戶聯絡與預約方式

### 部落格（blog/index.html）
- 多篇精彩文章卡片展示
- 點擊可展開完整文章
- 動態文章列表（易於添加新文章）
- 響應式網格佈局

## 🛠️ 如何更新內容

### 更新部落格文章

編輯 `blog/index.html` 中的 `blogPosts` JavaScript 陣列：

```javascript
const blogPosts = [
  {
    id: 1,
    title: '文章標題',
    date: '2024-04-15',
    author: '賀森包車',
    category: '分類名稱',
    emoji: '🎨',
    excerpt: '文章摘要...',
    content: `完整文章內容...`
  }
  // 添加更多文章...
];
```

### 更新聯絡資訊

編輯 `index.html` 中的聯絡區塊，更新以下資訊：

```html
<!-- 電話 -->
<a href="tel:+886900000000">0900-000-000</a>

<!-- LINE ID -->
<a href="#">@hesuntour</a>

<!-- Email -->
<a href="mailto:booking@hesun-tour.tw">booking@hesun-tour.tw</a>
```

### 修改配色

編輯 `assets/css/styles.css` 中的 CSS 變數：

```css
:root {
  --color-gold: #d4af37;           /* 金色 */
  --color-dark: #0a0a0a;           /* 深色背景 */
  --color-black: #1a1a1a;          /* 黑色 */
  --color-white: #ffffff;          /* 白色 */
  --color-accent: #8b7355;         /* 棕色強調 */
}
```

## 🚀 本地開發

### 快速啟動本地伺服器

#### 使用 Python（推薦）
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用 Node.js
```bash
npx http-server
```

#### 使用 VS Code Live Server
1. 安裝 Live Server 擴充
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

### 訪問本地網站

開啟瀏覽器，進入：`http://localhost:8000`

## 📝 部落格管理腳本

### 手動方式

直接編輯 `blog/index.html` 中的 `blogPosts` 陣列並保存。

### Python 腳本方式（可選）

創建 `update-blog.py`：

```python
#!/usr/bin/env python3
"""
部落格文章更新工具
"""

def add_blog_post(title, date, author, category, emoji, excerpt, content):
    """添加新的部落格文章到 blog/index.html"""
    
    new_post = f"""
      {{
        id: {int(datetime.now().timestamp())},
        title: '{title}',
        date: '{date}',
        author: '{author}',
        category: '{category}',
        emoji: '{emoji}',
        excerpt: '{excerpt}',
        content: `{content}`
      }},
    """
    
    # 這只是示例，實際實現會更複雜
    print(f"✅ 已添加文章: {title}")

if __name__ == '__main__':
    from datetime import datetime
    
    add_blog_post(
        title='新的台灣旅遊攻略',
        date='2024-04-16',
        author='賀森包車',
        category='台灣旅遊',
        emoji='✈️',
        excerpt='新的旅遊文章摘要...',
        content='完整文章內容...'
    )
```

## 🔗 Git 工作流程

### 推送更新

```bash
# 1. 進入項目目錄
cd hesun-V.2

# 2. 查看更改
git status

# 3. 添加所有更改
git add .

# 4. 提交更改
git commit -m "更新部落格文章" 或 "更新聯絡資訊"

# 5. 推送到 GitHub
git push origin main
```

### 創建功能分支（可選）

```bash
# 創建新分支
git checkout -b feature/new-article

# 編輯檔案...

# 提交更改
git add .
git commit -m "新增旅遊攻略文章"

# 推送分支
git push -u origin feature/new-article

# 在 GitHub 上創建 Pull Request
```

## 🌐 GitHub Pages 部署

### 啟用 GitHub Pages

1. 進入倉庫設定 (Settings)
2. 左側菜單選擇 "Pages"
3. 選擇分支為 "main"
4. 選擇目錄為 "/ (root)"
5. 點擊 "Save"

### 網站 URL

網站將在以下地址自動部署：
```
https://leadercarrental.github.io/hesun-V.2
```

部署通常需要 3-5 分鐘。如果看不到更新，請清除瀏覽器快取。

## ✉️ 表單處理

目前表單使用 JavaScript 處理，會將預約資訊複製到剪貼板，用戶可以貼到 LINE 傳送。

### 升級為自動電子郵件（可選）

整合第三方服務實現自動郵件：

- **Formspree** - https://formspree.io/ (免費)
- **Basin** - https://usebasin.com/ (免費)
- **Getform** - https://getform.io/ (專業方案)
- **Netlify Forms** - https://www.netlify.com/forms/ (需要 Netlify 部署)

## 📊 添加流量分析

### Google Analytics

在 `index.html` 的 `</head>` 前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

將 `G-XXXXXXXXXX` 替換為您的 Google Analytics 追蹤 ID。

## 🔒 安全建議

✅ **已實現**
- HTTPS（GitHub Pages 自動提供）
- 無外部依賴（減少攻擊風險）
- 無敏感資訊存儲在源代碼中

⚠️ **最佳實踐**
- 不要在源代碼中存儲電話號碼等敏感資訊（或使用混淆）
- 定期更新依賴（如使用 npm 包）
- 監控 GitHub 安全警告

## 📱 社群媒體連結

在 `index.html` 中更新社群媒體連結：

```html
<div class="social-row">
  <a href="https://facebook.com/hesuntour" class="social">FB</a>
  <a href="https://instagram.com/hesuntour" class="social">IG</a>
  <a href="https://line.me/@hesuntour" class="social">LINE</a>
</div>
```

## 🐛 故障排查

### 網頁樣式沒有顯示
- 清除瀏覽器快取：Ctrl+Shift+Delete 或 Cmd+Shift+Delete
- 檢查 CSS 檔案路徑是否正確
- 打開瀏覽器開發者工具（F12）查看控制台錯誤

### 表單無法提交
- 檢查瀏覽器控制台（F12）是否有 JavaScript 錯誤
- 確認表單欄位名稱拼寫正確
- 測試 JavaScript 是否啟用

### GitHub Pages 網站不更新
- 等待 3-5 分鐘（GitHub 需要時間部署）
- 清除瀏覽器快取
- 檢查 GitHub Actions 是否有部署錯誤
- 確認分支設置正確

### 部落格文章不顯示
- 檢查 JSON 語法是否正確（特別是逗號和引號）
- 確認 emoji 顯示正確
- 清除瀏覽器快取後重新加載

## 💡 提示與技巧

### 快速編輯在線
1. 進入 GitHub 倉庫
2. 找到要編輯的檔案（例如 `blog/index.html`）
3. 點擊鉛筆圖標編輯
4. 編輯後點擊 "Commit changes"
5. 等待 2-3 分鐘看到網站更新

### 添加新圖片
1. 在倉庫中創建 `assets/images/` 資料夾
2. 上傳圖片檔案
3. 在 HTML 中參考：`<img src="assets/images/photo.jpg" alt="描述">`

### SEO 優化技巧
- 更新每個頁面的 `<title>` 和 `<meta description>`
- 使用語義化 HTML 標籤
- 添加結構化數據（Schema.org）
- 優化圖片大小和 alt 文本

## 📞 聯絡與支持

**賀森包車旅遊**

- **電話**：0900-000-000
- **LINE**：@hesuntour
- **Email**：booking@hesun-tour.tw
- **服務時間**：24 小時全年無休
- **服務區域**：全台灣

## 📄 版權與許可

© 2024 賀森包車旅遊 (Hesun Private Tour & Chauffeur)

保留所有權利。本網站設計與內容受著作權保護。

---

**上次更新**：2024 年 4 月  
**網站維護者**：賀森包車旅遊  
**技術支持**：Claude AI Assistant