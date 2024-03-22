import {ADD_TO_CART} from '../Constants'
export const addtocart = (data) => {
    console.log("action" , data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}