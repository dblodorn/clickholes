<template lang="jade">
  article
    h1.letter-breaker Aerial Lockdown - Low Modulation Wings - Rotate stir up the polluted sounds of The street.
</template>

<script>

  import $ from 'jquery'

  export default {
    ready: function(){
      setTimeout(() => { 
        $('main').animate({'opacity': 1 , 'left': 0}, 1000)
        $('.letter-breaker').each(function() {
          var char = $(this);
          char.html(char.text().replace(/([L Ddow])/g, "<i>$&</i>"));
        });
      }, 100);
    }
  }

</script>

<style lang="sass?indentedSyntax">
  
  @import "../_sass/utilities/_utilities.sass"

  article
    padding: 14rem 4rem 4rem
    z-index: 1000
    position: relative

  h1.letter-breaker
    font-family: arial
    font-weight: 200
    letter-spacing: .5vw
    font-size: 8vw
    line-height: 1
    text-transform: uppercase
    color: grey
    text-align: left
    
  i
    color: purple!important

  i:nth-child(1n)
    color: red!important
    background-color: yellow

  i:nth-child(2n)
    color: blue!important

  i:nth-child(3n)
    color: yellow!important

  i:nth-child(4n)
    color: grey!important
    background-color: lime

  i:nth-child(5n)
    color: purple!important

</style>
