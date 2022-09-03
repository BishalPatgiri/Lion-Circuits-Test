import { Navigate } from "react-router-dom";
import { getLocalData } from "../utils/localStorage";

export const PrivateRoute = ({children}) => {
    // const navigate=useNavigate()
    const auth=getLocalData("auth")

    if(auth){
        return children
    }
    else{
        alert("Login First to see Products")
        return <Navigate to="/"/>
    }
}


