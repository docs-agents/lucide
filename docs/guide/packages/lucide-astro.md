# Lucide Astro

Astro 组件，专为 Lucide 图标设计，可与 Astro 的岛屿架构和多框架支持完美配合。每个图标都是一个 Astro 组件，渲染为内联 SVG，为静态网站和服务端渲染场景提供卓越的性能。

**功能特点：**

- 将图标作为 Astro 组件使用，零 JavaScript 运行时开销
- 使用优化后的 SVG 图标构建快速静态网站
- 与 Astro 的组件岛屿和部分水合无缝集成
- 创建跨不同 UI 库的多框架应用程序
- 通过直接导入图标和构建时渲染优化性能

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/astro
```

```sh [yarn]
yarn add @lucide/astro
```

```sh [npm]
npm install @lucide/astro
```

```sh [bun]
bun add @lucide/astro
```

:::

## 使用方法

Lucide 基于 ES Modules 构建，完全支持摇树优化（tree-shaking）。

每个图标都可以作为 Astro 组件导入，渲染为内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终的包中，其他图标会被摇树优化掉。

### 示例

默认用法：

```astro
---
import { Skull } from '@lucide/astro';
---

<Skull />
```

可以传递额外的属性来调整图标：

```astro
---
import { Camera } from '@lucide/astro';
---

<Camera color="#ff3e98" />
```

为了加快构建和加载速度，可以直接从 `@lucide/astro/icons` 目录导入图标：

```astro
---
import CircleAlert from '@lucide/astro/icons/circle-alert';
---

<CircleAlert color="#ff3e98" />
```

## 属性

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `stroke-width`        | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |

### 应用属性

要自定义图标的外观，可以将自定义属性作为 props 直接传递给组件。该组件接受所有 SVG 属性作为 props，允许灵活地设置 SVG 元素的样式。详见 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 展示属性列表。

```astro
---
import { Phone } from '@lucide/astro';
---

<Phone fill="#333" />
```

这会生成一个实心电话图标。

## 类型

该包包含所有图标的类型定义。如果需要动态渲染图标，这将非常有用。

### 示例

```astro
---
import { House, Library, Cog, type Icon as IconType } from '@lucide/astro';

type MenuItem = {
  name: string;
  href: string;
  icon: typeof IconType;
};

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: House,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: Library,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: Cog,
  },
];
---

{
  menuItems.map((item) => (
    <a href={item.href}>
      <item.icon />
      <span>{item.name}</span>
    </a>
  ))
}
```

## 结合 Lucide Lab 或自定义图标使用

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是一个不在 Lucide 主库中的图标集合。

可以通过 `Icon` 组件来使用它们。
常规 Lucide 图标的所有属性都可以传递给它来调整图标外观。

### 使用 `Icon` 组件

这会根据传入的 iconNode 创建一个单独的图标，并渲染为 Lucide 图标组件。

```astro
---
import { Icon } from '@lucide/astro';
import { burger, sausage } from '@lucide/lab';
---

<Icon iconNode={burger} />
<Icon iconNode={sausage} color="red"/>
```

## 一个通用图标组件

可以创建一个通用的图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例会导入所有 ES Modules，因此使用时请谨慎。导入所有图标会显著增加应用程序的构建大小。如果使用 SSG 和服务端环境中的 SSR，这可能是可以接受的。但是如果在无服务器环境中进行 SSR，可能会对应用程序的性能产生负面影响，因为更大的包大小会导致冷启动时间增加。
:::

### 图标组件示例

```astro
---
import { icons, type IconProps } from '@lucide/astro';

interface Props extends IconProps {
  name: keyof typeof icons;
}

const { name, ...restProps } = Astro.props;
const Icon = icons[name];
---

<Icon {...restProps} />
```

### 使用图标组件

```astro
---
import LucideIcon from './LucideIcon.astro';
---

<LucideIcon name="Menu" />
```

## 无障碍访问

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

可以使用 aria-labels 添加无障碍属性。

```jsx
---
import { Check } from '@lucide/astro';
---

<Check aria-label="Task completed" />
```

关于无障碍访问的最佳实践，请参阅我们的[无障碍访问指南](../advanced/accessibility.md)。
