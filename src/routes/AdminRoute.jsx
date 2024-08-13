import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({children}) => {
 const [role, isLoading] = useRole();
 const location = useLocation()
 const { user, loading} = useAuth();
 if(loading || isLoading) return <LoadingSpinner />
 if(role === "admin" && user) return children;
 return <Navigate to={'/login'} state={location?.state} />
};

export default AdminRoute;