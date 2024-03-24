import { ADD_TO_CART } from '../Constants'
import { REMOVE_TO_CART } from '../Constants'
export const addtocart = (data) => {
    // console.log("action" , data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removecart = () => {
    console.log("removeaction")
    return {
        type: REMOVE_TO_CART
    }

}