import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/SignupPage.css"

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add('signup-page');
    return () => {
      document.body.classList.remove('signup-page');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8086/api/signup', {
        email,
        password,
        username,
        balance: balance || null 
      });
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      navigate('/login'); // Navigate to login page
    } catch (error) {
      console.log('User with this email already exists!');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <form onSubmit={handleSubmit} className="card p-4 shadow" style={{ width: '100%', marginTop: '10vh' }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="balance" className="form-label">Balance:</label>
            <input
              type="number"
              id="balance"
              placeholder="Enter initial balance"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
        <p className="mt-3 text-center">Already a user? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
