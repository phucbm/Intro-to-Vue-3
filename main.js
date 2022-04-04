const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'Lorem ipsum',
            image: './assets/images/socks_blue.jpg',
            url: '#',
            inStock: true,
            inventory: 15,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 123, color: 'green'},
                {id: 234, color: 'blue'}
            ]
        }
    }
}).mount('#app');