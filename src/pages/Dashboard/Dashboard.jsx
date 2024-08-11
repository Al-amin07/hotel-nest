import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="lg:ml-72 mt-12">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;