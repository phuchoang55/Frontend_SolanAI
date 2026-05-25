// Global TypeScript types for SolanAI

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  items: T[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

export interface User {
  id: string
  username: string
  fullName: string
  role: string
}
