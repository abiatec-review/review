export const defineEpisodeIndex = (index: string): string => {
  const arr = index.split('/')
  return arr[arr.length - 1]
}