import { useCallback, useState } from 'react';
import "./index.css";
interface IProps {
  value: string;
  onSearchChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const SearchInput:React.FC<IProps> = ({value, onSearchChange, onKeyPressHandler }) => {
   return (
    <div className="SearchInput">
      <input value={value} onChange={onSearchChange} onKeyPress={onKeyPressHandler} />
    </div>
  );
};