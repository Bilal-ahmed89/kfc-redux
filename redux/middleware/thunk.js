export const products = () => {
    return async (dispatch) => {

         fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => dispatch({ type: 'GET_PRODUCTS', payload: data }))




    }
}