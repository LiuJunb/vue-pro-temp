
# 3.集成移动端的UI框架 vant

1.安装依赖

npm i vant@2.8.1 -S


2. 按需加载插件

npm i babel-plugin-import@1.13.0 -D

```
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};

```

3.按需引入

// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'vant';

```
// vant.js
import Vue from 'vue'
import { Button } from 'vant'
// 全局安装组件
Vue.use(Button)

// main.vue
<!-- 使用了vant组件库 -->
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

```

附加，项目此时打包大小：
```
  File                                     Size             Gzipped  

  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              14.95 KiB        4.89 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 
  
  // 57 KiB 
  dist\js\vendor.7c5b2a94.js               65.58 KiB        23.97 KiB
  dist\js\app.33228b13.js                  14.38 KiB        4.53 KiB 
  dist\js\chunk-182a5f71.b57e069b.js       0.55 KiB         0.38 KiB
  dist\js\chunk-6c17baac.ff9df7bd.js       0.53 KiB         0.38 KiB
  dist\js\chunk-c98d0ff0.60101734.js       0.44 KiB         0.33 KiB
  dist\js\chunk-56638406.d84bdd48.js       0.43 KiB         0.32 KiB
  dist\js\register.a57e442c.js             0.42 KiB         0.29 KiB
  dist\js\no-find.c5f647c9.js              0.42 KiB         0.29 KiB
  dist\js\login.9db4da81.js                0.41 KiB         0.29 KiB
  dist\css\vendor.f5b785a8.css             20.79 KiB        3.95 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.6412a1be.css                0.88 KiB         0.44 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB

```


# 2.移动端的适配方案（vw + rem + flex + 百分比布局）

1.定义html根标签的字体大小（大小是根据屏幕可变的）
  1）要保证不同尺寸屏幕，根字体的大小应该不一样
  2)根标签的字体该定义多大呢？这个看你自己

在global.scss中定义html的字体大小

```

//  540px > deviceWidth >= 0px 手机
html {
  font-size: 20px;
  font-size: 5.33333vw;
}

// 这个媒体查询的顺序不能乱
//  1080px > deviceWidth >= 540px ipad
@media screen and (min-width: 540px){
  html {
    font-size: 28.8px;
  }
}

// deviceWidth >= 1080px pc
@media screen and (min-width: 1080px){
  html{
    font-size: 57.6px;
  }
}


```

2.在base.scss中确定目标设计稿的：尺寸和算出该尺寸html根字体的大小（这值是固定的）
  1）定义目标的尺寸和根字体的大小(值是固定的)目的是为了计算出该尺寸下对应的rem值

在base.scss文件中编写
```

// 例如目标设计稿的尺寸：iphone6,7,8 -> 375px
$targetDeviceWidth:3.75;
// 在设计稿为375屏幕上，根标签html字体的大小 20px
$htmlFintSize:$targetDeviceWidth * 5.3333

```

3.在vue.config.js自动注入base.scss文件和pxToRem的函数（函数是固定的）

```
module.exports = {
  productionSourceMap: false, // 仅仅在dev环境使用SourceMap
  css: {
    loaderOptions: {
      less: {

      },
      // 配置每个vue组件自动导入base.scss文件
      sass: {
        // 引入全局变量样式,@使我们设置的别名,执行src目录
        // 旧版是data , 新版是 prependData
        prependData: `
        @import "@/styles/base.scss";
        // 自定义scss的函数 width:pxToRem(100)
        @function pxToRem($px) {
          @return $px/$htmlFintSize*1rem;
        }
        `
      }
    }
  },
}

```

4.在样式的属性中使用pxToRem函数
  1）width:pxToRem(100)  // 这样就可以计算出：100/根字体大小20 * 1rem = 5rem
    // 渲染在浏览器的结果：width:5rem。 
    // 那个这个宽就跟在第一步定义的根字体大小有关系，跟在第二步定义的根字体大小没有关系

```

.main{
  .test-span{
    display: inline-block;
    height: pxToRem(100); // 不需要px单位
    width: pxToRem(200);
    background: pink;
  }
}

```

附加，项目打包的大小：

  File                                     Size             Gzipped  

  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              14.95 KiB        4.89 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 
  
  dist\js\vendor.3a9edefa.js               57.48 KiB        20.38 KiB
  dist\js\app.0c5c8411.js                  14.03 KiB        4.40 KiB
  dist\js\chunk-182a5f71.157aed43.js       0.55 KiB         0.38 KiB
  dist\js\chunk-6c17baac.ec82fdb9.js       0.53 KiB         0.38 KiB
  dist\js\chunk-c98d0ff0.20129f3f.js       0.44 KiB         0.33 KiB
  dist\js\chunk-56638406.8a3857ce.js       0.43 KiB         0.32 KiB
  dist\js\register.45a5c3f1.js             0.42 KiB         0.29 KiB
  dist\js\no-find.f10deaca.js              0.42 KiB         0.29 KiB
  dist\js\login.a8ae2e94.js                0.41 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.6412a1be.css                0.88 KiB         0.44 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB


# 1.移动端Web架构文档

1.移动端的适配

2.处理1px的问题

3.集成移动端的UI框架

4.






