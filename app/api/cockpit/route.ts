import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Pour l'instant, retourner des données mockées
    // TODO: Implémenter la logique réelle pour récupérer les données du cockpit
    return NextResponse.json({
      data: {
        globalHashrate: 0,
        btcProduction24h: 0,
        totalMiners: 0,
        onlineMiners: 0,
        degradedMiners: 0,
        offlineMiners: 0,
        miningAccounts: [],
        workers: [],
        miners: [],
      },
      message: 'Cockpit data retrieved successfully',
    })
  } catch (error) {
    console.error('Error getting cockpit data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

