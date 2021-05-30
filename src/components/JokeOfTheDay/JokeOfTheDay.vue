<template>
  <Banner textDistribution="bottom" :text="jokeOfTheDay.joke.text" />
</template>

<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: 'JokeOfTheDay',
  components: {
    Banner,
  },
  data() {
    return {
      api: "https://api.jokes.one/jod?category=knock-knock",
      jokeOfTheDay: { joke: { text: '' } }
    }
  },
  mounted() {
    fetch(this.api, { headers: { 'Content-Type': "application/json" } }).then((response) => {
      response.json().then(result => {
        this.jokeOfTheDay = result.contents.jokes[0];
      })
    })
  }
}
</script>

<style>
</style>
