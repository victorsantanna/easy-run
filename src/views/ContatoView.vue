<template>
    <div class="columns">
        <div class="column">
            Formulário
            <input class="input is-info mb-3" type="text" placeholder="Nome" v-model="nome"/>
            <input class="input is-info mb-3" type="text" placeholder="E-mail" v-model="email"/>
            <textarea class="textarea is-info mb-3" placeholder="Info textarea" rows="10" v-model="mensagem"></textarea>
            <button class="button is-info is-fullwidth ">Enviar</button>
           
        </div>
        <div class="column">
            Imagem
           <img src="/public/img/easyrunemail.png" alt="">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const nome = ref('')
    const email = ref('')
    const mensagem = ref('')


</script>