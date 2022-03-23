import ImageComponent from "../../components/Image/Image"
import styles from '../../styles/dashboard.module.css'
import Dashboard from "../../components/User/Dashboard"
import useImage from "../../lib/hooks/useImage"
import {BiSearch} from 'react-icons/bi'
import { useState } from "react"
import { useContext } from "react"
import { App } from "../../lib/AppContext"
import Head from 'next/head'

const MainPage =()=>{
    const {userState} = useContext(App)
    const [user,setUser] = userState
    const [tags,setTags] = useState()
    const {isFetching,getRandomImage,randomImage,getByFilter,err} = useImage()
    if(randomImage){
        return (
                <Dashboard>
                    <Head>
                        <title>Generator</title>
                    </Head>
                    <div className={styles.search}>
                        <input 
                            type={'text'}
                            className={styles.bar}
                            onChange={(e)=>{
                                setTags(e.target.value)
                            }}
                            placeholder={'Search using tags'}/>
                            <div 
                                className={styles.btn}
                                onClick={()=>{
                                    getByFilter({
                                        tags:tags,
                                        id:user._id
                                    })
                                }}>
                                <BiSearch/>
                            </div>
                    </div>
                    {!isFetching
                    ?
                    err
                    ?
                    <h2>{err}</h2>
                    :
                    randomImage.map((i)=>{
                        return <ImageComponent details={i} key={i._id}/>
                    })
                    :
                    <h2>Loading...</h2>}
                    {
                        isFetching
                        ?
                        <div className="await_button">
                            <h3>Generate Random </h3>
                        </div>
                        :
                        <div 
                        className="primary_button"
                        onClick={()=>getRandomImage({id:user._id})}>
                            <h3>Generate Random </h3>
                        </div>
                    }
                </Dashboard>
        )
    }
    else if(err){
        return (
            <Dashboard>
                <Head>
                        <title>Generator</title>
                    </Head>
                <div className={styles.search}>
                    <input 
                        type={'text'}
                        className={styles.bar}
                        onChange={(e)=>{
                            setTags(e.target.value)
                        }}
                        placeholder={'Search using tags'}/>
                        <div 
                            className={styles.btn}
                            onClick={()=>{
                                getByFilter({
                                    tags:tags,
                                    id:user._id
                                })
                            }}>
                            <BiSearch/>
                        </div>
                </div>
                <h2>{err}</h2>
                {
                    isFetching
                    ?
                    <div className="await_button">
                        <h3>Generatating</h3>
                    </div>
                    :
                    <div 
                    className="primary_button"
                    onClick={getRandomImage}>
                        <h3>Generate Random </h3>
                    </div>
                }
            </Dashboard>
    )
    }
    else{
        return (
                <Dashboard>
                    <Head>
                        <title>Generator</title>
                    </Head>
                    <div className={styles.search}>
                        <input 
                            type={'text'}
                            className={styles.bar}
                            onChange={(e)=>{
                                setTags(e.target.value)
                            }}
                            placeholder={'Search using tags'}/>
                            <div 
                                className={styles.btn}
                                onClick={()=>{
                                    getByFilter({
                                        tags:tags,
                                        id:user._id
                                    })
                                }}>
                                <BiSearch/>
                            </div>
                    </div>
                    {
                        isFetching
                        ?
                        <div className="await_button">
                            <h3>Generatating</h3>
                        </div>
                        :
                        <div 
                        className="primary_button"
                        onClick={()=>getRandomImage({
                            id:user._id
                        })}>
                            <h3>Generate Random </h3>
                        </div>
                    }
                </Dashboard>
        )
    }
}

export default MainPage;