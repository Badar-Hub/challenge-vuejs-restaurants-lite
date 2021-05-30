<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="eggs"
        id="recipe-eggs"
        value="0"
        v-model.number="recipe.eggs"
      />
      <label for="recipe-pasta">Pasta</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="pasta"
        id="recipe-pasta"
        value="0"
        v-model.number="recipe.pasta"
      />
      <label for="recipe-butter">Butter</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="butter"
        id="recipe-butter"
        value="0"
        v-model.number="recipe.butter"
      />
      <label for="recipe-milk">Milk</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="milk"
        id="recipe-milk"
        value="0"
        v-model.number="recipe.milk"
      />
      <label for="recipe-oil">Oil</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="oil"
        id="recipe-oil"
        value="0"
        v-model.number="recipe.oil"
      />
      <label for="recipe-bacon">Bacon</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="bacon"
        id="recipe-bacon"
        value="0"
        v-model.number="recipe.bacon"
      />
      <button @click="submitIngredients" type="submit">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import "./RecipeForm.scss";
</style>
<script>
import { mapActions } from 'vuex'

export default {
  name: "RecipeForm",
  data() {
    return {
      recipe: {
        eggs: 0,
        pasta: 0,
        butter: 0,
        milk: 0,
        oil: 0,
        bacon: 0,
      }
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(['setMealsCount', 'setIngredients']),
    submitIngredients() {
      const mealsCount = this.calculateMeals();
      this.setMealsCount(mealsCount);
      this.setIngredients(this.recipe);
      this.$router.push({ name: "Restaurants Info", params: { submittedIngredients: true } });
    },
    calculateMeals() {
      let mealsCount = Number.POSITIVE_INFINITY;
      Object.keys(this.recipe).forEach((key) => {
        const ratio = Math.floor(this.recipe[key] / this.ingredients[key]);
        mealsCount = Math.min(mealsCount, ratio)
      });
      return mealsCount;
    },
  },
};
</script>
