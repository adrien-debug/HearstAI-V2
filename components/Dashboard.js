'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Chart.js components to avoid SSR issues
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), { ssr: false })
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), { ssr: false })
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function Dashboard({ data }) {
  const chartRef1 = useRef(null)
  const chartRef2 = useRef(null)

  useEffect(() => {
    // Load icons
    if (typeof window !== 'undefined' && window.Icons) {
      document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon')
        const iconSvg = window.Icons[iconName]
        if (iconSvg) {
          el.innerHTML = iconSvg
        }
      })
    }
  }, [])

  const copyWalletAddress = () => {
    const address = '1Lzu8ieZUN7QDk6MTiPive2s2uhr2xzqqpck'
    navigator.clipboard.writeText(address)
    alert('Address copied to clipboard!')
  }

  const chartData1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'BTC Wallet',
        data: [0.02, 0.025, 0.028, 0.031, 0.031, 0.032],
        borderColor: '#9EFF00',
        backgroundColor: 'rgba(158, 255, 0, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Transactions',
        data: [10, 15, 20, 18, 22, 25],
        borderColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const chartData2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'BTC Wallet',
        data: [0.02, 0.025, 0.028, 0.031, 0.031, 0.032],
        backgroundColor: '#9EFF00',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(26, 26, 26, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#9EFF00',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
  }

  return (
    <div className="dashboard-view">
      <div className="dashboard-content">
        {/* Wallet Section */}
        <div className="wallet-section">
          <div className="wallet-card">
            <div className="wallet-card-header">
              <h3 className="wallet-card-title">Wallet</h3>
              <button className="btn-transaction-history">Transaction history</button>
            </div>
            <div className="wallet-card-body">
              <div className="wallet-balance">
                <div className="wallet-balance-btc">0.031819 BTC</div>
                <div className="wallet-balance-usd">$3,628.13 USD</div>
              </div>
              <div className="wallet-address-section">
                <div className="wallet-address">1Lzu8ieZUN7QDk6MTiPive2s2uhr2xzqqpck</div>
                <button className="btn-copy-address" onClick={copyWalletAddress}>
                  Copy
                </button>
              </div>
            </div>
          </div>

          {/* Charts Container */}
          <div className="wallet-charts-container">
            <div className="wallet-chart-section">
              <div className="chart-header">
                <h2 className="chart-title">Performance Overview</h2>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot green"></span>
                    <span>BTC Wallet</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot gray"></span>
                    <span>Transactions</span>
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <Line data={chartData1} options={chartOptions} ref={chartRef1} />
              </div>
            </div>

            <div className="wallet-chart-section">
              <div className="chart-header">
                <h2 className="chart-title">Performance Bar Chart</h2>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot green"></span>
                    <span>BTC Wallet</span>
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <Bar data={chartData2} options={chartOptions} ref={chartRef2} />
              </div>
            </div>
          </div>

          {/* Transactions Section */}
          <div className="transactions-section">
            <div className="section-header-home">
              <h3 className="section-title-home">Wallet incoming transactions</h3>
            </div>
            <div className="table-container">
              <table className="table table-unified-grid">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>BTC Transaction</th>
                    <th>Wallet adresse</th>
                    <th>Trx Id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025-01-18</td>
                    <td className="transaction-amount">0.006234 BTC</td>
                    <td>1Lzu8ieZUN7QDk6MTiPive2s2uhr2xzqqpck</td>
                    <td>a1b2c3d4e5f6...</td>
                  </tr>
                  <tr>
                    <td>2025-01-17</td>
                    <td className="transaction-amount">0.005891 BTC</td>
                    <td>1Lzu8ieZUN7QDk6MTiPive2s2uhr2xzqqpck</td>
                    <td>f6e5d4c3b2a1...</td>
                  </tr>
                  <tr>
                    <td>2025-01-16</td>
                    <td className="transaction-amount">0.005432 BTC</td>
                    <td>1Lzu8ieZUN7QDk6MTiPive2s2uhr2xzqqpck</td>
                    <td>9z8y7x6w5v4u...</td>
                  </tr>
                </tbody>
              </table>
              <div className="see-more-container">
                <button className="btn-see-more" data-table="wallet">
                  <span className="see-more-text">See more</span>
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History Section */}
        <div className="transaction-history-section">
          <div className="transaction-history-header">
            <h2 className="transaction-history-title">Transaction history</h2>
            <div className="transaction-history-controls">
              <select className="date-range-select" id="date-range-select">
                <option>January 1, 2025 - January 31, 2025</option>
                <option>December 1, 2024 - December 31, 2024</option>
                <option>November 1, 2024 - November 30, 2024</option>
              </select>
              <select className="contract-select" id="contract-select">
                <option>Contracts AL01</option>
                <option>Contracts AL02</option>
                <option>Contracts AL03</option>
              </select>
              <button className="btn-export-excel">Export to excel</button>
            </div>
          </div>

          <div className="table-container transaction-history-table-container">
            <table className="table transaction-history-table table-unified-grid">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Account</th>
                  <th>Total Reward</th>
                  <th>Hashrate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-01-18</td>
                  <td>AKT04</td>
                  <td className="transaction-reward">0.084521 BTC</td>
                  <td>2041.42 TH/s</td>
                </tr>
                <tr>
                  <td>2025-01-17</td>
                  <td>AKT04</td>
                  <td className="transaction-reward">0.083247 BTC</td>
                  <td>2041.42 TH/s</td>
                </tr>
                <tr>
                  <td>2025-01-16</td>
                  <td>AKT04</td>
                  <td className="transaction-reward">0.082156 BTC</td>
                  <td>2041.42 TH/s</td>
                </tr>
              </tbody>
            </table>
            <div className="see-more-container">
              <button className="btn-see-more" data-table="transaction-history">
                <span className="see-more-text">See more</span>
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="transaction-history-total">
            <strong>Total: <span className="total-amount">0.491902 BTC</span></strong>
          </div>
        </div>
      </div>
    </div>
  )
}

