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
          char.html(char.text().replace(/([L Ddow])/g, "<span>$&</span>"));
        });
      }, 1000);
    }
  }

</script>

<style lang="sass?indentedSyntax" scoped>
  
  @import "../_sass/utilities/_utilities.sass"

  article
    padding: 14rem 4rem 4rem

  h1.letter-breaker
    font-family: arial
    font-weight: 200
    letter-spacing: .5vw
    font-size: 8vw
    line-height: 1
    text-transform: uppercase
    color: grey
    text-align: left
    
    span
      color: purple!important

    span:nth-child(1n)
      color: red!important
      background-color: yellow

    span:nth-child(2n)
      color: blue!important

    span:nth-child(3n)
      color: yellow!important

    span:nth-child(4n)
      color: grey!important
      background-color: lime

    span:nth-child(5n)
      color: purple!important

</style>
