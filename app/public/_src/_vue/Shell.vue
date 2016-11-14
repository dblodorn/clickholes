<template lang="jade">
  bbcn-component
  main
    router-view
  nav#main-nav
    ul
      li(v-for="page in pages")
        a(v-link="page.link") {{page.page_name}}
</template>

<script>
  export default {
    data () {
      return {
        pages: [
          {
            page_name: "open field",
            link: "story"
          }
        ]
      }
    },
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
