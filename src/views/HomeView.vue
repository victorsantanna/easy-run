<template>
  <div class="container">
    <section class="info-principal">
      <h1 class="title"> Descubra a Alegria de Correr </h1>
      <h2 class="subtitle">Participe dos melhores eventos de corrida e transforme sua vida.</h2>
    </section>
    <section class="info-secundaria">
      <img src="/public/img/easyrun1.png" alt="">
    </section>
    
  </div>
</template>

<script setup>
  
</script>

<style scoped>

.container{
  width: 90%;
  display: flex;
  flex-direction: row;
}

.info-secundaria, .info-principal{
  width: 40%;
  height:73vh;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-principal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img{
  width: 100%;
  height: 80%;
  margin:50px;
  margin-right: 60px;
}
.title{
  margin: 10px;
  font-size: 40px;
}
.subtitle{
  margin: 10px;
}

</style>
