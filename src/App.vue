<template>
  <div>
    <Navbar @slideClicked="clickToSlide"/>
    <ContentMenu :category="selectedSiled"/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import ContentMenu from './components/ContentMenu.vue' 
import Footer from './components/Footer.vue'
export default {
  name:"App",
  components: {
    Navbar,
    ContentMenu,
    Footer
  },
  data() {
    return {
      selectedSiled:[]
    }
  },
  async created(){          // created sayesinde sayfa acildiginda veriyi cekip bilesene yuklemis olduk
    try {
      const response = await fetch("http://localhost:3000/categories")
      if(response.ok){
        const data = await response.json();
        this.selectedSiled = data[0]        // data icindeki ilk elemani esitledik
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    clickToSlide(category){
      this.selectedSiled = category   // tiklanilan ogenin bilgileri
      //console.log(category)
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
