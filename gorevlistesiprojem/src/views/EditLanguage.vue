<template>
    <div>
        <h1 class="text-h4 text-center mt-10">Programlama Dili Ekleyin</h1>
            <div class="form-container">
                <v-form style="width: 800px;">
                    <v-container>
                    <v-row>
                        <v-col cols="12" md="12">
                        <v-text-field
                            v-model="languageName"              
                            label="Programlama Dili"
                        ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                        <v-textarea  v-model="details" label="Programlama Dili İçerik"></v-textarea>
                        </v-col>

                        <v-col cols="12" md="6" style="display: flex; justify-content: end">
                        <v-btn @click="submitForm">Ekle</v-btn>
                        </v-col>
                        <v-col cols="12" md="6">
                        <v-checkbox v-model="learned" label="Öğrenildi" style="display: flex; justify-content: start"></v-checkbox>
                        </v-col>

                    </v-row>
                    </v-container>
                </v-form>
            </div>
    </div>
</template>
<script>
import {} from 'vue-router'
export default {
    data() {
        return {
            languageName : "",
            details : "",
            learned: null,
            uri:`http://localhost:3000/programingLanguages/${this.$route.params.id}`
        }
    },
    async created() {
        try {
            console.log('Gelen ID:', this.$route.params.id);
            const languageId = this.$route.params.id
            const response = await fetch(`http://localhost:3000/programingLanguages/${languageId}`)

            if(response.ok){
                const data = await response.json()
                console.log(data)
                this.languageName = data.languageName;
                this.details = data.details;
                this.learned = data.complete;

            }
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    },
    methods: {
    async submitForm(e){
        e.preventDefault();
            console.log("asdsas")
            const response = await fetch(this.uri,{
                        method:'PATCH',
                        headers: {'Content-Type' : 'application/json'},
                        body: JSON.stringify({languageName:this.languageName,details:this.details,complete:this.learned})
                    })
            if(response.ok){
               const data = await response.json();
                console.log(data)
                this.$router.push('/')
            }
        }
    },
}
</script>

<style scoped>


</style>