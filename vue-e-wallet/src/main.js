import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { v4 as uuidv4 } from "uuid";

createApp(App)
  .use(router)
  .mixin({
    data() {
      return {
        activeCard: {
          id: uuidv4(),
          holder: "The name",
          vendor: "bitcoin",
          number: "1234 1234 1234 1234",
          validMonth: "12",
          validDay: "5",
        },
        cards: [
          {
            id: uuidv4(),
            holder: "The name",
            vendor: "evil",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: uuidv4(),
            holder: "The name",
            vendor: "ninja",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: uuidv4(),
            holder: "The name",
            vendor: "blockchain",
            number: "1234 1234 1234 1234",
            validMonth: "12",
            validDay: "5",
          },
          {
            id: uuidv4(),
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
