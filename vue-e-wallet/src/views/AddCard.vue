<template>
  <section>
    <CardStack :title="title" />
  </section>
</template>

<script>
import CardStackComp from "@/components/card/CardStackComp.vue";
export default {
  name: "AddCard",
  components: {
    CardStack: CardStackComp,
  },
  data() {
    return {
      title: "new card",
    };
  },
};
</script>
