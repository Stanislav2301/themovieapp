<template>
  <main class="container">
    <Filter/>
    <Popular :popular="popular"/>
  </main>
</template>

<script>
import Filter from "@/components/Filter";
import Popular from "@/components/Popular";
export default {
  name: "Main",
  components: {
    Filter,
    Popular
  },
  props: ['popular']
}
</script>

<style scoped>

</style>