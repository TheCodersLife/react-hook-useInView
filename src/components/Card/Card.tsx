import React from 'react';

import styles from './Card.module.scss'

const Card: React.FC<CardProps> = (props) => {

    const { index } = props

    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>Card {index}</h2>

            <img src="https://placehold.co/300x200" alt="" className={styles.figure} /> 
            
        </div>
    )
}

interface CardProps {
    [key: string]: any
}

export default Card;