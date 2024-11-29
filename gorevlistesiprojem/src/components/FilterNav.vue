<template>
    <div class="filterButtonDiv">
        <v-btn @click="updateFilter" >
            Tumu
        </v-btn>
        <v-btn @click="updateFilter('learned')" >
            Öğrenildi
        </v-btn>
        <v-btn @click="updateFilter('continueLearn')" >
            Öğrenilmeye Devam Ediyor
        </v-btn>
        
        <v-switch @click="changeColorBg"
        label="Koyu Tema"  
        hide-details
        v-model="darkTheme"
        ></v-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            darkTheme:false
        }
    },
    methods: {
        updateFilter(status){
            this.$emit('updateFilter',status)
        },
        changeColorBg(){
            this.darkTheme = !this.darkTheme
            this.$emit('changeColorBg',this.darkTheme)
        }
    },
}
</script>
<style scoped>
.filterButtonDiv{
    display: flex;
    justify-content: center;
    margin: 15px;
    gap: 20px;
}

.v-switch__track::before {
  opacity: 0; /* Eğer bir pseudo element var ise onu kaldırır */
}
</style>