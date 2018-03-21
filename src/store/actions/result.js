import * as actionType from './actionTypes';
export const saveResult = (payload) => {
    return {
        type : actionType.STORE_RESULT,
        payload : payload
    }
}
export const storeres = (payload) => {
    return (dispatch, getState) =>{
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter);
            dispatch(saveResult(payload));
        },2000);
    }
}
export const delresult = (payload) => {
    return {
        type : actionType.DELETE_RESULT,
        payload : payload
    }
}