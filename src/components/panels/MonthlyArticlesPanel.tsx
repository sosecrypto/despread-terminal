import React from 'react';
import { Bar } from 'react-chartjs-2';
import './MonthlyArticlesPanel.css';

const MonthlyArticlesPanel: React.FC = () => {
  // Real monthly data from Supabase
  const monthlyData = [
    { month: 'May 2025', count: 17082 },
    { month: 'Jun 2025', count: 21059 },
    { month: 'Jul 2025', count: 26708 },
    { month: 'Aug 2025', count: 6388 }
  ];

  const chartData = {
    labels: monthlyData.map(d => d.month),
    datasets: [{
      label: 'Articles',
      data: monthlyData.map(d => d.count),
      backgroundColor: '#00ff88',
      borderColor: '#00cc6a',
      borderWidth: 1,
      borderRadius: 4,
      hoverBackgroundColor: '#00cc6a'
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#333',
        borderWidth: 1,
        cornerRadius: 4
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#888',
          font: {
            family: 'Inter',
            size: 10
          }
        },
        grid: {
          color: '#333',
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: '#888',
          font: {
            family: 'Inter',
            size: 10
          }
        },
        grid: {
          color: '#333',
          drawBorder: false
        }
      }
    }
  };

  return (
    <div className="terminal-panel right-panel">
      <div className="panel-header">
        <h3>MONTHLY ARTICLES</h3>
      </div>
      <div className="panel-content">
        <div className="chart-wrapper">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MonthlyArticlesPanel;
