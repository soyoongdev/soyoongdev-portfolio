export const navRoutes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Technical',
    path: '/technical',
  },
  {
    name: 'Projects',
    path: '/Projects',
  },
  {
    name: 'About me',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

// Product details
export const productDetailPage = (slug: string): string => {
  return `product/${slug}`
}
