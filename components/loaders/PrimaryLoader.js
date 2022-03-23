import {CgSpinnerTwoAlt} from 'react-icons/cg'
import styles from '../../styles/loader.module.css'

const PrimaryLoader =()=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.svg}>
                <CgSpinnerTwoAlt/>
            </div>
        </div>
    )
}

export default PrimaryLoader;