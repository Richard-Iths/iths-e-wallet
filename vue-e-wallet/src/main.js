import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mixin({
    data() {
      return {
        cards: [
          {
            id: Date.now().toString(),
            holder: "The name",
            vendor: "bitcoin",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: Date.now().toString(),
            holder: "The name",
            vendor: "evil",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: Date.now().toString(),
            holder: "The name",
            vendor: "ninja",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: Date.now().toString(),
            holder: "The name",
            vendor: "blockchain",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: Date.now().toString(),
            holder: "The name",
            vendor: "bitcoin",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
        ],
      };
    },
  })
  .mount("#app");
