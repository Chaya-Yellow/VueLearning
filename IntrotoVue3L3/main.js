// createApp 是 Vue 内置的函数
const app = Vue.createApp({
    data(){
        return{
            product:'Socks',
            image:'./assets/images/socks_blue.jpg',
            url:'https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3'
        }
    }
})

const Rapp = Vue.createApp({
    data(){
        return{
            product:'Socks'
        }
    }
})

const desp=Vue.createApp({
    data(){
        return{
            descriptions:'This is some descriptions'
        }
    }
})