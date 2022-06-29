import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding.vue";
import DataBinding2 from "@/views/DataBinding2";
import Nested from "@/views/NestedComponent";
import Calculator from "@/views/CalculatorAPI";
import CompositionAPI from "@/views/CompositionAPI";
import CompositionAPI2 from "@/views/CompositionAPI2";
import CompositionAPIProvide from "@/views/CompositionAPIProvide";
import QuickStart from "@/views/quickStart/QuickStart";
import SlotTest from "@/views/quickStart/SlotTest";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databinding2',
    name: 'DataBinding2',
    component: DataBinding2
  },
  {
    path: '/nested',
    name: 'nested',
    component: Nested
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  },
  {
    path: '/composition',
    name: 'composition',
    component: CompositionAPI
  },
  {
    path: '/composition2',
    name: 'composition2',
    component: CompositionAPI2
  },
  {
    path: '/compositionProvide',
    name: 'compositionProvide',
    component: CompositionAPIProvide
  },
  {
    path: '/quickStart',
    name: 'quickStart',
    component: QuickStart
  },
  {
    path: '/slotTest',
    name: 'slotTest',
    component: SlotTest
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
