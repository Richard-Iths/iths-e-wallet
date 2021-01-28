<template>
  <Button @click="removeCard">
    <template v-slot:btnText>
      Remove Card
    </template>
  </Button>
</template>

<script>
import BtnComp from "./BtnComp";
export default {
  name: "RemoveActiveCardBtn",
  components: {
    Button: BtnComp,
  },
  methods: {
    removeCard() {
      const cardLength = this.$root.cards.length;
      if (cardLength > 0) {
        const lastAddedCard = this.$root.cards[cardLength - 1];
        this.$root.cards = this.$root.cards.filter(
          (card) => card.id !== lastAddedCard.id
        );
        this.$root.activeCard = lastAddedCard;
      } else {
        this.$root.activeCard = {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: linear-gradient(60deg, #c05151, 75%, #c02828);
  border: none;
  outline: none;
  color: #fff;
  &:hover {
    background: #222;
    color: #fff;
    cursor: pointer;
  }
}
</style>
