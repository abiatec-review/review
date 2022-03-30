import { SearchBlock } from "../SearchBlock";
import { Image } from "../../Atoms/Image";
import { ImageTypes } from "../../../utils/constants";
import "./index.css";

const HeaderBlock = ({onSearch}: any) => {

    return (
        <header className="Header">
          <Image type={ImageTypes.logSvg} className="Header-logo"/>
          <SearchBlock/>
        </header>
    );
}

export default HeaderBlock;
