'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProfileDropdown from './ProfileDropdown'

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/projects': 'Projects',
  '/jobs': 'Jobs',
  '/cockpit': 'Cockpit',
  '/electricity': 'Électricité',
  '/collateral': 'Collateral',
  '/admin': 'Admin',
}

export default function Header() {
  const pathname = usePathname()
  const [pageTitle, setPageTitle] = useState('Dashboard')

  useEffect(() => {
    setPageTitle(pageTitles[pathname || ''] || 'Dashboard')
  }, [pathname])

  return (
    <header className="header" id="header">
      <div className="header-left">
        <h2 className="page-title" id="page-title">
          {pageTitle}
        </h2>
      </div>
      <div className="header-right">
        <ProfileDropdown />
      </div>
    </header>
  )
}

