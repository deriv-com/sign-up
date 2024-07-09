import { DerivLightIcEmailSentPasskeyIcon } from "@deriv/quill-icons/Illustration";
import React from "react";

export const EmailVerificationPage = () => {
    return (
        <React.Fragment>
            <div className="min-h-[calc(100vh-52px)] flex flex-col items-center justify-center gap-y-4">
                <DerivLightIcEmailSentPasskeyIcon height="120px" width="120px" />
                <div className="">We've sent a verification code to </div>
            </div>
        </React.Fragment>
    );
};
