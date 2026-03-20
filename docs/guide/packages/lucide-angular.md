# Lucide Angular

用于 Lucide 图标的 Angular 组件和服务，可与 Angular 的依赖注入和组件系统集成。同时提供传统的基于模块和现代的独立组件两种方式，最大化 Angular 应用程序的灵活性。

**功能概述：**

- 将图标作为 Angular 组件使用，支持完整的依赖注入
- 通过 Angular 服务和提供者全局配置图标
- 支持多种组件选择器（lucide-angular、lucide-icon、i-lucide、span-lucide）
- 与 Angular 的响应式表单和数据绑定集成
- 支持摇树优化（tree-shaking）的图标包和懒加载，构建可扩展应用

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-angular
```

```sh [yarn]
yarn add lucide-angular
```

```sh [npm]
npm install lucide-angular
```

```sh [bun]
bun add lucide-angular
```

:::

## 使用方法

### 步骤 1：导入 `LucideAngularModule`

在需要使用 Lucide 图标的 Angular 模块中，必须导入 `LucideAngularModule`，并选择要使用的图标：

```js
import { LucideAngularModule, File, House, Menu, UserCheck } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ File, House, Menu, UserCheck })],
})
export class AppModule {}
```

或使用独立组件版本：

```js
import { Component } from '@angular/core';
import { LucideAngularModule, FileIcon } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LucideAngularModule]
})
export class AppComponent {
  readonly FileIcon = FileIcon;
}
```

### 步骤 2：在模板中使用图标

现在可以在模板中使用以下任一组件标签来插入图标：

```html
<lucide-angular
  name="file"
  class="my-icon"
></lucide-angular>
<lucide-icon
  name="house"
  class="my-icon"
></lucide-icon>
<i-lucide
  name="menu"
  class="my-icon"
></i-lucide>
<span-lucide
  name="user-check"
  class="my-icon"
></span-lucide>
```

独立组件版本：

```html
<lucide-angular
  [img]="FileIcon"
  class="my-icon"
></lucide-angular>
<lucide-icon
  [img]="FileIcon"
  class="my-icon"
></lucide-icon>
<i-lucide
  [img]="FileIcon"
  class="my-icon"
></i-lucide>
<span-lucide
  [img]="FileIcon"
  class="my-icon"
></span-lucide>
```

### 属性（Props）

可以传递额外的属性来调整图标外观。

| name                  | type      | default      |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `strokeWidth`         | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |

```html
<i-lucide
  name="house"
  [size]="48"
  color="red"
  [strokeWidth]="1"
></i-lucide>
```

### 全局配置

你可以在根组件中注入 `LucideIconConfig` 服务，以全局配置上述默认属性值。

### 使用自定义 CSS 类设置样式

任何额外的 HTML 属性都会被忽略，但 `class` 属性会传递到内部的 SVG 图像元素上，可以用于设置样式：

```css
svg.my-icon {
  width: 12px;
  height: 12px;
  stroke-width: 3;
}
```

## 注入多个图标提供者

可以使用 `LUCIDE_ICONS` 注入令牌来提供额外的图标，
它接受多个 `LucideIconsProviderInterface` 接口的提供者，
并提供了 `LucideIconsProvider` 工具类以便于使用：

```js
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { MyIcon } from './icons/my-icon';

const myIcons = { MyIcon };

@NgModule({
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(myIcons) }],
})
export class AppModule {}
```

要添加自定义图标，首先需要将它们转换为 [svgson 格式](https://github.com/elrumordelaluz/svgson)。

## 加载所有图标

::: danger
如有必要，你也可以使用以下格式导入所有图标，但请注意这会显著增加应用程序的构建大小。
:::

```js
import { icons } from 'lucide-angular';

...

LucideAngularModule.pick(icons)
```

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是未包含在 Lucide 主库中的图标集合。
它们的使用方式与官方图标相同。

```js
import { LucideAngularModule } from 'lucide-angular';
import { coconut } from '@lucide/lab';

@NgModule({
  imports: [LucideAngularModule.pick({ coconut })],
})
export class AppModule {}
```

## 无障碍访问

默认情况下，我们使用 `aria-hidden="true"` 将图标从屏幕阅读器中隐藏。

你可以使用 aria-labels 添加无障碍属性。

```html
<lucide-icon
  name="check"
  aria-label="Task completed"
></lucide-icon>
```

有关无障碍访问的最佳实践，请参阅我们的[无障碍访问指南](../advanced/accessibility.md)。
