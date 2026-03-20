<script setup>
import { Sandpack } from 'sandpack-vue3'
import sandpackTheme from '../../.vitepress/theme/sandpackTheme.json'
import sizeIconExample from './examples/size-icon-example/files.ts'
import sizeIconCssExample from './examples/size-icon-css-example/files.ts'
import sizeIconFontExample from './examples/size-icon-font-example/files.ts'
import sizeIconTailwind from './examples/size-icon-tailwind-example/files.ts'
</script>

# 尺寸

默认情况下，所有图标的大小为 `24px` × `24px`。可以使用 `size` 属性和 CSS 来调整尺寸。

## 使用 `size` 属性调整图标尺寸

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="sizeIconExample"
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

## 通过 CSS 调整图标尺寸

可以使用 CSS 属性 `width` 和 `height` 来调整图标尺寸。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="sizeIconCssExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 300,
  }"
/>

### 根据字体大小动态更改图标尺寸

可以根据字体大小来调整图标尺寸。这可以通过使用 `em` 单位来实现。有关 `em` 单位的更多信息，请参阅此 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems)。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="sizeIconFontExample"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 300,
  }"
/>

### 使用 Tailwind 调整尺寸

可以使用 `h-*` 和 `w-*` 工具类来调整图标尺寸。

<Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="sizeIconTailwind"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest",
    }
  }'
  :options="{
    externalResources: ['https://cdn.tailwindcss.com'],
    editorHeight: 300,
    editorWidthPercentage: 60,
  }"
/>

<!-- Code Example -->
