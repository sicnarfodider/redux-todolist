import types from '../actions/types';

const DEFAULT_STATE={
    list: [],
    single: null,
    msg: '',
    time: null
}

export default function(state=DEFAULT_STATE, action){
    switch (action.type) {
        case types.GET_SINGLE_ITEM:
            console.log(action, 'get single');
            return {...state, single: action.payload.data.todo}
        case types.GET_ITEMS:
            return {...state, list: action.payload.data.todos}
        case types.DELETE_ITEM:
            return {...state, msg: action.payload.data.msg}
        case types.UPDATE_ITEM:
        console.log(action,"update");
            const time= new Date(parseInt(action.payload.data.todo.completed)).toTimeString()
            return  {...state, time: time}
        default:
        return state;
    }
}
