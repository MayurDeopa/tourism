import Head from "next/head"
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import LoginForm from "../components/Auth/Login";
import PageWrapper from "../components/PageWrapper"
import { App } from "../lib/AppContext";    

const Login =()=>{
  const router = useRouter()
  const {userState} = useContext(App)
  const [user,setUser] = userState
  useEffect(()=>{
    if(user) router.push('/user')
  })
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <PageWrapper>
                <LoginForm/>
            </PageWrapper>
        </>
    )
}

export default Login;