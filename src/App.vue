<template>
  <div id="app">
    <!-- https://tpc.googlesyndication.com/simgad/16268655339236767166 -->

    <!--Icone https://cybercook.com.br/assets/mr-pancake/images/logos/cybercook.svg -->

    <!-- https://img.cybercook.com.br/receitas/791/nhoque-de-batata-doce-2.jpeg?fm=jpeg&w=1024 -->

    <Header  heade msg="Welcome to Your Vue.js App" />
    <Recipes recipes/>
    <Feeds feeds/>

  </div>
</template>

<script>
import Header from './components/Header'
import Recipes from './components/recipes/Recipes'
import Feeds from './components/feeds/Feeds'


export default {
  name: 'app',
  components: {
    Header,
    Recipes,
    Feeds
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
    box-sizing: border-box;
    width: 51.88%; 
    max-width: 996px;
    /* min-width: 500px; */
    margin: 0 auto;

    display: flex;
    flex-direction: column;


    /* grid-template-columns: 51.88%;
    grid-template-rows: 226px 326px 856px 316px; */
    padding: 5px 15px 30px;
    border: 1px solid orange;
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
