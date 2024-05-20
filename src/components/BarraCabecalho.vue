<template>
  <nav >
    <div class="container-central">
      <div class="container-menu">
        <RouterLink to="eventos" class="menu-item">
          Início
        </RouterLink>
      
        <RouterLink  to="/eventos" class="menu-item">
          Eventos
        </RouterLink>
      
        <RouterLink  to="/contato" class="menu-item">
          Contato
        </RouterLink>

        <RouterLink  to="/sobre-nos" class="menu-item">
          Sobre Nós
        </RouterLink>
      </div>
      <div class="container-login" >
        <button>Log In</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style>
nav{
  background-color: #66D1FF;
  padding: 20px;
}
.container-central{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu-item{
  padding: 10px;
  color: aliceblue;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

</style>