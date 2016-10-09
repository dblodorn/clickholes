<template lang="jade">
  header
    #bbcn
</template>

<script>

  import $ from 'jquery'

  export default {
    ready: function(){
      console.log('bbcn mounted')
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../../_sass/utilities/_utilities.sass"

  // HEADER

  body.display-header
    header
      top: 0

  header
    @extend %smooth-slow
    @extend %aligner
    width: 100vw
    position: fixed
    height: 10rem
    top: -10rem
    left: 0
    z-index: $header-z
    padding: 0 $base-padding
    
    #bbcn
      width: 4rem
      height: 4rem
      background-color: red
     
</style>
