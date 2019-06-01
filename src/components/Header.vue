<template >
  <header>
    <a class="banner-1" href="https://tpc.googlesyndication.com/simgad/16268655339236767166">
      <img  src="https://tpc.googlesyndication.com/simgad/16268655339236767166" alt="Conheça estes diferentões">    
    </a>

    <div class="menu">
      <!-- icon -->
      <a  href="https://cybercook.com.br/">
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
            <div class="search"> <img actions src="https://img.icons8.com/ios/38/fa9e22/search-filled.png"></div>
            <div class="notification">
              <img actions src="https://img.icons8.com/material-rounded/24/fa9e22/appointment-reminders.png">
              <span>1</span>
            </div>
            <div class="recipes-book">
              <img src="https://img.icons8.com/metro/26/ffffff/hearts.png">
              <span>Livro de Receitas</span>
            </div>
            <div class="book-create"> <span> Criar seu Livro </span></div>
          </div>
        
         </div> <!-- menu contente -->
      
        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-content"> <a href="">Receitas</a> 
              <img src="https://img.icons8.com/android/50/fa9e22/sort-down.png">
              <ul class="navbar-content-detail">
                <li> <a>Opção 1</a></li>
                <li> <a>Opção 2</a></li>
                <li> <a>Opção 3</a></li>
              </ul>
            </li>
            <li> <a href="">CookClub</a> </li>
            <li> <a href="">#FoodieFeed</a> </li>
            <li class="navbar-content"> <a href="">#TeamCook</a> 
              <img src="https://img.icons8.com/android/50/fa9e22/sort-down.png">
              <ul class="navbar-content-detail">
                <li> <a>Opção 1</a></li>
                <li> <a>Opção 2</a></li>
                <li> <a>Opção 3</a></li>
              </ul>
            </li>
            <li class="navbar-content"> <a href="">Vídeo</a>
              <img src="https://img.icons8.com/android/50/fa9e22/sort-down.png">
              <ul class="navbar-content-detail">
                <li> <a>Opção 1</a></li>
                <li> <a>Opção 2</a></li>
                <li> <a>Opção 3</a></li>
              </ul>
            </li>
            <li> <a href=""> Pergunte à comunidade</a> </li>
          </ul>
        </nav>

      </div>

    </div>

  </header>
</template>

<script>

export default {
  
  
}
</script>


<style scoped>

header {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.menu {
  width: 100%;
  height: 45.57%;
  display: flex;
}

.icon {
  width: 83px;
  height: 103px;
} 

.menu-content {
  flex-grow: 1;
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
}

.menu-link {
  flex-grow: 1;
  display: flex;
  height: 50%;
}

.menu-link .social,.actions, nav {
  flex-grow: 1;
}

.social {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;
  border: 1px solid orange;
}

.social span {
  margin-right: 1.9%;
  font-size: 0.7rem;
  color: #888888;
}

.social a {
  height: 58.25%;
  width: 10%;
  display: flex;
  align-items: center;
}
[social], [actions] {width: 100%;}

/* Actions */

.actions {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border: 1px solid orange;
}

.search, .notification, .recipes-book, .book-create {
  height: 66.019%;
  cursor: pointer;
}

.search, .notification {
  width: 11.339%;
  display: flex;
  align-items: center;
}

.notification {
  position: relative;
}

.notification span {
  position: absolute;
  width: 54.054%;
  left: -5%;
  top: -5%;
  border-radius: 50%;
  background: #e74f23;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #fff;
}

.recipes-book {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58.034%;
  margin-right: 1.9%;
  background: #fa9e22;
  border-radius: 32.67px;
  color: #fff;
}

.recipes-book img {
  height: 64.7059%;
}

.recipes-book span, .book-create span {
  font-size: 0.8rem;
}

.book-create {
  width: 45.693%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e74f23;
  border-radius: 32.67px;
  color: #fff;
}



/* NavBar */
.navbar {
  border: 1px solid orange;
  display: flex;
  height: 50%;

}

.navbar-list {
  margin: 0%;
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
}

.navbar-list li {
  margin: 0% 1.1387%;
}

.navbar-list li:nth-child(1) {
  margin-left: 0px;
}

.navbar-list li a {
  font-size: 0.9rem;
  color: #e75024;
}

/* li's with content */
.navbar-content {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.navbar-content img {
  height: 1rem;
}

.navbar-content-detail {
  display: none;
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 100%;
  width: 200%;
  background: #fff;
  border: 5px solid rgb(238, 230, 230);
  border-radius: 4px;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2px;
}

.navbar-content-detail li {
  padding: 2px 0%;
}

</style>
