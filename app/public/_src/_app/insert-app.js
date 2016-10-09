import $ from 'jquery'
import series from 'async-series'

// VUE
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'

// IMPORT COMPONENTS
import Shell from '../_vue/Shell.vue'
import Collapsing from '../_vue/Collapsing.vue'
import Strobe from '../_vue/Strobe.vue'

// GLOBAL COMPONENTS
import bbcn from '../_vue/_components/bbcn.vue'

Vue.component('bbcn-component', bbcn)

// VUE APP
Vue.use(VueRouter)
Vue.use(VueTouch)

const App = Vue.extend()

// ROUTER OPTIONS
window.router = new VueRouter({
  hashbang: false,
  history: true,
  mode: 'html5',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/'
});

// ROUTES CONFIG
router.map({
  '/': {
    component: Shell,
    subRoutes: {
      '/': {
        component: Collapsing
      },
      '/strobe': {
        component: Strobe
      }
    }
  }
})

// INSERT APP
const insertApp = {}

insertApp.init = () => {
  
  let timeout = 1500

  series([
    function(done) {
      router.start(App, 'body')
      done()
    },
    function(done) {
      $('main').css({'opacity': 0 , 'left': '-100vw'})
      done()
    },
    function(done) {
      setTimeout(() => { 
        $('body').addClass('display-header')
      }, timeout * 2);
      done()
    },
    function(done) {
      $( "#load-window" ).animate({ opacity: 0 }, { duration: timeout, complete: function(){
        $(this).remove()
      }});
    }
  ], function(err) {
    console.log('FAIL!')
  })
}

// START BUTTON
$('#run-app').click(insertApp.init)