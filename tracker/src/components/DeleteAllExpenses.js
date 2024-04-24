import React from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function DeleteAllExpenses() {
  const handleDeleteAllExpenses = async () => {
    if (window.confirm('Are you sure you want to delete all expenses?')) {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.sub;
        const response = await axios.delete('http://localhost:8086/api/user/expenses/deleteAllExpenses', {
          params: {
            email: userEmail
          }
        });
        alert('All expenses deleted successfully.');
        console.log('Response:', response.data); // Print response body
      } catch (error) {
        console.error('Error deleting all expenses:', error);
        alert('Error deleting all expenses.');
      }
    }
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleDeleteAllExpenses}>Delete All Expenses</button>
    </div>
  );
}

export default DeleteAllExpenses;
