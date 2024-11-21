import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    name: '',
    amount: '',
    catagory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.name || !expense.amount || !expense.catagory) {
      alert('Please fill out all fields!');
      return;
    }
    onAddExpense(expense);
    setExpense({ name: '', amount: '', catagory: '' });
  };

  return (
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={expense.name}
          onChange={handleChange}
          placeholder="Expense Name"
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Expense Amount"
        />
        <select
          name="catagory"
          value={expense.catagory}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
