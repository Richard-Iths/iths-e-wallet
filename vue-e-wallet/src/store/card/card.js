import { v4 as uuidv4 } from "uuid";
const card = {
  namespaced: true,
  state: () => ({
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
    activeCard: {
      id: uuidv4(),
      holder: "The name",
      vendor: "bitcoin",
      number: "1234 1234 1234 1234",
      validMonth: "12",
      validDay: "5",
    },
  }),
  getters: {
    getCards(state) {
      return state.cards;
    },
    getActiveCard(state) {
      return state.activeCard;
    },
    isCardsEmpty(state) {
      return state.cards !== 0 && state.activeCard.id !== undefined;
    },
  },
  mutations: {
    addCard(state, card) {
      state.cards.push(card);
    },
    changeActiveCard(state, newActiveCard) {
      const oldActiveCard = state.activeCard;
      state.activeCard = newActiveCard;
      state.cards = state.cards.filter((card) => card.id !== newActiveCard.id);
      state.cards.push(oldActiveCard);
    },
    removeActiveCard(state) {
      const cardsLength = state.cards.length;
      if (cardsLength >= 1) {
        const backStackCard = state.cards.splice(cardsLength - 1, 1)[0];
        state.activeCard = backStackCard;
      } else {
        state.activeCard = {};
      }
    },
  },
  actions: {
    addCard({ dispatch }, newCard) {
      dispatch("addCard", newCard);
    },
    changeActiveCard({ commit }, newActiveCard) {
      commit("changeActiveCard", newActiveCard);
    },
    removeActiveCard({ commit }) {
      commit("removeActiveCard");
    },
  },
};

export default card;
