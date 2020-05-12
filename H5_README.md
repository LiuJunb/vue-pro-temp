# 1.移动端Web架构文档

1.移动端的适配

2.处理1px的问题

3.集成移动端的UI框架

4.


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







