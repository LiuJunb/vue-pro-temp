(window.webpackJsonp=window.webpackJsonp||[]).push([["grid-item"],{"0077":function(t,e,a){"use strict";var n=a("f8af");a.n(n).a},"1b62":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={data:function(){return{tabColumnProps:[{prop:"attr",label:"参数",width:"180px"},{prop:"des",label:"说明"},{prop:"type",label:"类型",width:"180px"},{prop:"select",label:"可选值"},{prop:"default",label:"默认值",width:"180px"}],tabColumnSlot:[{prop:"name",label:"插槽名称",width:"180px"},{prop:"des",label:"说明"}],tabColumnEvent:[{prop:"name",label:"事件名称",width:"180px"},{prop:"des",label:"说明"},{prop:"func",label:"回调参数"}],tabColumnMethods:[{prop:"name",label:"事件名称",width:"180px"},{prop:"des",label:"说明"},{prop:"func",label:"参数"}],tabDataProps:[{attr:"刘军",des:100,type:"男",select:"理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ",default:"上海市普陀区金沙江路 1518 弄"}],tabDataSlot:[{name:"刘军",des:100}],tabDataEvent:[{name:"刘军",des:100,func:"dd"}],tabDataMethods:[{name:"刘军",des:100,func:"dd"}]}}}},2953:function(t,e,a){"use strict";a.r(e);var n={name:"GridItem",components:{},mixins:[a("1b62").a],props:{msg:{type:String,default:"GridItem"}},data:function(){return{itemData:[{name:"大军",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军1",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军2",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军3",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军4",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军3",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军4",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军3",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军4",age:"11",sex:"男",address:"abc",email:"113345321@123"}],tabDataProps:[{attr:"clickPerm",des:"配置点击的权限，如果没有配置，代表没有权限控制",type:"String",select:" ",default:""},{attr:"animate",des:"是否需要动画",type:"Boolean",select:"true/false",default:"false"},{attr:"permissions",des:"用户所拥有的权限（不传递时，默认会去sessionStorage中查找permissions属性）",type:"Array<String>",select:" ",default:"[]"}],tabDataSlot:[{name:"default",des:"默认的插槽"}],tabDataEvent:[{name:"handleGridItemClick",des:"监听 item 的点击事件",func:"func( e )"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleGridItemClick:function(){}}},i=(a("0077"),a("2877")),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-item"},[a("b-title-tag",{attrs:{name:"b-grid-item 组件"}}),a("h4",[t._v("1.基本的使用(默认有点击的权限)")]),a("b-grid-item",{staticClass:"gird-col1",on:{handleGridItemClick:t.handleGridItemClick}},[t._v(" b-grid-item 其实是一个带有权限的 div ")]),a("code-h",{attrs:{lang:"html",content:'\n    <b-grid-item\n      class="gird-col1"\n      @handleGridItemClick="handleGridItemClick"\n    >\n      b-grid-item 其实是一个带有权限的 div\n    </b-grid-item>\n  '}}),a("code-h",{attrs:{lang:"js",content:"\n     handleGridItemClick(e, item) {\n        console.log('evnet=', e)\n        console.log('item=', item)\n     }\n    "}}),a("h4",[t._v("2.添加hover的动画")]),a("b-grid-item",{staticClass:"gird-col1",attrs:{animate:!0},on:{handleGridItemClick:t.handleGridItemClick}},[t._v(" b-grid-item 其实是一个带有权限的 div ")]),a("code-h",{attrs:{lang:"html",content:'\n    <b-grid-item\n      class="gird-col1"\n      :animate="true"\n      @handleGridItemClick="handleGridItemClick"\n    >\n      b-grid-item 其实是一个带有权限的 div\n    </b-grid-item>\n  '}}),a("h4",[t._v("3.添加可点击的指定权限（有该权限才可以点击）")]),a("b-grid-item",{staticClass:"gird-col1",attrs:{clickPerm:"pp.detail"},on:{handleGridItemClick:t.handleGridItemClick}},[t._v(" b-grid-item 其实是一个带有权限的 div ")]),a("code-h",{attrs:{lang:"html",content:'\n    <b-grid-item\n      class="gird-col1"\n      clickPerm="pp.detail"\n      @handleGridItemClick="handleGridItemClick"\n    >\n      b-grid-item 其实是一个带有权限的 div\n    </b-grid-item>\n  '}}),a("h4",[t._v("4.配和b-grid-view的使用(没有权限的 item )")]),a("b-grid-view",{attrs:{itemData:t.itemData,hasPagination:!1,gutter:8,md:6,lg:4,xl:3},scopedSlots:t._u([{key:"col-item",fn:function(e){return[a("b-grid-item",{staticClass:"gird-col1",on:{handleGridItemClick:function(a){return t.handleGridItemClick(a,e.item)}}},[t._v(" "+t._s(e.item.name)+" ")])]}}])}),a("code-h",{attrs:{lang:"html",content:'\n    <b-grid-view\n      :itemData="itemData"\n      :hasPagination="false"\n      :gutter="8"\n      :md="6"\n      :lg="4"\n      :xl="3"\n    >\n      <template v-slot:col-item="slotProps">\n        <b-grid-item\n          class="gird-col1"\n          @handleGridItemClick="handleGridItemClick($event,slotProps.item)"\n        >\n          { {slotProps.item.name}}\n        </b-grid-item>\n      </template>\n    </b-grid-view>\n  '}}),a("code-h",{attrs:{lang:"js",content:"\n     handleGridItemClick(e, item) {\n        console.log('evnet=', e)\n        console.log('item=', item)\n     }\n "}}),a("h4",[t._v("5.配和b-grid-view的使用(有权限的 item )")]),a("b-grid-view",{attrs:{itemData:t.itemData,hasPagination:!1,gutter:8,md:6,lg:4,xl:3},scopedSlots:t._u([{key:"col-item",fn:function(e){return[a("b-grid-item",{staticClass:"gird-col1",attrs:{animate:!0,clickPerm:"pp.detail"},on:{handleGridItemClick:function(a){return t.handleGridItemClick(a,e.item)}}},[t._v(" "+t._s(e.item.name)+" ")])]}}])}),a("code-h",{attrs:{lang:"html",content:'\n      <b-grid-view\n        :itemData="itemData"\n        :hasPagination="false"\n        :gutter="8"\n        :md="6"\n        :lg="4"\n        :xl="3"\n      >\n        <template v-slot:col-item="slotProps">\n          <b-grid-item\n            class="gird-col1"\n            :animate="true"\n            clickPerm="pp.detail"\n            @handleGridItemClick="handleGridItemClick($event,slotProps.item)"\n          >\n            { {slotProps.item.name}}\n          </b-grid-item>\n        </template>\n      </b-grid-view>\n    '}}),a("h4",[t._v("BGridItem 的 Props：")]),a("b-advanced-table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:!0,hasPagination:!1,tabColumn:t.tabColumnProps,tabData:t.tabDataProps}}),a("h4",[t._v("BGridItem 的 Slot：")]),a("b-advanced-table",{staticStyle:{width:"900px"},attrs:{stripe:"",border:!0,hasPagination:!1,tabColumn:t.tabColumnSlot,tabData:t.tabDataSlot}}),a("h4",[t._v("BGridItem 的 Event：")]),a("b-advanced-table",{staticStyle:{width:"900px"},attrs:{stripe:"",border:!0,hasPagination:!1,tabColumn:t.tabColumnEvent,tabData:t.tabDataEvent}})],1)}),[],!1,null,"74080535",null);e.default=l.exports},f8af:function(t,e,a){}}]);