import React, {FC, ReactNode} from "react";
import stylese from './Typography.module.scss'

type TProps = {
    variant: string
    children: ReactNode
    styles?: any
}

export const Typography: FC<TProps> = ({variant, children, styles}) => {
    return <div style={styles} className={
        variant === 'h1' ? stylese.h1 :
            variant === 'h2' ? stylese.h2 :
                variant === 'h3' ? stylese.h3 :
                    variant === 'h4' ? stylese.h4 :
                        variant === 'h5' ? stylese.h5 :
                            variant === 'h6' ? stylese.h6 :
                                variant === 'title' ? stylese.title :
                                    variant === 'logoCar' ? stylese.logoCar :
                                        variant === 'subheading' ? stylese.subheading : ''
    }>{children}</div>
}