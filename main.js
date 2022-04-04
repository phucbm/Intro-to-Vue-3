const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'Lorem ipsum',
            image: './assets/images/socks_blue.jpg',
            url: '#',
            inStock: true,
            inventory: 15
        }
    }
}).mount('#app');