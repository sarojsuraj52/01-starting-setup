import  {useState} from "react";
import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/Expense/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "Pratapgarh",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Mumbai",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Prayagraj",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "Pune",
  },
];

function App() {
 const [expenses,setExpenses] = useState(dummy_expenses)


  const addExpenseHandler = (expenseData)=>{
    setExpenses((prevExpenses)=>[
      expenseData,
      ...prevExpenses
    ])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
