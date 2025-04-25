import React, {useState, useEffect} from "react";
import "./ExpenseForm.css";


const ExpenseForm = ({ onAddExpense, editingExpense, onSaveExpense }) =>{


    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");


    useEffect( () => {
        if(editingExpense) {
            setTitle(editingExpense.title);
            setAmount(editingExpense.amount);
            setCategory(editingExpense.category);
        }
    }, [editingExpense]);



    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!title || !amount || !category) return;

        const expense = {
            id : editingExpense ? editingExpense.id : Date.now(), 
            title,
            amount : parseFloat(amount),
            category,
        };

        if(editingExpense){
            onSaveExpense(expense);
        }
        else{
            onAddExpense(expense);
        }

        // onAddExpense({
        //     id: Date.now(),
        //     title,
        //     amount: parseFloat(amount),
        //     category,
        // });
          

        setAmount("");
        setTitle("");
        setCategory("");
    };



    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter the title (e.g Grocery)"
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
            />

            <input 
                type="number" 
                placeholder="Enter amount (e.g 200/-)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>

            </select>


            <button type="submit">{editingExpense ? "Save Expense" : "Add Expense"}</button>
        </form>
    );
};


export default ExpenseForm;