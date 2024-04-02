import { Navigate } from "react-router"
import { useSelector } from "react-redux"

function Privateroutes({children}) {
    const {token}=useSelector((state)=>state.auth)
    if(token){
        return children;
    }else{
        return <Navigate to="/signup"></Navigate>
    }
 
}

export default Privateroutes