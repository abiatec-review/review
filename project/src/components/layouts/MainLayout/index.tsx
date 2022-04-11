import React, { FC } from "react";
import Header from "../../moleculs/Header";

const MainLayout: FC = ({ children }) => {
    return(
        <>
            <Header/>
            {children}
        </>
    );
}

export default MainLayout;