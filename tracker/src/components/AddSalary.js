import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function AddSalary() {
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    try {
      if (parseFloat(amount) < 0) {
        alert('Oops! Salary cannot be negative!');
      } else if (parseFloat(amount) === 0) {
        alert('Salary amount must be greater than 0.');
      }

      const token = localStorage.getItem('token');
      console.log('Token: ', token);
      const decodedToken = jwtDecode(token);
      console.log('Decoded token: ', decodedToken);
      const userEmail = decodedToken.sub;
      console.log('Email: ', userEmail);
      const response = await axios.post('http://localhost:8086/api/user/addSalary', {
        email: userEmail, 
        amount: parseFloat(amount)
      });
      console.log('Salary added successfully:', response.data);
    } catch (error) {
      console.error('Error adding salary:', error);
    }
  };

  return (
    <div className="container border p-4 shadow-lg">
      <h2 className="fw-bold">Add Salary</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Add Salary</button>
      </form>
    </div>
  );
}


export default AddSalary;