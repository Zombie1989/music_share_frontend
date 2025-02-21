<template>
    <div>
        <h1>{{ message }}</h1>
        <a href="http://localhost:8080/login" target="_blank" rel="noopener noreferrer">Login</a>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue';
    import { fetchMessage } from '../services/api';

    export default defineComponent({
        name: 'Home',
        setup() {
            const message = ref('');  

            onMounted(async () => {
            try {
                const data = await fetchMessage();
                message.value = data.message; 
            } catch (error) {
                message.value = 'Fel vid hämtning av meddelande'; 
            }
            });

            return {
            message,  
            };
        },
    });



</script>

<style scoped lang="scss">

</style>
