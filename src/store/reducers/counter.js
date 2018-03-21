import * as actionType from '../actions/actionTypes';
import updateObject from '../utility';
const initialState = {
    counter : 0
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.INCREMENT :
            // const newState = Object.assign({} , state);
            // newState.counter = state.counter + 1;
            // return newState;
            return updateObject(state, { counter : state.counter + 1 });
        case actionType.DECREMENT : return updateObject(state, { counter : state.counter -1 });
        case actionType.ADD : return updateObject(state, { counter : state.counter + action.payload.addionalvalue });
        case actionType.SUBSTRACT : return updateObject(state, { counter : state.counter - action.payload.subtractvalue });
        //no default
    }
    return state;
}

export default reducer;