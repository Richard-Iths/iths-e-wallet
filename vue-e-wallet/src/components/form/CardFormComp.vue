<template>
  <section class="card-form">
    <Card :card="card" />
    <form class="form-controller" @submit.prevent="">
      <div class="form-controller__input">
        <label for="card-number">card number</label>
        <input
          type="text"
          name="card-number"
          v-model="card.number"
          placeholder="XXXX XXXX XXXX XXXX"
          maxlength="19"
          @keypress="validateNumber"
        />
      </div>
      <div class="form-controller__input">
        <label for="card-holder">cardholder name</label>
        <input
          type="text"
          name="holder"
          v-model="card.holder"
          placeholder="Firstname Lastname"
        />
      </div>
      <div class="form-controller__row">
        <div class="form-controller__input">
          <label for="month">Month</label>
          <input type="text" name="month" v-model="card.validMonth" disabled />
          <DropdownList
            :listItem="dropdownInfo.months"
            v-model:selectedItem="card.validMonth"
          />
        </div>
        <div class="form-controller__input">
          <label for="year">Year</label>
          <input type="text" name="year" v-model="card.validDay" disabled />
          <DropdownList
            :listItem="dropdownInfo.years"
            v-model:selectedItem.splitReturnTwoLast="card.validDay"
          />
        </div>
      </div>
      <div class="form-controller__input">
        <label for="vendor">Vendor</label>
        <input type="text" name="vendor" v-model="card.vendor" disabled />

        <DropdownList
          :listItem="dropdownInfo.vendors"
          v-model:selectedItem.splitReturnFirst="card.vendor"
        />
      </div>

      <button type="submit" class="btn" @click="addCard">ADD CARD</button>
    </form>
  </section>
</template>

<script>
import CardComp from "@/components/card/CardComp.vue";
import DropdownListComp from "@/components/dropdown-list/DropdownListComp.vue";
export default {
  name: "CardFormComp",
  components: {
    Card: CardComp,
    DropdownList: DropdownListComp,
  },
  data() {
    return {
      card: {
        validMonth: "MM",
        validDay: "YY",
        vendor: "",
        number: "",
        holder: "",
      },
      dropdownInfo: {
        months: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
        years: ["2021", "2022", "2023", "2024", "2025"],
        vendors: ["bitcoin inc", "blockchain inc", "evil corp", "ninja bank"],
      },
    };
  },
  methods: {
    validateNumber() {
      const numberSplit = this.card.number.split(" ");
      if (
        numberSplit[numberSplit.length - 1].length === 4 &&
        this.card.number.length < 19
      ) {
        this.card.number += " ";
      }
    },
    selectedItem(payload) {
      console.log(payload);
    },
    addCard() {
      this.$root.cards.push({ ...this.card });
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-form {
  margin: 5rem 0;
  display: grid;
  place-items: center;

  .form-controller {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 60rem;

    &__input {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
      padding: 1rem 2rem;
      input {
        text-transform: capitalize;
        border: 1px solid #222;
        padding: 1.5rem;
        border-radius: 8px;
        outline: none;
        max-width: 27rem;
        &:focus {
          background-color: #e6e3e3;
        }
      }
      label {
        text-transform: uppercase;
      }
    }

    &__row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
23 .btn {
  padding: 2rem 0;
  background-color: #e6e3e3;
}
</style>
