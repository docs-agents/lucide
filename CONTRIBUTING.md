# 贡献指南

:+1::tada: 首先，感谢您抽出时间来贡献！:tada::+1:

以下是向 Lucide 项目贡献的指南。欢迎在 pull request 中对本文档提出修改建议。

## Pull Requests

欢迎提交 pull request 来为本项目做出贡献。

**第一次提交 Pull Request？** 你可以通过这个 _免费_ 系列教程学习如何操作：
[如何为 GitHub 上的开源项目贡献](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

Pull request 指南：

- **让你的提交信息尽可能详细。** 包含尽可能多的信息。解释文件 diff 本身无法说明的内容。
- **为你的 pull request 添加文档。** 解释你的修复方案，链接到相关 issue，在添加新图标时附上截图。
- **确保你的 pull request 目标分支正确。** 大多数 bug 修复或新功能应该提交到 `main` 分支。
- **只包含相关的工作。** 如果你的 pull request 包含不相关的提交，将不会被接受。

### 图标 Pull Requests

#### 指南

请确保遵循图标指南，这些指南是为了在为 Lucide 制作图标时保持质量和一致性。

请在此阅读：[图标设计指南](https://lucide.dev/docs/icon-design-guide)。

#### Lucide Studio

为了格式化和完善 SVG 图标，[@jguddas](https://github.com/jguddas) 创建了一个很棒的工具叫做 [Lucide Studio](https://studio.lucide.dev/)。这是一个基于 Web 的 SVG 编辑器，允许你以 Lucide 风格编辑和调整图标。你可以用它来创建新图标或修改现有图标。

#### 编辑器指南

以下是使用不同矢量图形编辑器实现这些指南的说明：

##### [Adobe Illustrator 指南](https://lucide.dev/docs/illustrator-guide)

你也可以[下载 Adobe Illustrator 模板](https://github.com/lucide-icons/lucide/blob/main/docs/public/templates/illustrator_template.ai)。

##### [Inkscape 指南](https://lucide.dev/docs/inkscape-guide)

##### [Figma 指南](https://lucide.dev/docs/figma-guide)

##### [Affinity Designer 指南](https://lucide.dev/guide/design/affinity-designer-guide)

#### 提交多个图标

如果你想提交多个图标，请将图标分开并分组。这样可以更轻松地审查图标，并保持讨论线程简洁且有针对性。
因此，不要在单个 PR 中提交彼此无关的多个图标。
例如，不要创建一个包含 `arrow-up`、`bicycle`、`arrow-down` 的 PR。
将它们分成两个 PR：'pr-01' `arrow`、`arrow-down` 和 'pr-02' `bicycle`。

## 图标请求

在创建图标请求之前，请先搜索看看是否已经有人请求过这个图标。如果有开放中的请求，请添加 :+1:。

如果该图标尚未被请求，请[创建一个图标请求 issue](https://github.com/lucide-icons/lucide/issues/new?assignees=&labels=%F0%9F%99%8C+icon+request&projects=&template=01_icon_request.yml)，并尽可能提供更多信息。

### 来自 Feather 的图标请求

如果你是一位想要为 Lucide 做贡献的设计师，但不知道要制作哪些图标，可以查看 Feather 的请求。所有开放、未完成且有效的请求都可以在 [Feather 图标请求](https://github.com/lucide-icons/lucide/issues/119) 中找到。

## 开发

你至少需要 [Node.js 16.4+](https://nodejs.org) 版本。
包管理需要使用 [PNPM](https://pnpm.io/installation)。
Flutter 包开发需要 [Flutter 1.17+](https://docs.flutter.dev/get-started/install)。

克隆项目后，你需要运行：

```sh
pnpm install # 安装依赖，包括工作区包
```

### 包 -> PNPM 工作区

为了分发不同的包，我们使用 [PNPM 工作区](https://pnpm.io/workspaces)。在开始之前，请确保你熟悉这个概念。工作区概念由 Yarn 创建，他们有很好的介绍：[yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces)。

工作区配置的目录是位于根目录下的 [packages](https://github.com/lucide-icons/lucide/tree/main/packages) 目录。在那里你可以找到 lucide 的所有当前包。
还有更多工作区已定义，参见 [`pnpm-workspace.yaml`](https://github.com/lucide-icons/lucide/blob/main/pnpm-workspace.yaml)。

> 注意：有一个包不是由 pnpm 管理的：**lucide-flutter**，这个包使用 Dart 编写，使用 pub 进行发布。

### 生成代码

对于图标，我们使用单一真实来源，即位于 icons 目录中的 SVG 图标。为了将图标分发到各个包，我们生成包括以下内容的代码：包含 SVG 路径的图标文件、包含导入的索引文件以及类型文件。根据用例需要，还会生成其他必要的代码。

生成这些代码的命令将在下一章中介绍。

### 常用脚本

#### 构建

构建脚本包含多个子命令：清理 dist 目录、生成图标文件、生成类型文件，以及为每种构建格式构建/转译代码。

```sh
pnpm [package-name] build

#示例：

pnpm lucide-react build
```

#### 测试

使用 jest 为每个包运行单元测试，以确保所有包的 API 仍然按预期工作。

```sh
pnpm [package-name] test

#示例：

pnpm lucide-vue test
```

建议在修改时运行测试监视器。

```sh
pnpm [package-name] test:watch

#示例：

pnpm lucide-preact test:watch
```

### 单元测试

在为某个框架的图标组件添加新功能时，需要用一些单元测试来覆盖它。

### 本地测试

要在本地项目中测试更改，可以使用 `yarn link`、`npm link`、`bun link` 或 `pnpm link` 来链接包。在此之前，请确保已先构建该包。

```sh
# 在 packages/lucide-react 中

npm run build &&
npm link

# 在你的本地项目中

npm link lucide-react
```

## 项目结构

根目录

```sh
lucide
├── docs
│   ├── guide
├── icons
├── packages
└── scripts
```

### 文档

lucide.dev 网站使用 [vitepress](https://vitepress.dev/) 来生成静态网站。Markdown 文件位于 docs 目录中。

#### 在本地运行文档网站

要在本地测试文档网站，请按照以下步骤操作：

1. **导航到 docs 目录**

```sh
cd docs
```

2. **启动本地开发服务器**

```sh
  pnpm run docs:dev
```

3. **在本地打开网站**

Vitepress 应该以下列格式打开：

VitePress 开发服务器运行在：

- **本地**: `http://localhost:3000/`
- **网络**: `http://192.168.x.x:3000/`

### 指南

关于：安装、指南、包、设计指南等的详细文档。

### 图标

Lucide 的所有 SVG 格式图标。这些将作为所有包和其他 lucide 图标分发的来源。

### 包

包含 lucide 的所有（npm）包。

### 脚本

包含用于自动化某些工作的有用脚本。脚本的大部分工作是模板生成，例如为所有包生成图标组件。这些脚本通常从 package.json 的 "scripts" 部分执行。

## 文档

文档文件位于 [docs](https://github.com/lucide-icons/lucide/tree/main/docs) 目录中。所有这些 Markdown 文件将在 lucide.dev 网站构建时被加载。

欢迎编写、调整或添加新的 Markdown 文件来改进我们的文档。

## 支持

如果你需要帮助或在贡献中遇到问题，请随时联系 Lucide 社区，你可以在 [Github](https://github.com/lucide-icons/lucide) 和 [Discord](https://discord.gg/EH6nSts) 找到我们。

## 致谢

感谢所有为 Lucide 做出贡献的人！

<a href="https://github.com/lucide-icons/lucide/graphs/contributors">
<img src="https://opencollective.com/lucide-icons/contributors.svg?width=800" /></a>
