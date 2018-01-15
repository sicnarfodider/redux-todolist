import types from '../actions/types';

const DEFAULT_STATE={
    list: [],
    single: null,
    msg: ''
}

export default function(state=DEFAULT_STATE, action){
    switch (action.type) {
        case types.GET_SINGLE_ITEM:
            console.log('single', action);
            return {...state, single: action.payload.data.todo}
        case types.GET_ITEMS:
            return {...state, list: action.payload.data.todos}
        case types.DELETE_ITEM:
            return {...state, msg: action.payload.data.msg}
        default:
        return state;
    }
}
