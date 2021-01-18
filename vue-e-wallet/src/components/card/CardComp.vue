<template>
  <article>
    <CardTop v-if="title">
      <template v-slot:card-text>
        <h5>{{ titleToUpperCase }}</h5>
      </template>
    </CardTop>
    <div :class="`card ${getCardVendorClass} ${isCompressed}`">
      <div class="card__img-vendor">
        <img :src="getVendorImgUrl" alt="vendor-icon" />
      </div>
      <div class="card__img-chip">
        <img :src="getChipImgUrl" alt="top-right-icon" />
      </div>
      <div class="card__number">
        <h2>{{ card.number }}</h2>
      </div>
      <div class="card__holder">
        <div class="card__holder__name">
          <h6>CARD HOLDER</h6>
          <h4>{{ card.holder }}</h4>
        </div>
        <div class="card__holder__valid">
          <h6>VALID UNTIL</h6>
          <h4>{{ card.validMonth }} / {{ card.validDay }}</h4>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import CardTopComp from "./CardTopComp.vue";
export default {
  name: "CardComp",
  components: {
    CardTop: CardTopComp,
  },
  props: {
    title: {
      type: String,
    },
    card: {
      type: Object,
      required: true,
    },
    compressed: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    titleToUpperCase() {
      return this.title.toUpperCase();
    },
    getCardVendorClass() {
      return `card__vendor--${this.card.vendor}`;
    },
    getVendorImgUrl() {
      return require(`@/assets/images/vendor-${this.card.vendor}.svg`);
    },
    getChipImgUrl() {
      return this.card.vendor === "evil" || this.card.vendor === "ninja"
        ? require("@/assets/images/chip-light.svg")
        : require("@/assets/images/chip-dark.svg");
    },
  },
  created() {
    console.log(this.compressed);
  },
};
</script>

<style lang="scss" scoped>
article {
  .card {
    display: grid;
    max-height: 22rem;
    max-width: 35rem;
    margin: 0 auto;
    grid-template-areas:
      ". . card-icon-vendor"
      "card-icon-chip . ."
      "card-number card-number card-number"
      "card-holder card-holder card-holder";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 1.2fr 0.6fr 1.2fr;
    border-radius: 6px;
    padding: 0 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

    &__vendor--bitcoin {
      background: linear-gradient(60deg, #faa70c, 75%, #f3c266);
      h2 {
      }
    }
    &__vendor--ninja {
      background: linear-gradient(60deg, #272727, 75%, #222);
      color: #fff;
    }
    &__vendor--evil {
      background: linear-gradient(60deg, #121836, 75%, #3e487a);
      color: #fff;
    }
    &__vendor--blockchain {
      background: linear-gradient(60deg, #7f63e4, 75%, #5865a7);
      color: #fff;
    }
    &__img-vendor {
      grid-area: card-icon-vendor;
      display: flex;
      justify-content: flex-end;
      padding: 1.5rem 1rem 0 0;
      opacity: 0.8;
    }
    &__img-chip {
      grid-area: card-icon-chip;
      margin-top: -3rem;
      padding: 0 0.5rem;
    }
    &__number {
      grid-area: card-number;
      display: flex;
      justify-content: space-evenly;
      letter-spacing: 0.1em;
      text-shadow: 0px 1px rgba($color: #ffffff, $alpha: 0.3);
    }
    &__holder {
      grid-area: card-holder;
      display: flex;
      justify-content: space-between;
      margin: 0 1rem;
      &__valid {
        text-align: right;
      }
    }
  }
}
</style>
