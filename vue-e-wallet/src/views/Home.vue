<template>
  <main class="home">
    <h1 class="title">E-WALLET</h1>
    <Card :title="title" :card="getActiveCard" v-if="isCardsEmpty" />
    <div class="card-settings" v-if="isCardsEmpty">
      <div class="btn-container">
        <RemoveActiveCardBtn />
      </div>
      <div class="btn-container">
        <EditActiveCardBtn />
      </div>
    </div>
    <CardStack />
    <router-link to="/add/card" class="btn">ADD NEW CARD</router-link>
  </main>
</template>

<script>
import CardComp from "@/components/card/CardComp.vue";
import CardStackComp from "@/components/card/CardStackComp.vue";
import BtnRemoveACtiveCardComp from "@/components/button/BtnRemoveActiveCardComp.vue";
import BtnEditActiveCardComp from "@/components/button/BtnEditActiveCardComp.vue";
export default {
  name: "Home",
  components: {
    Card: CardComp,
    CardStack: CardStackComp,
    RemoveActiveCardBtn: BtnRemoveACtiveCardComp,
    EditActiveCardBtn: BtnEditActiveCardComp,
  },
  data() {
    return {
      title: "active card",
    };
  },
  computed: {
    getActiveCard() {
      return this.$root.activeCard;
    },
    isCardsEmpty() {
      return this.$root.cards.length !== 0 || this.$root.activeCard.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 5rem;
  display: grid;
  place-items: center;
  margin: 2rem 0 5rem 0;
  gap: 2rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-weight: bold;
    font-family: monospace;
  }

  .card-settings {
    display: flex;
    flex-wrap: wrap;
    min-width: 18vw;
    justify-content: space-evenly;

    .btn-container {
      padding: 0 1rem;
    }
  }
}
</style>
