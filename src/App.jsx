import React from 'react';
import { useState, useEffect } from 'react';


import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList' ;
import ExpenseChart from "./components/ExpenseChart";


import './App.css'

function App() {

  useEffect( () =>{
    document.title = "EXPENSE TRACKER";
  }, []);
  
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);


  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
    // console.log("Expense Added:", expense);
    // console.log("What we have after all:", expenses);
  }


  const handleDeleteExpense = (id) =>{
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };


  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };


  const handleSaveExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense)
    );
    setEditingExpense(null);
  }



  return (
    <div className="container">
      <h1>Expense Tracker</h1>


      <ExpenseForm onAddExpense={handleAddExpense} editingExpense={editingExpense} onSaveExpense={handleSaveExpense}/> 
      <ExpenseList expenses={expenses} onEditExpense={handleEditExpense} onDeleteExpense={handleDeleteExpense}/>
      <ExpenseChart expenses={expenses} />



      <div className="total">
        <h3>Total Spent: ₹{expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}</h3>
      </div>


    </div>
  );
}

export default App
