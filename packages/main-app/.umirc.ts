import { defineConfig, MicroApp } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
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
  fastRefresh: {},
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
});
