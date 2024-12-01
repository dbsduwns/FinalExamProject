import React, { useState, useEffect } from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {

    const [total, setTotal] = useState(0);

    const calTotal = (expenses) => {
        let totalAmount = 0;
        for (const expense of expenses) {
            totalAmount += expense.amount;
        }
        return totalAmount;
    };

    useEffect (() => {
        setTotal(calTotal(expenses));
    }, [expenses]);

    return (
        <div>
            <h2>Expense List</h2>
            {expenses.length > 0 ? (
                expenses.map((expense) => (
                    <div key={expense.id} style={{ fontSize: 30 }}>
                        {expense.title} - ${expense.amount}
                        <button onClick={() => deleteExpense(expense.id)} style={{marginLeft: 0, fontSize: 20}}>del</button>
                    </div>
                ))
            ) : (
                <p>내역이 없습니다.</p>
            )}            
            <h3 style={{color: 'red'}}>Total : {calTotal(expenses)}</h3>
        </div>
    );
};

export default ExpenseList;