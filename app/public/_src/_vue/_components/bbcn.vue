<template lang="jade">
  header
    #bbcn(v-link="'/'")
      .rectangle-1.animation
      .rectangle-2.animation
      .rectangle-3.animation
      .rectangle-4.animation
      .square-1.animation
      .square-2.animation
      .square-3.animation
      .inner-rectangle-1.animation
      .inner-rectangle-2.animation
  </div>
</template>

<script>

  import $ from 'jquery'

  export default {
    ready: function(){
      
      var animateLength = 1000;

      setInterval(function() {
        animateInit();
      }, animateLength); 

      function animateInit () {
        var animate = document.getElementsByClassName('animation'); 
        for (var i = 0; i < animate.length; i++) {
          animate[i].style.height = Math.floor(Math.random()*100)+'%';
          animate[i].style.width = Math.floor(Math.random()*100)+'%';  
        }
      }
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../../_sass/utilities/_utilities.sass"

  // HEADER

  body.display-header
    header
      top: 0

  $base-size: 10rem

  header
    @extend %smooth-slow
    width: 100vw
    position: fixed
    height: $base-size
    top: -$base-size * 2
    left: 0
    z-index: $header-z
    padding: 0 $base-padding

  #bbcn
    height: $base-size
    width: $base-size
    position: absolute
    top: 2rem
    left: 2rem
    overflow-x: hidden
    cursor: pointer
    
    *
      @extend %box-shadow
      transition: all 2000ms ease
      box-sizing: border-box

    .rectangle-1
      width: $base-size * 1.6
      height: $base-size * .4
      display: block
      position: absolute
      background-color: #ec1c24
      top: 0
      right: 0
    
    .rectangle-2
      width: $base-size * .4
      height: $base-size * 1.6
      display: inline-block
      position: absolute
      background-color: #ec1c24
      top: 0
      right: 0

    .rectangle-3
      width: $base-size * .4
      height: $base-size * 1.6
      display: inline-block
      position: absolute
      background-color: #0071bb
      bottom: 0
      right: $base-size * .4

    .square-1
      width: $base-size * .4
      height: $base-size * .4
      display: inline-block
      position: absolute
      background-color: #ffe600
      top: 0
      left: 0

    .square-2
      width: $base-size * .4
      height: $base-size * .4
      display: inline-block
      position: absolute
      background-color: #ffe600
      bottom: 0
      right: 0

    .square-3
      width: $base-size * .4
      height: $base-size * .4
      display: inline-block
      position: absolute
      background-color: black
      top: $base-size * .4
      left: $base-size * .4

    .inner-rectangle-1
      width: $base-size * .4
      height: $base-size * .8
      display: block
      position: absolute
      background-color: #ec1c24
      top: $base-size * .8
      left: $base-size * .4

    .inner-rectangle-2
      width: $base-size * .8
      height: $base-size * .4
      display: block
      position: absolute
      background-color: #0071bb
      top: $base-size * .4
      left: $base-size * .8
     
</style>
