import React from "react";

function Summary({ transactions }) {
  const amounts = transactions.map((transaction) => transaction.amount);

  const balance = amounts.reduce((total, amount) => total + amount, 0);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((total, amount) => total + amount, 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((total, amount) => total + Math.abs(amount), 0);

  return (
    <section className="summary-section">
      <div className="balance">
        <div>
          <p className="small-title">YOUR BALANCE</p>
          <h2>${balance.toFixed(2)}</h2>
        </div>

        <h3>SUMMARY</h3>
      </div>

      <div className="summary-box">
        <div className="summary-item">
          <h4>INCOME</h4>
          <p className="income">
            ${income.toFixed(2)}
          </p>
        </div>

        <div className="divider"></div>

        <div className="summary-item">
          <h4>EXPENSE</h4>
          <p className="expense">
            ${expense.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Summary;