<template>
  <button class="btn"><slot name="btnText"></slot></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  min-width: 20rem;
  max-width: 20rem;
  padding: 2rem;
}
</style>
