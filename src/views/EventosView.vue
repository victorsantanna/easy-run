<template>

    <h1>EVENTOS</h1>

    <input class="input is-info mb-3 input-small is-hovered" type="text" placeholder="Filtrar eventos" v-model="nome"/>
   
    <div class="columns is-multiline mt-5">
        <CardEventos v-for="evento in eventosFiltrados" :key="evento.nome" :eventoRecebido="evento"/>
    </div>

</template>

<script setup>
import CardEventos from '../components/CardEventos.vue';
import  { ref, computed } from 'vue';


const eventos = [
    {id: 1, nome: 'Night Run - Recife', Local:'Recife', data: '25/05/2024', Distancia:'10/5km'},
    {id: 2, nome: 'Corrida das Pontes', Local:'Recife', data: '02/06/2024', Distancia:'10/5km'},
    {id: 3, nome: 'Music Running 2024 - São João', Local:'Caruaru', data: '09/06/2024', Distancia:'10/5km'},
    {id: 4, nome: '46ª Corrida Guararapes', Local:'Recife', data: '09/06/2024', Distancia:'10/5km'},
    {id: 5, nome: 'Maratona de Olinda', Local:'Olinda', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {id: 6, nome: 'Circuito das Estações 2024', Local:'Recife', data: '07/07/2024', Distancia:'15/10/5km'},
    {id: 7, nome: 'Corrida de Petrolina', Local:'Petrolina', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {id: 8, nome: 'Circuito do verão 2024', Local:'Recife', data: '07/12/2024', Distancia:'15/10/5km'},
    {id: 9, nome: 'Corrida de Olinda', Local:'Olinda', data: '16/10/2024', Distancia:'42/21/10/5km'},
    {id: 10, nome: 'Circuito do fogo 2024', Local:'Recife', data: '07/09/2024', Distancia:'15/10/5km'},
    {id: 11, nome: 'Run de Carpina', Local:'Carpina', data: '16/08/2024', Distancia:'42/21/10/5km'},
    {id: 12, nome: 'Circuito Corre Fácil', Local:'Recife', data: '20/11/2024', Distancia:'15/10/5km'}

];
const nome = ref('');

const eventosFiltrados = computed (() => {
    const filtro = nome.value.toLowerCase();
    return  eventos.filter(evento => evento.nome.toLowerCase().includes(filtro) || evento.data.toLowerCase().includes(filtro));
});



</script>

<style scoped>

h1{
    margin: 10px;
    text-align: center;
    font-family: tahoma, sans-serif;
    font-weight: bold;
    font-size: 25px;
}

.input-small {
  width: 300px; /* ajuste conforme necessário */
  margin: 10px;

}

</style>