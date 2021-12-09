import Vue from "vue";
import VueRouter from "vue-router";

import IndexMain from "../views/main/IndexMain.vue";
import findPassword from "../views/account/findpassword.vue";
import register from "../views/account/registerform.vue";
import loginform from "../views/account/Login.vue";
import store from "../store"

Vue.use(VueRouter);


const rejectAuthuser = (to, from, next) => {
  if(store.state.isLogin === true){
    alert("이미 로그인했어요!")
    next("/")
  }else {
    next()
  }
}

const checkInUser = (to, from, next) => {
  if(store.state.isLogin === true){
    next()
  }else {
    next("/login")
    alert("로그인을 부탁드려요!")
  }
}


const IndexMyplant = () => {
  return import("../views/myplant/Indexmyplant.vue");
};
const modal = () => {
  return import("../components/myPlant/Modal.vue")
}
const Detailmyplant = () => {
  return import("../views/myplant/Detailmyplant.vue");
};
const Hospital = () => {
  return import("../views/hospital/PlantHospital.vue");
};

const editpage = () => {
  return import("../views/myPage/EditUser.vue")
}
const community = () => {
  return import("../views/community/IndexCommunity.vue")
}
const PostDetail = () => {
  return import("../views/post/PostDetail.vue")
}

const test = () => {
  return import("../views/test.vue")
}

const routes = [
  {
    path: "/",
    name: "IndexMain",
    component: IndexMain,
  },

  {
    path: "/myplant",
    name: "IndexMyplant",
    component: IndexMyplant,
  },

  {
    path: "/myplant/:userId/:plantId",
    name: "Detailmyplant",
    component: Detailmyplant,
  },
  {
    path : '/mypage/editpage',
    name : 'editpage',
    beforeEnter : checkInUser,
    component : editpage,
  }, 
  {
    path : '/community',
    name : 'community',
    component : community
  }, 
  {
    path: "/hospital",
    name: "Hospital",
    component: Hospital,
  },

  {
    path: "/modal",
    name: "modal",
    component: modal,
  },
  {
    path: "/login",
    name: "loginform",
    beforeEnter: rejectAuthuser,
    component: loginform,
  },

  {
    path: "/user2/findpassword",
    name: "findPassword",
    component: findPassword,
  },

  {
    path: "/user2/register",
    name: "register",
    beforeEnter : rejectAuthuser,
    component: register,
  },
  {
    path: "/post/postDetail",
    name: "PostDetail",
    component: PostDetail,
  },

  {
    path: "/test",
    name: "test",
    component: test,

  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
});

export default router;
