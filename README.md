# 陶长风个人网站

纯静态网站，不需要安装任何东西。双击 `index.html` 就能看；上线时把整个文件夹传上去。

## 文件

| 文件 | 内容 |
|---|---|
| `index.html` | 首页：简介、照片、代表性发表、工作论文 |
| `research.html` | 研究：全部期刊发表和工作论文 |
| `cv.html` | 简历 |
| `database.html` | 数据库（问询函数据，公开版待放） |
| `assets/site.css` | 样式。主色在文件开头的 `--ledger`，三处都要改 |
| `assets/site.js` | 语言和深浅色切换。默认语言也在这里改 |
| `images/` | `portrait.jpg` 是首页方形照片，`avatar.jpg` 是内页圆形头像 |

## 怎么改内容

每段文字都写了两遍，英文在 `class="en"` 里，中文在 `class="zh"` 里，两边都要改。
菜单和页脚每个页面各有一份，改的时候四个页面都要改。

- 论文状态变了（比如拿到 R&R）：改 `research.html` 对应论文的 `badge`。这篇如果也在首页，再改 `index.html`；`cv.html` 的列表也同步。
- 加学术主页（Google Scholar、SSRN、ORCID）：在 `research.html`、`cv.html`、`database.html` 侧栏的 `<ul class="contact">` 里各加一行。
- 换照片：替换 `images/` 里的两张图，文件名不变。

## 放问询函数据

1. 新建 `data/` 文件夹，放入数据和变量说明。
2. 打开 `database.html`，按“公开版本”那行上面的注释改成下载链接，并把“In preparation / 整理中”改成版本号或日期。

单个文件的大小限制：GitHub Pages 不超过 100 MB，Cloudflare Pages 不超过 25 MB。数据更大的话，放到 Zenodo 等数据仓储，这里只放链接。

## 上线

**GitHub Pages（免费）：** 新建仓库，上传这个文件夹里的所有文件，在 Settings → Pages 里选择 main 分支。网址形如 `用户名.github.io`。中国大陆访问可能不稳定。

**自己的域名（参考站的做法）：** 买一个域名（如 `changfengtao.com`），把网站放到 GitHub Pages 或 Cloudflare Pages，再绑定域名。

## 字体

字体从 Google Fonts 加载。在中国大陆加载不到时，会自动换成系统字体（Georgia、宋体、微软雅黑），页面仍然正常显示，也不会变慢。想让所有访客看到同样的字体，可以把字体文件下载到网站里自己托管。
