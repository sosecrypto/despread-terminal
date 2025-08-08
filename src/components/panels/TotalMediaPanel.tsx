import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import './TotalMediaPanel.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const TotalMediaPanel: React.FC = () => {
  const [mediaCount, setMediaCount] = useState<number>(0);
  const [mediaLogos, setMediaLogos] = useState<string[]>([]);

  // Real data from Supabase
  const activityData = [
    { category: 'Very Active (1000+)', count: 12, color: '#00ff88' },
    { category: 'High Active (500-999)', count: 18, color: '#00cc6a' },
    { category: 'Medium Active (100-499)', count: 112, color: '#00994d' },
    { category: 'Low Active (50-99)', count: 76, color: '#006630' },
    { category: 'Inactive (<50)', count: 419, color: '#333333' }
  ];

  const top10Providers = [
    'coinreaders.com', 'digitaltoday.co.kr', 'g-enews.com', 'news1.kr', 'pinpointnews.co.kr',
    'khgames.co.kr', 'newsis.com', 'cbci.co.kr', 'mk.co.kr', 'edaily.co.kr'
  ];

  useEffect(() => {
    // Animate media count
    let currentCount = 0;
    const targetCount = 637;
    const increment = Math.ceil(targetCount / 50);
    
    const countInterval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(countInterval);
      }
      setMediaCount(currentCount);
    }, 50);

    // Set media logos
    setMediaLogos(top10Providers);

    return () => clearInterval(countInterval);
  }, []);

  const chartData = {
    labels: activityData.map(d => d.category),
    datasets: [{
      data: activityData.map(d => d.count),
      backgroundColor: activityData.map(d => d.color),
      borderColor: '#1a1a1a',
      borderWidth: 2,
      hoverBorderColor: '#00ff88'
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#ffffff',
          font: {
            family: 'Inter',
            size: 10
          },
          padding: 10,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#333',
        borderWidth: 1,
        cornerRadius: 4,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '60%',
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  return (
    <div className="terminal-panel left-panel">
      <div className="panel-header">
        <h3>TOTAL MEDIA</h3>
      </div>
      <div className="panel-content">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Active Media</span>
            <span className="metric-trend">+2.3%</span>
          </div>
          <div className="metric-value">{mediaCount.toLocaleString()}</div>
          <div className="media-logos-grid">
            {mediaLogos.map((provider, index) => (
              <div 
                key={index} 
                className="media-logo"
                title={provider}
              >
                {provider.split('.')[0].substring(0, 2).toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        <div className="activity-chart-container">
          <h4>Activity Distribution</h4>
          <div className="chart-wrapper">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalMediaPanel;
