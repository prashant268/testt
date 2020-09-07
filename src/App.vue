<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: { Navbar, Sidebar },
  mounted() {
    this.$vs.theme({
      primary: '#8e1e1d' // my new color
    })

  }
}
</script>

<style lang="scss">
@import "@/styles/main";
</style>
