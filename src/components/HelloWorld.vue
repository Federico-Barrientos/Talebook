<template>
  <Flipbook 
  class="flipbook" 
  :pages="pages" 
  :perspective="5000"
  :canZoomIn="false"
  >
  </Flipbook>
</template>

<script>
import Flipbook from 'flipbook-vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Flipbook 
  },
  data(){
    return {
      pages: [
        null,
        "images/cover.jpg",
        "images/blank.jpg",
        "images/title.jpg",
        "images/balcon1.jpg",
        "images/balcon2.jpg",
        "images/balcon3.jpg",
        "images/balcon4.jpg",
        "images/balcon5.jpg",
        "images/balcon6.jpg",
        "images/countercover.gif",
      ]
    }
  }
}
</script>
<style scoped>

.flipbook {
  cursor: pointer !important;
  width: 90vw;
  height: 90vh;
}
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
}
</style>
