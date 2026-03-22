import type { MetadataRoute } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://johnroygeralde.vercel.app")

const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${canonicalUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${canonicalUrl}/dashboard`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${canonicalUrl}/myjobportfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${canonicalUrl}/mycertificates`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${canonicalUrl}/security`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ]
}
