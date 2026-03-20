# Lucide React Native

适用于 Lucide 图标的 React Native 组件，可在不同 iOS 和 Android 平台上无缝运行。基于 react-native-svg 构建，每个图标都渲染为原生 SVG 组件，在移动设备上提供一致的视觉效果和性能。

**功能特点：**

- 将图标作为 React Native 组件使用，跨平台渲染一致
- 使用可缩放矢量图标构建跨平台移动应用
- 创建可适应不同屏幕密度的响应式界面
- 与 React Native 样式系统和动画库集成
- 在 iOS 和 Android 平台上保持一致的图标外观

## 安装

首先，确保已安装 `react-native-svg`（版本 12 到 15 之间）。然后安装该包：

::: code-group

```sh [pnpm]
pnpm add lucide-react-native
```

```sh [yarn]
yarn add lucide-react-native
```

```sh [npm]
npm install lucide-react-native
```

```sh [bun]
bun add lucide-react-native
```

:::

## 使用方法

每个图标都可以作为 React 组件导入。

### 示例

可以传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-react-native';

// 使用示例
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

要自定义图标的外观，可以将自定义属性作为 props 直接传递给组件。该组件接受所有 SVG 属性作为 props，允许灵活设置 SVG 元素的样式。

```jsx
// 使用示例
const App = () => {
  return <Camera fill="red" />;
};
```

## 使用 Lucide lab 或自定义图标

[Lucide lab](https://github.com/lucide-icons/lucide-lab) 是一组不属于 Lucide 主库的图标。

可以通过 `Icon` 组件来使用它们。
所有常规 lucide 图标的 props 都可以传递给它来调整图标外观。

### 使用 `Icon` 组件

基于传入的 iconNode 创建一个单一图标，并渲染为 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-react-native';
import { coconut } from '@lucide/lab';

const App = () => <Icon iconNode={coconut} />;
```

## 一个通用图标组件

可以创建一个通用的图标组件来加载图标，但不推荐这样做。

::: warning
下面的示例导入了所有 ES 模块，因此使用时请谨慎。导入所有图标会显著增加应用的构建大小，对其性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时，这一点尤其重要。
:::

### Icon 组件示例

```tsx
import * as icons from 'lucide-react-native/icons';

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

const Icon = ({ name, color, size }: IconProps) => {
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

#### 使用 Icon 组件

```tsx
import Icon from './Icon';

const App = () => {
  return <Icon name="House" />;
};

export default App;
```
