function Summary({ income, expenses }) {
    const totalExpenses = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    const savings = income - totalExpenses;

    return (
        <div className="summary-card">
            <h2>📊 Summary Report</h2>

            <div className="summary-grid">
                <div className="summary-box">
                    <h3>Income</h3>
                    <p>₹{income.toFixed(2)}</p>
                </div>

                <div className="summary-box">
                    <h3>Total Expenses</h3>
                    <p>₹{totalExpenses.toFixed(2)}</p>
                </div>

                <div className="summary-box">
                    <h3>Savings</h3>
                    <p
                        className={
                            savings >= 0
                                ? "saving"
                                : "overspending"
                        }
                    >
                        ₹{savings.toFixed(2)}
                    </p>
                </div>
            </div>

            {savings > 0 && (
                <p className="success-message">
                    🎉 Great! You have savings.
                </p>
            )}

            {savings === 0 && income > 0 && (
                <p className="warning-message">
                    ⚠️ Your income and expenses are equal.
                </p>
            )}

            {savings < 0 && (
                <p className="danger-message">
                    ⚠️ You are spending more than your income.
                </p>
            )}
        </div>
    );
}

export default Summary;