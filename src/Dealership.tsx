import React, {FC, useEffect, useState} from "react";
import styles from './Dealership.module.scss'
import {Header} from "./Components/Header/Header";
import {ListCars} from "./Components/ListCars/ListCars";
import {CarPage} from "./Components/CarPage/CarPage";

type TCars = Array<{
    _id: number
    realName: string
    name: string
    specifications: {speed: number, clutch: number, overclocking: number, brake: number}
    price: number
}>

type TCar = {
    _id: number
    realName: string
    name: string
    specifications: {speed: number, clutch: number, overclocking: number, brake: number}
    price: number
}

export const Dealership: FC = () => {
    const [cars, setCars] = useState<TCars>([
        {_id: 0, realName: 'Tesla Model X', name: 'zentorno', specifications: {speed: 50, clutch: 10, overclocking: 70, brake: 50}, price: 150000},
        {_id: 1, realName: 'Mercedes-Benz AMG GT', name: 'baller', specifications: {speed: 40, clutch: 20, overclocking: 80, brake: 100}, price: 15950000},
        {_id: 2, realName: 'Ferrari FXX K ', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 3, realName: 'McLaren P1 GTR', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 4, realName: 'Bentley Continental GT3', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 5, realName: 'Aston Martin Vanquish', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 1, realName: 'Tesla Model X', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 2, realName: 'Mercedes-Benz AMG GT ', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 3, realName: 'Ferrari FXX K', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 4, realName: 'McLaren P1 GTR', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
        {_id: 5, realName: 'Bentley Continental GT3', name: 'zentorno', specifications: {speed: 20, clutch: 50, overclocking: 30, brake: 50}, price: 150000},
    ])

    const [activeCar, setActiveCar] = useState<TCar | null>()

    const switchCar = (index?: number) => {
        if (index || index === 0) {
            setActiveCar(cars[index])
        } else setActiveCar(null)
    }

    useEffect(() => {
        if ("mp" in window) {
            //@ts-ignore
            mp.events.add('listCarsDealership:cef', (data) => {
                data = JSON.parse(data)
                setCars(data)
            })
        }
    })

    if (!activeCar) return (
        <div className={styles.wrapper}>
            <Header/>
            <ListCars setActiveCar={(e: number) => switchCar(e)} cars={cars}/>
            <footer/>
        </div>
    )
    else if (activeCar || activeCar === 0) return <CarPage setActiveCar={() => switchCar()} car={activeCar}/>
    else return <div/>

}