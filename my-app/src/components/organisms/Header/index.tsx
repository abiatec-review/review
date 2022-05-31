import React, {useState} from "react";

import {Button, Picture} from "../../atoms";
import styles from './styles.module.scss'
import {constants, routes} from '../../../utils/constants'
import {useLocation, useNavigate} from "react-router-dom";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {signOut} from "../../../redux/actions/auth";
import {clearCharacters} from "../../../redux/actions/characters";
import {DropDown} from "../../molecules/DropDown";

interface IProps {
    children?: JSX.Element
}

export const Header: React.FC<IProps> = ({children}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const email = useSelector((state: RootStateOrAny) => state.auth?.aboutUser?.email);
    const [isOpenDropDown, setOpenDropDown] = useState<boolean>(false)

    const buttonContent = () => {
        switch (location.pathname) {
            case '/': {
                return {
                    title: 'Sign Out',
                    onClick: () => {
                        dispatch(clearCharacters())
                        dispatch(signOut());
                        navigate(`/${routes.SIGNIN}`)
                    }
                }
            }
            case `/${routes.SIGNIN}`: {
                return {
                    title: 'Sign Up',
                    onClick: () => {
                        navigate(`/${routes.SIGNUP}`)
                    }
                }
            }
            case `/${routes.SIGNUP}`: {
                return {
                    title: 'Sign In',
                    onClick: () => {
                        navigate(`/${routes.SIGNIN}`)
                    }
                }
            }
            default:
                return null
        }
    }
    const openDropDown = () => {
        setOpenDropDown(true)
    }

    const closeDropDown = () => {
        setOpenDropDown(false);
    }

    return (
        <div className={styles.header}>
            {isOpenDropDown && <DropDown onClose={closeDropDown}>
              <div className={styles.dropDownContent}>
                <p className={styles.dropDownItem}>position 1</p>
                <p className={styles.dropDownItem}>position 2</p>
                <p className={styles.dropDownItem}>position 3</p>
              </div>
            </DropDown>}
            <Picture type={constants.HEADER_PICTURE} srcImage={""}/>
            {children}
            <div className={styles.navigationBox}>
                <Button handleClick={openDropDown} className={styles.mailButton} type={"button"}>{email}</Button>
                <Button handleClick={buttonContent()?.onClick} className={styles.headerNavButton}
                        type={"button"}>{buttonContent()?.title}</Button>
            </div>
        </div>
    )
} 