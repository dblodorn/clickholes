<template lang="jade">
  #strobe(v-link="'/bounce'")
    h1
</template>

<script>

  import $ from 'jquery'

  export default {
    ready: function(){
      setTimeout(() => { 
        $('main').animate({'opacity': 1 , 'left': 0}, 1000)
      }, 1000);
    }
  }

</script>

<style lang="sass?indentedSyntax" scoped>
  
  @import "../_sass/utilities/_utilities.sass"

  #strobe
    @extend %aligner
    height: 100vh
    width: 100vw
    overflow: hidden
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2NkYGD4z4AJGNGFQAJDQSEWv2C6G8N3UF0YHhxAhQBLjgoGdiBmhAAAAABJRU5ErkJggg==') repeat
    cursor: pointer

  @keyframes rotate
    0%
      transform: rotate3d(0, 0, 0, 0deg)
    100%
      transform: rotate3d(1, 90, 90, 360deg)

  h1
    font-family: arial
    text-align: center
    font-style: italic
    line-height: .8
    animation-name: rotate
    animation-duration: 30s
    animation-iteration-count: infinite

  @keyframes copy
    0%
      content: "JUST"
      color: red
      font-size: 10vw

    25%
      content: "CASUALLY"
      color: magenta
      font-size: 9vw

    50%
      content: "MELTING"
      color: yellow
      font-size: 7.5vw

    100%
      content: "AWAY"
      color: pink
      font-size: 20vw

  h1::before
    content: "IAM"
    animation-name: copy
    animation-duration: .1s
    animation-iteration-count: infinite

</style>
