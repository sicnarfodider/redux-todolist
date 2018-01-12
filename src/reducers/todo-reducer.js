import types from '../actions/types';

const DEFAULT_STATE={
  list: [],
  single: null
}

export default function(state=DEFAULT_STATE, action){
  switch (action.type) {
    case types.GET_SINGLE_ITEM:
    console.log('single', action);
        return {...state, single: action.payload.data.todo}
    case types.GET_ITEMS:
      return {...state, list: action.payload.data.todos}
    default:
      return state;
  }
}
