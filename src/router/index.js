// 配置路由相关的信息

import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
    {
        // 设置默认路由
        path: '',
        // redirect重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history', //history模式， 删除导航栏中的#号 ，默认使用的是hash模式，带#号的
    linkActiveClass: 'active' // 统一修改默认激活路由的class，router-link-active可以不加
})

// 3.将router对象传入到Vue实例，可以挂载到main.js中
export default router