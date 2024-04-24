import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';
import '../styles/PasswordResetPage.css'

function PasswordResetPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    // Retrieve email from token
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const email = decodedToken.sub;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8086/api/user/resetPassword', {
        email,
        newPassword,
        confirmPassword,
      });
      console.log(response.data); // Print response data on success
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password reset successful!',
      });
    } catch (error) {
      setError('Error resetting password');
      console.error('Password reset error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password reset failed',
      });
    }
  }  

  return (
    <div className="password-reset-container">
    <div className="container mt-0 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center">Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password:</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default PasswordResetPage;
