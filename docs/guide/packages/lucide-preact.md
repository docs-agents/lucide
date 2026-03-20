---
title: Lucide Preact
---

# Lucide Preact

为 Lucide 图标提供的 Preact 组件，以更小的体积提供类似 React 的开发体验。每个图标都是一个轻量级的 Preact 组件，渲染为内联 SVG，非常适合需要 React 兼容性但希望减少包体积的应用程序。

**你可以实现的：**

- 使用类似 React 的语法和模式将图标作为 Preact 组件使用
- 使用 Preact 更小的运行时构建轻量级应用程序
- 以最少的 JavaScript 开销创建快速、响应式的界面
- 在减少包体积的同时保持 React 兼容性
- 与现有的 Preact 应用程序和组件库集成

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-preact
```

```sh [yarn]
yarn add lucide-preact
```

```sh [npm]
npm install lucide-preact
```

```sh [bun]
bun add lucide-preact
```

:::

## 如何使用

Lucide 基于 ES Modules 构建，因此完全支持 tree-shaking。

每个图标都可以作为 Preact 组件导入，渲染为内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终包中，其余图标会被 tree-shaking 移除。

### 示例

可以传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-preact';

// 用法
const App = () => {
  return (
    <Camera
      color="red"
      size={48}
    />
  );
};

export default App;
```

## Props

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `strokeWidth`         | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |

### 应用 Props

要自定义图标的外观，可以将自定义属性作为 props 直接传递给组件。该组件接受所有 SVG 属性作为 props，允许灵活地设置 SVG 元素的样式。参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 展示属性列表。

```jsx
// 用法
const App = () => {
  return (
    <Camera
      fill="red"
      stroke-linejoin="bevel"
    />
  );
};
```

> Preact 中的 SVG 属性不会经过转换，所以如果你想改变 `stroke-linejoin`，需要使用 kebab-case 写法。基本上就是 SVG 规范要求你写的形式。参见 [Preact 文档](https://preactjs.com/guide/v10/differences-to-react/#svg-inside-jsx) 中的这个话题。

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是一组不属于 Lucide 主库的图标集合。

可以通过 `Icon` 组件来使用它们。
所有常规 lucide 图标的 props 都可以传递以调整图标外观。

### 使用 `Icon` 组件

这会基于传入的 iconNode 创建一个单一图标，并渲染为 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-preact';
import { coconut } from '@lucide/lab';

const App = () => <Icon iconNode={coconut} />;
```

## 一个通用的图标组件

可以创建一个通用的图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例导入了所有 ES Modules，因此使用时请谨慎。导入所有图标会显著增加应用程序的构建大小，对性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时这一点尤为重要。
:::

### 图标组件示例

```jsx
import { icons } from 'lucide-preact';

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
    />
  );
};

export default Icon;
```

#### 使用图标组件

```jsx
import Icon from './Icon';

const App = () => {
  return <Icon name="house" />;
};

export default App;
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以使用 aria-label 添加无障碍属性。

```jsx
import { Check } from 'lucide-preact';

const App = () => {
  return <Check aria-label="任务已完成" />;
};
```

有关无障碍性的最佳实践，请参阅我们的[无障碍性指南](../advanced/accessibility.md)。
