export default store => next => action => {
    debugger;
    if(!action.payload || !action.payload.then){
        next(action);
        return;
    }

    action.payload.then(resp => {
        const newAction = {...action, payload: resp};

        store.dispatch(newAction);
    })

    return action.payload
}
