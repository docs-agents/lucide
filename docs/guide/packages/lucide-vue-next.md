# Lucide Vue Next

Vue 3 组件，用于 Lucide 图标，充分利用了 Composition API 和现代 Vue 特性。每个图标都是一个响应式 Vue 组件，渲染为内联 SVG，为 Vue 3 应用提供出色的性能和开发体验。

**功能亮点：**

- 将图标作为 Vue 3 组件使用，具备完整的响应式能力和 TypeScript 支持
- 将图标属性绑定到响应式数据和计算值
- 通过 props、插槽和 Vue 强大的模板系统自定义图标
- 与 Vue 3 的 Composition API 和 script setup 语法无缝集成
- 构建动态界面，让图标响应应用状态变化

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-vue-next
```

```sh [yarn]
yarn add lucide-vue-next
```

```sh [npm]
npm install lucide-vue-next
```

```sh [bun]
bun add lucide-vue-next
```

:::

## 如何使用

Lucide 采用 ES Modules 构建，完全支持 tree-shaking（摇树优化）。

每个图标都可以作为 Vue 组件导入，渲染为内联 SVG 元素。这样只有导入到项目中的图标才会包含在最终的包中，其余图标会被摇树优化移除。

### 示例

你可以传递额外的 props 来调整图标。

```vue
<script setup>
import { Camera } from 'lucide-vue-next';
</script>

<template>
  <Camera
    color="red"
    :size="32"
  />
</template>
```

## Props

| name                  | type      | default      |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `stroke-width`        | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |
| `default-class`       | _string_  | lucide-icon  |

### 应用 Props

要自定义图标的外观，可以将自定义属性作为 props 直接传递给组件。该组件接受所有 SVG 属性作为 props，允许灵活地设置 SVG 元素的样式。参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 展示属性列表。

```vue
<template>
  <Camera fill="red" />
</template>
```

## 与 Lucide lab 或自定义图标配合使用

[Lucide lab](https://github.com/lucide-icons/lucide-lab) 是一个不在 Lucide 主库中的图标集合。

可以通过 `Icon` 组件来使用它们。
所有常规 lucide 图标的 props 都可以传递，用于调整图标外观。

### 使用 `Icon` 组件

这会基于传入的 iconNode 创建一个图标，并渲染为 Lucide 图标组件。

```vue
<script setup>
import { Icon } from 'lucide-vue-next';
import { baseball } from '@lucide/lab';
</script>

<template>
  <Icon :iconNode="baseball" />
</template>
```

## 通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例会导入所有 ES Modules，因此使用时请谨慎。导入所有图标会显著增加应用程序的构建大小，对其性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时尤其需要注意。
:::

### Icon 组件示例

```vue
<script setup>
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String,
});

const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
```

### 使用 Icon 组件

上面列出的所有其他 props 也可以在 `Icon` 组件上使用。

```vue
<template>
  <div id="app">
    <Icon name="Airplay" />
  </div>
</template>
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以使用 aria-labels 添加无障碍属性。

```vue
<script setup>
import { Check } from 'lucide-vue-next';
</script>

<template>
  <Check
    color="red"
    :size="32"
    aria-label="Task completed"
  />
</template>
```

有关无障碍性的最佳实践，请参阅我们的[无障碍性指南](../advanced/accessibility.md)。
