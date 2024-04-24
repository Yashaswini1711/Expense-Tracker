// UserChart.js
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import axios from 'axios';

function UserChart() {
  const [userData, setUserData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null); // State to hold the chart instance
  const [chartType, setChartType] = useState('bar'); // Default chart type is bar

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

  useEffect(() => {
    if (userData.length > 0) {
      renderChart();
    }
  }, [userData, chartType]);

  const renderChart = () => {
    const ctx = document.getElementById('userChart');

    // Extracting labels (usernames) and data (balances) for the chart
    const labels = userData.map(user => user.username);
    const balances = userData.map(user => user.balance);
    const customColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF8A80', '#A1887F', '#4DD0E1'];

    // Destroy previous chart instance if exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: 'User Balance',
          data: balances,
          backgroundColor: customColors,
          borderColor: customColors,
          borderWidth: 1
        }]
      }
    });

    // Save the new chart instance
    setChartInstance(newChartInstance);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="container">
      <h2>User Balance Chart</h2>
      <div>
        <label htmlFor="chartType">Select Chart Type:</label>
        <select id="chartType" onChange={handleChartTypeChange} value={chartType}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="radar">Radar</option>
          <option value="pie">Pie</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <canvas id="userChart" width="50" height="50"></canvas>
    </div>
  );
}

export default UserChart;
