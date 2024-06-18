import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import PersonalInformations from "./components/PersonalInformations.vue";
import EventChoice from "./components/EventChoice.vue";
import SelectSession from "./components/SelectSession.vue";
import "./style.css";

const routes = [
  {
    path: "/",
    component: PersonalInformations,
  },
  {
    path: "/event-choice",
    name: "EventChoice",
    component: EventChoice,
  },
  {
    path: "/select-session",
    name: "SelectSession",
    component: SelectSession,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
