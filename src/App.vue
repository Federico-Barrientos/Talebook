<template>
  <div id="app" @keypress="handler($event)">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    handler(event){
      console.log(event)
    },
  }
}
</script>

<style>
html {
  height: 100vh;
}
body{
  zoom: 1.0;
  display: flex;
  justify-content: center;
  margin: 0; 
  height: 100vh;
  background-image: url("assets/woodtable.jpg");
  background-size: cover;
}
img{
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 22px;
}
:root {
  --plyr-audio-controls-background:#022;
  --plyr-audio-control-color: #ffffff;
  --plyr-audio-controls-background:#022;
  --plyr-audio-control-background-hover: #022

  
  
}
</style>
