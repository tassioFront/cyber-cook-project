<template>
    <main class="content-recipes">
      <!-- Banner -->
      <div class='banner-2' > <!-- banner image is here -->
        
        <div class="banner-2-title"> <!-- content banner -->

          <h1> Encontre Receitas deliciosas!</h1>

          <!-- search -->
          <div class="banner-2-search">
            <input ref="search" type="search" @input="recipeInputed = $event.target.value" placeholder="Nome ou ingredientes">
            <img src="https://img.icons8.com/ios/38/ffffff/search-filled.png">
          </div>

          <div class="banner-2-chef">
            <h3>
              Sugestões do Chef: 
              <span>?</span>
            </h3>
          </div>

          <div class="banner-2-chef-suggestion">
            <ul>
              <li>Costela Morinado </li>
              <li>Batatas recheadas</li>
              <li>Omelete</li>
              <li>Bacalhau</li>
            </ul>
          </div>

          <span class="banner-2-day"> <strong>Receita do dia: </strong>Coxinha de Frango Fritas com alho</span>
        
        </div> <!-- Banner-2-title -->

      </div><!-- Banner -->

      <!-- recipes-list -->
        <section class="recipes-section">
          <div noRecipe v-if="!noRecipe == ''"> <h5> {{ noRecipe }}</h5></div>
          <article class="recipes-section-content" v-for="recipe in filterRecipe" :key="recipe.title"  >
            <a :href='recipe.link'>
              <img :src="recipe.image" :alt="recipe.title">
            </a>

            <span class="recipes-section-content-detail" :class="recipe.rating == 0 ? 'bottom-rating-1' : 'bottom-rating-2'" >   <!-- these both class will be defined by Vue, depending of rating -->
              <a :href='recipe.link'>
                <h3> {{ recipe.title }} </h3>
              </a>
              <span v-if="recipe.rating > 0">
                <img  v-for="score in recipe.rating" :key="score" src="https://img.icons8.com/material/24/fa9e22/star.png">
              </span>
            </span>
          </article>

        </section>

    </main>
</template>

<script>
import data from '../../../public/cybercook.json'
import eventBus from '@/helpers/eventBus'

export default {
    
  data() {
    return {
      recipes: data.recipes,
      recipeInputed: '',
      noRecipe: ''
    }
  },
  computed: {
    filterRecipe() {
        if(this.recipeInputed) {

          const exp = new RegExp(this.recipeInputed.trim(), 'i');
          const filtered = this.recipes.filter(recipe => exp.test(recipe.title));
          console.log(filtered)
           filtered.length == 0 ? this.noRecipe = 'Desculpe, não encontramos essa receita  :{( ' : this.noRecipe = ''
            
          return filtered
        } else {
          return this.recipes;
        }
    }
  },
  created() {
    eventBus.onMakeSearch( click => {
      if (click) {
        this.$refs.search.focus()
      }
    })
  }

}
</script>

<style scoped>
  main {
    padding: 0% 0% 16px 0%; 
    margin: 0%;
  }

  /* Banner*/
  .banner-2, .banner-2-title, .banner-2-title h1 {
    width: 100%;
  }

  .banner-2 {
    background-image: url('https://img.cybercook.com.br/receitas/791/nhoque-de-batata-doce-2.jpeg?fm=jpeg&w=1024');
    height: 278px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 28px;
  }

  /* .banner-2>.banner-2-title */
  .banner-2-title {
    position: absolute;
    height: 100%;
    padding-top: 35px;
    margin: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner-2-title h1 {
    padding: 0%;
    margin: 0% 0% 2%;
    height: 15.35%;
    color: #fff;
    font-weight: 900;
    text-shadow: 0 0.06em 0 #191919;
    font-size: 2.7rem;
    text-align: center;
  }

  .banner-2-chef, .banner-2-chef-suggestion, .banner-2-day {
    width: 100%;
  }

  .banner-2-search {
    width: 35.4037%;
    height: 18.134%;
    display: flex;
    align-items: center;
    margin-bottom: 1.2%;
  }

  .banner-2-search input {
    border: 0;
    width: 90.4%;
    opacity: 0.8;
    border-radius: 10px;
    height: 100%;
    color: #888888;
    text-align: center; 
    font-size: 1rem;
  }

  .banner-2-search img {
    width: 10%;
    height: 61.1111%; 
    margin-left: 2%;
  } 

  .banner-2-chef {
    height: 6.0403%;
    text-align: center;
    margin-bottom: 1.2%;
  }

  .banner-2-chef h3 {
    font-size: 0.8rem;
    color: #fff;
    margin: 0%;
    font-weight: 900;
  }

  .banner-2-chef span {
    background: #1f8769;
    border-radius: 50%;
    font-size: 0.75rem;
    padding: 0 4px;
    cursor: pointer;
  }

  .banner-2-chef-suggestion {
    height: 8.0536%;
    font-size: 0.75rem;
    padding: 0%;
    font-weight: 900;
    margin-bottom: 3%;
    display: flex;
    justify-content: space-between;
  }

  .banner-2-chef-suggestion ul {
    width: 100%;
    height: 100%;
    margin: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-2-chef-suggestion li {
    height: 100%;
    margin: 0 0.3%;
    padding: 0% 1%;
    color: #fff;
    background: #fb6300;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .banner-2-day{
    font-size: 0.72rem;
    margin-bottom: 2%;
    color: #fff;
    opacity: 0.8;
    text-align: end;
    padding-right: 18%;
  }

  /* Recipes */
  /* .banner-2>.recipes-section*/
  .recipes-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

   /* noRecipe */
  [noRecipe] {
    width: 100%;
    background: rgba(236, 86, 86, 0.5);
    color: #fff;
    text-align: center;
    font-size: 1.3rem;
    border-radius: 4px;
  }

  .recipes-section-content {
    width: 31.1055%;
    margin-bottom: 2%;
    position: relative;
  }

  .recipes-section-content img {
    height: 95%;
    width: 100%;
    margin-bottom: 26px;
  }

  .recipes-section-content-detail {
    position: absolute;
    left: 2%;
    z-index: 100;
  }

  .recipes-section-content-detail h3 {
    margin: 0%;
    font-size: 0.8rem;
    color: #fff;
    text-shadow: 1px 1px #191919;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .recipes-section-content-detail span {
    width: 100%;
  }

  .recipes-section-content-detail span img{
    width: 15px;
  }

  /* these both class will be defined by Vue, depending of rating */
  .bottom-rating-1 {
    bottom: 21%;
  }

  .bottom-rating-2 {
    bottom: 1%;
  }

  /* tablet */
  @media(max-width: 768px) {
    .banner-2-title {
      padding-top: 5px;
    }

    .banner-2-title h1 {
      margin-bottom: 5%;  
    }

    .banner-2-search {
      width: 100%;
      justify-content: center;
      margin-bottom: 5%;
    }

    .banner-2-search input {
      height: 50px;
    }

    .banner-2-search img {
      max-width: 30px;
    }

    .banner-2-day {
      text-align: center;
      padding-right: 0%;
    }

    .recipes-section {
      flex-direction: column;
    }
    .recipes-section-content {
      width: 100%;
      height: 300px;
    }

  }

  /*smaller tablet and so on */
  @media(max-width: 672px) {
    .banner-2 {
      height: 400px;
    }
  
    .banner-2-title h1 {
        margin-bottom: 60px; 
        font-size: 2.4rem; 
    }
  }


</style>
