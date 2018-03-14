import * as actionType from '../actions';
const initialState = {
    result : []
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.STORE_RESULT :
            return {
                ...state,
                result : state.result.concat({id :new Date(), value : action.payload.result})
            };
        case actionType.DELETE_RESULT :
        //const id =1;
        // const newArray = [...state.result];
        // newArray.splice(id, 1);
        const updatedArray = state.result.filter((res, index) => res.id !== action.payload.id);
            return {
                ...state,
                result : updatedArray
            }
        //no default
    }
    return state;
}

export default reducer;