// Dom & Vue Connect
var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
})

// v-bind
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.'
    }
})

// v-if
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// v-for
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'javascript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' }
        ]
    }
})

// v-on
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// v-model
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '안녕하세요 Vue!'
    }
})

// component
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var appC = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables'},
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})