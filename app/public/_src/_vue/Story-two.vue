<template lang="jade">
  #supermarket
    article
      code.cm-s-monokai.CodeMirror-gutter.CodeMirror-gutter-text
        span.cm-atom Advancements through innovation,
        span.cm-variable-2 A lecture.
        span.cm-variable Ascii porn, accessed through use-net in the 80s, retired Navy, computer savvy. DARPA, communications. Military & the Pornography industry - tangled web, intertwined. Watch the world get fucked through appropriation facilitating masturbation.
        span.cm-error DARPORN.
        span.cm-variable-2 Penetration testing.
        span.cm-error Surveillance.
        span.cm-variable Innovation perverted through desire, the desire to conquer. Streaming video, drones hover - thirsty. Mangled streams. Crossed Wires. Intelligence gold bricked. Violent PYTHON, a snake in the grass. Breaking firewalls. on the offensive.
        span.cm-variable-2 Great minds co-opted in desperate times. Addicts always need.
</template>

<script>
  
  import $ from 'jquery'

  export default {
    data () {
      return {
      }
    },
    ready: function(){
      //$('#bbcn').animate({'opacity': 0 , 'left': 0}, 10)
      setTimeout(() => { 
        $('main').animate({'opacity': 1 , 'left': 0}, 100)
      }, 1000);
    }
  }

</script>

<style scoped>
  
    #supermarket {
      background: #272822;
      width: 100vw;
      min-height: 100vh;
      z-index: 2;
      position: absolute;
      display: flex;
    }

    h1 {
      margin-bottom: 2rem;
      line-height: 1.35;
      letter-spacing: -1px;
      font-size: 4rem;
    }

    p {
      margin-bottom: 3rem
    }

    article {
      padding: 2rem;
      max-width: 70rem;
      margin: auto;
    }

    article * {
      font-family: "Lucida Console", Monaco, monospace;
    }

    span {
      width: 100%;
      display: block;
      background-color: rgba(0,0,0,0);
      margin-bottom: 1rem;
      font-family: "Lucida Console", Monaco, monospace;
      font-size: 1.35rem;
      line-height: 1.35;
    }

    span:last-child {
      margin-bottom: 0;
    }

    .cm-s-monokai {background: #272822; color: #f8f8f2; padding: 1rem; width: 100%; display: block; position: relative;}
    .cm-s-monokai div.CodeMirror-selected {background: #49483E !important;}
    .cm-s-monokai .CodeMirror-gutter {background: #272822; border-right: 0px;}
    .cm-s-monokai .CodeMirror-gutter-text {color: #d0d0d0;}
    .cm-s-monokai .CodeMirror-cursor {border-left: 1px solid #f8f8f0 !important;}

    .cm-s-monokai span.cm-comment {color: #75715e;}
    .cm-s-monokai span.cm-atom {color: #ae81ff;}
    .cm-s-monokai span.cm-number {color: #ae81ff;}

    .cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute {color: #a6e22e;}
    .cm-s-monokai span.cm-keyword {color: #f92672;}
    .cm-s-monokai span.cm-string {color: #e6db74;}

    .cm-s-monokai span.cm-variable {color: #a6e22e;}
    .cm-s-monokai span.cm-variable-2 {color: #9effff;}
    .cm-s-monokai span.cm-def {color: #fd971f;}
    .cm-s-monokai span.cm-error {background: #f92672; color: #f8f8f0;}
    .cm-s-monokai span.cm-bracket {color: #f8f8f2;}
    .cm-s-monokai span.cm-tag {color: #f92672;}
    .cm-s-monokai span.cm-link {color: #ae81ff;}

    .cm-s-monokai .CodeMirror-matchingbracket {
      text-decoration: underline;
      color: white !important;
    }

</style>
