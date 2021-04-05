//这个文件的主要作用有两个

import Vue from 'vue'
//3. 导入App组件,这里可以简写横App。但是还是要写成App.vue,不然会打包失败。
import App from './App.vue'
//1. 创建Vue根实例
new Vue({
    //2. 挂在App组件
    el: '#app',
    component: {
        App
    },
    template: '<App/>'
})
