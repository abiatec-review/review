import { ReactElement } from 'react';


const styles = {
    button:`h-9 bg-btn_bcground text-white rounded px-4 disabled:opacity-50`
};

export const Button = (props: any): ReactElement => {
    return (
        <button className={styles.button} 
        {...props} 
        />
    );


};

