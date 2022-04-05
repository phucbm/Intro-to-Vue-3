const app = Vue.createApp({
    data(){
        return {
            cart: 0,
        }
    },
    methods: {
        removeFromCart(){
            this.cart--;
        },
        addToCart(){
            this.cart++
        }
    }
});