// jQuery
import 'jquery'

// Bootstrap
import 'tether'
import 'bootstrap'

// Simplebar.js
import 'simplebar/dist/simplebar.css'
import 'simplebar/dist/simplebar.min.js'

// AdminPlus
import 'adminplus/sass/adminplus'

// Bootstrap Layout
import 'bootstrap-layout/src/sass/style'

// Vue library
import Vue from 'vue'

// Vue router
import router from './router'

// Router requires a component to start
const Main = Vue.extend({
	template: '<router-view></router-view>'
})

// Start
router.start(Main, 'app')