<template lang="jade">
  #collapsing
    - var rectangles = 10
    while rectangles--
      .rectangle-container(v-link="'/strobe'")
        - var n = 20
          while n--
            i
</template>

<script>

  import $ from 'jquery'
  import series from 'async-series'

  export default {
    ready: function(){
      let timeout = 1000
      series([
        function(done) {
          setTimeout(() => { 
            $('main').animate({'opacity': 1 , 'left': 0}, timeout)
            $('#collapsing').animate({'height': '100%'}, timeout)
          }, timeout);
          done()
        },
        function(done) {
          console.log('next func')
        }
      ], function(err) {
        console.log('FAIL!')
      })
    }
  }

</script>

<style lang="sass?indentedSyntax" scoped>
  
  @import "../_sass/utilities/_utilities.sass"

  #collapsing
    height: 0
    width: 100vw
    overflow: hidden

  // Rectangle Layout
  .rectangle-container
    @extend %smooth
    width: 10vw
    height: 100%
    display: inline-block
    float: left
    cursor: pointer

    i
      @extend %smooth-slow
      display: inline-block
      float: left
      width: 5%
      z-index: 9000

    $i: 20

    @while $i > 0
      i:nth-child(#{$i})
        height: 5% * $i
        margin-top: 0
        background-color: rgb($i * 15, $i + 20, $i * 35)

      $i: $i - 1

    &:hover
      height: 50%

      $i: 20

      @while $i > 0
        i:nth-child(#{$i})
          height: 2% * $i
          margin-top: 85% * $i
          background-color: rgb($i * 70, $i + 100, $i * 90)

        $i: $i - 1

</style>
