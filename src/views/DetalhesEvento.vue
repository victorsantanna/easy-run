<template>
  <div class="container-principal">
    <div class="container">
      <h1>Detalhes do Evento</h1>
      <div v-if="id">
        
        <p><strong>Nome:</strong> {{ nome }}</p>
        <p><strong>Local:</strong> {{ local }}</p>
        <p><strong>Data:</strong> {{ data }}</p>
        <p><strong>Distâncias:</strong> {{ distancia }}</p>

      </div>

      <div v-else>
        <p>Evento não encontrado.</p>
      </div>

  </div>

  </div>
</template>

<script setup>

  defineProps({
  id: Number,
  nome: String,
  local: String,
  data: String,
  distancia: String
})

</script>

<style scoped>
.container-principal{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  height: 68vh;
  margin: 9px;
  padding: 20px;
  border: 1.5px solid #ccc;
  border-radius: 10px; 
  box-shadow: 0 5px 10px rgba(0, 0, 0.3, 0.3);
}
h1 {
  margin: 10px;
  font-family: tahoma, sans-serif;
  font-weight: bold;
  font-size: 25px;
}

p {
  margin: 6px 0;
}

strong {
  font-weight: bold;
}
</style>