<template>
  <div class="wrapper">
    <Card
      v-for="(item, index) in getCards"
      :key="item.id"
      :card="item"
      :class="getCards.length - 1 === index ? 'not-compressed' : 'compressed'"
    />
  </div>
</template>

<script>
import CardComp from "./CardComp";
export default {
  name: "CardStackComp",
  components: {
    Card: CardComp,
  },
  computed: {
    getCards() {
      return this.$root.cards;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2rem;

  .compressed {
    height: 6rem;
    overflow: hidden;
    margin-top: -0.3rem;
    z-index: 1;

    &:hover {
      z-index: 999;
      transform: scale(1.05);
      transition: transform 0.2s ease;
      overflow: hidden;
    }
  }
  .not-compressed {
    height: 22rem;
    margin-top: -0.3rem;
    &:hover {
      z-index: 999;
      transform: scale(1.05);
      transition: transform 0.2s ease;
      overflow: hidden;
    }
  }
}
</style>
