<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <micomponente titulo="ESTO ES UN TITULO AÑADIDO DESDE LA ETIQUETA"></micomponente>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import micomponente from './components/micomponente.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    micomponente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
