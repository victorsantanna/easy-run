<script setup>

  import { RouterView } from 'vue-router'
  import BarraCabecalho from './components/BarraCabecalho.vue'
  import RodaPe from './components/RodaPe.vue'

</script>

<template>
 
    <BarraCabecalho />
    
    <div class="container">
      <RouterView />

    </div>

    <RodaPe />

</template>

<style scoped>

</style>
