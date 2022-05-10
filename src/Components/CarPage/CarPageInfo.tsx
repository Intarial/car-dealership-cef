import React, {FC} from "react";
import styles from './CarPage.module.scss'
import {Typography} from "../Typography/Typography";
import {CarPageSpecification} from "./CarPageSpecification";

type TProps = {
    car: {
        _id: number
        name: string
        realName: string
        specifications: {speed: number, clutch: number, overclocking: number, brake: number}
        price: number
    }
}

export const CarPageInfo: FC<TProps> = ({car}) => {
    return (
        <section className={styles.wrapperInfo}>
            <Typography variant={'h5'} styles={{color: '#6D6D6D'}}>Характеристики</Typography>
            <div className={styles.infoList}>
                <CarPageSpecification value={car.specifications.overclocking} title={'Разгон'}/>
                <CarPageSpecification value={car.specifications.speed} title={'Макс. Скорость'}/>
                <CarPageSpecification value={car.specifications.brake} title={'Торможение'}/>
                <CarPageSpecification value={car.specifications.clutch} title={'Сцепление'}/>
            </div>
        </section>
    )
}