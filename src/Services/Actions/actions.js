import {ADD_TO_CART} from '../Constants'
export const action = (data) => {
    return{
        type:ADD_TO_CART,
        data:data
    }
}