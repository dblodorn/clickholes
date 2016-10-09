<template lang="jade">
  bbcn-component
  main
    router-view
</template>

<script>
  export default {
    ready: function(){
      console.log('shell mounted')
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"
  
  main
    width: 100vw
    height: 100vh
    position: absolute
    top: 0

</style>
