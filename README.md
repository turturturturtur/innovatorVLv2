# Innovator VL v2 · 能力展示页

面向科学与工业多模态大模型 Innovator 的静态展示网页：呈现模型优势、实验结果与解决的问题，以及重要 benchmark 上与其他模型的对比。无需模型服务、API Key、依赖安装或构建步骤，所有交互在浏览器完成。

线上地址：<https://turturturturtur.github.io/innovatorVLv2/>

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

打开 <http://localhost:8080>。远程机器可用编辑器转发 8080 端口。

## 文件说明

| 路径 | 用途 |
| --- | --- |
| `index.html` | 页面结构、章节与初始文案 |
| `styles.css` | 主题、响应式布局与 CSS 动画 |
| `data.js` | 评测分数、对比配置与静态案例 |
| `app.js` | 中英文文案、数据渲染、筛选与弹窗 |
| `case-player.js` | 原生 SVG 镜头、区域描边与答案逐步揭示 |
| `particles.js` / `intro.js` | 首屏 Canvas 粒子与开场动画 |
| `assets/` | 图片与图标素材 |
| `.github/workflows/` | JavaScript 语法检查与手动 Pages 发布 |

页面默认英文，可切换中文。案例来自正式配置下的真实评测样本，原始提示词、模型回答与判分依据可在页面内展开核查。条形图使用 0–100 线性轴，差值由原始分数相减得出，精选结果不代表总体排名；缺失项显示为「—」且不绘制条形。

## 发布

`.github/workflows/pages.yml` 仅支持手动触发（`workflow_dispatch`），只在 `main` 分支执行，把上表列出的文件复制到 `_site/` 后上传并部署，因此开发文档、数据来源记录与 Git 配置都不会进入站点。

本仓库只保存站点的发布副本；开发约束、上下文、数据来源与评测核验记录保存在另一个 private 仓库中，不随站点公开。
