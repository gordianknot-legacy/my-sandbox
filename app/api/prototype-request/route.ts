import { NextRequest, NextResponse } from 'next/server'
import { sendPrototypeRequestNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, ideaTitle, description, timeline } = body

    // Validate required fields
    if (!name || !email || !ideaTitle || !description) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Send admin notification email
    await sendPrototypeRequestNotification({
      name,
      email,
      ideaTitle,
      description,
      timeline: timeline || 'flexible',
    })

    return NextResponse.json({
      success: true,
      message: "Request received! I'll review your idea and get back to you soon.",
    })
  } catch (error) {
    console.error('Prototype request error:', error)
    return NextResponse.json(
      { error: 'Failed to submit request. Please try again or email directly.' },
      { status: 500 }
    )
  }
}
