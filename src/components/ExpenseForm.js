import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!title || !amount || !category) {
            alert('모든 필드를 입력하세요.');
            return;
        }

        const newExpense = { title, amount: parseFloat(amount), category };
        addExpense(newExpense);
        setTitle('');
        setAmount('');
        setCategory('');
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={submit}>
                <input 
                    type='text' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='사용처' 
                />
                <input 
                    type='number' 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder='금액' 
                />
                <input 
                    type='text' 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    placeholder='분류' 
                />
                <button type='submit' style={{ fontSize: 30 }}>
                    Add Expense
                </button>
            </form>
        </div>
    );
}

export default ExpenseForm;