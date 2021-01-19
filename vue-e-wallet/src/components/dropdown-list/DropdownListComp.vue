<template>
  <div class="dropdown">
    <i class="material-icons" @click="showHideDropdown">arrow_drop_down</i>
    <ul class="dropdown__list" v-if="show">
      <li
        v-for="(item, index) in listItem"
        :key="index"
        @click="updateSelected"
      >
        {{ item }}
      </li>
    </ul>

    <div class="dropdown__modal" v-if="show" @click="showHideDropdown"></div>
  </div>
</template>

<script>
export default {
  name: "DropdownListComp",
  props: {
    listItem: {
      type: Array,
      required: true,
    },
    data: {
      type: String,
    },
    selectedItem: {
      type: String,
      required: true,
    },
    selectedItemModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:selectedItem"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showHideDropdown(e) {
      this.show = !this.show;
      if (this.show) {
        window.scrollTo({ top: e.clientY, behavior: "smooth" });
      }
    },
    updateSelected(e) {
      let value = e.target.innerText;
      if (this.selectedItemModifiers.splitReturnFirst) {
        value = value.split(" ")[0].toLowerCase();
      } else if (this.selectedItemModifiers.splitReturnTwoLast) {
        value = value.slice(2, value.length);
      }
      this.$emit("update:selectedItem", value);
      this.showHideDropdown();
    },
    scrollTo() {},
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  &__modal {
    min-height: 100vh;
    min-width: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    overflow: hidden;
  }
  &__list {
    list-style-type: none;
    position: absolute;
    min-width: 25rem;
    max-height: 20vh;
    margin-top: 0.5rem;
    padding: 2rem 0;
    z-index: 99999;
    background-color: #fff;
    box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    overflow-y: auto;
    li {
      padding: 1.2rem;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 9999;
      max-width: 28rem;
      &:hover {
        background: #222;
        transform: scale(1.2);
        color: #fff;
        transition: all 0.2s ease;
      }
    }
  }

  i {
    cursor: pointer;
    font-size: 2.5em;
    display: block;
    margin-left: 22rem;
    margin-top: -4.5rem;
  }
}
</style>
