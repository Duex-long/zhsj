<template>
    <div class="layout full-page">
        <Header/>
        <slot></slot>
        <Footer/>
    </div>
  </template>
  
  <script>
  import Header from '@/layout/Header.vue'
  import Footer from '@/layout/Footer.vue'
  
  export default {
    name: 'official-layout',
    components: {
        Header,
        Footer
    }
  }
  </script>
  