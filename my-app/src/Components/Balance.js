import React from "react";
import { useSelector } from "react-redux"

function Balance() {
    const { balance, income, expense } = useSelector(state => state)
    
    return (
        <section className="balance flex">
            <div className="container card flex">
                <h2> Your balance: <span>${balance.toFixed(2)}</span> </h2>
                <h2> Income : <span>${income.toFixed(2)}</span> </h2>
                <h2> Expense: <span>${expense.toFixed(2)}</span> </h2>
            </div>
        </section>
    )   
}

export default Balance