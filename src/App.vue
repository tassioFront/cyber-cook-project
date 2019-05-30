<template>
  <div id="app">
    <!-- https://cybercook.com.br/assets/mr-pancake/images/logos/cybercook.svg -->

    <!-- https://img.cybercook.com.br/receitas/791/nhoque-de-batata-doce-2.jpeg?fm=jpeg&w=1024 -->

    <Header heade msg="Welcome to Your Vue.js App"/>
    <Banner banner/> 
    <Recipes recipes/>
    <Feeds feeds/>

  </div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
import Feeds from './components/feeds/Feeds'
import Recipes from './components/recipes/Recipes'


export default {
  name: 'app',
  components: {
    Header,
    Banner,
    Feeds,
    Recipes
  }
}
</script>

<style>
 *{box-sizing: border-box}
  body {
    margin: 0;
    padding: 0;
    background: #fff;

  }
    
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 996px;
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 966px;
    grid-template-rows: 226px 326px 856px 316px;
    padding: 5px 15px 30px;
}

  [heade], [banner], [recipes], [feeds] {
    border: 1px solid orange;

  }

  [heade] {
    padding-bottom: 10px;
  }

  [banner] {
    padding-bottom: 28px;
  }

  [recipes] {
    padding-bottom: 40px;
  }
</style>
