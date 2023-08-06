export const navRoutes = [
  {
    name: 'Giới thiệu',
    path: '/about',
  },
  {
    name: 'Sản phẩm',
    path: '/products',
  },
  {
    name: 'Tài liệu',
    path: '/documentation',
  },
  {
    name: 'Tin tức & Sự kiện',
    path: '/newsevent',
  },
  {
    name: 'Tuyển dụng',
    path: '/career',
  },
]

// Product details
export const productDetailPage = (slug: string): string => {
  return `product/${slug}`
}
