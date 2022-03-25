import styles from '../../styles/image.module.css'
import Image from 'next/image';
import {BiHeart} from 'react-icons/bi'
import useImage from '../../lib/hooks/useImage';
import { pushToWishList } from '../../lib/api/images';
import { useContext } from 'react';
import { App } from '../../lib/AppContext';

const ImageComponent =({details})=>{
    const {userState} = useContext(App)
    const [user,setUser] = userState
    const {isFetching,addToWishList} = useImage()
    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <Image src={details.url} height={600} width={1300}/>
            </div>
            <div className={styles.details}>
                <h2>{details.name}</h2>
                <p>{details.description}</p>
            </div>
            <div className={styles.tags_wrapper}>
            <h3>Tags</h3>
            <div className={styles.tags_container}>
                {details.tags.map((t,i)=>{
                    return <h4 className={styles.tag}  key={i}>{t}</h4>
                })}
            </div>
            </div>
            <div 
                className={styles.buttons_wrapper}
                onClick ={()=>pushToWishList({
                    id:user._id,
                    image:details
                })}
                >
                    <div className={styles.svg}>
                    <BiHeart/>
                    </div>
            </div>
        </div>
    )
}

export default ImageComponent;