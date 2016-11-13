<template lang="jade">
  #strobe(v-link="'/bounce'")
    .clok
      .bg
</template>

<script>

  import $ from 'jquery'
  import T from 'timbre'

  export default {
    ready: function(){
      let timeout = 1000
      
      setTimeout(() => { 
        $('main').animate({'opacity': 1 , 'left': 0}, timeout)
      }, timeout);
      
    }
  }

</script>

<style lang="sass?indentedSyntax" scoped>
  
  @import "../_sass/utilities/_utilities.sass"

  #strobe
    height: 100vh
    width: 100vw
    overflow: hidden
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2NkYGD4z4AJGNGFQAJDQSEWv2C6G8N3UF0YHhxAhQBLjgoGdiBmhAAAAABJRU5ErkJggg==') repeat
    cursor: pointer
    display: block
    position: absolute

  @keyframes rotate
    0%
      transform: rotate3d(0, 0, 0, 0deg)
    100%
      transform: rotate3d(1, 90, 90, 360deg)

  @keyframes copy
    0%
      height: 50%
      width: 90%
      background-color: red
      font-size: 10vw

    25%
      height: 20%
      width: 50%
      background-color: magenta
      font-size: 9vw

    50%
      height: 10%
      width: 80%
      background-color: yellow
      font-size: 7.5vw

    100%
      height: 50%
      width: 10%
      background-color: pink
      font-size: 20vw

  .clok
    display: block
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    animation-name: rotate
    animation-duration: 30s
    animation-iteration-count: infinite
    background-color: white
    
  .bg
    animation-name: copy
    animation-duration: 2.25s
    animation-iteration-count: infinite

</style>
