import { defineConfig, MicroApp } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  headScripts:['./remoteEntry.js'],
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path:'/sub-a-app',
      MicroApp:'sub-a-app'
    },
    {
      path:'/sub-b-app',
      MicroApp:'sub-b-app'
    },
  ],
  devServer: {
    headers: {
        // Enable wide open CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
},
  chainWebpack(memo){
    memo.output.publicPath('auto');
  },
  fastRefresh: {},
  webpack5:{},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'sub-a-app', // 唯一 id
          entry: '//localhost:8002', // html entry
        },
        {
          name: 'sub-b-app', // 唯一 id
          entry: '//localhost:8003', // html entry
        },
      ],
    },
  },
  // chainWebpack(memo) {
  //   memo
  //     .plugin('mf')
  //     .use(ModuleFederationPlugin, [{
  //       name: "mf2",
  //       remotes: {
  //         "lib": "lib@//localhost:3000/remoteEntry.js"
  //       },
  //     }])
  // },
});
