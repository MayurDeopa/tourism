import styles from '../../styles/auth.module.css'
import {FaWpexplorer} from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../../lib/hooks/useAuth'

const RegisterForm =()=>{
    const [details,setDetails] = useState({
        username:'',
        email:'',
        password:''
    })
    const {data,registerUser,isLoading,err} = useAuth()
    return (
        <form className={styles.form}>
            <div className={styles.header}>
                <FaWpexplorer/>
            </div>
            <section className={styles.section}>
                <h3>
                    UserName
                </h3>
                <input 
                type={'text'} 
                disabled ={isLoading}
                required
                onChange={(e)=>setDetails({...details,username:e.target.value})}/>
            </section>
            <section className={styles.section}>
                <h3>
                    Email
                </h3>
                <input 
                type={'email'} 
                disabled ={isLoading}
                required
                onChange={(e)=>setDetails({...details,email:e.target.value})}
                />
            </section>
            <section className={styles.section}>
                <h3>
                    Set Password
                </h3>
                <input 
                type={'password'} 
                disabled ={isLoading}
                required
                onChange={(e)=>setDetails({...details,password:e.target.value})}/>
            </section>
            {
                isLoading
                ?
                <h3 className='await_button'>Please Wait</h3>
                :
                <h3 
                className='primary_button'
                onClick={()=>registerUser(details)}>
                    Register
                </h3>
            }
            {
                err
                ?
                <h3>{err}</h3>
                :
                ''
            }
            <Link href={'/'}>
                <h4 className='link'>
                    Already have an account ?
                </h4>
            </Link>
        </form>
    )
}

export default RegisterForm;