<template>
  <div class="store-list">
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <label>Search Here</label>
    <input v-model="searchInput" placeholder="Search" label="Search" />
    <button @click="filterSearch" ref="search">Search</button>
    <div class="grid-row">
    <Store
      class="store-list__item"
      :title="store.name"
      :photo="store.image"
      :location="store.location"
      v-for="store in storesWithImages"
      :key="store.id"
    />
    </div>
  </div>
</template>
<style lang="scss">
@import "./StoreList.scss";
</style>
<script>
import Store from "@/components/Store/Store";

export default {
  name: "StoreList",
  data() {
    return {
      searchInput: "",
      loadCount: 10,
      loadCountIncrement: 5,
      filteredList: null,
      storesCount: this.stores.length
    };
  },
  components: {
    Store,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    storesWithImages() {
      return (this.filteredList ?? this.stores).slice(0, this.loadCount).map(store => {
        store["image"] = "https://via.placeholder.com/300?text=" + store.name;

        return store;
      });
    }
  },
  methods: {
    filterSearch() {
      this.filteredList = this.stores.filter(
        (x) => x.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    isAtBottom() {
      // gets window height
      const windowHeight = (self.innerHeight) ? self.innerHeight : document.body.clientHeight;
      // gets current vertical scrollbar position
      const scrollPos = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
      // scrollbar reaces to bottom
      return (document.body.scrollHeight <= (scrollPos + windowHeight))
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll);
    },
    onScroll() {
      if(this.isAtBottom()){
        this.loadCount += this.loadCountIncrement
      }
    }  
  },
  mounted() {
    this.$nextTick(function() {
        window.addEventListener('scroll', this.onScroll);
    });        
  }
};
</script>
