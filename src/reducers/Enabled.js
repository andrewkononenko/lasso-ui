const initialState = {
    subscribed: false
}

export default function msgDisplay(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, subscribed: !state.subscribed }

        default:
            return state;
    }
}