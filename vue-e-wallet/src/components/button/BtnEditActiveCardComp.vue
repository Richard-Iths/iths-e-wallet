<template>
  <Button @click="edit">
    <template v-slot:btnText>
      Edit Card
    </template>
  </Button>
</template>

<script>
import BtnComp from "./BtnComp";
export default {
  name: "EditActiveCardButtonComp",
  components: {
    Button: BtnComp,
  },
  methods: {
    edit() {
      this.$router.push({ path: "/add/card", query: { edit: true } });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: linear-gradient(60deg, rgb(108, 192, 108), 75%, lightgreen);
  border: none;
  outline: none;
  &:hover {
    background: #222;
    color: #fff;
    cursor: pointer;
  }
}
</style>
