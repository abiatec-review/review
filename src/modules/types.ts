export interface Item {
  id?: number
  name?: string
  status?: string
  species?: string
  type?: string,
  gender?: string,
  origin?: {
    name?: string
    url?: string
  },
  location?: {
    name?: string
    url?: string
  },
  image?: string,
  episode?: Array<string>,
  url?: string,
  created?: string
}

export interface State {
  characterList: Array<Item>
}
