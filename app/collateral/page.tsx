'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CollateralOverview from '@/components/collateral/CollateralOverview'
import CollateralAssets from '@/components/collateral/CollateralAssets'
import CollateralLoans from '@/components/collateral/CollateralLoans'
import CollateralTransactions from '@/components/collateral/CollateralTransactions'
import CollateralAnalytics from '@/components/collateral/CollateralAnalytics'

export default function CollateralPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'assets', label: 'Assets' },
    { id: 'loans', label: 'Loans' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'analytics', label: 'Analytics' },
  ]

  return (
    <div className="dashboard-view">
      <div className="dashboard-content">
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
            Collateral Management
          </h1>
          
          {/* Navigation tabs */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-2)',
            borderBottom: '1px solid var(--border)',
            marginBottom: 'var(--space-6)',
          }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeSection === section.id ? '2px solid var(--hearst-green)' : '2px solid transparent',
                  color: activeSection === section.id ? 'var(--hearst-green)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: activeSection === section.id ? 600 : 400,
                  transition: 'all var(--duration-fast) var(--ease-in-out)',
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Content */}
        {activeSection === 'overview' && <CollateralOverview />}
        {activeSection === 'assets' && <CollateralAssets />}
        {activeSection === 'loans' && <CollateralLoans />}
        {activeSection === 'transactions' && <CollateralTransactions />}
        {activeSection === 'analytics' && <CollateralAnalytics />}
      </div>
    </div>
  )
}

