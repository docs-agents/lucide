<script setup>
import { Sandpack } from 'sandpack-vue3'
import sandpackTheme from '../../.vitepress/theme/sandpackTheme.json'
import globalIconCssExample from './examples/global-styling-css-example/files.ts'
import globalAbsoluteStrokewidthExample from './examples/global-styling-absolute-strokewidth-example/files.ts'

</script>

# 全局样式

可以通过[颜色](../basics/color.md)、[大小](../basics/sizing.md)和[描边宽度](../basics/stroke-width.md)来调整图标。

默认情况下，所有图标的颜色值为 `currentColor`，大小为 `24px`，描边宽度为 `2`。可以通过向图标组件传递 props 来单独设置图标样式。

## 使用 CSS 样式

使用 CSS 样式化图标非常简单。

每个图标都应用了名为 `lucide` 的 class 属性。可以在 CSS 文件中使用这个类名来定位应用中使用的所有图标。

- 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS 属性来更改图标的**颜色**。
- 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) CSS 属性来更改图标的**大小**。
- 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) CSS 属性来更改图标的**描边宽度**。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="globalIconCssExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 300,
  }"
/>

### 绝对描边宽度

对于全局绝对描边宽度样式，可以对子元素应用 `vector-effect: non-scaling-stroke` CSS 属性。这样无论图标大小如何变化，描边宽度都会保持不变。详见[绝对描边宽度](../basics/stroke-width.md#absolute-stroke-width)。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="globalAbsoluteStrokewidthExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 300,
  }"
/>
