<template>
    <nav>
        <div style="display:flex; justify-content:center;">
            <v-tab :to="{ name: 'Home' }">Anasayfa</v-tab>
            <v-tab :to="{ name: 'AddLanguage' }">Programlama Dili Ekle</v-tab>
            
            
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>

</style>