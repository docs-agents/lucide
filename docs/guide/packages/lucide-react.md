# Lucide React

用于 Lucide 图标的 React 组件，可无缝集成到 React 应用程序中。每个图标都是一个完全类型化的 React 组件，渲染为优化的内联 SVG，让你在享受组件灵活性的同时拥有矢量图形的性能。

**功能概述：**

- 将图标作为 React 组件导入，支持完整的 TypeScript
- 通过 props 自定义尺寸、颜色、描边宽度和其他 SVG 属性
- 在 JSX 中像使用其他 React 组件一样轻松使用图标
- 自动进行 tree-shaking，仅包含你使用的图标
- 创建可响应状态和用户交互的动态图标组件

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-react
```

```sh [yarn]
yarn add lucide-react
```

```sh [npm]
npm install lucide-react
```

```sh [bun]
bun add lucide-react
```

:::

## 使用方法

Lucide 基于 ES Modules 构建，因此完全支持 tree-shaking。

每个图标都可以作为 React 组件导入，渲染为内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中，其他图标会被 tree-shaking 移除。

### 示例

可以通过传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-react';

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

| 属性名                | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `strokeWidth`         | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |

### 应用 props

要自定义图标的外观，可以将自定义属性作为 props 直接传递给组件。组件接受所有 SVG 属性作为 props，允许灵活地设置 SVG 元素的样式。详见 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 展示属性列表。

```jsx
// 用法
const App = () => {
  return (
    <Camera
      size={48}
      fill="red"
    />
  );
};
```

## 结合 Lucide Lab 或自定义图标使用

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是一些不属于 Lucide 主库图标的集合。

可以通过 `Icon` 组件来使用它们。
与普通 lucide 图标一样，所有 props 都可以传递以调整图标外观。

### 使用 `Icon` 组件

这会基于传入的 iconNode 创建一个图标，并渲染为 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-react';
import { coconut } from '@lucide/lab';

const App = () => <Icon iconNode={coconut} />;
```

## 动态图标组件

可以创建一个通用的图标组件来加载图标。但不建议这样做，因为它会在构建时导入所有图标。这会增加构建时间和生成的模块数量。

`DynamicIcon` 适用于需要通过图标名称动态显示图标的应用程序。例如，在使用内容管理系统且图标名称存储在数据库中时。

对于静态使用场景，建议直接导入图标。

同样的 props 可以传递以调整图标外观。`name` prop 是必需的，用于加载正确的图标。

```jsx
import { DynamicIcon } from 'lucide-react/dynamic';

const App = () => (
  <DynamicIcon
    name="camera"
    color="red"
    size={48}
  />
);
```

## 无障碍访问

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以使用 aria-label 添加无障碍属性。

```jsx
import { Check } from 'lucide-react';

const App = () => {
  return <Check aria-label="Task completed" />;
};
```

有关无障碍访问的最佳实践，请参阅我们的[无障碍访问指南](../advanced/accessibility.md)。
