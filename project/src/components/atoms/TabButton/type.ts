export interface TabButtonProps {
    tabName: string,
    id: number,
    openTab: number,
    openTabHandler: (id: number) => void,
}