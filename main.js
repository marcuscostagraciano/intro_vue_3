const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },

        // Coding Challenge
        removeFromCart() {
            this.cart.pop()
        }
    }
})
