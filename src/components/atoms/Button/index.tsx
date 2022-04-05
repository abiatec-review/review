import { ReactElement } from 'react';


const Button = (props: any): ReactElement => {
    return (
        <button className='h-9 bg-[#767676] text-white rounded px-4 disabled:opacity-50' 
        {...props} 
        />
    );


};
export default Button;
