---
title: Affinity Designer 模板指南
---

# Affinity Designer 模板指南

本指南介绍如何使用 Affinity Designer 模板来制作 Lucide 图标。

## 基本工作流程

> 注意：默认情况下，Affinity Designer 将描边单位设置为点（points）。请确保将其设置为像素（pixel）。操作方法：打开 `Preferences > User Interface`。在 `Decimal Places for Unit Types` 下，取消勾选 `Show Lines in points`。

1. 下载并打开 [Affinity Designer 模板](https://github.com/lucide-icons/lucide/blob/main/docs/public/templates/affinity_designer.aftemplate)。
2. 使用模板时，请遵循 [图标设计原则](icon-design-guide.md)（以确保与 Lucide 图标包的一致性）。
3. 导出为 SVG 文件（`File > Export`）。请确保：_Rastering_ 设置为 _Nothing_，勾选 _Export text as curves_（希望用不到此选项），勾选 _Use hex colors_，以及勾选 _Flatten transforms_。

   ![Affinity Designer 中的 SVG 导出选项](../../images/affinity-designer-export-options.png?raw=true)

4. 使用 [SVGOMG](https://jakearchibald.github.io/svgomg/) 或 [`svgo`](https://github.com/svg/svgo) 进一步优化导出的 SVG 文件（使用命令 `svgo --multipass exported_icon.svg`）。
