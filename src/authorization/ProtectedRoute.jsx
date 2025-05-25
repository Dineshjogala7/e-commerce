import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const ProtectedRoute=({children})=>{
    const {user,loading}=useAuth()
    if(loading){
        return <div className="text-center py-12 text-lg">Loading...</div>;
    }
    if(!user){
        return <Navigate to="/login" replace/>
    }
    return children;
}

export default ProtectedRoute;