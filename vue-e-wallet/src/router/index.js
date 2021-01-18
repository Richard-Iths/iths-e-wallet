import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddCard from "../views/AddCard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card/add",
    name: "AddCard",
    component: AddCard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
