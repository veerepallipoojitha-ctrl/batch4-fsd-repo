import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            name.trim() === "" ||
            amount === "" ||
            Number(amount) <= 0
        ) {
            alert("Please enter valid expense details");
            return;
        }

        const expense = {
            id: Date.now(),
            name: name,
            amount: Number(amount),
            category: category
        };

        onAddExpense(expense);

        setName("");
        setAmount("");
        setCategory("Food");
    };

    return (
        <div className="form-card">
            <h2>🧾 Add Expense</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Expense name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />

                <input
                    type="number"
                    placeholder="Expense amount"
                    value={amount}
                    onChange={(event) =>
                        setAmount(event.target.value)
                    }
                />

                <select
                    value={category}
                    onChange={(event) =>
                        setCategory(event.target.value)
                    }
                >
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">
                        Entertainment
                    </option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit">
                    Add Expense
                </button>
            </form>
        </div>
    );
}

export default ExpenseForm;