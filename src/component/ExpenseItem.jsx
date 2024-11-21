const ExpenseItem = ({ expense }) => {
    return (
      <div className="expense-item">
        <p>
          <strong>{expense.name}</strong> - ${expense.amount} ({expense.catagory})
        </p>
      </div>
    );
  };
  
  export default ExpenseItem;
  