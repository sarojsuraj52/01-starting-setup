import "./ExpenseItem.css";

function ExpenseItem(props) {
   
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <h3>{props.location}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
