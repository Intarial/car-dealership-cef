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
}

export const CarPageBackground: FC<TProps> = ({car}) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.nameCar}>
                <img className={styles.carBackground} src={require(`../../assets/images/cars/${car._id}_1.png`)}/>
                <Typography
                    styles={{position: 'absolute', top: '-6.25vw', zIndex: 0}}
                    variant={'logoCar'}
                >
                    {
                        car.realName
                            .split('-' )[0]
                            .split(' ' )[0]
                            .split('.' )[0]
                            .split('_' )[0]
                    }
                </Typography>
            </div>
            <div className={styles.filter}/>
        </section>
    )
}