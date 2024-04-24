import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBinLine } from 'react-icons/ri'; // Import delete icon from React Icons library

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the API endpoint
    axios.get('http://localhost:8086/api/admin/users')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const deleteUser = (userId) => {
    // Make a DELETE request to delete the user with the specified userId
    axios.delete(`http://localhost:8086/api/admin/users/${userId}`)
      .then(response => {
        // Remove the deleted user from the user data
        setUserData(userData.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="container">
      {userData.map(user => (
        <div key={user.id} className="accordion mb-3">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${user.id}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${user.id}`} aria-expanded="false" aria-controls={`collapse${user.id}`}>
                {user.username} - Balance: {user.balance}
              </button>
              <button className="btn btn-danger" onClick={() => deleteUser(user.id)}><RiDeleteBinLine /></button> {/* Delete button icon */}
            </h2>
            <div id={`collapse${user.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${user.id}`}>
              <div className="accordion-body">
                <h4>Expense Details:</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.expenses.map(expense => (
                      <tr key={expense.id}>
                        <td>{expense.category}</td>
                        <td>{expense.amount}</td>
                        <td>{new Date(expense.expenseDate).toLocaleDateString()}</td>                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
