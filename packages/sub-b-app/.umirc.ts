import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require('webpack').container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  qiankun: { slave: {} },
  fastRefresh: {},
  webpack5: {},
  dynamicImport: {},
  devServer: {
    headers: {
        // Enable wide open CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
},
  // mfsu:{},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo.plugin('mf').use(ModuleFederationPlugin, [
      {
        name: 'mf2',
        remotes: {
          // mf1: 'mf1@//localhost:3000/remoteEntry.js',
          SubApp:'SubApp@//localhost:8002/remoteEntry.js',
        },
        shared: { react: { eager: true }, "react-dom": { eager: true },"antd":{eager:true} },
      },
    ]);
  },
  plugins:['./umi-plugin-mf-bootstrap.ts']
});
