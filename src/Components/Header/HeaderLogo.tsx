import React, {FC} from "react";
import styles from './Header.module.scss'
import {Typography} from "../Typography/Typography";

export const HeaderLogo: FC = () => {
    return (
        <section className={styles.wrapperLogo}>
            <img style={{maxWidth: '5.677vw'}} src={require('../../assets/images/logo.png')} className={styles.logo}/>
            <Typography styles={{color: '#484848'}} variant={'h5'}>LUX CAR DEALERSHIP</Typography>
        </section>
    )
}