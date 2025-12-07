import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'O\'der360 - F&B Operations Excellence',
    short_name: 'O\'der360',
    description: 'Leading F&B operations consultancy in UAE for brand managers',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#007AFF',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}


