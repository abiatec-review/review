export const defineEpisodeIndex = (index: string): string => {
  const arr = index.split('/')
  return arr[arr.length - 1]
}
export const getThreeRandomElements = (array: string[]): string[] => {
  return array.sort(() => .5 - Math.random()).slice(0, 3)
}

export const defineNextPage = (link: string): string => {

  return link?.length > 2 ? link.split('page=')?.[1]?.[0] : link
}