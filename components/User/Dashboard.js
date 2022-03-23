import Drawer from "../Nav/Drawer"
import styles from '../../styles/dashboard.module.css'
import { useContext, useEffect,useState } from "react"
import { App } from "../../lib/AppContext"
import { useRouter } from "next/router"
import PageWrapper from "../PageWrapper"
import NavToggle from "../NavToggle"

const Dashboard =({children})=>{
    const router = useRouter()
    const [hidden,setHidden] = useState(false)
    const {userState} = useContext(App)
    const [user,setUser] = userState
    useEffect(()=>{
        if(!user) router.push('/')
    })
    return(
        <PageWrapper>
            <div className={styles.container}>
                <Drawer state={{
                    navState:[hidden,setHidden]
                }}/>
                <NavToggle state={{
                    navState:[hidden,setHidden]
                }}/>
                {children}
            </div>
        </PageWrapper>
    )
}

export default Dashboard;