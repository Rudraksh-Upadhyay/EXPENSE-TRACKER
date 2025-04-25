import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];


const ExpenseChart = ({ expenses }) => {
  const categoryData = expenses.reduce((acc, expense) => {
    const found = acc.find((item) => item.name === expense.category);
    if (found) {
      found.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Expense Chart</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
