<template>
  <header>
    <div class="container">
      <div class="left">
        <a href="#" class="logo">TWITTER</a>
        <div class="hm-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="right">
        <nav>
          <ul>
            <li class="nav-item">
              <nuxt-link to="/">Logout</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/UserHome">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/CreatePost">CreatePost</nuxt-link>
            </li>
            

            

            <li class="nav-item">
              <nuxt-link to="/Profile">Profile</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'UserHeader',
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  outline: 0;
  border: none;
  font-family: 'Times New Roman', Times, serif;
}

html,
body {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: monospace;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #c870a5;
  overflow: hidden;
  border-radius: 30px;
  
}

.container {
  padding-top: 10px;
  width: 1170px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  
  justify-content: space-between;
}

.left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.logo {
  color: #fff;
  font-size: 15px;
  font-weight: 200;
  display: block;
  height: 20px;
  width: 150px;
  line-height: 20px;
  text-align: center;
  /* background-color: rgb(68, 26, 26); */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hm-menu {
  display: none;
}

nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

nav ul li {
  margin-right: 10px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  position: relative;
  padding: 0 20px;
  height: 40px;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 200;
  text-align: center;
  
}



nav ul li a:hover::after {
  left: 0;
  width: 150%;
}


  

  
  
  

</style>