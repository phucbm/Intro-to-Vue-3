app.component('product-display', {
    template:
        `
    <h1>{{title}}</h1>

    <p v-if="inventory > 10">In stock</p>
    <p v-else>Out of stock</p>

    <p>{{description}}</p>
    <a :href="url" :title="product" class="product-image">
        <img v-bind:src="image" :alt="product">
    </a>

    <button
            v-on:click="addToCart"
            :disabled="inventory<=0"
            :class="[inventory<=0?'disabledButton':'']">Add to cart
    </button>
    <button v-on:click="removeFromCart"
            :disabled="cart===0"
            :class="[cart===0?'disabledButton':'']">Remove from cart
    </button>

    <ul v-for="variant in variants">
        <li>
            <span @mouseover="image = variant.image">{{variant.color}}</span>
        </li>
    </ul>

    <ul v-for="detail in details">
        <li>{{detail}}</li>
    </ul>
    `,
    data(){
        return {
            product: 'Socks',
            description: 'Lorem ipsum',
            image: './assets/images/socks_blue.jpg',
            url: '#',
            inStock: true,
            inventory: 5,
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
            this.inventory++
        },
        addToCart(){
            this.cart++
            this.inventory--
        }
    },
    computed: {
        title(){
            return this.product + ' Hooray ' + this.inventory;
        }
    },
    props: {
        cart: 0
    }
});