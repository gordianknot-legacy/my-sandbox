import { Resend } from 'resend'

// Lazy-loaded Resend client
let _resend: Resend | null = null

function getResend(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('Missing RESEND_API_KEY environment variable')
    }
    _resend = new Resend(apiKey)
  }
  return _resend
}

interface PrototypeRequestParams {
  name: string
  email: string
  ideaTitle: string
  description: string
  timeline: string
}

export async function sendPrototypeRequestNotification(params: PrototypeRequestParams) {
  const adminEmail = process.env.ADMIN_EMAIL || 'g.anirudh.sharma@gmail.com'
  const { name, email, ideaTitle, description, timeline } = params

  const timelineLabels: Record<string, string> = {
    urgent: 'Urgent (1 week)',
    normal: 'Normal (2 weeks)',
    flexible: 'Flexible (3+ weeks)',
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; background-color: #0a0a0b; color: #fafafa; padding: 40px 20px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #18181b; border-radius: 16px; padding: 32px; border: 1px solid #27272a;">
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="color: #14b8a6; margin: 0; font-size: 24px;">WHYBE.AI</h1>
      <p style="color: #71717a; margin: 8px 0 0 0; font-size: 14px;">New Prototype Request</p>
    </div>

    <div style="background-color: #27272a; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
      <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #14b8a6;">
        ${ideaTitle}
      </h2>

      <div style="margin-bottom: 16px;">
        <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; text-transform: uppercase;">From</p>
        <p style="margin: 0; color: #fafafa;">${name}</p>
        <p style="margin: 0; color: #d4d4d8;"><a href="mailto:${email}" style="color: #14b8a6;">${email}</a></p>
      </div>

      <div style="margin-bottom: 16px;">
        <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; text-transform: uppercase;">Timeline</p>
        <p style="margin: 0; color: #fafafa;">${timelineLabels[timeline] || timeline}</p>
      </div>

      <div>
        <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; text-transform: uppercase;">Description</p>
        <p style="margin: 0; color: #d4d4d8; white-space: pre-wrap; line-height: 1.6;">${description}</p>
      </div>
    </div>

    <div style="text-align: center; margin-bottom: 16px;">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(ideaTitle)}" style="display: inline-block; background-color: #14b8a6; color: #0a0a0b; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
        Reply to ${name}
      </a>
    </div>

    <div style="border-top: 1px solid #27272a; padding-top: 20px; text-align: center;">
      <p style="color: #71717a; font-size: 12px; margin: 0;">
        This is an automated notification from WHYBE.AI
      </p>
    </div>
  </div>
</body>
</html>
`

  const { error } = await getResend().emails.send({
    from: 'WHYBE.AI <alerts@whybe.ai>',
    to: adminEmail,
    subject: `New Prototype Request: ${ideaTitle}`,
    html,
  })

  if (error) {
    console.error('Failed to send admin notification:', error)
    throw error
  }
}
