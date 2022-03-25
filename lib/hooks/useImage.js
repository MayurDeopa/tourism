import { useState } from "react"
import { useContext } from "react"
import { getImage, getRandomImageByTags, getVisitedById, getWishList, pushToWishList } from "../api/images"
import { App } from "../AppContext"


const useImage =()=>{
    const {imageState} = useContext(App)
    const [randomImage,setRandomImage] = imageState
    const [err,setErr] = useState()
    const [isFetching,setIsFetching] = useState(false)
    const [images,setImages] = useState()
    const getRandomImage = async(data)=>{
        setErr()
        setIsFetching(true)
        const res = await getImage(data)
        setRandomImage(res.image)
        setIsFetching(false)
    }
    const awaitWishList = async(data)=>{
        setErr()
        setIsFetching(true)
        const res = await getWishList(data)
        if(res.status==='failed') setErr(res.message)
        else setImages(res.wishlist)
        setIsFetching(false)
    }
    const getVisited = async(id)=>{
        setErr()
        setIsFetching(true)
        const res = await getVisitedById(id)
        if(res.status==='failed') setErr(res.message)
        else setImages(res.visited)
        setIsFetching(false)

    }

    const addToWishList = async(data)=>{
        setErr()
        setIsFetching(true)
        const res = await pushToWishList(data)
        console.log(res)
        if(res.status==='failed') setErr(res.message)
        else setErr()
        setIsFetching(false)
    }

    const getByFilter = async(data)=>{
        setErr()
        setIsFetching(true)
        const res = await getRandomImageByTags(data)
        console.log(res)
        if(res.status==='failed') setErr(res.message)
        else setRandomImage(res.image)
        setIsFetching(false)
    }
    return {isFetching,images,getRandomImage,awaitWishList,addToWishList,randomImage,getByFilter,err,getVisited}
}

export default useImage;