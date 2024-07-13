import { Navigate } from "react-router-dom"

function ProtektedRout({children, user}) {
    if(user){
        return children
    } else{
        return <Navigate to="/register" />
    }
}


export default ProtektedRout