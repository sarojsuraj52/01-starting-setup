import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
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

  let expenselist = expenses.map((item) => {
    return (
      <ExpenseItem
        date={item.date}
        title={item.title}
        amount={item.amount}
        location={item.locationOfExpenditure}
      ></ExpenseItem>
    );
  });

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].locationOfExpenditure}
      ></ExpenseItem> */}
      {expenselist}
    </div>
  );
}

export default App;
