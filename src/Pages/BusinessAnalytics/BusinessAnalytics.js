import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import './BusinessAnalytics.css'; // Import the CSS file

const BusinessAnalytics = () => {
  const [views, setViews] = useState([]);
  const [userEngagement, setUserEngagement] = useState({
    averageTimeOnPage: 0,
    bounceRate: 0,
  });
  const [pageViewsOverTime, setPageViewsOverTime] = useState([]);
  const [averageTimeData, setAverageTimeData] = useState([]); // State for average time on page data
  const [reviewStatistics, setReviewStatistics] = useState({
    totalReviews: 0,
    averageRating: 0,
    positiveReviews: 0,
    negativeReviews: 0
  }); // State for review statistics
  const chartRef = useRef(null); // Ref for storing the chart instance

  useEffect(() => {
    fetchViews();
    fetchUserEngagement();
    generateSampleData();
    renderCharts();
  }, []);

  const fetchViews = async () => {
    // Fetch views data
  };

  const fetchUserEngagement = async () => {
    // Fetch user engagement data
  };

  const generateSampleData = () => {
    // Generate sample data for the past 6 months
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
    // Generate sample data for page views over time
    const pageViewsData = months.map((month, index) => {
      return Math.floor(Math.random() * 500) + 100; // Generate random page views between 100 and 600
    });
    setPageViewsOverTime(pageViewsData);
  
    // Generate sample data for average time on page
    const averageTimeData = months.map((month, index) => {
      return Math.floor(Math.random() * 60) + 30; // Generate random average time between 30 and 90 seconds
    });
    setAverageTimeData(averageTimeData);

    // Generate sample data for review statistics
    const totalReviews = 100;
    const averageRating = 4.5;
    const positiveReviews = 80;
    const negativeReviews = totalReviews - positiveReviews;
    setReviewStatistics({ totalReviews, averageRating, positiveReviews, negativeReviews });
  };

  const renderCharts = () => {
    renderPageViewsOverTimeChart();
    renderAverageTimeOnPageChart();
  };

  const renderPageViewsOverTimeChart = () => {
    const ctx = document.getElementById('pageViewsChart');
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Sample labels (replace with actual data)
        datasets: [{
          label: 'Page Views Over Time',
          data: pageViewsOverTime,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.4,
        }]
      },
    });
  };

  const renderAverageTimeOnPageChart = () => {
    const ctx = document.getElementById('averageTimeChart');
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Sample labels (replace with actual data)
        datasets: [{
          label: 'Average Time on Page',
          data: averageTimeData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  return (
    <div className="analytics-container"> {/* Apply container styling */}
      <h1 className="analytics-header">Analytics</h1> {/* Apply header styling */}
      <div className="charts-and-metrics-container">
        {/* Average Time on Page chart */}
        <div className="analytics-chart">
          <canvas id="averageTimeChart"></canvas> {/* Canvas for Average Time on Page chart */}
        </div>
        {/* Review Statistics */}
        <div className="analytics-metrics">
          <h2>Review Statistics</h2>
          <p>Total Reviews: {reviewStatistics.totalReviews}</p>
          <p>Average Rating: {reviewStatistics.averageRating}</p>
          <p>Positive Reviews: {reviewStatistics.positiveReviews}</p>
          <p>Negative Reviews: {reviewStatistics.negativeReviews}</p>
        </div>
        {/* User Engagement metrics */}
        <div className="analytics-metrics">
          <h2>User Engagement</h2>
          <p>Average Time on Page: {userEngagement.averageTimeOnPage} seconds</p>
          <p>Bounce Rate: {userEngagement.bounceRate}%</p>
        </div>
      </div>
      {/* Page Views Over Time chart */}
      <div className="analytics-chart">
        <canvas id="pageViewsChart"></canvas> {/* Canvas for Page Views Over Time chart */}
      </div>
      <ul className="analytics-list"> {/* Apply list styling */}
        {views.map(view => (
          <li key={view.id} className="analytics-item"> {/* Apply list item styling */}
            <span className="business-name">{view.businessName}:</span> {/* Apply business name styling */}
            <span className="view-count">{view.count} views</span> {/* Apply view count styling */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessAnalytics;
