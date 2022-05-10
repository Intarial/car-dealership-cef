import React, {FC} from "react";
import styles from './CarPage.module.scss'
import {Typography} from "../Typography/Typography";

type TProps = {
    car: {
        _id: number
        name: string
        realName: string
        specifications: {speed: number, clutch: number, overclocking: number, brake: number}
        price: number
    }
    price: number
}

export const CarPageBuy: FC<TProps> = ({price, car}) => {

    const buyCar = () => {
        if ("mp" in window) {
            //@ts-ignore
            mp.trigger('buyCar:client', car.name)
        }
    }

    const testDriveCar = () => {
        if ("mp" in window) {
            //@ts-ignore
            mp.trigger('testDriveCar:client', car.name)
        }
    }

    return (
        <div className={styles.wrapperBuy}>
            <Typography
                variant={'h2'}
                styles={
                    {display: 'flex', color: '#303737'}
                }>
                <p className={styles.dollarBlock}>
                    $
                </p>
                {price.toLocaleString('en-en')}
            </Typography>
            <div className={styles.listButtons}>
                <button onClick={() => testDriveCar()} className={[styles.testDriveButton, styles.button].join(' ')}>
                    <Typography
                        variant={'h5'}
                        styles={{color: '#000'}}
                    >
                        Тест драйв
                    </Typography>
                </button>
                <button onClick={() => buyCar()} className={[styles.buyButton, styles.button].join(' ')}>
                    <Typography
                        variant={'h5'}
                        styles={{color: '#FFF'}}
                    >
                        Купить
                    </Typography>
                </button>
            </div>
        </div>
    )
}