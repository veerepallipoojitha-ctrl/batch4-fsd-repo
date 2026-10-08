function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div className="list-card">
            <h2>📋 Expense List</h2>

            {expenses.length === 0 ? (
                <p className="empty">
                    No expenses added yet.
                </p>
            ) : (
                <div>
                    {expenses.map((expense) => (
                        <div
                            className="expense-item"
                            key={expense.id}
                        >
                            <div>
                                <h3>{expense.name}</h3>

                                <p>
                                    Category: {expense.category}
                                </p>
                            </div>

                            <div className="expense-right">
                                <strong>
                                    ₹{expense.amount.toFixed(2)}
                                </strong>

                                <button
                                    className="delete-button"
                                    onClick={() =>
                                        onDeleteExpense(expense.id)
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExpenseList;