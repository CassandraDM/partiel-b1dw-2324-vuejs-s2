import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import PersonalInformations from "./components/PersonalInformations.vue";
import EventChoice from "./components/EventChoice.vue";
import "./style.css";

const routes = [
  {
    path: "/",
    component: PersonalInformations,
  },
  {
    path: "/event-choice",
    componet: EventChoice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
