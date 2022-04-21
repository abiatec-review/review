export interface ITabsInfo {
  tabName: string,
  id: number,
}

export interface TabsButtonBlockProps {
  tabsInfo: ITabsInfo[],
  openTab: number,
  openTabHandler: (id: number) => () => void,
}
