<template>
  <div class="app">
    <Header />
  </div>
</template>

<script>

import Header from "@/components/layout/Header";
export default {
  name: 'App',
  components: {
  Header
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
