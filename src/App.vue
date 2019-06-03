<template>
  <div id="app">
  
    <Header  heade />
    <Recipes recipes/>
    <Feeds feeds/>

  </div>
</template>

<script>
import Header from './components/Header'
import Recipes from './components/recipes/Recipes'
import Feeds from './components/feeds/Feeds'


export default {
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
    font-family: 'Kadwa', Georgia, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    width: 61.88%; 
    max-width: 996px;
    /* min-width: 500px; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 5px 10px 30px;
    border: 1px solid orange;
}

  [heade], [recipes], [feeds] {
    border: 1px solid orange;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  /* tablet */

  @media(max-width: 1024px) {
    #app {
      width: 100%;
    }
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    cursor: pointer;
  }

  a, img {
    text-decoration: none;
    cursor: pointer;
  }
</style>
