<script setup>
import { Sandpack } from 'sandpack-vue3'
import sandpackTheme from '../../.vitepress/theme/sandpackTheme.json'
import sizeIconExample from './examples/filled-icon-example/files.ts'
</script>

# 填充图标

官方暂不支持填充功能。
但是，所有 SVG 属性在所有图标上都是可用的。
填充功能仍然可以使用，在某些图标上可以正常工作。

星星示例：
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
    editorHeight: 480,
    editorWidthPercentage: 60,
  }"
/>

## Lucide 未来会有填充功能吗？

此功能已被多次请求，相关讨论正在进行中，详见 [#458](https://github.com/lucide-icons/lucide/discussions/458)。
