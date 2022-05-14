import { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  

  return (
    <div className="expenses">
      <ExpensesFilter
        yearSelected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
