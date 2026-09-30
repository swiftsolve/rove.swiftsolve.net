import { Resend } from 'resend'

/*
 * Takes an email from the "Interested?" form and keeps it as a Resend contact.
 *
 * The same form runs on nabilr.com/rove, which is a static site on another
 * host, so it posts here cross-origin — hence the CORS handling. Origins not
 * listed get no Access-Control-Allow-Origin back, and the browser refuses to
 * hand them the response.
 */

const ALLOWED_ORIGINS = new Set([
  'https://rove.swiftsolve.net',
  'https://nabilr.com',
  'https://www.nabilr.com',
])

// Deliberately loose: the real check is Resend accepting the address. This
// only turns away input that plainly is not one before spending a call on it.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const resend = new Resend(process.env.RESEND_API_KEY)

function allowOrigin(origin: string | null): string | null {
  if (!origin) return null
  if (ALLOWED_ORIGINS.has(origin)) return origin
  // Either site's dev server, on whatever port it landed on.
  if (process.env.NODE_ENV === 'development' && /^http:\/\/localhost:\d+$/.test(origin)) {
    return origin
  }
  return null
}

function corsHeaders(origin: string | null): HeadersInit {
  const allowed = allowOrigin(origin)
  return allowed
    ? {
        'Access-Control-Allow-Origin': allowed,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        Vary: 'Origin',
      }
    : { Vary: 'Origin' }
}

export function OPTIONS(request: Request) {
  return new Response(null, { status: 204, headers: corsHeaders(request.headers.get('origin')) })
}

export async function POST(request: Request) {
  const headers = corsHeaders(request.headers.get('origin'))

  let body: { email?: unknown; website?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400, headers })
  }

  // Honeypot: the form hides this field from people, so only a bot fills it.
  // Answer as if it worked so there is nothing to learn from the response.
  if (typeof body.website === 'string' && body.website !== '') {
    return Response.json({ ok: true }, { headers })
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (email.length > 254 || !EMAIL.test(email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400, headers })
  }

  const { error } = await resend.contacts.create({ email, unsubscribed: false })

  // Signing up twice is still a signup; the visitor has nothing to fix.
  if (error && !/already exists/i.test(error.message)) {
    console.error('interest signup failed', error)
    return Response.json({ error: 'Something went wrong. Try again?' }, { status: 502, headers })
  }

  return Response.json({ ok: true }, { headers })
}
