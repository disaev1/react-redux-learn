function createStore(reducer, initialState) {
    let currentReducer = reducer;
    let currentState = 114;
    let listener = () => {};

    return {
        getState() {
            return currentState;
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener();
            return action;
        },
        subscribe(newListener) {
            listener = newListener;
        }
    }
}

export {createStore};