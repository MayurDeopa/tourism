import {BiMenu} from 'react-icons/bi'

const NavToggle=({state})=>{
    const [hidden,setHidden] = state.navState
    return(
        <div 
            className="nav_toggle"
            onClick={()=>setHidden(!hidden)}
            >
                <BiMenu/>
        </div>
    )
}

export default NavToggle;