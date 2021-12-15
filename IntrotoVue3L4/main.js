// createApp 是 Vue 内置的函数
const app11 = Vue.createApp({
    data(){
        return{
            product:'Socks',
            image:'./assets/images/socks_blue.jpg',
            url:'https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3',
            inStock:true
        }
    }
})

const Rapp =  Vue.createApp({
    data(){
        return{
            producter:'Socks',
            descriptions:'This is some descriptions'
            
        }
    }
})

const desp=Vue.createApp({
    data(){
        return{
            descriptions111:'This is some descriptions'
        }
    }
})
