// // 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
// export const qiankun = fetch('/config').then(({ apps }) => {
//   console.log(apps)

//   return {
//     // 注册子应用信息
//     apps,
//     // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
//     lifeCycles: {
//       afterMount: (props) => {
//         console.log(props,'---');
//       },
//     },
//     // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
//   }
// });
