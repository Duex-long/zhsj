<template>
  <div class="official-footer">
    <LanguageSelect/>
  </div>
</template>

<script>
import LanguageSelect from './components/LanguageSelect.vue'
export default {
  name: 'official-footer',
  components: {LanguageSelect},
}
</script>

<style scoped>
.official-footer {
  padding-top: 40px;
  background-color: #262626;
}
</style>
