# Lucide Static

Lucide 图标的静态资源和工作套件，无需 JavaScript 框架即可使用。此包提供了多种格式，包括单个 SVG 文件、SVG 精灵图、图标字体以及用于服务端渲染和静态站点生成的 Node.js 工具。

**功能概述：**

- 将单个 SVG 文件用作图片或 CSS 背景图片
- 实现图标字体以支持基于 CSS 的图标系统
- 创建 SVG 精灵图以高效加载静态站点中的图标
- 在 Node.js 应用和服务端渲染中导入 SVG 字符串
- 构建无需 JavaScript 框架依赖的静态网站和应用

此包包含以下 Lucide 图标实现：

- 单个 SVG 文件
- SVG 精灵图
- 图标字体文件
- 导出 SVG 字符串的 JavaScript 库

## 适用场景

`lucide-static` 适用于*非常特定的用例*，即你想在不依赖 JavaScript 框架或组件系统的情况下使用 Lucide 图标。适合以下场景：

- 使用纯 CSS 或 utility-first 框架的图标字体项目
- 直接在 HTML 中嵌入原始 SVG 文件或精灵图
- 将 SVG 用作 CSS 背景图片
- 在 Node.js (CommonJS) 环境中导入 SVG 字符串

::: danger

### 不推荐用于生产环境 {#production-warning}

SVG 精灵图和图标字体包含*所有图标*，这可能会显著增加应用的包体积和加载时间。

对于生产环境，我们建议使用支持 tree-shaking 的打包工具，只包含你实际使用的图标。推荐使用：

- [lucide](lucide)
- [lucide-react](lucide-react)
- [lucide-vue](lucide-vue)
- [lucide-vue-next](lucide-vue-next)
- [lucide-angular](lucide-angular)
- [lucide-preact](lucide-preact)
  :::

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-static
```

```sh [yarn]
yarn add lucide-static
```

```sh [npm]
npm install lucide-static
```

```sh [bun]
bun add lucide-static
```

:::

## SVG 文件

你可以使用独立的 SVG 文件或 SVG 精灵图，方式如下：

查看我们的 [codesandbox 示例](https://codesandbox.io/s/using-the-svg-sprite-lz1kk)。

### SVG 文件作为图片

#### 在 HTML 中：

::: code-group

```html [Webpack]
<!-- 单个图标的 SVG 文件 -->
<img src="~lucide-static/icons/house.svg" />
```

```html [CDN]
<!-- 单个图标的 SVG 文件 -->
<img src="https://unpkg.com/lucide-static@latest/icons/house.svg" />
```

:::

#### 在 CSS 中：

::: code-group

```css [Webpack]
.house-icon {
  background-image: url(~lucide-static/icons/house.svg);
}
```

```css [CDN]
.house-icon {
  background-image: url(https://unpkg.com/lucide-static@latest/icons/house.svg);
}
```

:::

请确保已正确配置 Webpack 加载器，例如 [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/)。

### SVG 文件作为字符串

导入 SVG 作为字符串（例如用于模板）：

::: code-group

```js [Webpack]
import arrowRightIcon from 'lucide-static/icons/arrow-right';
```

```js [Vite]
import arrowRightIcon from 'lucide-static/icons/arrow-right.svg?raw';
```

:::

你需要使用 SVG 加载器，如 [`svg-inline-loader`](https://v4.webpack.js.org/loaders/svg-inline-loader/)。

### 使用 SVG 精灵图

:::danger
[不适用于生产环境。](#production-warning)
:::

你可能还需要额外的 SVG 加载器来处理此功能。

#### 基本精灵图用法（非生产优化）：

```html
<img src="lucide-static/sprite.svg#house" />
```

#### 内联用法：

```html
<svg
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <use href="#alert-triangle" />
</svg>

<!-- 精灵图 SVG -->
<svg>...</svg>
```

#### 使用 CSS 辅助类内联

如果你愿意，可以使用 CSS 来设置基础 SVG 属性：

```css
.lucide-icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

...然后按如下方式更新 SVG：

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="lucide-icon"
>
  <use href="#triangle-alert" />
</svg>

<!-- 精灵图 SVG -->
<svg>...</svg>
```

## 图标字体

:::danger
[不适用于生产环境。](#production-warning)
:::

Lucide 图标也可作为网页字体使用。要使用它们，首先需要引入对应的样式表：

::: code-group

```css [Vite]
@import 'lucide-static/font/lucide.css';
```

```css [Webpack]
@import ('~lucide-static/font/lucide.css');
```

```html [CDN]
<link
  rel="stylesheet"
  href="https://unpkg.com/lucide-static@latest/font/lucide.css"
/>
```

```html [静态资源]
<link
  rel="stylesheet"
  href="/your/path/to/lucide.css"
/>
```

:::

引入后，使用格式 `icon-{kebab-case-name}`。你可以从 [Lucide Icons 页面](https://lucide.dev/icons) 复制图标名称。

```html
<div class="icon-house"></div>
```

如果你没有使用包管理器，可以直接从 [最新版本](https://github.com/lucide-icons/lucide/releases/latest) 下载字体文件。

## Node.js

你也可以在 Node.js 项目中导入 Lucide 图标：

::: code-group

```js [ESM]
import { MessageSquare } from 'lucide-static';
```

```js [CommonJs]
const { MessageSquare } = require('lucide-static');
```

:::

> 注意：每个图标名称使用 PascalCase 格式。

#### Node.js 中的 Express 应用示例

```js
import express from 'express';
import { MessageSquare } from 'lucide-static';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>Lucide Icons</h1>
        <p>This is a Lucide icon ${MessageSquare}</p>

      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```
