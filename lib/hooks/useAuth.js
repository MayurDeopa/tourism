import { useContext, useState } from "react"
import {login, register } from "../api/auth"
import { App } from "../AppContext"
import {useRouter} from 'next/router'
import jwt from 'jsonwebtoken'


const useAuth = ()=>{
    const router = useRouter()
    const {userState} = useContext(App)
    const [user,setUser] = userState
    const [err,setErr] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState()
    const loginUser = async(details)=>{
        setIsLoading(true)
        if(details.email.length===0 || details.password.length===0){
            setErr('Input fields cannot be empty')
        }
        else{
            const token = jwt.sign(details,'gasgag')
            const res= await login(token)
            if(res.status==='failed') setErr(res.message)
            else {
                const decoded = jwt.decode(res.user)
                localStorage.setItem('user',res.user)
                setUser(decoded)
                router.push('/user')
            }
        }
        setIsLoading(false)
    }
    const registerUser = async(details)=>{
        setIsLoading(true)
        const res= await register(details)
        if(res.status==='failed') setErr(res.message)
        else {
            router.push('/')
        }
        setIsLoading(false)
    }
    const logout = ()=>{
        localStorage.removeItem('user')
        window.location.href='/'
    }
    return {data,isLoading,loginUser,registerUser,err,logout}
}

export default useAuth;