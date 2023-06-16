import {Outlet} from "react-router-dom"
import Navbar from "../../components/Navbar"; 

const UserLandingPage = ()=>{
    return(
        <>
            <Navbar/> 
            <Outlet/>
            
        </>
    )
}

export default UserLandingPage;