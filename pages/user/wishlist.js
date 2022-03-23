import styles from '../../styles/card.module.css'
import Link from "next/link";
import { useContext, useEffect } from "react";
import Card from "../../components/Image/Card";
import Dashboard from "../../components/User/Dashboard"
import { App } from "../../lib/AppContext";
import useImage from "../../lib/hooks/useImage";
import Head from 'next/head';


const WishList =()=>{
    const {userState} = useContext(App)
    const [user,setUser] = userState
    const {isFetching,images,awaitWishList,err} = useImage()
    useEffect(()=>{
        const fetchData =async()=>{
            await awaitWishList(user._id)
        }
        fetchData()
    },[])
    console.log(images)
    if(isFetching){
        return (
            <Dashboard>
                <h1>
                    Loading...
                </h1>
            </Dashboard>
        )
    }
    else if(err){
        return (
            <Dashboard>
                <>
                    <h2>{err}</h2>
                    <Link href={'/user'}>
                        <h3 className="primary_button">
                            Start Exploring
                        </h3>
                    </Link>
                </>
            </Dashboard>
        )
    }
    else{
        return (
            <Dashboard>
                <Head>
                    <title>Wishlist</title>
                </Head>
                <h1>Wishlist</h1>
                {   
                    images
                    ?
                    images.length
                    ?
                    <div className={styles.wrapper}>
                        {images.map((i,index)=>{
                        return <Card key={index} details={i}/>
                    })}
                    </div>
                    :
                    <>
                        <h3 >
                            Wishlist is empty
                        </h3>
                        <Link href={'/user'}>
                            <h3 className="primary_button">
                                Start Exploring
                            </h3>
                        </Link>
                    </>
                    :
                    <h2>Something went wrong</h2>
                }
            </Dashboard>
        )
    }
}

export default WishList;