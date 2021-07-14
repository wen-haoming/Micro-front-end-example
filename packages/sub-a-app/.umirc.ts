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
  qiankun:{
    slave:{}
  },
  webpack5:{},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo.plugin('mf').use(require('webpack').container.ModuleFederationPlugin, [
      {
        name: 'SubApp',
        filename: "remoteEntry.js",
        exposes:{
          './Button':'./src/components/Button.tsx'
        },
        shared: {
          react: {
            requiredVersion: deps.react,
            import: "react", // the "react" package will be used a provided and fallback module
            shareKey: "react", // under this name the shared module will be placed in the share scope
            shareScope: "default", // share scope with this name will be used
            singleton: true, // only a single version of the shared module is allowed
          },
          "react-dom": {
            requiredVersion: deps["react-dom"],
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
