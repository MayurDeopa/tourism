import styles from '../../styles/card.module.css'
import Image from 'next/image'

const Card =({details})=>{
    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <Image width={400} height={150} src={details.url}/>
            </div>
            <div className={styles.details}>
                <h3>{details.name}</h3>
                <p>{details.description}</p>
            </div>
        </div>
    )
}

export default Card;