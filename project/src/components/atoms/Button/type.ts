export interface ButtonProps {
  title: string,
  clickHandler: (e: React.MouseEvent<HTMLElement>) => void,
  isDisabled?: boolean,
}
