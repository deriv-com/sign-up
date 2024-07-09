import { Outlet, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RouteDetails } from "../../routes/route-constants";

export const AppLayout = () => {
    const { pathname } = useLocation();
    const { title = "" } = RouteDetails[pathname as keyof typeof RouteDetails] ?? {};

    return (
        <div className="">
            <div className="w-full h-[52px] inline-flex items-center px-4 border-b-2">
                <h1 className="text-lg font-bold text-gray-700">{title}</h1>
                <IoMdClose size="1.5rem" className="ml-auto" />
            </div>
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};
