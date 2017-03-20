import Vue from 'vue';
import helloWorld from './component/hello-world.vue';

var vue = new Vue({
	el: '#app',
	components: {'hello-world': helloWorld}
})