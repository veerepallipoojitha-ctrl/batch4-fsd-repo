import React, { useState } from "react";

function Addtask({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !amount) {
      alert("Please enter title and amount");
      return;
    }

    const value = Number(amount);

    if (value <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    addTransaction({
      title: title.trim(),
      amount: type === "income" ? value : -value,
    });

    setTitle("");
    setAmount("");
    setType("income");
  };

  return (
    <section className="add-section">
      <div className="section-title">
        <h2>Add new transaction</h2>
        <h3>ADD EXPENSE</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Title</label>

        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Amount</label>

        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={(event) => setType(event.target.value)}
            />
            Income
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={(event) => setType(event.target.value)}
            />
            Expense
          </label>
        </div>

        <button type="submit" className="add-button">
          Add transaction
        </button>
      </form>
    </section>
  );
}

export default Addtask;