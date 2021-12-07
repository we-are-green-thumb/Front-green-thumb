import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexMain from '../views/main/IndexMain.vue'

Vue.use(VueRouter)

const IndexMyplant = () => {
  return import("../views/myplant/Indexmyplant.vue")
}
const modal = () => {
  return import("../components/myPlant/Modal.vue")
}
const Detailmyplant = () => {
  return import("../views/myplant/Detailmyplant.vue")
}
const Hospital = () => {
  return import("../views/hospital/PlantHospital.vue")
}

const routes = [
  {
    path : '/',
    name : 'IndexMain',
    component : IndexMain
  },    
  
  {
    path : '/myplant/:userId',
    name : 'IndexMyplant',
    component : IndexMyplant
  },

  {
  path : '/myplant/:userId/:plantId',
  name : 'Detailmyplant',
  component : Detailmyplant
  },
  {
  path : '/hospital',
  name : 'Hospital',
  component : Hospital
  },

  {
    path : '/modal',
    name : 'modal',
    component : modal
  }, 
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  });
    
  export default router