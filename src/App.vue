<template>
  <nav>
    <router-link to="/products">PRODUCTS</router-link> |
  </nav>
  <router-view/>
</template>

<script>
export default{

}
</script>

<style>
.card {
  border:none;
}

#basket{
  text-decoration: none;
}

#inline{
  display: inline-block;
}

#app {
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
  text-align: center;
  color: red;
  background: navy;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none
}

#main {
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  min-height:100vh;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
