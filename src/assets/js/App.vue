<template>
  <div class="app">
    <Header />
    <Main :popular = "popular"/>
  </div>
</template>

<script>

import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import server from "@/assets/js/server";
export default {
  name: 'App',
  components: {
  Header,
  Main,
  },
  data() {
    return {
      popular: [],
    }
  },

  created() {
    server('popular').then(data => {
      this.popular = data.results;
      console.log(data.results)
    })
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 1200px;
  width: 100%;
}
</style>
