<template lang="jade">
  #collapsing
    .rectangle-container(v-link="'/strobe'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/story'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/bounce'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/breaker'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/strobe'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/strobe'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/story'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/bounce'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/breaker'")
      - var n = 20
        while n--
          i
    .rectangle-container(v-link="'/strobe'")
      - var n = 20
        while n--
          i
</template>

<script>

  import $ from 'jquery'
  import series from 'async-series'
  import T from 'timbre'

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
          setTimeout(() => { 

            var duration = "10sec"

            var freqs = T(function(count) {
              return [20,100][count % 8];
            });
            
            var osc = T("sin", {freq:280,mul:0.25});
            var env = T("perc", {a:5, r:20}, osc).bang();
            var interval = T("param", {value:500}).linTo(25, duration);
            var chorous = T("chorus", {delay:5, rate:interval, depth:100, fb:0.25, mix:0.5}, env).bang();

            T("interval", {interval:interval}, env, freqs, chorous).start();
            
            T("timeout", {timeout:duration}).on("ended", function() {
              this.stop();
            }).set({buddies:env}).start();

          }, timeout);
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
    //background-color: $white
    z-index: 200
    position: fixed

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
