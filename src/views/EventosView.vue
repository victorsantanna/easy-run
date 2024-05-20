<template>
    <h1>Eventos</h1>
    <div>
        <ul>
            <li v-for="evento in eventos" :key="evento.nome">
                Nome: {{ evento.nome }}<br>
                Local: {{ evento.Local }}<br>
                Data: {{ evento.data }}<br>
                Distâncias: {{ evento.Distancia }}<br> <br>
            </li>
        </ul>
    </div>
</template>

<script setup>
const eventos = [
    {nome: 'Night Run', Local:'Recife', data: '25/05/2024', Distancia:'10/5km'},
    {nome: '19ª Corrida das Pontes do Recife', Local:'Recife', data: '02/06/2024', Distancia:'10/5km'},
    {nome: 'Music Running 2024 - São João do Mundo', Local:'Caruaru', data: '09/06/2024', Distancia:'10/5km'},
    {nome: '46ª Corrida Guararapes', Local:'Recife', data: '09/06/2024', Distancia:'10/5km'},
    {nome: 'Maratona Internacional de Olinda', Local:'Olinda', data: '16/06/2024', Distancia:'42/21/10/5km'},
    {nome: 'Circuito das Estações 2024 - Inverno', Local:'Recife', data: '07/07/2024', Distancia:'15/10/5km'},

]

</script>