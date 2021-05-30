import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mealsCount: 0,
    ingredients: {},
    secretIngredients: {
      pasta: 500,
      bacon: 200,
      eggs: 1,
      milk: 200,
      butter: 500,
      oil: 100
    },
  }, 
  getters: {
    mealsCount: state => {
      return state.mealsCount
    },
    ingredients: state => {
      return state.ingredients
    },
    secretIngredients: state => {
      return state.secretIngredients
    }
  },
  mutations: {
    setMealsCount (state, mealsCount) {
      state.mealsCount = mealsCount
    },
    setIngredients (state, ingredients) {
      state.ingredients = ingredients
    }
  },
  actions: {
    setMealsCount (context, mealsCount) {
      context.commit('setMealsCount', mealsCount)
    },
    setIngredients (context, ingredients) {
      context.commit('setIngredients', ingredients)
    }
  },
  modules: {},
});
