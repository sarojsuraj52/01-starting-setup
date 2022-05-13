import "../Expense/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./UI/Card";
// import Expenses from './Expenses'

function ExpenseItem(props) {
const deletehandler = ()=>{
  document.querySelector('.expense-item').remove()
}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails title={props.title} amount={props.amount}/>
        <h3>{props.location}</h3>
        <button onClick={deletehandler}>Delete Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
