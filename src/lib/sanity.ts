import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID ?? 'YOUR_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2026-03-08',
  useCdn: true,
})

export async function getSets() {
  return sanityClient.fetch(`*[_type == "musicSet"] | order(order asc)`)
}
export async function getTracks() {
  return sanityClient.fetch(`*[_type == "track"] | order(order asc)`)
}
export async function getReleases() {
  return sanityClient.fetch(`*[_type == "release"] | order(year desc)`)
}
export async function getBio() {
  return sanityClient.fetch(`*[_type == "bio"][0]`)
}
export async function getPressAssets() {
  return sanityClient.fetch(`*[_type == "pressAsset"]`)
}
export async function getPressReferences() {
  return sanityClient.fetch(`*[_type == "pressReference"] | order(date desc)`)
}
