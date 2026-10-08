import { useState } from "react";

function IncomeForm({ onSetIncome }) {
    const [income, setIncome] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (income === "" || Number(income) <= 0) {
            alert("Please enter a valid income");
            return;
        }

        onSetIncome(Number(income));
        setIncome("");
    };

    return (
        <div className="form-card">
            <h2>💰 Enter Income</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter your income"
                    value={income}
                    onChange={(event) =>
                        setIncome(event.target.value)
                    }
                />

                <button type="submit">
                    Set Income
                </button>
            </form>
        </div>
    );
}

export default IncomeForm;