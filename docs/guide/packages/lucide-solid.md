# Lucide Solid

用于 Lucide 图标的 SolidJS 组件，利用 Solid 的细粒度响应式系统。每个图标都是一个响应式的 Solid 组件，渲染为内联 SVG，通过 Solid 的编译时优化和响应式原语提供卓越的性能。

**功能特性：**

- 将图标作为 SolidJS 组件使用，具有细粒度响应式
- 利用 Solid 的响应式系统构建高性能界面
- 构建响应信号和存储的动态图标组件
- 与 Solid 的 JSX 和组件模式无缝集成
- 通过直接导入图标和最小化运行时开销来优化性能

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-solid
```

```sh [yarn]
yarn add lucide-solid
```

```sh [npm]
npm install lucide-solid
```

```sh [bun]
bun add lucide-solid
```

:::

## 使用方法

Lucide 基于 ES Modules 构建，因此完全支持 tree-shaking。

每个图标都可以作为 Solid 组件导入，渲染为内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终的打包文件中，其他图标会被 tree-shaking 移除。

### 示例

可以传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-solid';

// 使用
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

如果在使用 Vite 开发服务器时遇到加载/执行问题，可以直接从 `lucide-solid/icons` 目录直接导入图标：

```jsx
import Camera from 'lucide-solid/icons/camera';

// 使用
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

### 应用 props

要自定义图标的外观，可以直接将自定义属性作为 props 传递给组件。该组件接受所有 SVG 属性作为 props，从而可以灵活地设置 SVG 元素的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/Presentation) 上的 SVG 呈现属性列表。

```jsx
// 使用
const App = () => {
  return (
    <Camera
      fill="red"
      stroke-linejoin="bevel"
    />
  );
};
```

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有常规 Lucide 图标的 props 都可以传递，用于调整图标外观。

### 使用 `Icon` 组件

这将基于传入的 iconNode 创建一个单一图标，并渲染为 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-solid';
import { sausage } from '@lucide/lab';

const App = () => (
  <Icon
    iconNode={sausage}
    color="red"
  />
);
```

## 一个通用的图标组件

可以创建一个通用的图标组件来加载图标。不推荐这样做。

::: danger
下面的示例导入了所有 ES Modules，因此使用时需谨慎。导入所有图标会显著增加应用程序的打包大小，对其性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时，这一点尤为重要。
:::

### Icon 组件示例

```tsx
import { icons, type LucideProps } from 'lucide-solid';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = (props: IconProps) => {
  const [local, others] = splitProps(props, ['name']);

  return (
    <Dynamic
      component={icons[local.name]}
      {...others}
    />
  );
};

export default Icon;
```

#### 使用 Icon 组件

```tsx
import Icon from './Icon';

const App = () => {
  return <Icon name="home" />;
};

export default App;
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以使用 aria-labels 添加无障碍属性。

```jsx
import { Check } from 'lucide-solid';

const App = () => {
  return <Check aria-label="Task completed" />;
};
```

有关无障碍性的最佳实践，请参阅我们的[无障碍性指南](../advanced/accessibility.md)。
