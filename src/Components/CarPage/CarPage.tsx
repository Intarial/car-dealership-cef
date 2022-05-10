import React, {FC} from "react";
import styles from './CarPage.module.scss'
import {Typography} from "../Typography/Typography";
import {CarPageBackground} from "./CarPageBackground";
import {CarPageGoBack} from "./CarPageGoBack";
import {CarPageInfo} from "./CarPageInfo";
import {CarPageBuy} from "./CarPageBuy";

type TProps = {
    car: {
        _id: number
        name: string
        realName: string
        specifications: {speed: number, clutch: number, overclocking: number, brake: number}
        price: number
    }
    setActiveCar: () => void
}

export const CarPage: FC<TProps> = ({car, setActiveCar}) => {
    return (
        <section className={styles.wrapper}>
            <CarPageBackground car={car}/>
            <div className={styles.mainContent}>
                <CarPageGoBack setActiveCar={setActiveCar} />
                <CarPageInfo car={car} />
                <CarPageBuy car={car} price={car.price}/>
            </div>
        </section>
    )
}