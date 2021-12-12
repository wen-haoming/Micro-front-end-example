# qiankun

> 个人觉得 qiankun 更适合的应用场景在于中台页面。
## demo 启动

```bash
pnpm install # 下载依赖

pnpm start # 启动
```

## 快速上手

### 主应用

[官网配置](https://qiankun.umijs.org/zh/api#%E5%9F%BA%E4%BA%8E%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)

> `主应用`用来注册子应用，主应用相当于一个容器，装载子应用的页面。

- Step1 安装 qiankun 依赖
- Step2 注册子应用

```js
import { registerMicroApps } from 'qiankun'

registerMicroApps(
  // 注册路由
  [
    {
      name: "vue-sub-app", // 必填，微应用的名称，微应用之间必须确保唯一。
      entry: "/micro-vue", // 必填，一个路径，或者 url，那么会涉及跨域获取别的域下的资源，如果entry 是路径，那么子应用需要设置 publicPath
      container: "#subapp-container", // 子应用挂载在主应用的地方，要注意的是渲染顺序，不要让子应用路由点击了，然而 `container节点` 还没渲染出来。
      activeRule: "/micro-vue", // /micro-vue 或 /micro-vue/** 都会激活并且启动这个子应用，然后匹配子应用里对应的路径
    },
  ],
  //  声明周期   
  {
    beforeLoad: [() => {}], // 只会执行一次
    beforeMount: [() => {}], // 每次子应用挂载都会执行一次
    afterUnmount: [() => {}],
  }
);
```

- Step3 启动




```js
import { start } from 'qiankun'

start(); // 启动 qiankun，只要路由匹配就会渲染子应用
```

- Step4 主应用预留子应用路由的坑位

比如 vue-router 或 react-router 渲染主应用以外的路由可能会触发兜底的错误路由，避免这种情况，应该在主应用的路由中也注册上，子应用会出现的路由。

### 子应用

> `子应用`在主应用中注册后，只要主应用的路由匹配到子应用相同的路由，就能够渲染出来。

- Step1 需要设置 `publicPath`，这个很关键，因为需要当`主应用`加载`子应用`的时候，需要一个前缀去区分，不然就会匹配主应用的路由

因为

- Step2 

## Q&A

### 跨域

### 样式隔离

### 父子路由匹配

### 独立渲染区域

### http 请求，props 传递


# 使用感受

1. 如果一个页面需要同时加载多个子应用(并且子应用的)会出现性能问题，qiankun 这边更多使用基于路由配置也就是 `registerMicroApps` 这个形式注册。
2. 
