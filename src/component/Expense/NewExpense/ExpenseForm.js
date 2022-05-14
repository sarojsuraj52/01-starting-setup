import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ //-> this approach will not give the ltest previous state updates
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
    // setUserInput((prevState)=>{ //-> we have to use arrow function which automatically takes the prevstate latest changes
    //     return {...prevState,enteredTitle:event.target.value}
    // })
  };
  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
  };
  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
  };

  const submitHandler = (event) => {
      event.preventDefault()
      const expenseData = {
          title:enteredTitle,
          amount:enteredAmount,
          date:new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData)
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" value={enteredTitle} onChange={titleChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" id="amount" value={enteredAmount} onChange={amountChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
