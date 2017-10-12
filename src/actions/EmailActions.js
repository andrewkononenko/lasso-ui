export const addEmail = (email) => {
    console.log('Add' + email.value)
    return {
        type: 'ADD',
        payload: email.value
    }
}
export const remove = (email) => {
    return {
        type: 'REMOVE',
        payload: email
    }
}