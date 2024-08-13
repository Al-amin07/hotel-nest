import { Navigate, useLocation } from "react-router-dom";

import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/Shared/LoadingSpinner";


const HostRoute = ({children}) => {
 const [role, isLoading] = useRole();
 const location = useLocation()
 const { user, loading} = useAuth();
 if(loading || isLoading) return <LoadingSpinner />
 if(role === "host" && user) return children;
 return <Navigate to={'/login'} state={location?.state} />
};

export default HostRoute;