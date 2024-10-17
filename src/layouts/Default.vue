<script setup>
import Footer from "@/components/Footer.vue";
import Hearder from "@/components/Hearder.vue";
import BottomBar from "@/components/BottomBar.vue";
</script>

<template>
  <Hearder></Hearder>
  <router-view></router-view>
  <Footer></Footer>
  <bottom-bar></bottom-bar>
</template>

<style scoped>

</style>