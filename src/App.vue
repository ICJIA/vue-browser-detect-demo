<template>
  <div id="app">
    <github></github>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Github from "@/components/Github";
export default {
  name: "home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Github
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
