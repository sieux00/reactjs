import * as types from './../constants/ActionTypes';

var randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: randomId(),
                name: action.task.name,
                price: action.task.price,
            };
            state.push(newTask);
            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        case types.EDIT_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                price: action.task.price,
            };

            state.forEach(s => {
                if (s.id === task.id) {
                    s = task;
                    return;
                }
            });

            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            state = state.filter(x => x.id !== action.id);

            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        default: return state;
    }
};

export default myReducer;