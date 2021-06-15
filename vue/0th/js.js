const data = {
    title: "Hello World!",
    names: ["혁", "준식", "동헌"],
    bool: false,
    bcd: "bcd",
    abc: "https://naver.com",
    style: {
        color: "#ff0000"
    },
    event: "click"

}

var app = new Vue({
    el: '#app',
    data: data,
    methods: {
        changeColor(tag) {
            this.style.color = "#00ff00"
        },
        changeEvent() {
            this.event = "mouseover"
        }
    }
})

Vue.component('my-header', {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            x: "xxx"
        }
    },
    template: `<div><my-footer v-bind:title="x"></my-footer><span>혁이는 귀여워</span><span>{{title}}</span></div>`
})

Vue.component('my-footer', {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    template: `<div><span>준식이 잘생겼어</span><span>혁이는 귀여워</span><span>{{title}}</span></div>`
})

var component = new Vue({
    el: '#component'
})