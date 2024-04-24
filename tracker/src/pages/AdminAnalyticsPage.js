import UserChart from "../components/UserChart";
import { Link } from 'react-router-dom'; // Import Link component


function AdminAnalyticsPage() {
  return (
    <div>
        {/* <Link to="/admin">Go to Admin Analytics</Link> */}
        <h2>Admin Dashboard</h2>
        <UserChart />

    </div>
  );
}

export default AdminAnalyticsPage;
