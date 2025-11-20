'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { collateralAPI } from '@/lib/api'

export default function CollateralOverview() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await collateralAPI.getAll()
        setData(response)
      } catch (err) {
        console.error('Error loading collateral data:', err)
        // Fallback to mock data
        setData({
          clients: [
            {
              id: '1',
              name: 'Client Principal',
              totalValue: 1250000,
              totalDebt: 450000,
              healthFactor: 2.78,
              availableCredit: 800000,
            },
            {
              id: '2',
              name: 'Client Secondaire',
              totalValue: 850000,
              totalDebt: 320000,
              healthFactor: 2.66,
              availableCredit: 530000,
            },
          ],
        })
      }
    }
    loadData()
  }, [])

  const totalCollateral = data?.clients?.reduce((sum: number, client: any) => sum + (client.totalValue || 0), 0) || 2100000
  const totalDebt = data?.clients?.reduce((sum: number, client: any) => sum + (client.totalDebt || 0), 0) || 770000
  const totalAvailable = data?.clients?.reduce((sum: number, client: any) => sum + (client.availableCredit || 0), 0) || 1330000
  const utilizationRate = totalCollateral > 0 ? ((totalDebt / totalCollateral) * 100).toFixed(1) : '0'

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <Card>
          <CardHeader>
            <CardTitle>Total Collateral</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--hearst-green)' }}>
              ${(totalCollateral / 1000000).toFixed(2)}M
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              Total value locked
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--hearst-green)' }}>
              {data?.clients?.length || 2}
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              Outstanding loans
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Utilization Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: parseFloat(utilizationRate) < 50 ? 'var(--hearst-green)' : parseFloat(utilizationRate) < 80 ? '#FFA500' : '#ff4d4d' }}>
              {utilizationRate}%
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              Collateral utilization
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Available Credit</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--hearst-green)' }}>
              ${(totalAvailable / 1000).toFixed(0)}K
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              Available to borrow
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Protocol</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Supply</td>
                  <td style={{ color: 'var(--hearst-green)' }}>+500 ETH</td>
                  <td>Morpho</td>
                  <td>2 hours ago</td>
                  <td><span style={{ color: 'var(--hearst-green)' }}>Completed</span></td>
                </tr>
                <tr>
                  <td>Borrow</td>
                  <td style={{ color: '#ff4d4d' }}>-200 ETH</td>
                  <td>Morpho</td>
                  <td>1 day ago</td>
                  <td><span style={{ color: 'var(--hearst-green)' }}>Completed</span></td>
                </tr>
                <tr>
                  <td>Supply</td>
                  <td style={{ color: 'var(--hearst-green)' }}>+300 BTC</td>
                  <td>Aave</td>
                  <td>2 days ago</td>
                  <td><span style={{ color: 'var(--hearst-green)' }}>Completed</span></td>
                </tr>
                <tr>
                  <td>Repay</td>
                  <td style={{ color: 'var(--hearst-green)' }}>+150 BTC</td>
                  <td>Aave</td>
                  <td>3 days ago</td>
                  <td><span style={{ color: 'var(--hearst-green)' }}>Completed</span></td>
                </tr>
                <tr>
                  <td>Supply</td>
                  <td style={{ color: 'var(--hearst-green)' }}>+400 USDC</td>
                  <td>Morpho</td>
                  <td>5 days ago</td>
                  <td><span style={{ color: 'var(--hearst-green)' }}>Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

