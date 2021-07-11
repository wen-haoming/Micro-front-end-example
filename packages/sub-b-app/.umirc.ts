import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  webpack5:{

  },
  dynamicImport:{},
  publicPath:'/',
  qiankun:{
    slave:{}
  },
  chainWebpack(config){
    // config.plugin()
    config.plugin('ModuleFederationPlugin')
    .use(ModuleFederationPlugin,[
      {
        name: "sub-b-app",
        remotes: {
          "lib-app": "lib_app@http://localhost:3000/remoteEntry.js",
        },
      }
    ])
  }
});
