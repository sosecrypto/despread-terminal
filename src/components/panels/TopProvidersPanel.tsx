import React from 'react';
import { Bar } from 'react-chartjs-2';
import './TopProvidersPanel.css';

const TopProvidersPanel: React.FC = () => {
  // Real provider data from Supabase
  const providerData = [
    { provider: 'coinreaders.com', count: 5983 },
    { provider: 'digitaltoday.co.kr', count: 4380 },
    { provider: 'g-enews.com', count: 1654 },
    { provider: 'news1.kr', count: 1607 },
    { provider: 'pinpointnews.co.kr', count: 1548 },
    { provider: 'khgames.co.kr', count: 1363 },
    { provider: 'newsis.com', count: 1280 },
    { provider: 'cbci.co.kr', count: 1274 },
    { provider: 'mk.co.kr', count: 1223 },
    { provider: 'edaily.co.kr', count: 1180 }
  ];

  const chartData = {
    labels: providerData.map(d => d.provider.split('.')[0]),
    datasets: [{
      label: 'Articles',
      data: providerData.map(d => d.count),
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
    indexAxis: 'y' as const,
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
    <div className="terminal-panel bottom-panel">
      <div className="panel-header">
        <h3>TOP PROVIDERS</h3>
      </div>
      <div className="panel-content">
        <div className="chart-wrapper">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TopProvidersPanel;
