import { ADD_INCOME, ADD_EXPENSE, REMOVE_INCOME, REMOVE_EXPENSE } from "./actionTypes"
var initState = {
    balance: 0,
    income: 0,
    expense: 0,
    history: []
}

export function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_INCOME:
            state.history.unshift(action.payload.item)
            return {
                ...state,
                balance: state.balance + action.payload.item.price,
                income: state.income + action.payload.item.price,
            }

        case ADD_EXPENSE:
            state.history.unshift(action.payload.item)
            return {
                ...state,
                balance: state.balance + action.payload.item.price,
                expense: state.expense - action.payload.item.price,
            }

        case REMOVE_INCOME:
            return {
                ...state,
                balance: state.balance - action.payload.item.price,
                income: state.income - action.payload.item.price,
                history: state.history.filter(item => item.name !== action.payload.item.name)
            }

        case REMOVE_EXPENSE:
            return {
                ...state,
                balance: state.balance - action.payload.item.price,
                expense: state.income + action.payload.item.price,
                history: state.history.filter(item => item.name !== action.payload.item.name)
            }

        default:
            return state;
    }
}