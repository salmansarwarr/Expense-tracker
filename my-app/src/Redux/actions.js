import {ADD_INCOME, ADD_EXPENSE, REMOVE_INCOME, REMOVE_EXPENSE} from "./actionTypes"

export function add(item) {
    if(item.price.toString().charAt(0) === "-") {
        return {
            type: ADD_EXPENSE,
            payload: {
                item
            }
        }
    }
    return {
        type: ADD_INCOME,
        payload: {
            item
        }
    }
}

export function remove(item) {
    if(item.price.toString().charAt(0) === "-") {
        return {
            type: REMOVE_EXPENSE,
            payload: {
                item
            }
        }
    }
    return {
        type: REMOVE_INCOME,
        payload: {
            item
        }
    }
}
