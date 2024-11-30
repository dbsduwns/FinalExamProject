import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
  };
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>가계부 프로그램</h1>
      <h2 style={{ marginBottom: 0, color: 'blue' }}>거래목록</h2>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
      <h2 style={{ color: 'blue' }}>항목 추가</h2>
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;