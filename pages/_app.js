import { useState } from 'react'
import { useEffect } from 'react'
import ContextWrapper from '../lib/AppContext'
import { login } from '../lib/api/auth'
import {useRouter} from 'next/router'
import jwt from 'jsonwebtoken'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user,setUser] = useState()
  const [randomImage,setRandomImage] = useState()
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    const initialReq = async()=>{
      const userToken = localStorage.getItem('user')
      if(userToken){
          const res = await login(userToken)
          if(res.status==='ok'){
            const decoded = jwt.decode(res.user)
              setUser(decoded)
              localStorage.setItem('user',res.user)
              router.push('/user')
          }
          else{
              localStorage.removeItem('user')
              window.location.href='/'
          }
      }
      else{
          localStorage.removeItem('user')
      }
      setIsLoading(false)
  }
  initialReq()
  },[])
  return (
    <ContextWrapper states={{
      userState:[user,setUser],
      imageState:[randomImage,setRandomImage]
    }}>
     {isLoading?<h1>Loading...</h1>: <Component {...pageProps} />}
    </ContextWrapper>
  )
}

export default MyApp
