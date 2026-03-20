---
title: 图标设计指南
---

# Inkscape 设置指南

本指南介绍如何设置 Inkscape，以创建符合 Featherity 设计规范的图标。

## 设置画布

打开新文档时，Inkscape 会创建一个默认大小的画布。要将尺寸更改为 24x24：

1. 打开文档属性对话框（File -> Document Properties）。
2. 在"Page Size"选项卡中，找到"Custom Size"，将 Units 设置为 `px`，并将 Height 和 Width 都设置为 24。
   ![设置页面尺寸](../../images/page-size.png?raw=true '设置页面尺寸')
3. 在"Grid"选项卡中，选择 `Rectangular Grid` 并点击"New Grid"。
   ![设置网格属性](../../images/grid-1.png?raw=true '设置网格属性')
4. 将 Grid Units 设置为 `px`，并将 Spacing X 和 Spacing Y 都设置为 1。
   ![设置网格属性](../../images/grid-2.png?raw=true '设置网格属性')
5. 关闭文档属性对话框。
6. 要将画布居中显示在视口中，选择 View -> Zoom -> Drawing。

## 设置路径

1. 创建路径或形状。
2. 选中路径后，按键盘上的 `Ctrl+Shift+F` 打开 Stroke and Fill 面板。
   ![描边样式属性](../../images/strokes.png?raw=true '设置网格属性')
3. 在"Stroke Style"选项卡中：
   - 将 Stroke Width 设置为 `2px`。
   - 选择圆角连接类型（rounded join）。
   - 选择圆角端点类型（rounded cap）。
4. 如果形状是矩形，选中该矩形，在屏幕顶部菜单栏下方，将 `Rx` 和 `Ry` 设置为 `2px`。
   ![矩形圆角属性](../../images/corner-radius.png?raw=true '矩形圆角属性')

## 保存文件

1. 准备保存文件时，点击 Save As 并选择"Optimized SVG"作为文件类型。
   ![另存为](../../images/save-as.png?raw=true '另存为')
2. 点击 Save 后，为了与包中的其他图标保持一致，将 Pretty Printing 设置为使用空格，并将缩进深度设置为 2。
   ![优化设置](../../images/optimize-settings.png?raw=true '优化设置')
