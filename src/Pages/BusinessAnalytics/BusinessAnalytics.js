import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './BusinessAnalytics.css';

const BusinessAnalytics = () => {
  const [views, setViews] = useState([]);
  const [userEngagement, setUserEngagement] = useState({
    averageTimeOnPage: 60,
    bounceRate: 10,
  });
  const [pageViewsOverTime, setPageViewsOverTime] = useState([]);
  const [averageTimeData, setAverageTimeData] = useState([40, 50, 60, 70, 80, 90]); // Hardcoded average time data
  const [reviewStatistics, setReviewStatistics] = useState({
    totalReviews: 100,
    averageRating: 4.5,
    positiveReviews: 80,
    negativeReviews: 20
  });
  const [totalUsers, setTotalUsers] = useState([150, 180, 200, 220, 250, 280]); // Hardcoded total users data
  const pageViewsOverTimeChartRef = useRef(null);
  const averageTimeChartRef = useRef(null);
  const reviewStatisticsChartRef = useRef(null);
  const totalUsersChartRef = useRef(null);
  const pageViewsPieChartRef = useRef(null);

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
    // Generate sample data for page views over time
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const pageViewsData = months.map(month => ({
      month,
      views: Math.floor(Math.random() * 500) // Generate random views for each month
    }));
    setPageViewsOverTime(pageViewsData);
  };

  const renderCharts = () => {
    renderPageViewsOverTimeChart();
    renderAverageTimeOnPageChart();
    renderReviewStatisticsChart();
    renderTotalUsersChart();
    renderPageViewsPieChart(); // New chart
  };

  const renderPageViewsOverTimeChart = () => {
    const ctx = document.getElementById('pageViewsOverTimeChart');
    if (pageViewsOverTimeChartRef.current) {
      pageViewsOverTimeChartRef.current.destroy();
    }
    pageViewsOverTimeChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: pageViewsOverTime.map(data => data.month),
        datasets: [{
          label: 'Page Views Over Time',
          data: pageViewsOverTime.map(data => data.views),
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.4,
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

  const renderAverageTimeOnPageChart = () => {
    const ctx = document.getElementById('averageTimeChart');
    if (averageTimeChartRef.current) {
      averageTimeChartRef.current.destroy();
    }
    averageTimeChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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

  const renderReviewStatisticsChart = () => {
    const ctx = document.getElementById('reviewStatisticsChart');
    if (reviewStatisticsChartRef.current) {
      reviewStatisticsChartRef.current.destroy();
    }
    reviewStatisticsChartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Positive Reviews', 'Negative Reviews'],
        datasets: [{
          label: 'Review Statistics',
          data: [reviewStatistics.positiveReviews, reviewStatistics.negativeReviews],
          backgroundColor: ['#36a2eb', '#ff6384'],
        }]
      },
    });
  };

  const renderTotalUsersChart = () => {
    const ctx = document.getElementById('totalUsersChart');
    if (totalUsersChartRef.current) {
      totalUsersChartRef.current.destroy();
    }
    totalUsersChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Total Users',
          data: totalUsers,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
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

  const renderPageViewsPieChart = () => {
    const ctx = document.getElementById('pageViewsPieChart');
    if (pageViewsPieChartRef.current) {
      pageViewsPieChartRef.current.destroy();
    }
    pageViewsPieChartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Page Views by Month',
          data: pageViewsOverTime.map(data => data.views),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderWidth: 1,
        }]
      },
    });
  };

  return (
    <div className="analytics-container">
      <h1 className="analytics-header">Analytics</h1>
      <div className="charts-and-metrics-container">
        <div className="analytics-row">
          <div className="analytics-metrics analytics-metrics-tiny">
            <h2>Review Statistics</h2>
            <canvas id="reviewStatisticsChart"></canvas>
            <p>Total Reviews: {reviewStatistics.totalReviews}</p>
            <p>Average Rating: {reviewStatistics.averageRating}</p>
            <p>Positive Reviews: {reviewStatistics.positiveReviews}</p>
            <p>Negative Reviews: {reviewStatistics.negativeReviews}</p>
          </div>
          <div className="analytics-metrics analytics-metrics-tiny">
            <h2>User Engagement</h2>
            <canvas id="bounceRateChart"></canvas>
            <p>Average Time on Page: {userEngagement.averageTimeOnPage} seconds</p>
            <p>Bounce Rate: {userEngagement.bounceRate}%</p>
          </div>
          <div className="analytics-chart">
            <canvas id="pageViewsPieChart"></canvas>
            <p>Total Yearly Views: 1530</p>
            <p>Average Monthly Views: 127.5</p>
            
            
          </div>
        </div>
        <div className="analytics-row">
          <div className="analytics-chart">
            <canvas id="averageTimeChart"></canvas>
          </div>
          <div className="analytics-chart">
            <canvas id="totalUsersChart"></canvas>
          </div>
        </div>
      </div>
      <ul className="analytics-list">
        {views.map(view => (
          <li key={view.id} className="analytics-item">
            <span className="business-name">{view.businessName}:</span>
            <span className="view-count">{view.count} views</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessAnalytics;
