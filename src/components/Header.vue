<template >
  <header>
    <a class="banner-1" href="https://tpc.googlesyndication.com/simgad/16268655339236767166">
      <img  src="https://tpc.googlesyndication.com/simgad/16268655339236767166" alt="Conheça estes diferentões">    
    </a>

    <div class="menu">
      <!-- icon -->
      <a class="icon-link" href="https://cybercook.com.br/">
        <img class="icon" src="https://cybercook.com.br/assets/mr-pancake/images/logos/cybercook.svg" alt="Cyber Cook"/> 
      </a>
      <!-- menu content -->
      <div class="menu-content">
      
        <div class="menu-link">

          <div class="social">
            <span> Siga-nos: </span>
            <a href=""><img social src="https://img.icons8.com/color/50/000000/facebook-circled.png"></a>
            <a href=""><img social src="https://img.icons8.com/color/50/000000/pinterest.png"></a>
            <a href=""><img social src="https://img.icons8.com/color/50/000000/youtube-squared.png"></a>
            <a insta href=""><img social src="https://img.icons8.com/material-rounded/50/97714b/instagram-new.png"></a>
            <a href=""><img social src="https://img.icons8.com/color/50/000000/twitter-circled.png"></a>
            <a href=""><img social plus src="https://img.icons8.com/color/48/000000/google-plus.png"></a>
          </div>

          <div class="actions">
            <div @click="search(true)" class="search"> <img actions src="https://img.icons8.com/ios/38/fa9e22/search-filled.png"></div>
            <div @click="news($event)" class="notification">
              <img actions src="https://img.icons8.com/material-rounded/24/fa9e22/appointment-reminders.png">
              <span>1</span>
            </div>
            <div @click="news($event)" class="recipes-book">
              <img src="https://img.icons8.com/metro/26/ffffff/hearts.png">
              <span>Livro de Receitas</span>
            </div>
            <div @click="news($event)" class="book-create"> <span> Criar seu Livro </span></div>
          <span @click="toggle($event)" class="btn-menu"> MENU </span> <!-- small devices only -->
          </div>
        </div> <!-- menu link-->
      
        <nav ref="nav" class="navbar">
          <span @click="toggle($event)" class="btn-close"> X </span> <!-- small devices only -->
          <ul class="navbar-list">
            <li ref="detail1" @click="toggle($event)" class="navbar-content"> <a>Receitas</a> 
              <img  src="https://img.icons8.com/android/50/fa9e22/sort-down.png">
              <ul class="navbar-content-detail" :class= "{none: detail1 }">
                <li> <a>Opção 1</a></li>
                <li> <a>Opção 2</a></li>
                <li> <a>Opção 3</a></li>
              </ul>
            </li>
            <li> <a href="">CookClub</a> </li>
            <li> <a href="">#FoodieFeed</a> </li>
            <li ref="detail2" @click="toggle($event)" class="navbar-content"> <a >#TeamCook</a> 
              <img src="https://img.icons8.com/android/50/fa9e22/sort-down.png">
              <ul  class="navbar-content-detail"  :class= "{none: detail2 }">
                <li> <a>Opção 1</a></li>
                <li> <a>Opção 2</a></li>
                <li> <a>Opção 3</a></li>
              </ul>
            </li>
            <li ref="detail3" @click="toggle($event)" class="navbar-content"> <a >Vídeo</a>
              <img src="https://img.icons8.com/android/50/fa9e22/sort-down.png">
              <ul class="navbar-content-detail" :class = "{none: detail3}" >
                <li> <a>Opção 1</a></li>
                <li> <a>Opção 2</a></li>
                <li> <a>Opção 3</a></li>
              </ul>
            </li>
            <li> <a href=""> Pergunte à comunidade</a> </li>
          </ul>
        </nav>

      </div> <!-- menu content -->

    </div> <!--menu-->

  </header>
</template>

<script>
import eventBus from '@/helpers/eventBus'

export default {
    data() {
      return {
        detail1: true,
        detail2: true,
        detail3: true,
        navBar: false
      }
    },
    methods: {
      toggle(e) {
        if (e.path[0].outerText === 'Receitas') {
            this.detail1 = !this.detail1
        } else if (e.path[0].outerText === '#TeamCook') {
            this.detail2 = !this.detail2
        } else if (e.path[0].outerText === 'Vídeo') {
            this.detail3 = !this.detail3
        } else if (e.path[0].outerText === 'MENU') {
            this.navBar === true ? this.$refs.nav.style.display = 'block' : this.navBar 
            this.navBar = !this.navBar
        } else if (e.path[0].outerText === 'X') {
            this.navBar === false ? this.$refs.nav.style.display = 'none' : this.navBar 
            this.navBar = !this.navBar
        }
      },
      news(event) {
        const name = event.path[1].className
        name ? alert(`Direciona para ${name.toUpperCase()}`) : name
      },
      search(click) {
        eventBus.makeSearch(click)
      }
    
    }
  
}
</script>


<style scoped>
  /* toggle class navbar  */
  .none {
    display: none;
  } 

  header {
    align-items: center;
    padding-bottom: 10px;
  }

  /* advertising */
  header .banner-1 {
    margin-bottom: 11px;
    width: 73.192%;
  }

  .banner-1 img {
    width: 100%;
  }

  /* menu */
  .menu, .menu-content, .menu-link {
    display: flex;
  }

  .menu {
    width: 100%;
    height: 45.57%;
  }

  .icon {
    width: 100%;
  } 

  .menu-content, .menu-link, .menu-link .social,.actions, .navbar{
    flex-grow: 1;
  }

  /* .menu-content */
  .menu-content {
    flex-direction: column;
  }

  /* menu-content>menu-link and navbar */
  .menu-link, .navbar  {
    height: 50%;
    display: flex;
    }


  /* menu-content>menu-link */
  [social], [actions] {width: 100%;}

  /*social */
  .social, .social a {
    display: flex;
    align-items: center;
  } 

  .social {
    justify-content: start;
    width: 50%;
  }

  .social span {
    margin-right: 1.9%;
    font-size: 0.7rem;
    color: #888888;
  }

  .social a {
    height: 58.25%;
    width: 8%;  
  }

  /* Actions */
  .actions { 
    flex-grow: 1;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search, .notification, .recipes-book, .book-create {
    height: 66.019%;
  }

  .search, .notification {
    width: 11.339%;
    display: flex;
    align-items: center;
  }

  .notification {
    position: relative;
  }

  .notification span, .recipes-book {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .notification span {
    position: absolute;
    width: 14px;
    height: 14px;
    left: -5%;
    top: -5%;
    border-radius: 50%;
    background: #e74f23;
    font-size: 12px;
  }

  .recipes-book {
    width: 58.034%;
    margin-right: 1.9%;
    background: #fa9e22;
    border-radius: 32.67px;
    cursor: pointer;
  }

  .recipes-book img {
    height: 64.7059%;
  }

  .recipes-book span, .book-create span {
    font-size: 1rem;
  }

  .book-create {
    width: 45.693%;
    background: #e74f23;
    border-radius: 32.67px;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-menu, .btn-close {
    display: none;
  }


  /* menu-content>navbar */
  .navbar-list {
    margin: 0%;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }

  .navbar-list li {
    margin: 0% 1.1387%;
  }

  .navbar-list li:nth-child(1) {
    margin-left: 0px;
  }

  .navbar-list li a {
    font-size: 1.1rem;
    color: #e75024;
  }

  /* li's with content */
  .navbar-content {
    position: relative;
    display: flex;
    align-items: center;
  }

  .navbar-content img {
    height: 1rem;
  }

  .navbar-content-detail {
    position: absolute;
    z-index: 100;
    top: 100%;
    width: 200px;
    background: #fff;
    border: 5px solid rgb(238, 230, 230);
    border-radius: 4px;
    padding-left: 2px;
    text-align: center;
  }

  .navbar-content-detail li {
    padding: 4px 0%;
    width: 100%;
  }

  .navbar-content-detail a:hover {
    text-shadow: 1px 1px #888888;
    font-weight: 900;

  }

  /* tablet */
  @media(max-width: 900px) {
    header .banner-1 {
      width: 100%;
    }

    .menu {
      flex-direction: column;
    }

    .menu-content {

      min-height: 70px;
    }
    .icon {
      width: 5%;
      min-width: 60px;
    }

    .icon-link {
      display: flex;
      justify-content: center;
    }
  }

  @media(max-width: 768px) {
    .menu-link {
      flex-direction: column;
      align-items: center;
    }

    .social, .actions {
      justify-content: center;
      max-height: 40px;
    }

    .social {
      width: 100%;
    }

    .actions {
      width: 50%;
      flex-wrap: wrap;
      margin-bottom: 20%;
    }

    .search, .notification {
      margin-left: 20%;
      height: 30px;
      width: 30px;
    }

    .search {
      margin-bottom: 6px;
    }
    
    .notification {
      margin-bottom: 2.5%;
    }

    .social img {
      max-width: 40px;
    }

    .recipes-book, .book-create {
      min-height: 32px;
    }

    .recipes-book {
      min-width: 215.88px;
      margin-bottom: 2px;
    }

    .book-create {
      min-width: 169.97px
    }

    .navbar {
      display: none;
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 200%;
      background: rgba(71, 73, 71, 0.95);
      align-items: center;
      z-index: 300;
      padding-top: 10%;
      
    }

    .btn-close {
      top: 3%;
      right: 3%;
      display: block;
      position: absolute;
      font-size: 1.3rem;
      border: 2px solid #e75024;;
      color: #e75024;;  
      padding: 1%;
      border-radius: 50%;
    }

    .btn-menu {
      width: 70%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2px auto 2px;
      border: 1.5px solid rgb(70, 64, 64);
      box-shadow: 1.5px 1px #888888;
      border-radius: 4px;
    }

    .navbar-list {
      height: 80%;
      margin-top: 5%;
      align-items: center;
      flex-direction: column;
    }

    .navbar-list li {
      margin: 4% 1.1387%;
    }
  }

  /*smaller devices */
  @media(max-width: 542px) {
    header {
      margin-bottom: 40px;
    } 
  }

</style>
