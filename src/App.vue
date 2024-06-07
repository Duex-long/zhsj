<template>
  <div id="app">
    <Layout>
      <!-- <router-view/> -->
    </Layout>
  </div>
</template>

<script>
import Layout from '@/layout/Layout.vue'
console.log(Layout,'Layout')
export default ({
  name: 'APP',
  components: {
    Layout
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100vh; */
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
