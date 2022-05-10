import React, {FC} from "react";
import styles from './CarPage.module.scss'
import {Typography} from "../Typography/Typography";

type TProps = {
    title: string
    value: number
}

export const CarPageSpecification: FC<TProps> = ({title, value}) => {
    return (
        <div className={styles.wrapperSpecification}>
            <Typography variant={'h5'} styles={{color: '#000'}}>{title}</Typography>
            <div className={styles.listSpecificValue}>
                <div style={{background: value >= 20 ? '#6E6B5D' : '#8B8775'}} className={styles.specificBlock}/>
                <div style={{background: value >= 40 ? '#6E6B5D' : '#8B8775'}} className={styles.specificBlock}/>
                <div style={{background: value >= 60 ? '#6E6B5D' : '#8B8775'}} className={styles.specificBlock}/>
                <div style={{background: value >= 80 ? '#6E6B5D' : '#8B8775'}} className={styles.specificBlock}/>
                <div style={{background: value === 100 ? '#6E6B5D' : '#8B8775'}} className={styles.specificBlock}/>
            </div>
        </div>
    )
}