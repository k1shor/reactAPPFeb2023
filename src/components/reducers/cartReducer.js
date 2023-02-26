import swal from "sweetalert"
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstants"

const initialData = {
    cart_items: [],
    shipping_info: {}
}

const cartReducer = (state, action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log(action.payload)
            let new_item = action.payload
            let itemExists = state.cart_items.find(item=>item.product===new_item.product)
            if(itemExists &&  new_item.quantity === 1){
                swal('Alert', 'Item already in Cart', 'info')
                return {...state}
            }
            else if(!itemExists){
                return {...state, cart_items: [...state.cart_items, new_item]}
            }
            else{
                return {...state, cart_items: [...state.cart_items.map(item=>{
                     return (item.product === new_item.product)? new_item : item
                })]}
            }

// [samsung: 3, acer: 2, nokia: 5, dell: 1]
// samsung: 3

        case REMOVE_FROM_CART: 
            return {...state, 
                cart_items: [...state.cart_items.filter(item=>item.product!=action.payload)]}

        default: 
            return {...state}
    }
}

export default cartReducer