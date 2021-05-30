<template>
  <div class="container">
    <Banner class="welcome-text" :text="`Welcome to our Restaurant!`" />
    <template v-if="submittedIngredients">
      <Banner class="meals-count" :text="`You can cook ${mealsCount} meals`" />
      <div class="recipe-container">
        <h3>You are using the following ingredients</h3>
        <ul>
          <li>
            <span
              ><strong>Pasta:</strong>
              <span class="value">{{ ingredients.pasta }}</span></span
            >
          </li>
          <li>
            <span
              ><strong>Bacon:</strong>
              <span class="value">{{ ingredients.bacon }}</span></span
            >
          </li>
          <li>
            <span
              ><strong>Eggs:</strong>
              <span class="value">{{ ingredients.eggs }}</span></span
            >
          </li>
          <li>
            <span
              ><strong>Milk:</strong>
              <span class="value">{{ ingredients.milk }}</span></span
            >
          </li>
          <li>
            <span
              ><strong>Butter:</strong>
              <span class="value">{{ ingredients.butter }}</span></span
            >
          </li>
          <li>
            <span
              ><strong>Oil:</strong>
              <span class="value">{{ ingredients.oil }}</span></span
            >
          </li>
        </ul>
      </div>
    </template>
    <div class="recipe-container">
      <h3>
        Get hold of the following quantity of ingredients to cook our secret
        Carbonara meal!
      </h3>
      <ul>
        <li>
          <span
            ><strong>Pasta:</strong>
            <span class="value">{{ secretIngredients.pasta }}</span></span
          >
        </li>
        <li>
          <span
            ><strong>Bacon:</strong>
            <span class="value">{{ secretIngredients.bacon }}</span></span
          >
        </li>
        <li>
          <span
            ><strong>Eggs:</strong>
            <span class="value">{{ secretIngredients.eggs }}</span></span
          >
        </li>
        <li>
          <span
            ><strong>Milk:</strong>
            <span class="value">{{ secretIngredients.milk }}</span></span
          >
        </li>
        <li>
          <span
            ><strong>Butter:</strong>
            <span class="value">{{ secretIngredients.butter }}</span></span
          >
        </li>
        <li>
          <span
            ><strong>Oil:</strong>
            <span class="value">{{ secretIngredients.oil }}</span></span
          >
        </li>
      </ul>
    </div>
    <JokeOfTheDay class="jod" />
  </div>
</template>

<script>
const JokeOfTheDay = () => import("@/components/JokeOfTheDay/JokeOfTheDay");
const Banner = () => import("@/components/Banner/Banner");
import { mapGetters } from "vuex";

export default {
  components: {
    Banner,
    JokeOfTheDay,
  },
  computed: {
    ...mapGetters(["mealsCount", "ingredients", "secretIngredients"]),
  },
  props: {
    submittedIngredients: Boolean
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  .meals-count {
    margin: 20px 20px 10px 20px;
  }

  .welcome-text {
    margin: 40px 20px;
  }

  .recipe-container {
    font-size: 20px;
    margin-top: 10px;
  }

  .recipe-container ul {
    width: 200px;
    margin: auto;
  }

  .recipe-container li {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid black;
  }

  .recipe-container li .value {
    float: right;
    margin-left: 50px;
    font-style: italic;
  }

  .jod {
    margin: 45px 0;
  }
}
</style>
