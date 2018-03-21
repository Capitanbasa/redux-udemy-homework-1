import * as actionType from '../actions/actionTypes';
import updateObject from '../utility';
const initialState = {
    result : []
}
const deleteResult = (state, action) => {
    const updatedArray = state.result.filter((res, index) => res.id !== action.payload.id);
    return updateObject(state, { result : updatedArray });
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.STORE_RESULT : return updateObject(state, {result : state.result.concat({id :new Date(), value : action.payload.result})});
        case actionType.DELETE_RESULT : return deleteResult(state, action);
        //no default
    }
    return state;
}

export default reducer;