---
title: 无障碍设计
---

# 无障碍设计

图标是用图像来表达含义而不需要文字的图形。它们非常有用，因为可以快速传递信息。

然而，并非每个人都能轻松理解它们。在使用图标时，考虑以下无障碍设计方面非常重要。

::: info
默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。
您可以按照以下指南自行使它们具备无障碍访问能力。
:::

## 提供可见标签

图标是改善感知的有效工具，但它们不能替代文字。

在大多数情况下，为图标功能提供文字表示是个好主意。

![简而言之：不要仅依靠图标来传达元素功能。请同时提供交互元素的文字描述。例如：在页面导航元素上写出"On this page"。](../../images/a11y/visible-labels.svg?raw=true)

## 对比度

确保图标与其背景之间有足够的对比度，以便低视力或色觉缺陷的用户能够看清。

我们建议遵循 [WCAG 2.1 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)。

![简而言之：使用至少 4.5:1 的对比度。](../../images/a11y/contrast.svg?raw=true)

## 颜色的使用

避免仅依靠颜色来传达图标的含义，因为有些用户可能患有色盲。请改用形状、阴影或文字等其他视觉提示。

![例如：不要用颜色标记状态，用独特的视觉元素来标记。](../../images/a11y/use-of-color.svg?raw=true)

## 交互性

确保交互式图标可以通过键盘导航访问，并在激活时提供清晰的反馈。

![](../../images/a11y/interactivity.svg?raw=true)

在大多数情况下，只需将图标包裹在图标按钮中即可轻松实现。

## 最小点击区域

小目标可能难以点击或触摸，如果您的图标是可交互的，我们建议其最小点击区域为 44×44 像素。

![](../../images/a11y/target-size.svg?raw=true)

实际上，这并不一定意味着图标本身需要这么大，只需其交互式容器元素达到此尺寸即可。

## 意义明确

图标应该以普遍可理解的方式表示概念或操作。避免使用可能让某些用户困惑的抽象、模糊或特定文化的符号。

![例如：使用普遍可理解的符号，不要基于双关语来选择图标。](../../images/a11y/meaningfulness.svg?raw=true)

## 一致性

在界面中保持图标设计和使用的一致性，以帮助用户更轻松地学习和理解其含义。

![例如：不要将同一图标用于多个不同的目的或含义。不要为同一目的或功能使用不同的图标。](../../images/a11y/consistency.svg?raw=true)

## 文字替代方案

您可能需要为图标提供文字标签或替代文本描述，特别是对于视障用户使用的屏幕阅读器。

但是：描述只应提供给非纯装饰性的独立图标，因为向非功能性元素提供可访问名称只会增加屏幕阅读器的冗余信息。

### 关于独立图标

图标通常不太可能独立存在而没有语义上有意义的容器元素。在大多数情况下，它们会成为徽章、按钮（包括图标按钮）、导航项或其他交互式 UI 元素的一部分。

::: warning
如果您的某些图标是独立的，并且具有非装饰性功能，请确保为它们提供适当的无障碍标签。
:::

![简而言之：为语义图标提供无障碍标签，但不要为装饰性图标提供。](../../images/a11y/alttext-standalone.svg?raw=true)

一般来说，尽量避免使用没有交互功能的功能性图标，我们建议：

1. 在它们旁边添加可见描述，或
2. 将它们放在徽章、标签或按钮上，并至少添加一个工具提示。

在任何此类情况下，优选只为这些交互元素（徽章、按钮、导航项等）提供可访问名称，*而不是*图标本身。

### 关于按钮

当图标用于按钮上时，不要为图标提供无障碍标签，因为该标签会被屏幕阅读器朗读，导致无意义的文本。

![](../../images/a11y/alttext-buttons.svg?raw=true)

::: details 代码示例

```tsx
// 不要这样做
<button>
  <Plus aria-label="Plus icon"/>
  Add document
</button>

// 这样做，只需留空
<button>
  <Plus/>
  Add document
</button>
```

:::

### 关于图标按钮

图标按钮是不包含除图标本身以外的任何可见文本的按钮（例如对话框的关闭按钮）。

如前所述，您应该在图标按钮本身上提供无障碍标签，而不是在包含的图标上。

![](../../images/a11y/alttext-iconbuttons.svg?raw=true)

::: details 代码示例

```tsx
// 不要这样做
<button class="btn-icon">
  <House/>
</button>

// 也不要这样做
<button class="btn-icon">
  <House aria-label="Home icon"/>
</button>

// 这样可以工作，但可能不是最佳解决方案，请参见下文
<button aria-label="Go to home" class="btn-icon">
  <House/>
</button>

// 改为这样做
<button class="btn-icon">
  <House/>
  <span class="visually-hidden">Go to home</span>
</button>
```

:::

## 关于 `aria-label` 的说明

虽然您可以通过 `aria-label` 属性为元素提供无障碍标签，但我们通常建议避免这样做，而是尽可能使用所选 CSS 框架的"视觉隐藏"工具类。您可以[阅读更多关于为什么 `aria-label` 可能不是最佳解决方案](https://gomakethings.com/revisting-aria-label-versus-a-visually-hidden-class/)。

### 示例 - Radix UI

使用 [Radix UI 内置的可访问图标工具组件](https://www.radix-ui.com/primitives/docs/utilities/accessible-icon)。

```tsx
import { ArrowRightIcon } from 'lucide-react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

<AccessibleIcon label="Next item">
  <ArrowRightIcon />
</AccessibleIcon>;
```

### 示例 - Bootstrap

```html
<div>
  <i
    data-lucide="phone"
    aria-hidden="true"
  ></i>
  <span class="visually-hidden">Phone number</span>
</div>
```

### 示例 - Tailwind CSS

```html
<div>
  <i
    data-lucide="phone"
    aria-hidden="true"
  ></i>
  <span class="sr-only">Phone number</span>
</div>
```

如果您不确定，可以考虑了解更多关于[如何隐藏内容](https://www.a11yproject.com/posts/how-to-hide-content/)的信息。

## 进一步资源

我们还建议查阅以下关于无障碍设计的资源：

- [Web 内容无障碍指南 (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [Web 无障碍倡议 (WAI)](https://www.w3.org/WAI/)
- [在 web.dev 上学习无障碍设计](https://web.dev/learn/accessibility)
- [包容性组件](https://inclusive-components.design/)
- [A11yTalks](https://www.a11ytalks.com/)
- [A11y 自动化追踪器](https://a11y-automation.dev/)
- [A11Y 项目](https://www.a11yproject.com/)
