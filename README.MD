# umi 中使用 webpack5 的模块联邦

> 模块联邦最大的好处就是，运行时地加载模块，能够最大限度复用已有功能，避免 npm 发包全村都需要构建重新更新的尴尬，并且 webpack5 已经发布很久，多个大厂都有项目落地，是个非常 nice 的功能。

```bash
pnpm i && pnpm dev
```

## 1. sub-a-app (mf1)

```ts
// .umirc.ts
 webpack5:{},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo.plugin('mf1').use(require('webpack').container.ModuleFederationPlugin, [
      {
        name: 'mf1',
        filename: "remoteEntry.js",
        exposes:{
          './Button':'./src/components/Button.tsx'
        },
        shared: {
          react: {
            singleton: true, // only a single version of the shared module is allowed
          },
          "react-dom": {
            singleton: true, // only a single version of the shared module is allowed
          },
          "antd":{
            singleton: true, // only a single version of the shared module is allowed
          }
        },
      },
    ]);
  },
```

```tsx
// ./src/components/Button.tsx
import { Button } from 'antd'
import React from 'react'

const ButtonCom = ()=>{
  return <Button>ButtonC123123om</Button>
}

export default React.memo(ButtonCom)
```

## 2. sub-b-app (mf2)

```ts
// .umirc.ts
  dynamicImport: {}, // 必须 需要代码分隔
  webpack5: {},
  chainWebpack(memo) {
    // 容器
    memo.output.publicPath('auto');
    memo.plugin('mf2').use(ModuleFederationPlugin, [
      {
        name: 'mf2',
        remotes: {
          mf1:'mf1@//localhost:8002/remoteEntry.js',
        },
        shared: {
          react: {
            singleton: true, // only a single version of the shared module is allowed
          },
          "react-dom": {
            singleton: true, // only a single version of the shared module is allowed
          },
          "antd":{
            singleton: true, // only a single version of the shared module is allowed
          }
        },
      },
    ]);
  },
  plugins:['./umi-plugin-mf-bootstrap.ts']
```

```ts
// umi-plugin-mf-bootstrap.ts
import { IApi } from 'umi';
import { resolve } from 'path';
import { readFileSync } from 'fs';

export default (api: IApi) => {
  api.onGenerateFiles(() => {
    const content= readFileSync(resolve('./src/.umi/umi.ts'),'utf-8')
    // console.log()
    api.writeTmpFile({
      path: 'index.ts',
      content,
    });
    api.writeTmpFile({
      path: 'umi.ts',
      content: 'import("./index")',
    });
  });
};

```