import { useState } from "react";
import IncomeForm from "./components/incomeform";
import ExpenseForm from "./components/expenseform";
import ExpenseList from "./components/expenselist";
import Summary from "./components/summary";
import "./App.css";

function App() {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState([]);

    // Set income
    const handleSetIncome = (amount) => {
        setIncome(amount);
    };

    // Add expense
    const handleAddExpense = (expense) => {
        setExpenses((previousExpenses) => [
            ...previousExpenses,
            expense
        ]);
    };

    // Delete expense
    const handleDeleteExpense = (id) => {
        setExpenses((previousExpenses) =>
            previousExpenses.filter(
                (expense) => expense.id !== id
            )
        );
    };

    return (
        <div className="App">
            <header className="header">
                <h1>💰 Personal Expense Calculator</h1>
                <p>
                    Manage your income, expenses and savings
                </p>
            </header>

            <main className="container">
                <IncomeForm
                    onSetIncome={handleSetIncome}
                />

                <ExpenseForm
                    onAddExpense={handleAddExpense}
                />

                <Summary
                    income={income}
                    expenses={expenses}
                />

                <ExpenseList
                    expenses={expenses}
                    onDeleteExpense={handleDeleteExpense}
                />
            </main>
        </div>
    );
}

export default App;
