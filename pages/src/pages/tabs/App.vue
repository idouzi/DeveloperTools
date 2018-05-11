<template>
  <div id="app">
      <headerBar></headerBar>
      <tabs></tabs>
  </div>
</template>

<script>
import tabs from '../../components/tabs/tabs'
import headerBar from '../../components/tabs/layout/headerBar'

export default {
    name: "App",
    data() {
        return {
            
        }
    },
    components: {
        tabs,
        headerBar
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
