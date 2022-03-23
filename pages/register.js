import RegisterForm from "../components/Auth/Register";
import PageWrapper from "../components/PageWrapper"
import Head from "next/head";


const Register =()=>{
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <PageWrapper>
                <RegisterForm/>
            </PageWrapper>
        </>
    )
}

export default Register;