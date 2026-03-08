export const prerender = false

import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const hook = import.meta.env.VERCEL_DEPLOY_HOOK
  if (hook) {
    await fetch(hook, { method: 'POST' })
  }
  return new Response(JSON.stringify({ ok: true, timestamp: new Date().toISOString() }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
