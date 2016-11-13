// IMPORT SASS BASE
import './_sass/main.sass'

// DEPENDENCIES
import $ from 'jquery'
import series from 'async-series'

// USER FUNCTIONS
import states from './_app/states.js'
import utility from './_app/utilities.js'
import browser from './_app/browser-detect.js'
import cubes from './_app/cubes.js'

// RUN FUNCTIONS
import insertApp from './insert-app.js'

// FIRST INIT
const initApp = () => {
  series([
    function(done) {
      browser.init()
      done()
    },
    function(done) {
      states.init()
    }
  ], function(err) {
    console.log('FAIL!')
  })
}

document.addEventListener('DOMContentLoaded', initApp);
