import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/app-layout";
import { EmailVerificationPage } from "../pages/email-verification/email-verification-page";

export const router = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <EmailVerificationPage />,
            },
        ],
    },
]);
