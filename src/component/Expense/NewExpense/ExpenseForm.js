import './ExpenseForm.css'

const titleChangehandler = (event) =>{
    console.log(event.target.value)
}
const amountChangehandler = (event) =>{
    console.log(event.target.value)
}
const dateChangehandler = (event) =>{
    console.log(event.target.value)
}

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" onChange={titleChangehandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" id="amount" onChange={amountChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" id="date" min='2019-01-01' max='2022-12-31' onChange={dateChangehandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
