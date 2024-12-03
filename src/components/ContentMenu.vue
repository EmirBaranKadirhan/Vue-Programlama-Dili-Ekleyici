<template>
    
  <div class="productDiv">
  
  
    <v-container class="mb-7 d-flex justify-center align-center">
        <h1>{{category.name}}</h1>
    </v-container>   
    <v-row 
      v-for="product in category.products" 
      :key="product.id" 
      class="productItem mb-7 bg-secondary" 
      align="center"
    >
      <!-- Content Column -->
      <v-col cols="8">
        <div class="productContent">
          <div class="productTitle">{{ product.name }}</div>
          <div class="productIngredients">
            <span v-for="(ingredient, index) in product.ingredients" :key="index">
                {{ ingredient }}
                <span v-if="index !== product.ingredients.length-1">,</span>   <!-- ingredient'in her bir öğesini v-for ile döngüye alır ve son öğe hariç her öğeden sonra bir virgül ekler. -->
            </span>
          </div>
        </div>
      </v-col>

      <!-- Image Column -->
      <v-col cols="4" class="productImage">
        <img 
          :src="product.img"
          alt="Product Image"
        />
      </v-col>

      <!-- Price Column -->
      <v-col cols="12" class="productPrice">
        {{ product.price }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
        
    }
  },
 
};
</script>

<style>
.productDiv {
  margin: 30px 40px;         /* Sol ve sağ margin kaldırıldı */
  padding: 0 10px;          /* İçeriklerin ekrana sığması için padding eklendi */
  box-sizing: border-box;
  margin-bottom: 160px;
  
}

.productItem {
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.productItem:hover {
  background-color: rgb(110, 216, 193) !important;
}

.productTitle {
  font-size: 1.2em;
  font-weight: bold;
  max-width: 75%;
}

.productImage img {
  width: 100%;             /* Görüntü kapsayıcı alanın genişliğini doldurur */
  height: auto;            /* Yükseklik oranı korunur */
  max-height: 200px;       /* Görüntünün maksimum yüksekliği belirlenir */
  object-fit: contain ;       /* Görüntü alanını tam doldurmak için kırpılır */
  border-radius: 5px;      /* Köşeleri yuvarlatılır (isteğe bağlı) */
}

.productPrice {
  font-size: 15px;
  color: white;
  text-align: left;
  padding: 0px;
}

.v-col{
 text-align: left;
}

.productIngredients{
    max-width: 40%;
    font-size: 13px;
}

</style>
