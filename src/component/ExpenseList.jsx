import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses added yet!</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
