<template>
  <div class="container">
    <vue-plyr >
      <audio controls crossorigin playsinline >
        <source
            src="/song/CinemaParadiso.mp3"
            type="audio/mp3"
            
        />
      </audio>
    </vue-plyr>

    <Flipbook
    class="flipbook" 
    :pages="isMobile ? pagesMobile : pagesDesktop" 
    :perspective="5000"
    :canZoomIn="false"
    ref="flipbook"
    @keypress="handler($event)"
    >
    </Flipbook>
  </div>
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
      pagesDesktop: [
        null,
        "images/cover.jpg",
        "images/blank.jpg",
        "images/Titulo.png",
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png",
        "images/5.png",
        "images/6.png",
        "images/7.png",
        "images/countercover.gif",
      ],
      pagesMobile: [
        null,
        "images/cover.jpg",
        "images/Titulo.png",
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png",
        "images/5.png",
        "images/6.png",
        "images/7.png",
        "images/countercover.gif",
      ]
    }
  },
  mounted(){
    window.addEventListener('keydown', (ev) => {
      const flipbook = this.$refs.flipbook
      if(ev.keyCode == 37 && flipbook.canFlipLeft) {
        flipbook.flipLeft()
      }
      if(ev.keyCode == 39 && flipbook.canFlipRight) {
        flipbook.flipRight()
      }
    })
  },
  computed: {
    isMobile(){
      if(window.innerWidth < 842){
        return true
      }
      return false
    }
  },

  methods:{
    
    handler(event){
      console.log(event)
    },
    flipRight(){
      console.log("asd")
      this.$refs.flipbook.flipRight()
    },
    flipLeft(){
      this.$refs.flipbook.flipLeft()
    }
  }
}
</script>
<style scoped>

.flipbook {
  cursor: pointer !important;
  width: 90vw;
  height: 90vh;
  margin-top: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.container{
  
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
