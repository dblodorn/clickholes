<template lang="jade">
  #mask
    .item
  #bg
</template>

<script>

  import $ from 'jquery'
  import anime from 'animejs'

  export default {
    ready: function(){
      setTimeout(() => { 
        $('main').animate({'opacity': 1 , 'left': 0}, 1000)
        anime({
          targets: '.item',
          translateX: '200vw',
          elasticity: 0,
          delay: 1,
          duration: 2000,
          easing: 'linear',
          direction: 'alternate',
          loop: true
        });
      }, 1000);
    }
  }

</script>

<style lang="sass?indentedSyntax" scoped>
  
  @import "../_sass/utilities/_utilities.sass"

  #bg
    background: grey!important
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0

  #mask
    mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/207038/traingle-mask.svg) center / cover
    -webkit-mask: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/207038/traingle-mask.svg) center / cover
    width: 100vw
    height: 100vh
    position: absolute
    z-index: 2
    width: 100vw
    height: 100vw
    display: block
    position: fixed
    top: 0
    left: 0
    background: tan
    
  .item
    position: absolute
    width: 100vh
    height: 100vh
    background: blue
    display: block
    margin-left: -100vw

</style>
