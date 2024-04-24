import React from 'react';
import UserList from '../components/UserList';
import UserChart from '../components/UserChart';
import { Link } from 'react-router-dom';
import { BsPower } from 'react-icons/bs';
import '../styles/AdminDashboardPage.css'; // Import the CSS file

function AdminDashboardPage() {
  return (
    <div className="admin-dashboard-container">
        <div className="d-flex justify-content-between align-items-center">
        <h2>Admin Dashboard</h2>
        <Link to="/login" className="btn btn-link rounded p-2 mr-3 mt-3" style={{ border: '1px solid #007bff' }}>
          <BsPower size={24} style={{ color: '#007bff' }} />
        </Link>
      </div>
      <div className="row">
        <div className="col-md-6" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}> {/* UserList takes 60% of the page width */}
          <UserList />
        </div>
        <div className="col-md-5"> {/* UserChart takes 40% of the page width */}
          <UserChart />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
