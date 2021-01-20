<template>
  <div class="wrapper">
    <Card
      v-for="(item, index) in getCards"
      :key="item.id"
      :card="item"
      :class="getCards.length - 1 === index ? 'not-compressed' : 'compressed'"
      @click="setActiveCard(item)"
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
  methods: {
    setActiveCard(newActiveCard) {
      const oldActiveCard = this.$root.activeCard;
      this.$root.activeCard = newActiveCard;
      this.$root.cards = this.$root.cards.filter(
        (card) => card.id !== newActiveCard.id
      );
      this.$root.cards.push(oldActiveCard);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2rem;

  .compressed {
    max-height: 6rem;
    overflow: hidden;
    margin-top: -0.3rem;
    z-index: 1;

    &:hover {
      transform: scaleY(1.1);
      transition: transform 0.2s ease;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .not-compressed {
    height: 22rem;
    margin-top: -0.3rem;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease;
      overflow: hidden;
      cursor: pointer;
    }
  }
}
</style>
