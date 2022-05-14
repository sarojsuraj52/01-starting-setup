import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const expenselist = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
        location={item.locationOfExpenditure}
      />
    );
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        yearSelected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expenselist}
    </div>
  );
}

export default Expenses;
