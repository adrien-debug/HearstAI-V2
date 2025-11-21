import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

/**
 * API Route pour gérer les customers (clients avec adresses ERC20)
 * 
 * GET /api/customers - Liste tous les customers
 * POST /api/customers - Crée un nouveau customer
 * PUT /api/customers/:id - Met à jour un customer
 * DELETE /api/customers/:id - Supprime un customer
 */

// GET - Liste tous les customers
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ customers })
  } catch (error: any) {
    console.error('[API Customers] Erreur GET:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des customers', details: error.message },
      { status: 500 }
    )
  }
}

// POST - Crée un nouveau customer
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, erc20Address, tag, chains, protocols } = body

    // Validation
    if (!name || !erc20Address) {
      return NextResponse.json(
        { error: 'Le nom et l\'adresse ERC20 sont requis' },
        { status: 400 }
      )
    }

    // Validation format adresse ERC20 (0x suivi de 40 caractères hexadécimaux)
    const erc20Regex = /^0x[a-fA-F0-9]{40}$/
    if (!erc20Regex.test(erc20Address)) {
      return NextResponse.json(
        { error: 'Format d\'adresse ERC20 invalide (doit commencer par 0x et contenir 40 caractères hexadécimaux)' },
        { status: 400 }
      )
    }

    // Vérifier si l'adresse existe déjà
    const existing = await prisma.customer.findFirst({
      where: { erc20Address: erc20Address.toLowerCase() }
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Cette adresse ERC20 est déjà enregistrée' },
        { status: 409 }
      )
    }

    // Créer le customer
    const customer = await prisma.customer.create({
      data: {
        name,
        erc20Address: erc20Address.toLowerCase(),
        tag: tag || 'Client',
        chains: JSON.stringify(chains || ['eth']),
        protocols: JSON.stringify(protocols || []),
      }
    })

    return NextResponse.json({ customer }, { status: 201 })
  } catch (error: any) {
    console.error('[API Customers] Erreur POST:', error)
    console.error('[API Customers] Stack:', error.stack)
    
    // Messages d'erreur plus détaillés selon le type d'erreur
    let errorMessage = 'Erreur lors de la création du customer'
    let errorDetails = error.message
    
    if (error.code === 'P2002') {
      errorMessage = 'Cette adresse ERC20 est déjà enregistrée'
      errorDetails = 'Un customer avec cette adresse existe déjà'
    } else if (error.code === 'P2003') {
      errorMessage = 'Erreur de référence'
      errorDetails = error.message
    } else if (error.message?.includes('Unique constraint')) {
      errorMessage = 'Cette adresse ERC20 est déjà enregistrée'
      errorDetails = error.message
    }
    
    return NextResponse.json(
      { 
        error: errorMessage, 
        details: errorDetails,
        code: error.code || 'UNKNOWN_ERROR'
      },
      { status: error.code === 'P2002' ? 409 : 500 }
    )
  }
}

