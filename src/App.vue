<template>
  <div id="app"> <!--container-->
  
    <Header  head /> <!-- includes from first banner until navbar -->
    <Recipes recipes/> <!-- includes from second banner until recipes content-->
    <Feeds feeds/> <!-- includes FoodieFeed only-->

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

  /* large laptops */
  @media (min-width: 1100px) {
    
    #app {
      width: 61.88%; 
      max-width: 996px;
      min-width: 957.547px;
    }

  }

  /* container */
  #app {
    font-family: 'Kadwa', Georgia, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 5px 10px 30px;
  }

  [head], [recipes], [feeds] {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  /* tablet */

  @media(max-width: 900px) {
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
