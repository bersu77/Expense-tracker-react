import { useState } from 'react';
import './App.css';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';

const Total = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + Number(expense.amount), 0);
  return (
    <div className="total-expense">
      <h2>Total Expense: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="app">
      <ExpenseForm onAddExpense={addExpense} />
      <Total expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
