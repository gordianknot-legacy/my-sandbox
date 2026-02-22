import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const checks: Record<string, string> = {}

  // Check CareerWatch
  try {
    const res = await fetch('https://careerwatch.whybe.ai', { method: 'HEAD', signal: AbortSignal.timeout(5000) })
    checks.careerwatch = res.ok ? 'online' : 'degraded'
  } catch {
    checks.careerwatch = 'offline'
  }

  // Check main site API (self-check)
  checks.api = 'online'

  // Get last deploy from GitHub commits API (public, no auth needed)
  let lastDeploy: string | null = null
  try {
    const res = await fetch(
      'https://api.github.com/repos/gordianknot-legacy/my-sandbox/commits?per_page=1',
      { headers: { 'Accept': 'application/vnd.github.v3+json' }, signal: AbortSignal.timeout(5000) }
    )
    if (res.ok) {
      const commits = await res.json()
      if (commits[0]?.commit?.committer?.date) {
        lastDeploy = commits[0].commit.committer.date
      }
    }
  } catch {
    // ignore
  }

  const allOnline = Object.values(checks).every(s => s === 'online')

  return NextResponse.json({
    status: allOnline ? 'operational' : 'degraded',
    checks,
    lastDeploy,
    timestamp: new Date().toISOString(),
  })
}
