import React, {FC} from "react";
import styles from './ListCars.module.scss'
import {Typography} from "../Typography/Typography";

type TProps = {
    car: {
        _id: number
        name: string
        realName: string
        specifications: {speed: number, clutch: number, overclocking: number, brake: number}
        price: number
    }
    index: number
    setActiveCar: (e: number) => void
}

export const ListCarsCard: FC<TProps> = ({car, index, setActiveCar}) => {
    return (
        <div onClick={() => setActiveCar(index)} className={styles.effectScale}>
            <div className={styles.wrapperCard}>
                <img className={styles.carImage} src={require(`../../assets/images/cars/${index}.png`)}/>
            </div>
            <Typography
                variant={'h5'}
                styles={{
                    marginTop: '0.260vw',
                    width: '9.375vw',
                    textAlign: 'center',
                    color: '#626262'
                }}
            >
                {car.realName}
            </Typography>
        </div>
    )
}