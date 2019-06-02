<template>
    <main class="content-recipes">
      <!-- Banner -->
      <div class='banner-2' >
        
        <div class="banner-2-title">

          <h1> Encontre Receitas deliciosas!</h1>

          <!-- search -->
          <div class="banner-2-search">
            <input type="text" placeholder="Nome ou ingredientes">
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
        </div> <!-- Banner -->

        <!-- recipes-list -->
        <section>
          <article>

          </article>

        </section>


      </div>
    </main>
</template>

<script>
import data from '../../../public/cybercook.json'


export default {
    
  data() {
    return {
      data: data
    }
  },
  created() {
    console.log(data)
  }

}
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0%;
    margin: 0%;
  }
  .banner-2 {
    background-image: url('https://img.cybercook.com.br/receitas/791/nhoque-de-batata-doce-2.jpeg?fm=jpeg&w=1024');
    width: 100%;
    height: 298px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .banner-2-title {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 35px 0% 7.0469% 0%;
    margin: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner-2-title h1 {
    padding: 0%;
    margin: 1% 0%;
    width: 68.84%;
    height: 15.35%;
    color: #fff;
    font-weight: 900;
    text-shadow: 0 0.06em 0 #191919;
    font-size: 2.2rem;
    text-align: center;
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
    width: 18%;
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
    display: flex;
    justify-content: space-between;
    width: 46.339%;
    height: 8.0536%;
    font-size: 0.75rem;
    padding: 0%;
    font-weight: 900;
    margin-bottom: 4.3959%;
  }
  .banner-2-chef-suggestion ul {
    width: 100%;
    height: 100%;
    margin: 0%;
    display: flex;
    align-items: center;

  }
  .banner-2-chef-suggestion li {
    height: 100%;
    margin: 0 0.5%;
    padding: 0% 1%;
    color: #fff;
    background: #fb6300;
    display: flex;
    align-items: center;
  }

  .banner-2-day{
    font-size: 0.72rem;
    margin-bottom: 2%;
    margin-left: 45%;
    color: #fff;
    opacity: 0.8;
  }

  .banner-2-day strong {
    color: #fff;
  }
  

</style>
