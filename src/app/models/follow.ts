export interface FastFollow {
  img?: string
  name: string
  status?: string
  at: string
}

export interface Follow extends FastFollow {
  description: string
}
