<template>
    <div class="languages" :class="{'border-left-green': language.complete}">
        <div class="title">
            <h3 @click="showMore">{{language.languageName}}</h3>
            <div class="icons">
                <span @click="learned" class="material-icons tick">check</span>
                <span @click="deletePrograming" class="material-icons">delete</span>
                <v-tab :to="{ name: 'EditLanguage', params: { id: language.id } }">
                    <span class="material-icons">edit</span>
                </v-tab>
            </div>
        </div>
        <div class="details" v-if="icerik">
            <p>{{language.details}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"SingleProgramingLanguage",
    props: ['language'],
    data() {
        return {
            icerik:false,
            uri:'http://localhost:3000/programingLanguages/' + this.language.id 
        }
    },
    methods: {
        showMore(){ 
            this.icerik = !this.icerik
        },
        learned(){

            fetch(this.uri,{
                method:"PATCH",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({complete:!this.language.complete})
                })
                
               .then(() => {
                //this.language.complete = !this.language.complete;     diger bilesende durum guncellemesi yapmadan burada da yapabiliriz   
                this.$emit('complete',this.language.id)
                })
               .catch(err => console.log(err))
               
        },
        
        deletePrograming(){
            //console.log(this.language.id)           hangi ogeye tiklayip silmek istediysek onun bilgilerine ulasabiliriz
            fetch(this.uri,{method:"DELETE"})            //this.$emit('delete',this.language.id)   // diger tarafta karsilanacak emit ismi('delete') ve giden bilgi(this.language.id)
            .then(() => this.$emit('delete',this.language.id ))
        }
    },
            

}
</script>

<style scoped>
.languages{
    border: 2px solid gray;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    border-left: 10px solid #F4511E;
    width: 750px;
}


.border-left-green{
    border-left: 10px solid #009688;
}

.border-left-green .tick{
   color: #009688;
}


h3{
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    height: 40px;
}

p{
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    margin-top: 10px;
}

.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icons{
    cursor: pointer;
    font-size: 25px;
    margin-right: 5px;
   
}

.icons {
    display: flex;
    align-items: center;
    justify-content: space-between; /* İkonlar arasında boşluk bırakmak için */
}

.v-tab.v-tab.v-btn{
    padding: 0px;
    min-width: 30px;
   
}

</style>