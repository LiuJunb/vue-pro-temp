# admin-app-system

## 1.运行项目

Project setup

```
npm install
```

Compiles and hot-reloads for development

```
npm run serve
```

Compiles and minifies for production

```
npm run build
```



## 2.常用命令

vue-temp-cli addPage demo -d src/views/main/demo
vue-temp-cli addStore example -d src/store/main/example
vue-temp-cli addService example -d src/service/main/example

vue-temp-cli addPSS example -d src/views/main/example
vue-temp-cli addPSS statistical -d src/views/main/statistical
vue-temp-cli addTablePSS gridview -d src/views/main/gridview
vue-temp-cli addGridPSS gen-page -d src/views/main/gen-page
vue-temp-cli addHomePSS gen-page -d src/views/main/gen-page

vue-temp-cli addCom xxx -d src/components/xxx


## 3.打包大小

Use Ctrl+C to close it
  File                                     Size             Gzipped

  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              14.95 KiB        4.89 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  // element 500k   core-js 100k
  dist\js\vendor.c69e2f27.js               600.63 KiB       159.29 KiB
  dist\base-ui\index.js                    176.22 KiB       28.57 KiB
  dist\js\app.966a3fd4.js                  19.81 KiB        6.65 KiB
  dist\js\example.7bb7451f.js              6.44 KiB         2.45 KiB
  dist\js\login.e1dc3da4.js                2.45 KiB         1.22 KiB
  dist\js\detail.1cbee57d.js               0.59 KiB         0.38 KiB
  dist\js\demo.f6bc5c2e.js                 0.59 KiB         0.38 KiB
  dist\js\register.4f54ef88.js             0.42 KiB         0.29 KiB
  dist\js\no-find.da38b911.js              0.42 KiB         0.29 KiB
  dist\css\app.83bf32bb.css                207.67 KiB       32.72 KiB
  dist\css\vendor.655d86a9.css             129.06 KiB       20.67 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\base-ui\style.css                   1.28 KiB         0.47 KiB
  dist\css\login.787295b3.css              0.25 KiB         0.17 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\example.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\detail.0e433876.css             0.00 KiB         0.02 KiB
  dist\css\demo.0e433876.css               0.00 KiB         0.02 KiB



## 4.集成qiankun.js

1.main.js

let instance = null
const render = (props = {}) => {
  const { container } = props
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  render()
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => {
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
      },
      true
    )
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.a,
      user: {
        name: props.a
      }
    })
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped')
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('react app mount')
  console.log(props)
  // ReactDOM.render(<App />, document.getElementById('react15Root'));
  storeTest(props)
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('react app unmount')
  // ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));
  instance.$destroy()
}


2.router.js

base: window.__POWERED_BY_QIANKUN__ ? '/app1' : process.env.BASE_URL,
  

3.修改main.vue

 isShowLayout() {
      return {
        display: window.__POWERED_BY_QIANKUN__ ? 'none' : null
      }
    }

4.修改vue.config.js -> configureWebpack

    config.output.library = 'children-vue'
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = 'webpackJsonp_children-vue'

5.跨域

