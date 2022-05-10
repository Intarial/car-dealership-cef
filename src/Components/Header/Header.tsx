import React, {FC} from "react";
import styles from './Header.module.scss'
import {HeaderLogo} from "./HeaderLogo";
import {HeaderGoBack} from "./HeaderGoBack";

export const Header: FC = () => {
    return (
        <header className={styles.wrapper}>
            <HeaderLogo/>
            <HeaderGoBack/>
        </header>
    )
}