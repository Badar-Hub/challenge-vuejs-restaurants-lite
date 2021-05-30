<template>
  <div class="header">
    <div class="header__navigation">
    <ul>
      <li class="header__navigation-item">
        <router-link to="/" class="header__navigation-item-link"
          >Home</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/meals" class="header__navigation-item-link"
          >Carbonara Meals Calculator</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/restaurants" class="header__navigation-item-link"
          >Our Restaurants</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/restaurant-info" class="header__navigation-item-link"
          >Restaurant Info</router-link
        >
      </li>
    </ul>
      <div class="header-mode">
        <span @click="$emit('toggleDarkMode')" class="header__navigation-item-link">{{isDarkMode ? 'Turn on Light Mode' : 'Turn on Dark Mode'}}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./Header.scss";
</style>
<script>
export default {
  name: "Header",
  props:{
    isDarkMode: {
      type: Boolean
    }
  }
};
</script>
