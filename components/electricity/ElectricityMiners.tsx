'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ElectricityMiners() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Miner Power Consumption</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Miner ID</th>
                  <th>Model</th>
                  <th>Power (W)</th>
                  <th>Hashrate</th>
                  <th>Efficiency (J/TH)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No miners configured
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

