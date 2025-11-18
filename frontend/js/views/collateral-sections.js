// Collateral Sections - HEARST Design System
// Toutes les sections du collateral avec design system HEARST (#8afd81)

export function renderCollateralSection(sectionId) {
    switch (sectionId) {
        case 'dashboard':
            return getDashboardSectionHTML();
        case 'collateral':
            return getCollateralSectionHTML();
        case 'customers':
            return getCustomersSectionHTML();
        case 'api-management':
            return getAPIManagementSectionHTML();
        default:
            return getDashboardSectionHTML();
    }
}

// Dashboard Section - Vue d'ensemble
function getDashboardSectionHTML() {
    return `
        <div class="page-header">
            <div>
                <h1 class="page-title">Customer Collateral Management</h1>
                <p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: var(--space-2);">Overview & KPIs</p>
            </div>
            <button class="btn btn-primary">Show Details</button>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-bottom: var(--space-8); gap: var(--space-5);">
            <div class="stat-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-4);">
                    <div>
                        <div class="stat-label">TOTAL CLIENTS</div>
                        <div class="stat-value" style="font-size: 2.5rem; line-height: 1; margin-bottom: var(--space-2);">247</div>
                        <div class="stat-change">+12 ce mois</div>
                    </div>
                    <div style="width: 48px; height: 48px; background: rgba(138, 253, 129, 0.15); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); padding-top: var(--space-4); border-top: 1px solid rgba(255,255,255,0.05);">
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">ACTIFS</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-green);">235</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">INACTIFS</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--text-secondary);">12</div>
                    </div>
                </div>
            </div>
            
            <div class="stat-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-4);">
                    <div>
                        <div class="stat-label">AVERAGE HEALTH</div>
                        <div class="stat-value" style="font-size: 2.5rem; line-height: 1; margin-bottom: var(--space-2); color: var(--primary-green);">156%</div>
                        <div class="stat-change" style="color: var(--primary-green);">↗ +3.2% vs last month</div>
                    </div>
                    <div style="width: 48px; height: 48px; background: rgba(138, 253, 129, 0.15); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" stroke-width="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); padding-top: var(--space-4); border-top: 1px solid rgba(255,255,255,0.05);">
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">MIN</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--text-secondary);">98%</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">MAX</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-green);">285%</div>
                    </div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-label" style="margin-bottom: var(--space-4);">CLIENT HEALTH STATUS</div>
                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4);">
                    <canvas id="expositionChart" style="max-height: 180px; max-width: 180px;"></canvas>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); padding-top: var(--space-4); border-top: 1px solid rgba(255,255,255,0.05);">
                    <div style="text-align: center;">
                        <div style="font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--primary-green); margin-bottom: var(--space-1);">198</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">HEALTHY</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--cockpit-orange); margin-bottom: var(--space-1);">37</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">UNHEALTHY</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--cockpit-red); margin-bottom: var(--space-1);">12</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">EXPOSED</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cards-grid" style="display: grid; gap: var(--space-5); margin-bottom: var(--space-6);">
            <div class="kpi-card" style="grid-column: 1 / -1;">
                <div class="kpi-label">USDC & USDT Borrow Rates vs BTC - Provider Comparison</div>
                <div style="margin-top: var(--space-6); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-5);">
                    <!-- Vancelian -->
                    <div class="provider-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-5);">
                            <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--text-primary);">Vancelian</h3>
                            <span class="badge healthy">ACTIVE</span>
                        </div>
                        <!-- USDC -->
                        <div class="rate-card" style="border-left-color: #2775CA; margin-bottom: var(--space-4);">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                                <div style="display: flex; align-items: center; gap: var(--space-2);">
                                    <div style="width: 32px; height: 32px; background: #2775CA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--font-bold); color: white;">$</div>
                                    <div>
                                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary);">USDC</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Current Rate</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: #2775CA; line-height: 1;">3.42%</div>
                                    <span class="badge" style="background: rgba(39, 117, 202, 0.15); color: #2775CA; font-size: var(--text-xs); padding: 2px 8px; margin-top: var(--space-1); display: inline-block;">● LIVE</span>
                                </div>
                            </div>
                            <div style="padding-top: var(--space-3); border-top: 1px solid rgba(255,255,255,0.05);">
                                <div style="font-size: var(--text-xs); color: #2775CA; font-weight: var(--font-semibold); margin-bottom: var(--space-2);">AVERAGE</div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2);">
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.35%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">6M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.58%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1Y</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.95%</div></div>
                                </div>
                            </div>
                        </div>
                        <!-- USDT -->
                        <div class="rate-card" style="border-left-color: #26A17B;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                                <div style="display: flex; align-items: center; gap: var(--space-2);">
                                    <div style="width: 32px; height: 32px; background: #26A17B; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--font-bold); color: white;">₮</div>
                                    <div>
                                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary);">USDT</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Current Rate</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: #26A17B; line-height: 1;">3.18%</div>
                                    <span class="badge" style="background: rgba(38, 161, 123, 0.15); color: #26A17B; font-size: var(--text-xs); padding: 2px 8px; margin-top: var(--space-1); display: inline-block;">● LIVE</span>
                                </div>
                            </div>
                            <div style="padding-top: var(--space-3); border-top: 1px solid rgba(255,255,255,0.05);">
                                <div style="font-size: var(--text-xs); color: #26A17B; font-weight: var(--font-semibold); margin-bottom: var(--space-2);">AVERAGE</div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2);">
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.12%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">6M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.28%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1Y</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.68%</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Morpho -->
                    <div class="provider-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-5);">
                            <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--text-primary);">Morpho</h3>
                            <span class="badge healthy">ACTIVE</span>
                        </div>
                        <!-- USDC -->
                        <div class="rate-card" style="border-left-color: #2775CA; margin-bottom: var(--space-4);">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                                <div style="display: flex; align-items: center; gap: var(--space-2);">
                                    <div style="width: 32px; height: 32px; background: #2775CA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--font-bold); color: white;">$</div>
                                    <div>
                                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary);">USDC</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Current Rate</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: #2775CA; line-height: 1;">3.24%</div>
                                    <span class="badge" style="background: rgba(39, 117, 202, 0.15); color: #2775CA; font-size: var(--text-xs); padding: 2px 8px; margin-top: var(--space-1); display: inline-block;">● LIVE</span>
                                </div>
                            </div>
                            <div style="padding-top: var(--space-3); border-top: 1px solid rgba(255,255,255,0.05);">
                                <div style="font-size: var(--text-xs); color: #2775CA; font-weight: var(--font-semibold); margin-bottom: var(--space-2);">AVERAGE</div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2);">
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.18%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">6M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.45%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1Y</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.82%</div></div>
                                </div>
                            </div>
                        </div>
                        <!-- USDT -->
                        <div class="rate-card" style="border-left-color: #26A17B;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                                <div style="display: flex; align-items: center; gap: var(--space-2);">
                                    <div style="width: 32px; height: 32px; background: #26A17B; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--font-bold); color: white;">₮</div>
                                    <div>
                                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary);">USDT</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Current Rate</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: #26A17B; line-height: 1;">2.98%</div>
                                    <span class="badge" style="background: rgba(38, 161, 123, 0.15); color: #26A17B; font-size: var(--text-xs); padding: 2px 8px; margin-top: var(--space-1); display: inline-block;">● LIVE</span>
                                </div>
                            </div>
                            <div style="padding-top: var(--space-3); border-top: 1px solid rgba(255,255,255,0.05);">
                                <div style="font-size: var(--text-xs); color: #26A17B; font-weight: var(--font-semibold); margin-bottom: var(--space-2);">AVERAGE</div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2);">
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">2.85%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">6M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.12%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1Y</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.54%</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Compound -->
                    <div class="provider-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-5);">
                            <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--text-primary);">Compound</h3>
                            <span class="badge healthy">ACTIVE</span>
                        </div>
                        <!-- USDC -->
                        <div class="rate-card" style="border-left-color: #2775CA; margin-bottom: var(--space-4);">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                                <div style="display: flex; align-items: center; gap: var(--space-2);">
                                    <div style="width: 32px; height: 32px; background: #2775CA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--font-bold); color: white;">$</div>
                                    <div>
                                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary);">USDC</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Current Rate</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: #2775CA; line-height: 1;">3.56%</div>
                                    <span class="badge" style="background: rgba(39, 117, 202, 0.15); color: #2775CA; font-size: var(--text-xs); padding: 2px 8px; margin-top: var(--space-1); display: inline-block;">● LIVE</span>
                                </div>
                            </div>
                            <div style="padding-top: var(--space-3); border-top: 1px solid rgba(255,255,255,0.05);">
                                <div style="font-size: var(--text-xs); color: #2775CA; font-weight: var(--font-semibold); margin-bottom: var(--space-2);">AVERAGE</div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2);">
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.48%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">6M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">3.72%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1Y</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #2775CA;">4.15%</div></div>
                                </div>
                            </div>
                        </div>
                        <!-- USDT -->
                        <div class="rate-card" style="border-left-color: #26A17B;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                                <div style="display: flex; align-items: center; gap: var(--space-2);">
                                    <div style="width: 32px; height: 32px; background: #26A17B; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--font-bold); color: white;">₮</div>
                                    <div>
                                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary);">USDT</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Current Rate</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: #26A17B; line-height: 1;">3.35%</div>
                                    <span class="badge" style="background: rgba(38, 161, 123, 0.15); color: #26A17B; font-size: var(--text-xs); padding: 2px 8px; margin-top: var(--space-1); display: inline-block;">● LIVE</span>
                                </div>
                            </div>
                            <div style="padding-top: var(--space-3); border-top: 1px solid rgba(255,255,255,0.05);">
                                <div style="font-size: var(--text-xs); color: #26A17B; font-weight: var(--font-semibold); margin-bottom: var(--space-2);">AVERAGE</div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2);">
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.22%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">6M</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.45%</div></div>
                                    <div><div style="font-size: var(--text-xs); color: var(--text-muted);">1Y</div><div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: #26A17B;">3.88%</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="kpi-card" style="grid-column: 1 / -1;">
                <div class="kpi-label">Market Projections & Collateral</div>
                <div style="margin-top: var(--space-3); display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-2);">
                    <div class="projection-card">
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">NEXT 24H FORECAST</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-green);">+2.4%</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-1);">Collateral variance</div>
                    </div>
                    <div class="projection-card">
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">7-DAY PROJECTION</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-green);">+5.8%</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-1);">Based on Morpho data</div>
                    </div>
                    <div class="projection-card">
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">MONTH OUTLOOK</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-green);">+12.5%</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-1);">Volatility: Low (±3.2%)</div>
                    </div>
                    <div class="projection-card">
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">YEAR PROJECTION</div>
                        <div style="font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-green);">+45.2%</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-1);">Conservative estimate</div>
                    </div>
                </div>
            </div>

            <div class="chart-section">
                <div class="chart-header">
                    <h2 class="chart-title">Performance Overview</h2>
                    <div class="chart-legend">
                        <div class="legend-item">
                            <span class="legend-dot green"></span>
                            <span>With collateral</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-dot gray"></span>
                            <span>Without collateral</span>
                        </div>
                    </div>
                </div>
                <div class="chart-container">
                    <canvas id="miningChart"></canvas>
                </div>
            </div>
        </div>
    `;
}

// Collateral Section - Gestion des positions
function getCollateralSectionHTML() {
    return `
        <div class="page-header">
            <div>
                <h1 class="page-title">Collateral Management</h1>
                <p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: var(--space-2);">Manage client positions and collateral across protocols</p>
            </div>
            <div style="display: flex; gap: var(--space-3);">
                <button class="btn btn-secondary" onclick="exportCollateral()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: var(--space-2);">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Export Data
                </button>
                <button class="btn btn-primary" onclick="addNewPosition()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: var(--space-2);">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    New Position
                </button>
            </div>
        </div>

        <div class="stats-grid" style="margin-bottom: var(--space-8); gap: var(--space-5);">
            <div class="stat-card">
                <div class="stat-label">Total BTC Collateral</div>
                <div class="stat-value" style="color: var(--primary-green);">124.8 BTC</div>
                <div class="stat-change">≈ $11,830,400 USD</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">USDT Borrowed</div>
                <div class="stat-value">$4.2M</div>
                <div class="stat-change">+35.6% utilization</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">USDC Borrowed</div>
                <div class="stat-value">$3.6M</div>
                <div class="stat-change">+30.5% utilization</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Avg Health Factor</div>
                <div class="stat-value" style="color: var(--primary-green);">1.68</div>
                <div class="stat-change">Safe Range</div>
            </div>
        </div>

        <div class="table-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6);">
                <h2 class="table-title">Collateral Positions</h2>
                <div style="display: flex; gap: var(--space-2);">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="safe">Safe</button>
                    <button class="filter-btn" data-filter="at-risk">At Risk</button>
                    <button class="filter-btn" data-filter="exposed">Exposed</button>
                </div>
            </div>
            
            <div id="collateralPositions" style="display: flex; flex-direction: column; gap: var(--space-3);">
                <!-- Positions will be dynamically loaded -->
            </div>
        </div>
    `;
}

// Customers Section - Gestion des clients
function getCustomersSectionHTML() {
    return `
        <div class="page-header">
            <div>
                <h1 class="page-title">Customer Management</h1>
                <p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: var(--space-2);">All customers</p>
            </div>
            <div style="display: flex; gap: var(--space-2);">
                <button class="btn btn-secondary" onclick="exportCustomers()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: var(--space-2);">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Export
                </button>
                <button class="btn btn-primary" onclick="addCustomer()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: var(--space-2);">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    Add Customer
                </button>
            </div>
        </div>

        <div class="stats-grid" style="margin-bottom: var(--space-8); gap: var(--space-5);">
            <div class="stat-card">
                <div class="stat-label">Total Customers</div>
                <div class="stat-value">247</div>
                <div class="stat-change">+18 this month</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Active Positions</div>
                <div class="stat-value" style="color: var(--primary-green);">235</div>
                <div class="stat-change">$12.4M locked</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Total Exposure</div>
                <div class="stat-value">$7.8M</div>
                <div class="stat-change">Across 3 protocols</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Avg. Health Factor</div>
                <div class="stat-value" style="color: var(--primary-green);">156%</div>
                <div class="stat-change">Safe range</div>
            </div>
        </div>

        <div class="table-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6); flex-wrap: wrap; gap: var(--space-4);">
                <h2 class="table-title">All Customers</h2>
                <div style="display: flex; gap: var(--space-2); align-items: center; flex-wrap: wrap;">
                    <input type="text" id="searchCustomers" placeholder="Search customers..." 
                        style="padding: var(--space-2) var(--space-3); background: rgba(10, 10, 10, 0.7); border: 1.5px solid rgba(255,255,255,0.1); 
                        border-radius: var(--radius-md); color: var(--text-primary); font-size: var(--text-sm); width: 250px;">
                    <div style="display: flex; gap: var(--space-2);">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="b2c">B2C</button>
                        <button class="filter-btn" data-filter="b2b">B2B</button>
                        <button class="filter-btn" data-filter="other">Other</button>
                    </div>
                </div>
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>BTC Wallet</th>
                        <th>ERC-20 Wallet</th>
                        <th>Position Value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="customersTable"></tbody>
            </table>
        </div>

        <!-- Modal Customer Details -->
        <div id="customerModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 1000; overflow-y: auto;">
            <div style="max-width: 1400px; margin: var(--space-10) auto; padding: 0; background: rgba(26, 26, 26, 0.95); border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(20px);">
                <!-- Le contenu sera généré dynamiquement -->
            </div>
        </div>
    `;
}

// API Management Section - Gestion des APIs DeFi
function getAPIManagementSectionHTML() {
    return `
        <div class="page-header">
            <div>
                <h1 class="page-title">API Management</h1>
                <p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: var(--space-2);">DeFi Protocol APIs</p>
            </div>
        </div>

        <div class="stats-grid" style="margin-bottom: var(--space-8); gap: var(--space-5);">
            <div class="stat-card">
                <div class="stat-label">Total API Calls Today</div>
                <div class="stat-value">24,847</div>
                <div class="stat-change">+18.2% vs yesterday</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Active Connections</div>
                <div class="stat-value" style="color: var(--primary-green);">3 / 3</div>
                <div class="stat-change">All systems operational</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Avg Response Time</div>
                <div class="stat-value">124ms</div>
                <div class="stat-change">-12ms improvement</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Success Rate</div>
                <div class="stat-value">99.7%</div>
                <div class="stat-change">Excellent performance</div>
            </div>
        </div>

        <div style="display: grid; gap: var(--space-5);">
            <!-- Vancelian API -->
            <div class="api-block">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-5);">
                    <div style="display: flex; align-items: center; gap: var(--space-3);">
                        <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--text-primary);">Vancelian API</h3>
                        <span class="badge healthy">ACTIVE</span>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked onchange="toggleAPI('vancelian', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-5);">
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">ENDPOINT</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-secondary);">api.vancelian.io</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">CALLS TODAY</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--primary-green);">8,942</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">AVG RESPONSE</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-secondary);">108ms</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">SUCCESS RATE</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--primary-green);">99.8%</div>
                    </div>
                </div>

                <div style="background: rgba(10, 10, 10, 0.5); border-radius: var(--radius-md); padding: var(--space-3); border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: var(--space-2);">
                        <span>📋</span> Recent Logs
                    </div>
                    <div id="vancelianLogs" style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); line-height: 1.6;">
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:18]</span> GET /rates/usdc - 200 OK - 95ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:15]</span> GET /rates/usdt - 200 OK - 102ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:10]</span> POST /collateral/update - 200 OK - 124ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:05]</span> GET /positions/list - 200 OK - 88ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:01]</span> GET /health - 200 OK - 45ms</div>
                    </div>
                </div>
            </div>

            <!-- Morpho API -->
            <div class="api-block">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-5);">
                    <div style="display: flex; align-items: center; gap: var(--space-3);">
                        <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--text-primary);">Morpho API</h3>
                        <span class="badge healthy">ACTIVE</span>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked onchange="toggleAPI('morpho', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-5);">
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">ENDPOINT</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-secondary);">api.morpho.org</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">CALLS TODAY</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--primary-green);">10,245</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">AVG RESPONSE</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-secondary);">132ms</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">SUCCESS RATE</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--primary-green);">99.6%</div>
                    </div>
                </div>

                <div style="background: rgba(10, 10, 10, 0.5); border-radius: var(--radius-md); padding: var(--space-3); border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: var(--space-2);">
                        <span>📋</span> Recent Logs
                    </div>
                    <div id="morphoLogs" style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); line-height: 1.6;">
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:22]</span> GET /markets/rates - 200 OK - 118ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:19]</span> GET /borrow/usdc - 200 OK - 145ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:14]</span> GET /borrow/usdt - 200 OK - 128ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:09]</span> POST /positions/sync - 200 OK - 156ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:03]</span> GET /vault/info - 200 OK - 92ms</div>
                    </div>
                </div>
            </div>

            <!-- Compound API -->
            <div class="api-block">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-5);">
                    <div style="display: flex; align-items: center; gap: var(--space-3);">
                        <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); color: var(--text-primary);">Compound API</h3>
                        <span class="badge healthy">ACTIVE</span>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked onchange="toggleAPI('compound', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-5);">
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">ENDPOINT</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-secondary);">api.compound.finance</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">CALLS TODAY</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--primary-green);">5,660</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">AVG RESPONSE</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-secondary);">141ms</div>
                    </div>
                    <div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--space-1);">SUCCESS RATE</div>
                        <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--primary-green);">99.7%</div>
                    </div>
                </div>

                <div style="background: rgba(10, 10, 10, 0.5); border-radius: var(--radius-md); padding: var(--space-3); border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: var(--space-2);">
                        <span>📋</span> Recent Logs
                    </div>
                    <div id="compoundLogs" style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); line-height: 1.6;">
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:20]</span> GET /ctoken/cusdc - 200 OK - 135ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:17]</span> GET /ctoken/cusdt - 200 OK - 148ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:12]</span> GET /account/balances - 200 OK - 142ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:07]</span> POST /borrow/execute - 200 OK - 167ms</div>
                        <div style="margin-bottom: var(--space-2);"><span style="color: var(--primary-green);">[14:32:02]</span> GET /governance/proposals - 200 OK - 98ms</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
