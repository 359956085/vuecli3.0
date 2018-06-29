import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import MyTab from './components/my-tab.vue'
import MyModel from './components/my-model.vue'
import MySlot from './components/my-slot.vue'

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            component: Home,
            meta: { keepAlive: false }
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: { keepAlive: false }
        },
        {
            path: "/my-tab",
            name: "my-tab",
            component: MyTab,
            meta: { keepAlive: true }
        },
        {
            path: "/my-model",
            name: "my-model",
            component: MyModel,
            meta: { keepAlive: false }
        },
        {
            path: "/my-slot",
            name: "my-slot",
            component: MySlot,
            meta: { keepAlive: true }
        }
    ]
});