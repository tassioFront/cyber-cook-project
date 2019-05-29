<template>
  <div id="app">
    <!-- https://cybercook.com.br/assets/mr-pancake/images/logos/cybercook.svg -->

    <!-- https://img.cybercook.com.br/receitas/791/nhoque-de-batata-doce-2.jpeg?fm=jpeg&w=1024 -->

    <Header msg="Welcome to Your Vue.js App"/>
    <Banner/> 
    <Recipes/>
    <Feeds/>

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
  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }
    
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 995px;
    margin: 0 auto;
}
</style>
