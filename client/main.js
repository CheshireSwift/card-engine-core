var Vue = require('vue')
var dbg = (x => {console.log(x); return x})

var App = require('./components/App.vue')
var app = new Vue({
  el: '#vue-app',
  render: function(createElement) {
    return createElement(App)
  }
})
