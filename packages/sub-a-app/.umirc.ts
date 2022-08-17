import { defineConfig } from 'umi';
const deps = require("./package.json").dependencies;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  devServer: {
    headers: {
        // Enable wide open CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
},
  fastRefresh: {},
  webpack5:{},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo.plugin('mf1').use(require('webpack').container.ModuleFederationPlugin, [
      {
        name: 'mf1',
        filename: "remoteEntry.js",
        exposes:{
          './Button':'./src/components/Button.tsx',
          './FormRender':'./src/components/FormRender/index.tsx',
          './DrawerFormRender':'./src/components/DrawerFormRender/index.tsx',
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
});
