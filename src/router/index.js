import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Meals from "@/views/Meals.vue";
import Restaurants from "@/views/Restaurants.vue";
import RestaurantsInfo from "@/views/RestaurantsInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meals",
    name: "Meals",
    component: Meals,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: Restaurants,
  },
  {
    path: "/restaurant-info/:submittedIngredients?",
    name: "Restaurants Info",
    component: RestaurantsInfo,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
