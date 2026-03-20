# Lucide

Lucide 的核心包，适用于原生 JavaScript 应用程序。这个包让你可以轻松地向任何 Web 项目添加可缩放的矢量图标，无需任何框架依赖。非常适合静态网站、旧版应用程序，或者当你需要轻量级图标集成并追求最大浏览器兼容性时使用。

**功能概述：**

- 使用简单的 data 属性向 HTML 添加图标
- 使用 JavaScript 动态创建和插入 SVG 图标
- 通过 CSS 类和内联样式自定义图标外观
- Tree-shake 未使用的图标以保持包体积最小
- 可在任何 JavaScript 环境或纯 HTML 中使用图标

## 安装

### 包管理器

::: code-group

```sh [pnpm]
pnpm add lucide
```

```sh [yarn]
yarn add lucide
```

```sh [npm]
npm install lucide
```

```sh [bun]
bun add lucide
```

:::

### CDN

```html
<!-- 开发版本 -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<!-- 生产版本 -->
<script src="https://unpkg.com/lucide@latest"></script>
```

## 使用方法

### 使用 unpkg

以下是使用 unpkg 的完整示例

```html
<!DOCTYPE html>
<body>
  <i
    data-lucide="volume-2"
    class="my-class"
  ></i>
  <i data-lucide="x"></i>
  <i data-lucide="menu"></i>

  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    lucide.createIcons();
  </script>
</body>
```

我们强烈建议您锚定到特定版本，例如 `https://unpkg.com/lucide@x.xxx.x/dist/umd/lucide.min.js`，而不是使用 `@latest`。

### 使用 ESModules

为了减小包体积，lucide 被设计为完全支持 tree-shaking。
`createIcons` 函数会查找带有 `data-lucide` 属性的 HTMLElements，并根据给定的图标名称替换为相应的 svg。

```html
<!-- 你的 HTML 文件 -->
<i data-lucide="menu"></i>
```

```js
import { createIcons, icons } from 'lucide';

// 注意，这将导入所有图标并打包它们。
createIcons({ icons });

// 推荐方式，只包含你需要的图标。
import { createIcons, Menu, ArrowRight, Globe } from 'lucide';

createIcons({
  icons: {
    Menu,
    ArrowRight,
    Globe,
  },
});
```

## 高级用法

### 额外选项

在 `createIcons` 函数中，你可以传入一些额外的参数：

- 可以传入 `nameAttr` 来调整要替换的属性名称
- 可以传入 `attrs` 来传递额外的自定义属性，例如 CSS 类或描边选项
- 可以传入 `root` 来提供自定义 DOM 元素，在其中替换图标（当操作大型 DOM 的小部分或 shadow DOM 中的元素时很有用）
- 可以传入 `inTemplates: true` 来同时替换 `<template>` 标签内的图标

以下是完整示例：

```js
import { createIcons } from 'lucide';

createIcons({
  attrs: {
    class: ['my-custom-class', 'icon'],
    'stroke-width': 1,
    stroke: '#333',
  },
  nameAttr: 'data-lucide', // 图标名称的属性。
  root: element, // 要替换图标的 DOM 元素。
  inTemplates: true, // 同时替换 <template> 标签内的图标。
});
```

### Tree-shake 库，只使用你需要的图标

```js
import { createIcons, Menu, ArrowRight, Globe } from 'lucide';

createIcons({
  icons: {
    Menu,
    ArrowRight,
    Globe,
  },
});
```

### 自定义 Document root

在自定义根元素中应用图标，例如 shadow DOM root。

```js
import { createIcons } from 'lucide';

// 自定义根元素，例如 shadow DOM root。
const shadowRoot = element.attachShadow({ mode: 'open' });

createIcons({
  root: shadowRoot,
});
```

### 在 `<template>` 标签内应用图标

默认情况下，`<template>` 标签内的图标不会被添加。
通过将 `inTemplates` 选项设置为 `true`，模板内的图标也会被替换。

```js
import { createIcons } from 'lucide';

createIcons({
  inTemplates: true,
});
```

### 自定义元素绑定

```js
import { createElement, Menu } from 'lucide';

const menuIcon = createElement(Menu); // 返回 HTMLElement (svg)

// 将 HTMLElement 追加到 DOM 中
const myApp = document.getElementById('app');
myApp.appendChild(menuIcon);
```

#### 带自定义属性的自定义元素绑定

```js
import { createElement, Menu } from 'lucide';

const menuIcon = createElement(Menu, {
  class: ['my-custom-class', 'icon'],
  'stroke-width': 1,
  stroke: '#333',
}); // 返回 HTMLElement (svg)

// 将 HTMLElement 追加到 DOM 中
const myApp = document.getElementById('app');
myApp.appendChild(menuIcon);
```

### 使用 Lucide lab 或自定义图标

[Lucide lab](https://github.com/lucide-icons/lucide-lab) 是一些不属于 Lucide 主库的图标集合。
它们的使用方式与官方图标相同。

```js
import { coconut } from '@lucide/lab';

createIcons({
  icons: {
    coconut,
  },
});
```

## 无障碍访问

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以使用 aria-labels 添加无障碍属性。

```html
<!DOCTYPE html>
<body>
  <i
    data-lucide="house"
    aria-label="Home icon"
  ></i>

  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    lucide.createIcons();
  </script>
</body>
```

有关无障碍访问的最佳实践，请参阅我们的[无障碍访问指南](../advanced/accessibility.md)。
