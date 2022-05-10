import React, {FC} from "react";
import styles from './CarPage.module.scss'
import {Typography} from "../Typography/Typography";
import {IconArrow, IconClose} from "../Icons/Icons.";

type TProps = {
    setActiveCar: () => void
}

export const CarPageGoBack: FC<TProps> = ({setActiveCar}) => {
    return (
        <div className={styles.wrapperGoBack}>
            <img style={{maxWidth: '5.677vw'}} src={require('../../assets/images/logo.png')}/>
            <button onClick={() => setActiveCar()} className={styles.backButton}>
                <Typography
                    styles={
                        {color: '#2E3A59', marginRight: '6', width: '7.813vw', transform: 'rotate(180deg)'}
                    }
                    variant={'h5'}
                >
                    Выйти из автосалона
                </Typography>
                <IconArrow/>
            </button>
        </div>
    )
}