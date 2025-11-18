// Collateral View - HEARST Design System
// Vue principale avec sous-menus : Dashboard, Collateral, Customers, API Management

export async function renderCollateralView() {
    return `
        <div class="collateral-view">
            <div class="collateral-content">
                <!-- Zone de contenu dynamique pour chaque section -->
                <div id="collateral-sections-container">
                    <!-- Le contenu sera injecté dynamiquement -->
                </div>
            </div>
        </div>
    `;
}

// Section titles mapping
export const collateralSectionTitles = {
    dashboard: { title: 'Customer Collateral Management', subtitle: 'Overview & KPIs' },
    collateral: { title: 'Collateral Management', subtitle: 'Manage client positions and collateral' },
    customers: { title: 'Customer Management', subtitle: 'All customers' },
    'api-management': { title: 'API Management', subtitle: 'DeFi Protocol APIs' }
};

export const collateralStyles = `
    <style>
        /* ====================================
           COLLATERAL VIEW - CHARTE GRAPHIQUE PREMIUM
           ==================================== */
        
        .collateral-view {
            padding: var(--space-6) var(--space-8) !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
        }

        .collateral-content {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: var(--space-8) !important;
        }

        /* Stats Grid - Aligné avec style premium */
        .collateral-view .stats-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
            gap: var(--space-5) !important;
            margin-bottom: var(--space-8) !important;
        }

        /* Stat Cards & KPI Cards - Aligné avec stat-card premium */
        .collateral-view .stat-card,
        .collateral-view .kpi-card {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: var(--radius-lg) !important;
            padding: var(--space-6) !important;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.4),
                0 2px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
            transition: all var(--duration-normal) var(--ease-in-out) !important;
            position: relative !important;
            overflow: hidden !important;
        }

        .collateral-view .stat-card::after,
        .collateral-view .kpi-card::after {
            content: '' !important;
            position: absolute !important;
            inset: 0 !important;
            background: radial-gradient(
                circle at top right,
                rgba(138, 253, 129, 0.05) 0%,
                transparent 50%
            ) !important;
            border-radius: inherit !important;
            pointer-events: none !important;
            z-index: 0 !important;
        }

        .collateral-view .stat-card > *,
        .collateral-view .kpi-card > * {
            position: relative !important;
            z-index: 1 !important;
        }

        .collateral-view .stat-card:hover,
        .collateral-view .kpi-card:hover {
            transform: translateY(-4px) scale(1.02) !important;
            box-shadow: 
                0 12px 48px rgba(0, 0, 0, 0.5),
                0 4px 16px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(138, 253, 129, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
            border-color: rgba(255, 255, 255, 0.08) !important;
        }

        .collateral-view .stat-card::before,
        .collateral-view .kpi-card::before {
            display: none !important;
        }

        .collateral-view .stat-label,
        .collateral-view .kpi-label {
            font-size: var(--text-xs) !important;
            font-weight: var(--font-medium) !important;
            color: var(--text-muted) !important;
            letter-spacing: 0.3px !important;
            text-transform: uppercase !important;
            margin-bottom: var(--space-2) !important;
        }

        .collateral-view .stat-value {
            font-size: var(--text-2xl) !important;
            font-weight: var(--font-bold) !important;
            color: var(--text-primary) !important;
            letter-spacing: -0.02em !important;
            line-height: 1.2 !important;
            margin-bottom: var(--space-2) !important;
        }

        .collateral-view .kpi-value {
            font-size: var(--text-2xl) !important;
            font-weight: var(--font-bold) !important;
            color: var(--primary-green) !important;
            letter-spacing: -0.02em !important;
            line-height: 1.2 !important;
            margin-bottom: var(--space-2) !important;
        }

        .collateral-view .stat-change,
        .collateral-view .kpi-subtitle {
            font-size: var(--text-xs) !important;
            color: var(--text-secondary) !important;
            letter-spacing: -0.01em !important;
        }

        .collateral-view .stat-change {
            color: var(--primary-green) !important;
        }

        /* Chart Section - Aligné avec style premium */
        .collateral-view .chart-section {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: var(--radius-lg) !important;
            padding: var(--space-6) !important;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.4),
                0 2px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
            margin-bottom: var(--space-6) !important;
            position: relative !important;
            overflow: hidden !important;
        }

        .collateral-view .chart-title {
            font-size: var(--text-lg) !important;
            font-weight: var(--font-semibold) !important;
            color: var(--text-primary) !important;
            letter-spacing: -0.01em !important;
        }

        .collateral-view .chart-container {
            background: rgba(10, 10, 10, 0.5) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-4) !important;
        }

        /* Table Section - Aligné avec style premium */
        .collateral-view .table-section {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: var(--radius-lg) !important;
            padding: var(--space-6) !important;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.4),
                0 2px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
            position: relative !important;
            overflow: hidden !important;
        }

        .collateral-view .table-title {
            font-size: var(--text-lg) !important;
            font-weight: var(--font-semibold) !important;
            color: var(--text-primary) !important;
            letter-spacing: -0.01em !important;
            margin-bottom: var(--space-6) !important;
        }

        /* Data Table - Aligné avec style premium */
        .collateral-view .data-table {
            background: transparent !important;
            border-radius: 0 !important;
            overflow: hidden !important;
        }

        .collateral-view .data-table thead {
            background: linear-gradient(180deg, rgba(69, 70, 70, 0.95) 0%, rgba(58, 58, 58, 0.95) 100%) !important;
            border-bottom: 2px solid rgba(138, 253, 129, 0.25) !important;
        }

        .collateral-view .data-table th {
            padding: var(--space-4) var(--space-5) !important;
            text-align: left !important;
            font-size: 13px !important;
            font-weight: 500 !important;
            letter-spacing: 0.5px !important;
            text-transform: uppercase !important;
            color: var(--text-primary) !important;
        }

        .collateral-view .data-table tbody tr {
            transition: all var(--duration-fast) var(--ease-in-out) !important;
            border-bottom: none !important;
        }

        .collateral-view .data-table tbody tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.02) !important;
        }

        .collateral-view .data-table tbody tr:hover {
            background: linear-gradient(
                90deg,
                rgba(138, 253, 129, 0.08) 0%,
                rgba(138, 253, 129, 0.12) 50%,
                rgba(138, 253, 129, 0.08) 100%
            ) !important;
            box-shadow: inset 3px 0 0 var(--primary-green) !important;
            transform: translateX(3px) !important;
        }

        .collateral-view .data-table td {
            padding: var(--space-4) var(--space-5) !important;
            font-size: 15px !important;
            border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
            color: var(--text-secondary) !important;
            letter-spacing: -0.01em !important;
            font-weight: var(--font-normal) !important;
        }

        .collateral-view .table-value-positive {
            color: var(--primary-green) !important;
            font-weight: var(--font-semibold) !important;
        }

        /* Filter Buttons - Aligné avec style premium */
        .collateral-view .filter-btn {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-2) var(--space-4) !important;
            font-size: var(--text-xs) !important;
            font-weight: var(--font-medium) !important;
            color: var(--text-secondary) !important;
            letter-spacing: -0.01em !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view .filter-btn:hover:not(.active) {
            background: rgba(138, 253, 129, 0.1) !important;
            border-color: rgba(138, 253, 129, 0.3) !important;
            color: var(--primary-green) !important;
            transform: translateY(-1px) !important;
        }

        .collateral-view .filter-btn.active {
            background: var(--primary-green) !important;
            border-color: var(--primary-green) !important;
            color: var(--primary-dark) !important;
            font-weight: var(--font-semibold) !important;
            box-shadow: 
                0 4px 16px rgba(138, 253, 129, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }

        /* Toggle Switch - Aligné avec style premium */
        .collateral-view .toggle-slider {
            background-color: rgba(26, 26, 26, 0.8) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 19px !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view .toggle-slider:before {
            background-color: var(--text-muted) !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view input:checked + .toggle-slider {
            background-color: var(--primary-green) !important;
            border-color: var(--primary-green) !important;
            box-shadow: 0 0 12px rgba(138, 253, 129, 0.3) !important;
        }

        .collateral-view input:checked + .toggle-slider:before {
            background-color: var(--primary-dark) !important;
        }

        /* Page Header - Aligné avec style premium */
        .collateral-view .page-header {
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            margin-bottom: var(--space-8) !important;
            gap: var(--space-4) !important;
        }

        .collateral-view .page-title {
            font-size: var(--text-2xl) !important;
            font-weight: var(--font-bold) !important;
            color: var(--text-primary) !important;
            letter-spacing: -0.02em !important;
            margin-bottom: var(--space-2) !important;
        }

        /* Cards Grid - Espacement aligné */
        .collateral-view .cards-grid {
            gap: var(--space-5) !important;
            margin-bottom: var(--space-6) !important;
        }

        /* Badges Collateral - Aligné avec style premium */
        .collateral-view .badge.super,
        .collateral-view .badge.healthy {
            background: rgba(138, 253, 129, 0.15) !important;
            border: 1px solid rgba(138, 253, 129, 0.3) !important;
            color: var(--primary-green) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-1) var(--space-3) !important;
            font-size: var(--text-xs) !important;
            font-weight: var(--font-semibold) !important;
            letter-spacing: 0.3px !important;
            box-shadow: 0 2px 8px rgba(138, 253, 129, 0.15) !important;
        }

        .collateral-view .badge.unhealthy {
            background: rgba(255, 165, 0, 0.15) !important;
            border: 1px solid rgba(255, 165, 0, 0.3) !important;
            color: var(--cockpit-orange) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-1) var(--space-3) !important;
            font-size: var(--text-xs) !important;
            font-weight: var(--font-semibold) !important;
            letter-spacing: 0.3px !important;
            box-shadow: 0 2px 8px rgba(255, 165, 0, 0.15) !important;
        }

        .collateral-view .badge.at-risk {
            background: rgba(231, 76, 60, 0.15) !important;
            border: 1px solid rgba(231, 76, 60, 0.3) !important;
            color: var(--cockpit-red) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-1) var(--space-3) !important;
            font-size: var(--text-xs) !important;
            font-weight: var(--font-semibold) !important;
            letter-spacing: 0.3px !important;
            box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15) !important;
        }

        /* Override des styles inline pour harmoniser avec la charte */
        .collateral-view [style*="background: linear-gradient(135deg, #121212"],
        .collateral-view [style*="background: linear-gradient(135deg, var(--bg-panel)"] {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: var(--radius-lg) !important;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.4),
                0 2px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
            position: relative !important;
            overflow: hidden !important;
        }

        /* API Blocks - Harmonisation premium */
        .collateral-view .api-block {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: var(--radius-lg) !important;
            padding: var(--space-6) !important;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.4),
                0 2px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
            transition: all var(--duration-normal) var(--ease-in-out) !important;
            position: relative !important;
            overflow: hidden !important;
        }

        .collateral-view .api-block:hover {
            box-shadow: 
                0 12px 48px rgba(0, 0, 0, 0.5),
                0 4px 16px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(138, 253, 129, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
            transform: translateY(-2px) !important;
            border-color: rgba(255, 255, 255, 0.08) !important;
        }

        /* Inputs de recherche - Harmonisation premium */
        .collateral-view input[type="text"] {
            background: rgba(10, 10, 10, 0.7) !important;
            border: 1.5px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-3) var(--space-4) !important;
            color: var(--text-primary) !important;
            font-size: var(--text-sm) !important;
            font-family: var(--font-primary) !important;
            letter-spacing: -0.01em !important;
            backdrop-filter: blur(12px) !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view input[type="text"]:hover {
            border-color: rgba(138, 253, 129, 0.4) !important;
            background: rgba(10, 10, 10, 0.85) !important;
        }

        .collateral-view input[type="text"]:focus {
            outline: none !important;
            border-color: var(--primary-green) !important;
            box-shadow: 
                0 0 0 3px rgba(138, 253, 129, 0.15),
                0 2px 8px rgba(138, 253, 129, 0.1) !important;
            background: rgba(10, 10, 10, 0.9) !important;
        }

        /* Boutons - Harmonisation premium */
        .collateral-view .btn.btn-primary {
            background: var(--primary-green) !important;
            border: none !important;
            color: var(--primary-dark) !important;
            box-shadow: 
                0 4px 16px rgba(138, 253, 129, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
            transition: all var(--duration-normal) var(--ease-in-out) !important;
        }

        .collateral-view .btn.btn-primary:hover {
            background: rgba(138, 253, 129, 0.9) !important;
            box-shadow: 
                0 6px 24px rgba(138, 253, 129, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
            transform: translateY(-2px) !important;
        }

        .collateral-view .btn.btn-secondary {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            color: var(--text-primary) !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view .btn.btn-secondary:hover {
            background: rgba(138, 253, 129, 0.1) !important;
            border-color: rgba(138, 253, 129, 0.3) !important;
            color: var(--primary-green) !important;
            transform: translateY(-1px) !important;
        }

        /* Harmonisation des valeurs avec gradient text */
        .collateral-view [style*="-webkit-background-clip: text"],
        .collateral-view [style*="background-clip: text"] {
            color: var(--primary-green) !important;
            -webkit-text-fill-color: var(--primary-green) !important;
            background: none !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
        }

        /* Harmonisation des radial gradients dans les cards */
        .collateral-view [style*="background: radial-gradient(circle at center, rgba(123, 237, 159"] {
            background: radial-gradient(
                circle at center,
                rgba(138, 253, 129, 0.05) 0%,
                transparent 70%
            ) !important;
        }

        /* Legend Items - Aligné avec style premium */
        .collateral-view .legend-item {
            font-size: var(--text-sm) !important;
            color: var(--text-secondary) !important;
            letter-spacing: -0.01em !important;
        }

        .collateral-view .legend-dot.green {
            background: var(--primary-green) !important;
            box-shadow: 0 0 8px rgba(138, 253, 129, 0.3) !important;
        }

        /* Provider Cards - Cards pour les providers DeFi */
        .collateral-view .provider-card {
            background: rgba(26, 26, 26, 0.7) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: var(--radius-lg) !important;
            padding: var(--space-5) !important;
            transition: all var(--duration-normal) var(--ease-in-out) !important;
        }

        .collateral-view .provider-card:hover {
            transform: translateY(-2px) !important;
            box-shadow: 
                0 12px 48px rgba(0, 0, 0, 0.5),
                0 4px 16px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(138, 253, 129, 0.2) !important;
            border-color: rgba(255, 255, 255, 0.08) !important;
        }

        /* Rate Cards - Cards pour les taux d'intérêt */
        .collateral-view .rate-card {
            background: rgba(10, 10, 10, 0.5) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-4) !important;
            border-left: 3px solid !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view .rate-card:hover {
            background: rgba(10, 10, 10, 0.7) !important;
            transform: translateX(2px) !important;
        }

        /* Projection Cards - Cards pour les projections */
        .collateral-view .projection-card {
            background: rgba(138, 253, 129, 0.05) !important;
            border-radius: var(--radius-md) !important;
            padding: var(--space-3) !important;
            border-left: 3px solid var(--primary-green) !important;
            transition: all var(--duration-fast) var(--ease-in-out) !important;
        }

        .collateral-view .projection-card:hover {
            background: rgba(138, 253, 129, 0.1) !important;
            transform: translateY(-2px) !important;
        }

        /* Toggle Switch Styles */
        .collateral-view .toggle-switch {
            position: relative;
            display: inline-block;
            width: 44px;
            height: 24px;
        }

        .collateral-view .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .collateral-view .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(26, 26, 26, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 19px;
            transition: all var(--duration-fast) var(--ease-in-out);
        }

        .collateral-view .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 2px;
            bottom: 2px;
            background-color: var(--text-muted);
            border-radius: 50%;
            transition: all var(--duration-fast) var(--ease-in-out);
        }

        .collateral-view input:checked + .toggle-slider {
            background-color: var(--primary-green);
            border-color: var(--primary-green);
            box-shadow: 0 0 12px rgba(138, 253, 129, 0.3);
        }

        .collateral-view input:checked + .toggle-slider:before {
            transform: translateX(20px);
            background-color: var(--primary-dark);
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .collateral-view .stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
            .collateral-view .cards-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }

        @media (max-width: 768px) {
            .collateral-view .stats-grid,
            .collateral-view .cards-grid {
                grid-template-columns: 1fr !important;
            }
            .collateral-view .page-header {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: var(--space-4) !important;
            }
        }
    </style>
`;

