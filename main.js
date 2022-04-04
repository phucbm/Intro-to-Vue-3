const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Socks',
            description: 'Lorem ipsum',
            image: './assets/images/socks_blue.jpg',
            url: '#',
            inStock: true,
            inventory: 15,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 123, color: 'green', image: './assets/images/socks_green.jpg',},
                {id: 234, color: 'blue', image: './assets/images/socks_blue.jpg',}
            ]
        }
    },
    methods: {
        removeFromCart(){
            this.cart--;
        }
    }
}).mount('#app');