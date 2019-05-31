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

      <div class="menu-content">
      
        <div class="menu-link">

          <div class="social">
            <p></p>
            <a href=""><i></i></a>
            <a href=""><i></i></a>
            <a href=""><i></i></a>
            <a href=""><i></i></a>
            <a href=""><i></i></a>
            <a href=""><i></i></a>
          </div>
          <div class="actions"></div>
        
        </div>
      
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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

header .banner-1 {
  margin-bottom: 11px;
}

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
}

.menu-link .social,.actions, nav {
  flex-grow: 1;
}




/* 
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */


</style>
