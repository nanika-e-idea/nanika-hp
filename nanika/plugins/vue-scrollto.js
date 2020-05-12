import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    duration: 300,
    easing: [0,0,0.1,1],
    offset: -20
})