import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  useCdn: true,
})

export async function getSets() {
  return sanityClient.fetch(`*[_type == "musicSet" && category == "dj-set"] | order(order asc)`)
}
export async function getLiveVideos() {
  return sanityClient.fetch(`*[_type == "musicSet" && category == "live"] | order(order asc)`)
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
