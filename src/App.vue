<template>
  <!--div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div-->
  <router-view/>
</template>

<style>
html, body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
font: 1em sans-serif;
padding: 0;
margin: 0;
color: white;
background-color: black ;
background-image: url(~@/assets/backgroundpaper.png);
 background-position: 50% 0%;
 background-size: cover;
 height: 100%;
}
</style>
