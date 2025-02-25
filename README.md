# dapp-interface-demo

一个基于React和Web3技术栈的去中心化应用(DApp)前端界面演示项目。

## 技术栈

- **前端框架**: React 19
- **Web3连接**: wagmi, connectkit, @web3-react
- **状态管理**: jotai, immer
- **数据获取**: @tanstack/react-query
- **路由**: react-router-dom
- **样式**: Tailwind CSS
- **构建工具**: Webpack 5
- **测试工具**: Jest, Cypress, BackstopJS

## 安装

确保您已安装[Node.js](https://nodejs.org/)和[pnpm](https://pnpm.io/)。

```bash
# 克隆仓库
git clone [your-repository-url]
cd dapp-interface-demo

# 安装依赖
pnpm install
```

## 开发

```bash
# 启动开发服务器
pnpm run clent:server

# 构建开发版本
pnpm run clent:dev

# 构建生产版本
pnpm run clent:prod
```

## 测试

项目包含多种测试方法：

```bash
# 运行单元测试
pnpm test

# 使用UI界面运行Jest测试
pnpm run test:ui

# 运行端到端测试
pnpm run test:e2e

# 运行UI差异测试
pnpm run test:uidiff
```

## Web3功能

此演示应用程序可以连接到以太坊兼容的区块链，支持多种钱包连接方式：

- MetaMask
- 其他通过ConnectKit支持的钱包

## 项目结构

```
dapp-interface-demo/
├── docs/                # 文档和测试报告
├── src/                 # 源代码
│   ├── components/      # React组件
│   ├── hooks/           # 自定义钩子
│   ├── pages/           # 页面组件
│   ├── utils/           # 工具函数
│   ├── App.tsx          # 应用入口
│   └── index.tsx        # 主入口点
├── cypress/             # 端到端测试
├── jest/                # 单元测试配置
├── webpack/             # Webpack配置
├── package.json         # 依赖和脚本
└── README.md            # 项目说明
```

## 构建优化

项目使用了多种Webpack优化：

- CSS优化和提取
- 代码压缩
- PWA支持 (Workbox)
- 模块分割

## 依赖

项目主要依赖：

- React 19及相关库
- ethers.js和wagmi用于区块链交互
- Tailwind CSS用于样式
- Jest和Cypress用于测试

## 注意事项

- 请确保正确配置您的.env文件以包含必要的环境变量
- 要连接区块链网络，您需要安装兼容的钱包扩展或应用程序