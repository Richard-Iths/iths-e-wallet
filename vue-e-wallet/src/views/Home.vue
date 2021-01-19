<template>
  <main class="home">
    <h1 class="title">E-WALLET</h1>
    <Card :title="title" :card="getActiveCard" />
    <CardStack />
    <router-link to="/add/card" class="btn">ADD NEW CARD</router-link>
  </main>
</template>

<script>
import CardComp from "@/components/card/CardComp.vue";
import CardStackComp from "@/components/card/CardStackComp.vue";
export default {
  name: "Home",
  components: {
    Card: CardComp,
    CardStack: CardStackComp,
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
    font-family: sans-serif;
  }
}
</style>
