import styles from '../../styles/auth.module.css'
import {FaWpexplorer} from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../../lib/hooks/useAuth'

const LoginForm =()=>{
    const [details,setDetails] = useState({
        email:'',
        password:''
    })
    const {data,isLoading,loginUser,err} = useAuth()
    return (
        <form className={styles.form}>
            <div className={styles.header}>
                <FaWpexplorer/>
            </div>
            <section className={styles.section}>
                <h3>
                    Email
                </h3>
                <input 
                type={'email'} 
                disabled ={isLoading}
                onChange={(e)=>setDetails({...details,email:e.target.value})} />
            </section>
            <section className={styles.section}>
                <h3>
                    Password
                </h3>
                <input 
                type={'password'} 
                disabled ={isLoading}
                onChange={(e)=>setDetails({...details,password:e.target.value})}/>
            </section>
            {
                isLoading
                ?
                <h3 className='await_button'>
                    Please wait
                </h3>
                :
                <h3 className='primary_button' onClick={()=>loginUser(details)}>
                    Login
                </h3>
            }
            {
                err
                ?
                <h4>{err}</h4>
                :
                '   '
            }
            <Link href={'/register'}>
                <h4 className='link'>
                    Dont have an account ?
                </h4>
            </Link>
        </form>
    )
}

export default LoginForm;