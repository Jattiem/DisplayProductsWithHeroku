import { createStore } from 'vuex'

export default createStore({
    state: {
        products: null,
        singleProduct: null,
    },
    mutations: {
        setProducts (state, products){
            state.products = products;
        },
        setSingleProduct (state, singleProduct){
            state.singleProduct = singleProduct;
        }
    },
    actions: {
        async getProducts(context){
            fetch('https://node-end-of-module-duo-project.herokuapp.com/products')
            .then((res)=> res.json())
            .then((data)=> context.commit('setProducts',data.results))
        },
        async getSingleProduct(context,payload){
            fetch('https://node-end-of-module-duo-project.herokuapp.com/products/' + payload)
            .then((res)=> res.json())
            .then((data)=> context.commit('setSingleProduct',data.results[0]))
        },
}})