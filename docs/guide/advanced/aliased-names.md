# 别名名称

同一个图标可以有多个名称。这是因为我们会重命名一些图标以使其与图标集中的其他图标更加一致，或者原名称不够通用。例如，`edit-2` 图标被重命名为 `pen`，以使名称更加通用，因为它只是一个钢笔图标。

除了别名之外，lucide 还包含带前缀和带后缀的名称，以便在项目中使用。这是为了防止与其他库或您自己的代码发生导入名称冲突。

```tsx
// 这些都是同一个图标
import { House, HouseIcon, LucideHouse } from 'lucide-react';
```

## 选择导入名称样式

为了保持导入的一致性，或想要更改 IDE 中 Lucide 图标的自动补全，可以选择一个您想使用的导入名称样式。

您可以通过创建自定义模块声明文件来覆盖 lucide 导入，并在 IDE 中关闭自动补全来实现。

### 在 IDE 中关闭自动补全

```json [.vscode/settings.json]
{
  "typescript.preferences.autoImportFileExcludePatterns": [
    "lucide-react", // 或
    "lucide-preact", // 或
    "lucide-react-native", // 或
    "lucide-vue-next"
  ]
}
```

### 创建自定义模块声明文件

仅适用于 `lucide-react`、`lucide-preact`、`lucide-react-native`、`lucide-vue-next` 包。
这将使您能够选择想在项目中使用的导入名称样式。

::: code-group

```ts [React]
declare module 'lucide-react' {
  // 带前缀的导入名称
  export * from 'lucide-react/dist/lucide-react.prefixed';
  // 或
  // 带后缀的导入名称
  export * from 'lucide-react/dist/lucide-react.suffixed';
}
```

```ts [Vue]
declare module 'lucide-vue-next' {
  // 带前缀的导入名称
  export * from 'lucide-vue-next/dist/lucide-vue-next.prefixed';
  // 或
  // 带后缀的导入名称
  export * from 'lucide-vue-next/dist/lucide-vue-next.suffixed';
}
```

```ts [Preact]
declare module 'lucide-preact' {
  // 带前缀的导入名称
  export * from 'lucide-preact/dist/lucide-preact.prefixed';
  // 或
  // 带后缀的导入名称
  export * from 'lucide-preact/dist/lucide-preact.suffixed';
}
```

```ts [React Native]
declare module 'lucide-react-native' {
  // 带前缀的导入名称
  export * from 'lucide-react-native/dist/lucide-react-native.prefixed';
  // 或
  // 带后缀的导入名称
  export * from 'lucide-react-native/dist/lucide-react-native.suffixed';
}
```

:::

将此文件放在项目根目录或 tsconfig.json 所在的文件夹中，或将其放在您定义的类型目录中。
最简单的方法是在项目根目录中创建一个 `@types` 文件夹，并将文件命名为 `[package-name].d.ts`。

### 导入名称样式

| 导入样式 | 可用导入                   | 声明文件导入       |
| -------- | -------------------------- | ------------------ |
| 默认     | Home, HomeIcon, LucideHome |                    |
| 带前缀   | LucideHome                 | [package].prefixed |
| 带后缀   | HomeIcon                   | [package].suffixed |
