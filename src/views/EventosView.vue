<template>
    <h1>Eventos</h1>
    <div class="columns is-multiline mt-5">
        <CardEventos v-for="evento in eventos " :key="evento.nome" :eventoRecebido="evento"/>

    </div>

</template>

<script setup>
import CardEventos from '../components/CardEventos.vue'

const eventos = [
    {nome: 'Night Run - Recife', Local:'Recife', data: '25/05/2024', Distancia:'10/5km'},
    {nome: 'Corrida das Pontes', Local:'Recife', data: '02/06/2024', Distancia:'10/5km'},
    {nome: 'Music Running 2024 - São João', Local:'Caruaru', data: '09/06/2024', Distancia:'10/5km'},
    {nome: '46ª Corrida Guararapes', Local:'Recife', data: '09/06/2024', Distancia:'10/5km'},
    {nome: 'Maratona de Olinda', Local:'Olinda', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {nome: 'Circuito das Estações 2024', Local:'Recife', data: '07/07/2024', Distancia:'15/10/5km'},
    {nome: 'Maratona de Olinda', Local:'Olinda', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {nome: 'Circuito das Estações 2024', Local:'Recife', data: '07/07/2024', Distancia:'15/10/5km'},
    {nome: 'Maratona de Olinda', Local:'Olinda', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {nome: 'Circuito das Estações 2024', Local:'Recife', data: '07/07/2024', Distancia:'15/10/5km'},
    {nome: 'Maratona de Olinda', Local:'Olinda', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {nome: 'Circuito das Estações 2024', Local:'Recife', data: '07/07/2024', Distancia:'15/10/5km'},

]

</script>