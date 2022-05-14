import { useState } from "react";
import "../Expense/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./UI/Card";
// import Expenses from './Expenses'

function ExpenseItem(props) {
  const [amount, setamount] = useState(props.amount);
  const deletehandler = () => {
    document.querySelector(".expense-item").remove();
  };
  const amounthandler = () => {
    setamount('100$')
    console.log(amount)
  };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails title={props.title} amount={amount} />
        <h3>{props.location}</h3>
        <button onClick={deletehandler}>Delete Expense</button>
        <button onClick={amounthandler}>Change Price</button>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
