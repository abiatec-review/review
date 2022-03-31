import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";



const Button = (props: any): ReactElement => {
    const navigate = useNavigate();
    return (
        <div className = "absolute top-0 pt-[100px] w-[100%] h-[100%] flex justify-center"
        onClick ={(evt) => {
            evt.preventDefault();
            navigate(-1);
        }}
        >
            <div className=" h-[500px] w-[800px] bg-[#767676] text-white rounded px-4" 
        {...props} 
        > some text</div>
        </div>
        
    );


};

// TODO разобраться с calc 
export default Button;
