// Utility function for conditional class names
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

// Format WhatsApp link with pre-filled message
export function getWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

// Generate phone link (tel:)
export function getPhoneLink(phone: string): string {
  return `tel:${phone}`;
}

// Generate email link (mailto:)
export function getEmailLink(email: string, subject?: string): string {
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${subjectParam}`;
}

// Simple email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rate limiting helper (IP-based, in-memory for v1)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: maxRequests - record.count };
}
