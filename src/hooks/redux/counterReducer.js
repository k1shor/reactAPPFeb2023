const initialData = {
    count: 0,
    data: 100
}
const counterReducer = (state = initialData, action) => {
    switch (action.type) {
        case "INCREASE_COUNT":
            return { ...state, count: ++state.count }

        case "DECREASE_COUNT":
            return { ...state, count: --state.count }

        case "RESET_COUNT":
            return { ...state, count: 0 }

        case "INCREASE_DATA":
            return { ...state, data: state.data + 10 }

        case "DECREASE_DATA":
            return { ...state, data: state.data - 10 }

        case "RESET_DATA":
            return { ...state, data: 100 }

        default:
            return state
    }
}

export default counterReducer