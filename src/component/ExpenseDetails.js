

function ExpenseDetails(props) {

    return (
        <>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </>
    )
}

export default ExpenseDetails;