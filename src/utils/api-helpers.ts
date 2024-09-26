export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://localhost:1338'
  }${path}`
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('https') || url.startsWith('//')) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`
}

export const resolveImageUrl = (image?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'https://localhost'
  if (!image) return baseUrl
  if (baseUrl.includes('https')) return image
  return `${baseUrl}:1338${image}`
}
