import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { buildCollateralClientFromDeBank } from '@/lib/debank'
import { prisma } from '@/lib/db'

/**
 * Route API pour récupérer les données collatérales depuis DeBank
 * 
 * GET /api/collateral
 * - Utilise les customers stockés en base de données
 * - Appelle DeBank API pour chaque customer
 * 
 * Retourne:
 * {
 *   clients: [
 *     {
 *       id: "0x...",
 *       name: "...",
 *       tag: "...",
 *       wallets: ["0x..."],
 *       positions: [...],
 *       lastUpdate: "2025-01-20T10:00:00Z"
 *     }
 *   ]
 * }
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Récupérer tous les customers depuis la base de données
    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: 'desc' }
    })

    if (customers.length === 0) {
      return NextResponse.json({ 
        clients: [],
        message: 'Aucun customer enregistré. Ajoutez des customers pour voir leurs positions collatérales.'
      })
    }

    // Construire les clients avec les vraies données DeBank
    let clients = []
    for (const customer of customers) {
      try {
        const chains = JSON.parse(customer.chains || '["eth"]')
        const protocols = JSON.parse(customer.protocols || '[]')
        
        const client = await buildCollateralClientFromDeBank(customer.erc20Address, {
          tag: customer.tag,
          chains,
          allowedProtocols: protocols,
        })
        
        // Ajouter les informations du customer
        client.id = customer.id
        client.name = customer.name
        clients.push(client)
      } catch (error: any) {
        console.warn(`[API Collateral] Erreur pour customer ${customer.name} (${customer.erc20Address}):`, error.message)
        // En cas d'erreur pour un customer, continuer avec les autres
        // Optionnel: ajouter le customer avec des données vides
        clients.push({
          id: customer.id,
          name: customer.name,
          tag: customer.tag,
          wallets: [customer.erc20Address],
          positions: [],
          lastUpdate: new Date().toISOString(),
          error: error.message,
        })
      }
    }

    return NextResponse.json({ clients })
  } catch (error: any) {
    console.error('[API Collateral] Erreur:', error)
    return NextResponse.json(
      { 
        error: 'Erreur lors de la récupération des données DeBank',
        details: error.message 
      },
      { status: 500 }
    )
  }
}

