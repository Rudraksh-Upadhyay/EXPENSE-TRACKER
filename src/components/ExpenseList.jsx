// ExpenseList.jsx
import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {


  return (

    <div className="expense-list">
      <h2>Your Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (

          <div key={expense.id} className="expense-item">
            <span>{expense.title}</span>
            <span>₹{expense.amount.toFixed(2)}</span>
            <span>{expense.category}</span>

            <button onClick={() => 
                onEditExpense(expense)
            }>Edit</button>

            <button onClick={() =>
                onDeleteExpense(expense.id)
            }>Delete</button>
          </div>

        ))
      )}
    </div>

  );


};

export default ExpenseList;
