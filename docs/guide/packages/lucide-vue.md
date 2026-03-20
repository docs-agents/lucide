# Lucide Vue

用于 Lucide 图标的 Vue 2 组件，可与 Vue 的 Options API 和模板系统集成。每个图标都是一个 Vue 组件，渲染为内联 SVG，为仍在使用 Vue 2 的旧应用程序提供熟悉的 Vue 开发模式。

**功能概述：**

- 将图标作为 Vue 2 组件使用，支持 Options API 集成
- 使用现代图标组件维护旧版 Vue 2 应用程序
- 与 Vue 2 的模板系统和组件生命周期集成
- 使用 Vue 2 熟悉的语法和模式构建应用程序
- 在规划迁移到 Vue 3 期间填补空白

::: danger
此包已弃用。Vue 2 已停止维护（EOF）。请参阅[公告](https://v2.vuejs.org/eol/)。请迁移到 Vue 3。
:::

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-vue
```

```sh [yarn]
yarn add lucide-vue
```

```sh [npm]
npm install lucide-vue
```

```sh [bun]
bun add lucide-vue
```

:::

## 使用方法

Lucide 基于 ES Modules 构建，因此完全支持 tree-shaking。

每个图标都可以作为 Vue 组件导入，渲染为内联 SVG 元素。这样只有导入到项目中的图标才会包含在最终包中，其余图标会被 tree-shaking 移除。

### 示例

可以传递额外的 props 来调整图标：

```vue
<template>
  <Camera
    color="red"
    :size="32"
  />
</template>

<script>
import { Camera } from 'lucide-vue';

export default {
  name: 'My Component',
  components: { Camera },
};
</script>
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

要自定义图标的外观，可以将自定义属性作为 props 直接传递给组件。该组件接受所有 SVG 属性作为 props，从而可以灵活地为 SVG 元素设置样式。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 呈现属性列表。

```vue
<template>
  <Camera fill="red" />
</template>
```

## 通用的单一图标组件

可以创建一个通用的图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例导入了所有 ES Modules，因此使用时请谨慎。导入所有图标会显著增加应用程序的构建大小，对其性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时这一点尤为重要。
:::

### 图标组件示例

```vue
<template>
  <component :is="icon" />
</template>

<script>
import * as icons from 'lucide-vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return icons[this.name];
    },
  },
};
</script>
```

#### 使用图标组件

```vue
<template>
  <div id="app">
    <Icon name="Airplay" />
  </div>
</template>
```
