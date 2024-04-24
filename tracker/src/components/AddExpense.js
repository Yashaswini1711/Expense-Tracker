import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function AddExpense() {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    try {
      const expenseAmount = parseFloat(amount);
      if (expenseAmount <= 0) {
        alert('Expense amount must be greater than 0.');
        return;
      }
  
      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userEmail = decodedToken.sub;
      const response = await axios.post('http://localhost:8086/api/user/expenses', {
        email: userEmail, 
        category,
        amount: parseFloat(amount)
      });
      console.log('Expense added successfully');
      console.log(response.data);
    } catch (error) {
        alert('Oops! Insufficient Balance.');
      }
  };
  
  return (
    <div className="container border p-4 shadow-lg">
      <h2 className="fw-bold">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;