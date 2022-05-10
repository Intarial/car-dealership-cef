import React, {FC, useEffect} from "react";
import styles from './Header.module.scss'
import {Typography} from "../Typography/Typography";
import {IconClose} from "../Icons/Icons.";

export const HeaderGoBack: FC = () => {

    const closeShop = () => {
        if ('mp' in window) {
            //@ts-ignore
            mp.trigger('closeCarShop:client')
        }
    }

    return (
        <section onClick={() => closeShop()} className={styles.wrapperClose}>
            <Typography
                styles={
                    {color: '#2E3A59', marginRight: 6}
                }
                variant={'h5'}
            >
                Выйти из автосалона
            </Typography>
            <IconClose/>
        </section>
    )
}