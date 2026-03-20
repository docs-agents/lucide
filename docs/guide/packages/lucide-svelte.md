# Lucide Svelte

适用于 Lucide 图标的 Svelte 组件，可与 Svelte 4 和 Svelte 5 无缝协作。每个图标都是一个响应式 Svelte 组件，渲染为内联 SVG，提供卓越的性能以及与 Svelte 响应式系统和现代功能的集成。

**功能概述：**

- 将图标作为 Svelte 组件使用，支持完整的响应式特性和 TypeScript 支持
- 将图标属性绑定到响应式变量和 store
- 创建响应应用程序状态的动态图标系统
- 使用全面的 TypeScript 定义构建类型安全的接口
- 通过直接导入图标和 tree-shaking 优化打包体积

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/svelte
```

```sh [yarn]
yarn add @lucide/svelte
```

```sh [npm]
npm install @lucide/svelte
```

```sh [bun]
bun add @lucide/svelte
```

:::

> `@lucide/svelte` 仅适用于 Svelte 5，Svelte 4 请使用 `lucide-svelte` 包。

## 如何使用

Lucide 采用 ES Modules 构建，因此完全支持 tree-shaking。

每个图标都可以作为 Svelte 组件导入，渲染为内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中，其余图标会被 tree-shaken 移除。

### 示例

基本用法：

```svelte
<script>
  import { Skull } from '@lucide/svelte';
</script>

<Skull />
```

可以传递额外的 props 来调整图标：

```svelte
<script>
  import { Camera } from '@lucide/svelte';
</script>

<Camera color="#ff3e98" />
```

为了加快构建和加载速度，你可以直接从 `@lucide/svelte/icons` 目录导入图标：

```svelte
<script>
  import CircleAlert from '@lucide/svelte/icons/circle-alert';
</script>

<CircleAlert color="#ff3e98" />
```

## Props

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `strokeWidth`         | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |

### 应用 Props

要自定义图标的外观，可以直接将自定义属性作为 props 传递给组件。该组件接受所有 SVG 属性作为 props，从而可以灵活地设置 SVG 元素的样式。详见 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 展示属性列表。

```svelte
<script>
  import { Phone } from '@lucide/svelte';
</script>

<Phone fill="#333" />
```

这会渲染出一个填充的电话图标。

## 类型

该包包含所有图标的类型定义。如果你想要动态加载图标（使用 `svelte:component` 指令），无论你使用的是 TypeScript 还是 JSDoc，这都非常有用。

### TypeScript 示例

::: code-group

```svelte [Svelte 5]
<script lang="ts">
  import { Home, Library, Cog, type Icon as IconType } from '@lucide/svelte';

  type MenuItem = {
    name: string;
    href: string;
    icon: typeof IconType;
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: Library
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: Cog
    }
  ];
</script>

{#each menuItems as item}
  {@const Icon = item.icon}
  <a href={item.href}>
    <Icon />
    <span>{item.name}</span>
  </a>
{/each}
```

```svelte [Svelte 4]
<script lang="ts">
  import { Home, Library, Cog, type Icon } from '@lucide/svelte';
  import type { ComponentType } from 'svelte';

  type MenuItem = {
    name: string;
    href: string;
    icon: ComponentType<Icon>;
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: Library
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: Cog
    }
  ];
</script>

{#each menuItems as item}
  {@const Icon = item.icon}
  <a href={item.href}>
    <Icon />
    <span>{item.name}</span>
  </a>
{/each}

```

:::

### JSDoc 示例

::: code-group

```svelte [Svelte 5]
<script>
  import { Home, Library, Cog } from '@lucide/svelte';

  /**
   * @typedef {Object} MenuItem
   * @property {string} name
   * @property {string} href
   * @property {typeof import('@lucide/svelte').Icon} icon
   */

  /** @type {MenuItem[]} */
  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: Library
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: Cog
    }
  ];
</script>

{#each menuItems as item}
  {@const Icon = item.icon}
  <a href={item.href}>
    <Icon />
    <span>{item.name}</span>
  </a>
{/each}
```

```svelte [Svelte 4]
<script>
  import { Home, Library, Cog } from '@lucide/svelte';

  /**
   * @typedef {Object} MenuItem
   * @property {string} name
   * @property {string} href
   * @property {import('svelte').ComponentType<import('@lucide/svelte').Icon>} icon
   */

  /** @type {MenuItem[]} */
  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
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
    }
  ];
</script>

{#each menuItems as item}
  {@const Icon = item.icon}
  <a href={item.href}>
    <Icon />
    <span>{item.name}</span>
  </a>
{/each}
```

:::

有关 `svelte:component` 指令类型定义的更多详情，请参阅 [Svelte 文档](https://svelte.dev/docs/typescript#types-componenttype)。

## 与 Lucide lab 或自定义图标一起使用

[Lucide lab](https://github.com/lucide-icons/lucide-lab) 是未包含在 Lucide 主库中的图标集合。

可以通过 `Icon` 组件来使用它们。
所有常规 Lucide 图标的 props 都可以传递给该组件以调整图标外观。

### 使用 `Icon` 组件

这会根据传入的 iconNode 创建一个单独的图标，并渲染为 Lucide 图标组件。

```svelte
<script>
import { Icon } from '@lucide/svelte';
import { pear, sausage } from '@lucide/lab';
</script>

<Icon iconNode={pear} />
<Icon iconNode={sausage} color="red"/>
```

## 通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例会导入所有 ES Modules，因此使用时需谨慎。导入所有图标会显著增加应用程序的打包体积，对性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时尤其需要注意。
:::

### 图标组件示例

::: code-group

```svelte [Svelte 5]
<script>
  import * as icons from '@lucide/svelte';
  let { name, ...props } = $props();

  const Icon = icons[name];
</script>

<Icon {...props} />
```

```svelte [Svelte 4]
<script>
  import * as icons from '@lucide/svelte';
  export let name;
</script>

<svelte:component this={icons[name]} {...$$props} />
```

:::

#### 使用图标组件

```svelte
<script>
  import LucideIcon from './LucideIcon';
</script>

<LucideIcon name="Menu" />
```

## 无障碍访问

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以通过 aria-labels 添加无障碍属性。

```svelte
<script>
  import { Check } from '@lucide/svelte';
</script>

<Check aria-label="Task completed" />
```

有关无障碍访问的最佳实践，请参阅我们的[无障碍访问指南](../advanced/accessibility.md)。
