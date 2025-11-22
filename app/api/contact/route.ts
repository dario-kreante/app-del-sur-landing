import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/utils';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export async function POST(req: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') ||
               req.headers.get('x-real-ip') ||
               'unknown';

    // Rate limiting: 5 requests per minute per IP
    const rateLimitResult = checkRateLimit(ip, 5, 60000);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Too many requests. Please try again later.'
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await req.json();

    // Validate with Zod
    const validatedData = contactSchema.parse(body);

    // TODO: Send email via SMTP provider (e.g., Resend, SendGrid, AWS SES)
    // For now, just log the contact form submission
    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip,
    });

    // In production, you would send an email here:
    /*
    await sendEmail({
      to: process.env.CONTACT_EMAIL_TO || 'contacto@apps-del-sur.cl',
      subject: `Nuevo contacto desde Apps del Sur: ${validatedData.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Teléfono:</strong> ${validatedData.phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    */

    return NextResponse.json(
      {
        ok: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Validation error',
          details: error.errors
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        ok: false,
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
