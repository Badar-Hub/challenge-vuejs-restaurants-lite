<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentTime: new Date().toLocaleString()
    };
  },
  computed: {
    welcomeMessage() {
      
      return "Welcome! Your local time is: " + this.currentTime;
    },
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = new Date().toLocaleString();
        setTimer();
      }, 1000);
    setTimer();
  },
};
</script>
