import React from "react";

function ExpenseList({ transactions, deleteTransaction }) {
  return (
    <section className="history-section">
      <div className="section-title">
        <h2>History</h2>
        <h3>EXPENSE LIST</h3>
      </div>

      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div
            className={`transaction ${
              transaction.amount > 0
                ? "transaction-income"
                : "transaction-expense"
            }`}
            key={transaction.id}
          >
            <span>{transaction.title}</span>

            <div className="transaction-right">
              <span>
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </span>

              <button
                className="delete-button"
                onClick={() => deleteTransaction(transaction.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpenseList;