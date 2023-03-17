(function(){"use strict";var t={892:function(t,e,r){var s=r(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),t._v(" ------------------------------------ "),e("router-view"),t._v(" ------------------------------------ "),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.showFooter,expression:"$route.meta.showFooter"}]})],1)},n=[],o=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("免费注册")])],1)]),t._m(0)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{to:"/home",title:"尚品汇"}},[e("img",{attrs:{src:r(4427),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete",placeholder:"请输入一些东西进行搜索"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v("搜索")])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"typeList"},[e("a",{attrs:{href:"###"}},[t._v("我的订单")]),e("a",{attrs:{href:"###"}},[t._v("我的购物车")]),e("a",{attrs:{href:"###"}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])])}],l=(r(7658),{name:"Header",methods:{goSearch(){this.$router.push({name:"Search",params:{searchText:this.searchText}}).catch((()=>{}))}},data(){return{searchText:null}}}),c=l,u=r(1001),v=(0,u.Z)(c,o,i,!1,null,"4fdbea93",null),f=v.exports,p=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:"images/wx_cz.jpg"}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])}],d={name:"Footer"},m=d,_=(0,u.Z)(m,p,h,!1,null,"30c481e6",null),C=_.exports,g={name:"App",components:{Footer:C,Header:f}},b=g,w=(0,u.Z)(b,a,n,!1,null,null,null),x=w.exports,y=r(2631),T=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("这是Home")])])}],O={name:"Home"},j=O,I=(0,u.Z)(j,T,k,!1,null,"112b6984",null),P=I.exports;s.ZP.use(y.ZP);var S=new y.ZP({mode:"history",routes:[{path:"/home",component:P,meta:{showFooter:!0}},{path:"/search/:searchText",name:"Search",component:()=>r.e(484).then(r.bind(r,3484)),meta:{showFooter:!0},props:t=>({searchText:t.params.searchText,testStr001:"testStr001",testStr002:"testStr002"})},{path:"/register",component:()=>r.e(523).then(r.bind(r,2523)),meta:{showFooter:!1}},{path:"/login",component:()=>r.e(138).then(r.bind(r,1138)),meta:{showFooter:!1}},{path:"*",redirect:"/home"}]});s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(x),router:S}).$mount("#app")},4427:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,s,a,n){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],n=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(r.O).every((function(t){return r.O[t](s[l])}))?s.splice(l--,1):(i=!1,n<o&&(o=n));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,s){return r.f[s](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{138:"3860fd60",484:"62d59f09",523:"5f8ea697"}[t]+".js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sph:";r.l=function(s,a,n,o){if(t[s])t[s].push(a);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var v=c[u];if(v.getAttribute("src")==s||v.getAttribute("data-webpack")==e+n){i=v;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+n),i.src=s),t[s]=[a];var f=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var a=t[s];if(delete t[s],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var t={143:0};r.f.j=function(e,s){var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(r,s){a=t[e]=[r,s]}));s.push(a[2]=n);var o=r.p+r.u(e),i=new Error,l=function(s){if(r.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}};r.l(o,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var u=l(r)}for(e&&e(s);c<o.length;c++)n=o[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},s=self["webpackChunksph"]=self["webpackChunksph"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(892)}));s=r.O(s)})();
//# sourceMappingURL=app.69c392b7.js.map