<template>
  <div :class="darkMode ? 'theme-dark' : ''" id="app">
    <Header :isDarkMode="darkMode" @toggleDarkMode="darkMode = !darkMode" />
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>
<style lang="scss">
@import '@/assets/styles/styles.scss';
</style>
<script>
const Header = () => import('@/components/Header/Header');

export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  components: {
    Header
  },
}
</script>
