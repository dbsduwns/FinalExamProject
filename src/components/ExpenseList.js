import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
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
        </div>
    );
};

export default ExpenseList;