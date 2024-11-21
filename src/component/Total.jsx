const Total = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  
    return (
      <div className="total">
        <h3>Total Expenses: ${total.toFixed(2)}</h3>
      </div>
    );
  };
  
  export default Total;
  