import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";
import GuestStatistics from "../Guest/GuestStatistics";
import HostStatistics from "../Host/HostStatistics";


const Stastistics = () => {
    const [role] = useRole();
    return (
        <div>
            {role === 'guest' && <GuestStatistics />}
            {role === 'host' && <HostStatistics />}
            {role === 'admin' && <AdminStatistics />}
        </div>
    );
};

export default Stastistics;