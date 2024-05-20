<template>
  <nav >
    <div class="container-central ">
      <div class="container-menu">
        <RouterLink to="/" class="menu-item">
          INÍCIO
        </RouterLink>
      
        <RouterLink  to="/eventos" class="menu-item">
          EVENTOS
        </RouterLink>
      
        <RouterLink  to="/contato" class="menu-item">
          CONTATO
        </RouterLink>

        <RouterLink  to="/sobre-nos" class="menu-item">
          SOBRE NÓS
        </RouterLink>
      </div>
      <div class="container-login" >
        <button class="button is-white">Log In</button>
      </div>
    </div>
  </nav>
</template>

<script>

import { RouterLink } from 'vue-router';
export default{
  components:{
    RouterLink
  }
}
</script>


<style>
nav{
  background-color: #66D1FF;
  padding: 5px;
}
.container-central{
    padding-left: 50px;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu-item{
  padding: 10px;
  padding-left: 20px;
  color: aliceblue;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  font-family: tahoma, sans-serif
}
.menu-item:hover{
  color: #060707;
  transition: 0.5s;
}

button{
  margin-bottom: 6px;
  margin-right: 10px;
}

</style>