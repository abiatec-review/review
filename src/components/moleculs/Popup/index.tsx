import { ReactElement } from "react";


const Button = (props: any): ReactElement => {
    return (
        <div className = "absolute top-0 pt-[100px] w-[100%] h-[100%] flex justify-center">
            <div className=" h-[500px] w-[800px] bg-[#767676] text-white rounded px-4" 
        {...props} 
        > some text</div>
        </div>
        
    );


};

// TODO разобраться с calc 
export default Button;
