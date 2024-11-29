
const initialState = 0;

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return Math.max(0, state - 1);
        case 'INCREMENT_BY_TEN':
            return state + 10;
        case 'DECREMENT_BY_TEN':
            return Math.max(0, state - 10);
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

