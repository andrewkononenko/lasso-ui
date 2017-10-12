const initialState = {
    emails: ['asdasdadasd', 'asdasdasds']
}

export default function emails(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            let newEmails = state.emails.slice()
            newEmails.push(action.payload)
            return { ...state, emails: newEmails }

        case 'REMOVE':
            return { ...state, emails: state.emails.filter(e => e !== action.payload) }

        default:
            return state;
    }
}