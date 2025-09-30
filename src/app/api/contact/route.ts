import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

---
Sent from portfolio website contact form
    `.trim()

    // Send email using a simple approach - open mailto link
    // This is a client-side solution that will open the user's email client
    // In production, you should use a proper email service
    
    // For now, we'll return success and let the client handle the email sending
    // The client will open a mailto link with the pre-filled content
    
    return NextResponse.json({
      message: 'Message prepared successfully',
      mailtoLink: `mailto:shahnawaz6499@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact Form Message')}&body=${encodeURIComponent(emailContent)}`
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}