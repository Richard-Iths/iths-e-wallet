<template>
  <main class="add-card">
    <CardForm title="New Card" />
  </main>
</template>

<script>
import CardFormComp from "@/components/form/CardFormComp.vue";
export default {
  name: "AddCard",
  components: {
    CardForm: CardFormComp,
  },
  data() {
    return {
      title: "new card",
    };
  },
};
</script>

<style lang="scss" scoped></style>
