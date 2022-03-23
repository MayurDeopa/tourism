import styles from '../../styles/card.module.css'
import Dashboard from "../../components/User/Dashboard"
import useImage from "../../lib/hooks/useImage"
import { useEffect } from 'react'
import { useContext } from 'react'
import Card from '../../components/Image/Card'
import Link from 'next/link'
import { App } from '../../lib/AppContext'
import Head from 'next/head'


const Visited =()=>{
    const {userState} = useContext(App)
    const [user,setUser] = userState
    const {isFetching,err,getVisited,images} = useImage()
    useEffect(()=>{
        const fetchVisited = async()=>{
            await getVisited(user._id)
        }
        fetchVisited()
    },[])
    if(isFetching){
        return (
            <Dashboard>
                <Head>
                    <title>Loading...</title>
                </Head>
                <h1>Loading</h1>
            </Dashboard>
        )
    }
    
    else{
        return (
            <Dashboard>
                <Head>
                    <title>Wishlist</title>
                </Head>
                <h1>Places you have visited</h1>
                    {   !err
                        ?
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
                                You havent visited any place yet
                            </h3>
                            <Link href={'/user'}>
                                <h3 className="primary_button">
                                    Start Exploring
                                </h3>
                            </Link>
                        </>
                        :
                        <h2>Authenticatin error</h2>
                        :
                        <>
                            <h2>{err}</h2>
                            <Link href={'/user'}>
                                <h3 className="primary_button">
                                    Start Exploring
                                </h3>
                            </Link>
                        </>
                    }
            </Dashboard>
        )
    }
}

export default Visited;