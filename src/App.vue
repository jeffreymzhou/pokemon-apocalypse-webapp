<template>
  <div id="app">
    <Overview/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Overview from '@/components/Overview.vue'
import Overview2 from '@/components/Overview2.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Overview,
    Overview2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body {   
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0px auto;
  font-family: Calibri, Georgia, Ubuntu-C;  
  font-size: 16px;
  margin-bottom: 20PX
}
</style>
