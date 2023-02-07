

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state = state + 1
        case 'REMOVE':
            return state = state - 1
        default:
            return state


    }

}