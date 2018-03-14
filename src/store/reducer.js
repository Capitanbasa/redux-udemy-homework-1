const initialState = {
    counter : 0,
    result : []
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT' :
            const newState = Object.assign({} , state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT' :
            return {
                ...state,
                counter : state.counter -1
            }
        case 'ADD_FIVE' :
            return {
                ...state,
                counter : state.counter + action.payload.addionalvalue
            }
        case 'SUB_FIVE' :
            return {
                ...state,
                counter : state.counter - action.payload.subtractvalue
            }
        case 'STORE_RESULT' :
            return {
                ...state,
                result : state.result.concat({id :new Date(), value : state.counter})
            };
        case 'DELETE_RESULT' :
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