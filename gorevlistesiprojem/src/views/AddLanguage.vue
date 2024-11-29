<template>
<div>
  <h1 class="text-h4 text-center mt-10">Programlama Dili Ekleyin</h1>
    <div class="form-container">
      <v-form style="width: 800px;" v-model="formValid">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="programingLanguage"              
                label="Programlama Dili"
                :rules="[requiredRule]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea v-model="description" :rules="[requiredRule]" label="Programlama Dili İçerik"></v-textarea>
            </v-col>

            <v-col cols="12" md="6" style="display: flex; justify-content: end">
              <v-btn :disabled="!formValid" @click="submitForm">Ekle</v-btn>  <!-- :disabled="!formValid" => sonuf false yani buton aktif olur -->
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
export default {
  data() {
    return {
      programingLanguage:'',
      description:'',
      learned:false,
      formValid: false,
      requiredRule: (v) => !!v || "Bu alan zorunludur." // !! tersinin tersi islemi. Kullanici Bir sey girmemisse hata verir
    }
  },
  methods: {
    async submitForm(){
      const bilesenler = {
        languageName : this.programingLanguage,
        details : this.description,
        complete : this.learned
      };

      try {
         const response = await fetch("http://localhost:3000/programingLanguages",{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(bilesenler)
        });
        if(!response.ok){
          throw new Error(`Hata: ${response.status}`)
        }
        this.programingLanguage = "" ;
        this.description = "";
        this.learned = false;

        const data = await response.json();
        console.log(data)
        this.$toast.success("Islem Basarili",{
          position : 'bottom-right',
          timeout : 3000
        })
        this.$router.push('/')

      } catch (error) {
        console.log(error)
        this.$toast.error("Islem Basarisiz",{
          position : 'bottom-right',
          timeout : 3000
        })
      }
      
    }
    
  },
  
}
</script>


<style>
.v-selection-control__input input{
  opacity: 1 !important;
  width: 100%;
  height: 70% !important;
  display: flex;
  align-items: center !important;
}

.form-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
}
</style>
