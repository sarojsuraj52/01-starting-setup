import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails title={props.title} amount={props.amount}/>
        <h3>{props.location}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
