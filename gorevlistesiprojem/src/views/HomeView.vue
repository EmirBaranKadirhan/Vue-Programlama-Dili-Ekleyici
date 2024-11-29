  <template>
    <main>
      <div v-if="programingLanguages.length">
          <h1 class="text-h4 text-center mt-10" :style="{color:darkTheme ? 'white' : 'black'}">Bildiğim Programlama Dilleri</h1>
          <FilterNav @updateFilter="filterStatus = $event" @changeColorBg="changeColor"/>  <!-- "$event" => bir olay tetiklendiğinde bu olaydan elde edilen veriyi temsil eder, emit edilen degeri filterStatus'a esitledik -->
          <div v-for="language in filteredLanguages" :key="language.id">  <!-- "filteredLanguages" => asagidaki computed'i buraya ekledik. Zaten filtreleme olamzsa tum programlama dillerini donduruyor -->
            <SingleProgramingLanguage :language="language" @complete="completeLanguage(language.id)" @delete="deleteLanguage(language.id)"/>    <!-- dongudeki "language" yi props olarak gonderdik -->
          </div>
      </div>   
    </main>
  </template>
  <script>
  import SingleProgramingLanguage from '../components/SingleProgramingLanguage.vue'
  import FilterNav from '../components/FilterNav.vue'
  export default {
    name:"HomeView",
    components: {
      SingleProgramingLanguage,
      FilterNav
    },
    data() {
      return {
        programingLanguages: [],
        filterStatus: null,
        darkTheme:false
      }
    },
    methods: {
      deleteLanguage(languageId){
        this.programingLanguages = this.programingLanguages.filter(language => language.id !== languageId)   // eslesmeyen oge diziden cikartilir
        console.log(this.programingLanguages)    

      },
      completeLanguage(languageId){
        let ebk = this.programingLanguages.find(language => language.id === languageId)
        console.log(ebk)
        ebk.complete = !ebk.complete
      },
      changeColor(status){
          this.darkTheme = status
          document.body.style.backgroundColor = status ? 'rgb(158, 157, 157)'  : 'rgb(255, 255, 255)'
      }
    },
    computed:{
      filteredLanguages(){
          if(this.filterStatus === 'learned'){
            return this.programingLanguages.filter(language => language.complete)
          }else if(this.filterStatus === 'continueLearn'){
            return this.programingLanguages.filter(language => !language.complete)
          }
          return this.programingLanguages       // Filtreleme durumu yoksa tüm dilleri döndürur 
      },
     
    },
    mounted(){
      fetch('http://localhost:3000/programingLanguages')
      .then(response => response.json())
      .then(data =>{
        this.programingLanguages = data           // data dan gelen veriyi listeye atadik
        console.log(this.programingLanguages)
      }).catch(err =>{
        console.log(err)
      })
  }
  }
  </script>

<style scoped>
h1{
    text-align: center;
    color: rgb(255, 255, 255);
}


  </style>
