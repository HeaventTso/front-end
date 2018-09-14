// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import 'lib-flexible'
import 'styles/reset.css'
import 'styles/iconfont.css'

import App from './App'
//import index from './components/index'
import index from './components/page/index/Index'
import Company from './components/page/company/Company'
import analysis from './components/page/analysis/Analysis'
import listing from './components/page/listing/Listing'
import news from './components/page/news/News'

//头部搜索框

//底部table
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { List } from 'vant';
Vue.use(List);

import utils from '../config/utils'    //获取url参数
//import vconsole   from '../config/vconsole.min'

Vue.prototype.$utils=utils;   //注册全局方法
//Vue.prototype.$vconsole=vconsole;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {path: '/',  component: index},
    {path: '/index',  component: index},
    {path: '/company',  component: Company},
    {path: '/analysis',component: analysis},
    {path: '/listing',component: listing},
    {path: '/news',component: news},
];

const router = new VueRouter({
  routes
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el:'#app',
	router,
  render: h => h(App),
  template: '<App/>'
}).$mount('#app');

