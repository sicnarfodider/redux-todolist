import types from '../actions/types';

const DEFAULT_STATE={
  list: [
    {
      title: 'Make List',
      details: 'Build it with Redux'
    },
    {
      title: 'Make List2',
      details: 'Build it with Redux2'
    },
    {
      title: 'Make List3',
      details: 'Build it with Redux3'
    }
  ]
}

export default function(state=DEFAULT_STATE, action){
  switch (action.type) {
    case types.ADD_ITEM:
        return { list: [action.payload,...state.list]}
    default:
      return state;
  }
}
