import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense</h2>;
  } else if (props.items.length === 1) {
    return <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>;

  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
            location={item.locationOfExpenditure}
          />
        );
      })}
    </ul>
  );
}
export default ExpenseList;
