import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Summary from "./components/Summary";
import ExpenseList from "./components/ExpenseList";
import Addtask from "./components/Addtask";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: -50,
    },
    {
      id: 2,
      title: "Salary",
      amount: 2300,
    },
    {
      id: 3,
      title: "Phone",
      amount: -1000,
    },
  ]);

  const addTransaction = (transaction) => {
    setTransactions((previous) => [
      ...previous,
      {
        ...transaction,
        id: Date.now(),
      },
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Expense Tracker</h1>

        <Summary transactions={transactions} />

        <ExpenseList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

        <Addtask addTransaction={addTransaction} />
      </div>
    </BrowserRouter>
  );
}

export default App;
