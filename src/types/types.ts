export interface ICurrency {
  id: string
  name: string
  min_size: string
}

export type TCurrenciesData = {
  data: ICurrency[]
}

export interface IInitialState {
  list: ICurrency[]
  selectedId: string
  selectedName: string
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string | null
}