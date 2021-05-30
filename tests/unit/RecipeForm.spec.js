import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import RecipeForm from "../../src/components/RecipeForm/RecipeForm.vue";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()
const secretIngredients = {
  pasta: 500,
  bacon: 200,
  eggs: 1,
  milk: 200,
  butter: 500,
  oil: 100
} 
describe("RecipeForm.vue", () => {

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      setMealsCount: jest.fn(),
      setIngredients: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it("calculates total meals correctly", () => {
    const wrapper = shallowMount(RecipeForm, {
      router,
      store,
      localVue,
      data() {
        return {
          recipe: {
            eggs: 2,
            pasta: 1000,
            butter: 1500,
            milk: 800,
            oil: 300,
            bacon: 600,
          }
        }
      },
      propsData: { 
        ingredients: secretIngredients
      }
    });
    const mealsCount = wrapper.vm.calculateMeals();
    expect(mealsCount).toEqual(2);
  });
  
  it('dispatches "setIngredients" when user submits the form', () => {
    const wrapper = shallowMount(RecipeForm, { store, localVue, router })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.setIngredients).toHaveBeenCalled()
  })

  it('dispatches "setMealsCount" when user submits the form', () => {
    const wrapper = shallowMount(RecipeForm, { store, localVue, router })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.setMealsCount).toHaveBeenCalled()
  })
});
