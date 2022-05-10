import React, {FC} from "react";
import styles from './ListCars.module.scss'
import {ListCarsCard} from "./ListCarsCard";
import ScrollContainer from 'react-indiana-drag-scroll'

type TProps = {
    cars: Array<{
        _id: number
        name: string
        realName: string
        specifications: {speed: number, clutch: number, overclocking: number, brake: number}
        price: number
    }>
    setActiveCar: (e: number) => void
}

export const ListCars: FC<TProps> = ({cars, setActiveCar}) => {
    return (
        <main className={styles.wrapper}>

            {/*@ts-ignore*/}
            <ScrollContainer
                className={styles.slider}
                vertical={false}
            >
                {cars.map((car, index) => {
                    return <ListCarsCard setActiveCar={setActiveCar} car={car} index={index}/>
                })}
            </ScrollContainer>
        </main>
    )
}