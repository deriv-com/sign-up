import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/app-layout";
import { EmailVerificationPage } from "../pages/email-verification/email-verification-page";
import { Paths } from "./route-constants";

export const router = createBrowserRouter([
    {
        path: Paths.email,
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <EmailVerificationPage />,
            },
        ],
    },
]);
