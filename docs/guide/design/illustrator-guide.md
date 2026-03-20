---
title: Illustrator 模板指南
---

# Illustrator 模板指南

本指南说明如何正确使用 Lucide 的 Adobe Illustrator 模板。

> 注意：虽然模板不太可能过时或不 100% 正确。但在使用模板之前，请查阅图标设计指南，以确保与 Lucide 图标包的一致性。

## 通用工作流程

Illustrator 模板是按照[图标设计指南](icon-design-guide.md)中的规范创建的。

**工作流程：**

1. 下载并打开 [Illustrator 模板](https://github.com/lucide-icons/lucide/blob/main/docs/public/templates/illustrator_template.ai)。

2. 您现在可以删除示例图标图层（"Draw"）中的内容并开始创建。

3. 验证您是否遵循[图标设计指南](icon-design-guide.md)。

4. 在将文件导出为 SVG 之前，请确保已遵循指南并删除所有不必要的图层（尤其是 "Padding" 和 "Grid"）。

5. 使用导出菜单导出文件：`Export > Export As..`，然后将文件保存为 SVG。在 SVG 选项对话框中选择以下选项：

![Illustrator 中的 SVG 导出选项](../../images/illustrator-svg-options.png?raw=true '设置页面大小')

之后，请再次检查[代码规范和 SVG 全局属性](icon-design-guide.md#code-conventions)是否正确。

7. 使用 [SVGOMG](https://jakearchibald.github.io/svgomg/) 压缩路径。
