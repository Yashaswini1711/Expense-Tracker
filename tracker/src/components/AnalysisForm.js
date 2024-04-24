import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ExpensesByDateRange = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserEmail(decodedToken.sub);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      const response = await axios.get('http://localhost:8086/api/user/expensesByDateRange', {
        params: {
          email: userEmail,
          startDate: new Date(startDate).toISOString(), // Convert date to ISO string
          endDate: new Date(endDate).toISOString()     // Convert date to ISO string
        },
        headers: {
          Authorization: `Bearer ${token}` // Include JWT token in the request headers
        }
      });
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  return (
    <div>
      <h3>Expenses by Date Range</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Expenses</button>
      </form>
      <div className="mt-3">
        <h4>Expenses:</h4>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.category}: {expense.amount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensesByDateRange;
