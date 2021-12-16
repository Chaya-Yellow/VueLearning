// createApp 是 Vue 内置的函数
const app11 = Vue.createApp({
    data(){
        return{
            product:'Socks',
            image:'./assets/images/socks_blue.jpg',
            url:'https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3',
            // inStock:true,
            inventory:9,
            onSale:true,
            delails:['50% cotton','30% wool','20% polyester'],
            variants:[{id:2234,color:'green',size:'36',image:"./assets/images/socks_green.jpg"},
                      {id:2235,color:'blue',size:'37',image:"./assets/images/socks_blue.jpg"}],
            cart:0
            // sizes:[{id:2234,yard:'36'},
            //           {id:2235,yard:'37'}]
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        updateImage(variantImage){
            this.image=variantImage
        },
        decToCart(){
            if(this.cart>0){
                this.cart -=1
            }
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
