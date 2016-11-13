<template lang="jade">
  #supermarket
    article
      code.cm-s-monokai.CodeMirror-gutter.CodeMirror-gutter-text
        span.cm-atom {{title}}
        span.cm-variable-2 {{set_the_stage}}
        span.cm-variable(v-for="item in scene_one_options"){{item.option}} {{item.copy}}
        span.cm-error IF A or B { Ok so whats next on the list. Did I bring my list, or do I even need a list. }
        span.cm-variable-2 IF C - You stand over the boxes, looking not at them, but down the aisle with a vacant gaze, head tilted slightly to the, left. The other customers in the market have all dropped what they were doing and are looking at you. As they stare with a mild sense of shock & horror in their eyes, the General Manager walks towards you - once near, he simply says “Son”. You turn towards him, and ask “Yes?”. “…Is everything allright? I’m sorry but could you please explain yourself…” - “Sure.”
        span.cm-error IF - we took route C.
        span.cm-variable(v-for="item in scene_two_options"){{item.option}} {{item.copy}}
        span.cm-tag ELSE IF - We took the other routes: “Life is usual - it must go on”
</template>

<script>
  
  import $ from 'jquery'

  export default {
    data () {
      return {
        title: "You are walking through a large parking lot:",
        set_the_stage: "You are in an open aisle in a supermarket. There’s an arrangement of 12-packs of beer at the head of aisle 3. You look at the blocks of beer piled high, you can’t have one. Do you:",  
        scene_one_options: [
          {
            option: "A)",
            copy: "Walk to the next aisle."
          },{
            option: "B)",
            copy: "Pull a box down and place it in your cart."
          },{
            option: "C)",
            copy: "Push the stack of boxes over."
          }
        ],
        scene_two_options: [
          {
            option: "A)",
            copy: "The manager is infact your actual father, You are just an angry teenager who is pissed that your supermarket manager Dad never floats you Beer."
          },{
            option: "B)",
            copy: "You look at the GM - and calmly tell him to Fuck off - pick up a 12 pack - throw it at the display at the head of the neighboring aisle. Grab another one for yourself and walk out the door."
          },{
            option: "C)",
            copy: "Simply tell him that: “Oh, so sorry, I just couldn’t find what I was looking for, where are the eggs?”"
          }
        ]
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
