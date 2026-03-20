---
title: 图标设计指南
---

## 图标设计原则

以下是制作 Lucide 图标时应遵循的规则，以保持质量和一致性。

### 1. 图标必须在 **24 x 24 像素**的画布上设计。

![24px-24px](../../images/24px-24px.svg?raw=true '24px-24px')

### 2. 图标在画布内必须有至少 **1 像素的内边距**。

![1px-padding](../../images/1px-padding.svg?raw=true '1px-padding')

### 3. 图标必须有 **2 像素的描边宽度**。

![2px-stroke](../../images/2px-stroke.svg?raw=true '2px-stroke')

### 4. 图标必须使用**圆角连接**。

![round-joints](../../images/round-joints.svg?raw=true 'round-joints')

### 5. 图标必须使用**圆角端点**。

![round-caps](../../images/round-caps.svg?raw=true 'round-caps')

### 6. 图标必须使用**居中描边**。

![centered-strokes](../../images/centered-strokes.svg?raw=true 'centered-strokes')

### 7. 形状（如矩形）必须有**圆角半径**，规则如下

#### A. 至少 8 像素大小 → **2 像素**

![2px-border-radius](../../images/2px-border-radius.svg?raw=true '2px-border-radius')

#### B. 小于 8 像素大小 → **1 像素**

![1px-border-radius](../../images/1px-border-radius.svg?raw=true '1px-border-radius')

### 8. 不同元素之间必须有 **2 像素的间距**

![2px-element-spacing](../../images/2px-element-spacing.svg?raw=true '2px-element-spacing')

![2px-element-spacing-connected](../../images/2px-element-spacing-connected.svg?raw=true '2px-element-spacing-connected')

![2px-element-spacing-abrupt-cut](../../images/2px-element-spacing-abrupt-cut.svg?raw=true '2px-element-spacing-abrupt-cut')

### 9. 图标应该有与 `circle` 和 `square` 相似的视觉体积。

![optical-volume-ideal](../../images/optical-volume-ideal.svg?raw=true 'optical-volume-ideal')

![optical-volume-low](../../images/optical-volume-low.svg?raw=true 'optical-volume-low')

![optical-volume-high](../../images/optical-volume-high.svg?raw=true 'optical-volume-high')

**提示：**将你的图标放在 circle 或 square 图标旁边，然后将两者都模糊化；你的图标不应该比基础形状看起来暗很多。

### 10. 图标应该按重心视觉居中。

![visually-centered](../../images/visually-centered.svg?raw=true 'visually-centered')

![visually-centered-bad](../../images/visually-centered-bad.svg?raw=true 'visually-centered-bad')

**提示：**将你的图标放在 square 或 circle 图标的上方/下方和旁边，检查是否看起来偏离中心。对称图标应始终与中心对齐。

### 11. 图标应该有相似的视觉密度和细节层次。

![density-ideal](../../images/density-ideal.svg?raw=true 'density-ideal')

![density-high](../../images/density-high.svg?raw=true 'density-high')

**提示：**尝试对密集元素进行抽象化。模糊你的图标，模糊后它不应该看起来过暗。

### 12. 连续曲线应平滑连接。

![curvature-smooth](../../images/curvature-smooth.svg?raw=true 'curvature-smooth')

![curvature-uneven](../../images/curvature-uneven.svg?raw=true 'curvature-uneven')

**提示：**确保使用圆弧或二次曲线。使用三次曲线时，控制点应该有镜像角度以获得平滑曲线。

### 13. 图标应力求像素完美，以便在低 DPI 显示器上保持清晰。

![pixel-perfection-ideal](../../images/pixel-perfection-ideal.svg?raw=true 'pixel-perfection-ideal')

![pixel-perfection-bad](../../images/pixel-perfection-bad.svg?raw=true 'pixel-perfection-bad')

**提示：**尽可能将元素和圆弧中心对齐到网格。

### 14. 图标应共享通用形状

你应该尝试创建一致的组和变体，重用并尝试创建统一性。
组和变体内部的一致性比上述规则优先级低。

**示例：**所有 `-off` 图标应该看起来相同，除非例如违反了视觉体积规则。

**提示：**尽量不移动基础形状，以便在切换上下文中更好地使用。

## 命名规范

1. 图标名称使用小写 kebab case。\
   例如：使用 `arrow-up` 而不是 `Arrow Up`。

2. 图标名称使用国际英语名称，而不是本地变体。\
   例如：使用 `color` 而不是 `colour`。

3. 图标应根据其描绘的内容命名，而不是其用例或代表的含义。\
   例如：使用 `floppy-disk` 而不是 `save`，使用 `circle-slash` 而不是 `ban`。

4. 属于某个组的图标命名为 `<group>-<variant>`。\
   例如：`badge-plus` 基于 `badge`。

5. 备用图标的名称应表示使其独特的内容，而不是编号。\
   例如：使用 `send-horizontal` 而不是 `send-2`。

6. 不允许包含数字的名称，除非数字本身在图标中表示。\
   例如：`arrow-down-0-to-1` 包含数字。

7. 描绘不同大小的多个元素（如人和圆圈）的图标必须按大小递减顺序列出这些元素。\
   例如：如果圆圈更大，应该是 `circle-person`；如果人更大，应该是 `person-circle`。

8. 描绘大小大致相等的多个元素（如 `ruler` 和 `pencil`）的图标，如果一个元素在另一个元素前面，则必须从前到后列出这些元素，否则按英语阅读顺序（从上到下，从左到右）。\
   例如：如果 `pencil` 在 `ruler` 的前面、上方或左侧，应该是 `pencil-ruler`，否则应该是 `ruler-pencil`。

9. 描绘某种元素变体的图标必须使用 `[element]-[modifier]` 命名方案，修饰符分别应用于每个元素。\
   例如：虚线圆圈必须命名为 `circle-dashed`，而不是 `dashed-circle`，并与前一条准则配合，包含破碎心脏的虚线圆圈应命名为 `circle-dashed-heart-broken`，因为心脏比圆圈小。

## 代码规范

在将图标添加到库之前，我们希望有可读且优化过的 SVG 代码。

### 全局属性

每个图标都应用以下属性，对应上述规则。

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- SVGElements -->
</svg>
```

### 压缩路径

路径代码有时会很大。为了减小文件大小，我们喜欢压缩代码。
我们建议使用 [Lucide Studio](https://studio.lucide.dev/) 将路径整理为 3 位精度。

### 允许的元素

SVG 文件只能包含简单的路径和形状元素，除了大小和间距外不能有其他属性。
实际上只允许以下元素和属性：

- `<path d>`
- `<line x1 x2>`
- `<polygon points>`
- `<polyline points>`
- `<circle cx cy r>`
- `<ellipse cx cy rx ry>`
- `<rect x y width height rx>`

这也意味着不允许使用 transforms、filters、fills 或显式描边。

不要使用 [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)。虽然这有时似乎是优化文件大小的一种好方法，但无法确保引用元素的 ID 在 SVG 嵌入 HTML 文档后保持唯一。

## JSON 元数据描述符

每个添加的图标还必须附带一个匹配的 JSON 文件，列出图标的标签和类别。
请使用以下模板：

```json
{
  "$schema": "../icon.schema.json",
  "contributors": ["github-username", "another-github-username"],
  "tags": ["foo", "bar"],
  "categories": ["devices"]
}
```
