export const prerender = false

import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  const secret = import.meta.env.SANITY_WEBHOOK_SECRET
  if (secret) {
    const signature = request.headers.get('sanity-webhook-signature') ?? ''
    if (!signature.includes(secret)) {
      return new Response('Unauthorized', { status: 401 })
    }
  }

  const hook = import.meta.env.VERCEL_DEPLOY_HOOK
  if (hook) {
    await fetch(hook, { method: 'POST' })
  }

  return new Response(JSON.stringify({ ok: true, timestamp: new Date().toISOString() }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
