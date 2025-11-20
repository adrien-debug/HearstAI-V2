import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status')
    const type = searchParams.get('type')

    const where: any = {
      userId: session.user.id,
    }

    if (status) {
      where.status = status.toUpperCase()
    }

    if (type) {
      where.type = type.toUpperCase()
    }

    const projects = await prisma.project.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      include: {
        stableVersion: true,
        _count: {
          select: {
            versions: true,
            jobs: true,
          },
        },
      },
    })

    return NextResponse.json({ projects })
  } catch (error) {
    console.error('Error getting projects:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      name,
      description,
      type,
      repo_type,
      repo_url,
      repo_branch,
      local_path,
    } = body

    // Validation
    if (!name || !type || !repo_type) {
      return NextResponse.json(
        { error: 'Missing required fields: name, type, repo_type' },
        { status: 400 }
      )
    }

    const validTypes = ['HTML_STATIC', 'SPA', 'DASHBOARD', 'NODEJS_APP', 'OTHER']
    if (!validTypes.includes(type.toUpperCase())) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      )
    }

    const validRepoTypes = ['LOCAL', 'GITHUB']
    if (!validRepoTypes.includes(repo_type.toUpperCase())) {
      return NextResponse.json(
        { error: `Invalid repo_type. Must be one of: ${validRepoTypes.join(', ')}` },
        { status: 400 }
      )
    }

    const project = await prisma.project.create({
      data: {
        name,
        description: description || null,
        type: type.toUpperCase() as any,
        repoType: repo_type.toUpperCase() as any,
        repoUrl: repo_url || null,
        repoBranch: repo_branch || 'main',
        localPath: local_path || null,
        userId: session.user.id,
        status: 'ACTIVE',
        metadata: '{}',
      },
    })

    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



