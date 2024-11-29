<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>

</template> 

<script>
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AddLanguage from './views/AddLanguage.vue'
import EditLanguage from './views/EditLanguage.vue'

export default {
  name:"App",
  components: {
    HomeView,
    AddLanguage,
    EditLanguage,
    Navbar
  },
  data() {
    return {
      isActive:true
    }
  },
}

</script>

<style scoped>
.routerLinks{
  text-align: center;
  font-size: 17px;
  margin-bottom: 10px;
}

.active-link{
  padding: 10px;
  font-weight: bold;
  margin-right: 10px;
}

</style>
