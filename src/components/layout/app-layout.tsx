import { Outlet } from "react-router-dom";

export const AppLayout = () => {
    return (
        <div className="relative">
            <Outlet />
        </div>
    );
};
