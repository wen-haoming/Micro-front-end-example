import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require('webpack').container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  devServer: {
    headers: {
        // Enable wide open CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
},
  // mfsu:{},

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
});
