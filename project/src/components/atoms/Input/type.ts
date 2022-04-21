export interface InputProps {
  value: string,
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string,
  placeholder?: string,
}
