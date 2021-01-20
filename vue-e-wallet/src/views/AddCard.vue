<template>
  <main class="add-card">
    <h2>Add New Card</h2>
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

<style lang="scss" scoped>
.add-card {
  padding: 5rem 0;
  h2 {
    text-align: center;
  }
}
</style>
