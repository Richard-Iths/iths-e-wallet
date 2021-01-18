<template>
  <main class="home">
    <h1 class="title">E-WALLET</h1>
    <Card :title="title" :card="getActiveCard" />
    <CardStack />
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
      return this.$root.cards[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 5rem;
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
