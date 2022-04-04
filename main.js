const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'Lorem ipsum',
            image: './assets/images/socks_blue.jpg',
            url: '#'
        }
    }
}).mount('#app');