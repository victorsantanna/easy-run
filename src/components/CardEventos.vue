<template>
    <div class="column is-3">
    <RouterLink :to="{ name: 'eventoDetalhe', params: { id: eventoRecebido.id } }">
        <div class="card" >
            <div class="card-content custom-card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-6">{{ eventoRecebido.nome }}</p>
                        <p class="subtitle is-6">Local: {{ eventoRecebido.Local }}</p>
                        <hr>
                    </div>
                </div>
                <div class="content ">
                    <p>Data: {{ eventoRecebido.data }}</p><br>
                </div>
            </div>
        </div>
    </RouterLink>
    </div>
    
</template>

<script setup>
defineProps({
    eventoRecebido: Object
})
</script>

<style scoped>
.title{
    font-size: 15px;
}

.card{
    height: 200px;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
    cursor: pointer;
}
.card:hover {
  box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.3); /* Sombra ao passar o mouse */
}
.card-content{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    
}
.media{
    margin-bottom: 0.1rem;
}

.media-content{
    width: 158.5px;
    height: 104px;
}
.custom-card-content{
    width: 206.5px;
    height: 200px;
}

.subtitle{
    margin-top:4px;
    font-size: 13px;
}
</style>