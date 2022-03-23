import styles from '../../styles/nav.module.css'
import {BiUser,BiHeart,BiWalk,BiUserCircle,BiLogOut,BiDice2} from 'react-icons/bi'
import {FaWpexplorer} from 'react-icons/fa'
import Link from 'next/link'
import useAuth from '../../lib/hooks/useAuth'

const Drawer =({state})=>{
    const [hidden,setHidden] = state.navState
    const {logout} = useAuth()
    return (
        <nav className={hidden?`${styles.drawer} ${styles.hidden}`:styles.drawer}>
            <div className={styles.header}>
                <FaWpexplorer/>
            </div>
            <ul className={styles.ul}>
            <Link href={'/user'}>
                <li>
                    <div className='med_svg'>
                        <BiDice2/>
                    </div>
                    <h3>Generator</h3>
                </li>
            </Link>
                <Link href={'/user/wishlist'}>
                    <li  onClick={setHidden(true)}>
                        <div className='med_svg'>
                            <BiHeart/>
                        </div>
                        <h3>My Wishlist </h3>
                    </li>
                </Link>
                <Link href={'/user/visited'}>
                    <li  onClick={setHidden(true)}>
                        <div className='med_svg'>
                            <BiWalk/>
                        </div>
                        <h3>Places Visited</h3>
                    </li>
                </Link>
            </ul>
            <div 
                className={styles.logout}
                onClick={logout}
            >
                <div className='med_svg'>
                    <BiLogOut/>
                </div>
                <h3>Logout</h3>
            </div>
        </nav>
    )
}

export default Drawer;