import * as actionType from './actionTypes';
export const increment = () => {
    return {
        type : actionType.INCREMENT
    }
}
export const decrement = () => {
    return {
        type : actionType.DECREMENT
    }
}
export const subtract = (payload) => {
    return {
        type : actionType.SUBSTRACT,
        payload : payload
    }
}
export const add = (payload) => {
    return {
        type : actionType.ADD,
        payload : payload
    }
}