<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import StoreList from "@/components/StoreList/StoreList";
const stores = require("@/assets/stores/stores.json");

export default {
  name: "Stores",
  components: {
    StoreList,
  },
  data() {
    return {
      currentTime: Date.now(),
      stores,
    };
  },
  computed: {
    welcomeMessage() {
      return (
        "Welcome to our restaurants list! Your local time is: " +
        this.currentTime
      );
    },
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = new Date().toLocaleString()
        setTimer();
      }, 1000);
    setTimer();
  },
};
</script>
