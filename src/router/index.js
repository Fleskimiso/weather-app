import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/today",
    name: "Today",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/TodayWeather.vue"),
  },
  {
    path: "/forecast",
    name: "Forecast",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forecast.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
