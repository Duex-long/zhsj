<template>
  <div class="official-layout full-page">
    <Header />
    <!-- <slot></slot> -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
export default {
  name: "official-layout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.official-layout {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding-top: 80px;
}
</style>
