<script setup>
import { Sandpack } from 'sandpack-vue3'
import sandpackTheme from '../../.vitepress/theme/sandpackTheme.json'
import strokeWidth from './examples/stroke-width-icon/files.ts'
import absoluteStrokeWidth from './examples/absolute-stroke-width-icon/files.ts'
</script>

# 描边宽度

所有图标都使用描边（stroke）来设计 SVG 元素。默认描边宽度为 `2px`。

可以调整 `strokeWidth` 来创建不同的图标外观。

## 使用 `strokeWidth` 属性调整描边宽度

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="strokeWidth"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 300,
    editorWidthPercentage: 60,
  }"
/>

## 绝对描边宽度

当调整 `size` 属性时，描边宽度会相对于图标大小变化，这是默认的 SVG 行为。引入 `absoluteStrokeWidth` 属性可以调整这一行为，使描边宽度无论图标大小如何都保持不变。

这意味着当启用 `absoluteStrokeWidth` 且图标 `size` 设置为 `48px` 时，`strokeWidth` 在屏幕上仍然是 `2px`。

注意，`2px` 是 Lucide 图标的默认描边宽度，可以调整为任何值。

![绝对描边宽度对比](../../images/absolute-stroke-width-compare.png?raw=true 'Absolute stroke width comparison')

### 使用 `absoluteStrokeWidth` 属性调整描边宽度

将 `absoluteStrokeWidth` 设置为 `true` 将使描边宽度变为绝对值。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="absoluteStrokeWidth"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 320,
    editorWidthPercentage: 60,
  }"
/>
