import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import store from 'store'

Vue.use(Router);

const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { scrollToTop: true }
    },
    {
      path: "/home",
      redirect: { name: "home" }
    },
    {
      path: "/blog",
      name: "blog",
      // component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Blog.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/Team.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/modals/Reg.vue")
    }
  ]
});
