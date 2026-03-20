<script setup>
import { Sandpack } from 'sandpack-vue3'
import sandpackTheme from '../../.vitepress/theme/sandpackTheme.json'
import buttonExampleFiles from './examples/button-example/files.ts'
import iconColorExampleFiles from './examples/color-icon/files.ts'
</script>

# 颜色

默认情况下，所有图标的颜色值为 `currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

了解更多关于 [MDN 上的 `currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)。

## 使用 `color` 属性调整颜色

可以通过向元素传递 color 属性来调整颜色。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="iconColorExampleFiles"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 295,
    editorWidthPercentage: 60,
  }"
/>

## 使用父元素的文本颜色值

由于 lucide 图标使用 `currentColor`，因此图标的颜色取决于元素的计算 `color`，或者从其父元素继承。

例如，如果父元素的颜色值为 `#fff`，且其中一个子元素是 lucide 图标，则该图标的颜色将渲染为 `#fff`。这是浏览器的原生行为。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="buttonExampleFiles"
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
