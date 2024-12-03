<template>
    <div class="carouselDiv">
        <carousel :items-to-show="1.5" :loop="false">
        <slide v-for="category  in categories" :key="category.id" @click="handleClick(category)">
            <v-card class="cardSize bg-secondary">
                <div class="divCardImg">
                    <v-img
                    class="category-image"
                    :width="250"
                    :height="150"
                    cover
                    :src="category.categoryIMG"             
                    ></v-img>                               
                </div>
                <div class="divCardTitle">
                    <v-card class="my-2" >{{category.name}}</v-card>
                </div>
                     
            </v-card>
            

        </slide>
        </carousel>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
        categories:[],
    }
  },
  methods: {
    handleClick(category){
        this.$emit('slideClicked',category)
    }
  },    
  async mounted() {
    try {
        const response = await fetch('http://localhost:3000/categories');
        if(response){
            const data = await response.json();
            this.categories = data
        }
    } catch (error) {
        console.log(error,"Hata Var")
    }
  },
}
</script>

<style >
.carouselDiv{
    margin-top: 50px;
    cursor: pointer;
    
}


.carousel__track {
  height: 250px; 
  width: 27%;
}

.cardSize{
    width: 300px;
    min-height: 250px;
    height: auto;
    transition: transform 0.3s ease-in-out;
}

  /* Slider Ogeleri Uzerine Gelindiginde Renk Degissin */
.carouselDiv .cardSize.v-card {
  transition: background-color 0.3s ease;     /* Geçiş efekti ekler */
}

.carouselDiv .cardSize.v-card:hover {
  background-color: rgb(110, 216, 193) !important;  /* Hafifçe açılan renk */
}
/* ---------------------------------- */



.divCardImg{
    margin: 15px 25px;
}

.divCardTitle{
    display: flex;
    justify-content: center;
}

.divCardTitle .v-card{
    padding: 2px 5px;
    margin: 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    letter-spacing: 1px;
}

.category-image {
  width: 100%; /* Kapsayıcı div'e uyum sağlar */
  height: 150px; /* Tüm resimler aynı yükseklikte */
  object-fit: cover; /* Resmi kesmeden, alanı doldur */
  border-radius: 8px; /* Hafif yuvarlatılmış kenarlar için */
}

</style>