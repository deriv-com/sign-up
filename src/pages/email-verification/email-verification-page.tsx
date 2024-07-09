import { DerivLightIcEmailSentPasskeyIcon } from "@deriv/quill-icons/Illustration";
import React, { useEffect, useState } from "react";
import { Input } from "../../components/base/input";
import { useCountdown } from "usehooks-ts";

export const EmailVerificationPage = () => {
    const [email] = useState("placeholder@somedomain.com.my");
    const [resend, setResend] = useState(false);
    const [count, { startCountdown }] = useCountdown({
        countStart: 60,
    });

    useEffect(() => {
        if (resend) startCountdown();
    }, [resend, startCountdown]);

    return (
        <React.Fragment>
            <div className="h-[calc(100vh-84px)] flex flex-col justify-center gap-y-4">
                <DerivLightIcEmailSentPasskeyIcon className="mx-auto" height="120px" width="120px" />
                <div className="text-center font-bold leading-6 mx-auto">We've sent a verification code to {email}</div>
                <Input size="lg" placeholder="Enter 6-digit code" block />
                <div className="text-sm flex flex-col">
                    <div className="justify-self-start mb-2">
                        Didn't get a code?
                        {resend ? (
                            <span className="font-bold text-gray-400 ml-1">Resend code in {count} sec</span>
                        ) : (
                            <span className="ml-1 font-semibold underline" onClick={() => setResend(true)}>
                                Resend code
                            </span>
                        )}
                    </div>
                    <ul className="list-disc text-sm leading-[18px] px-4">
                        <li className="">Make sure you’ve entered your email correctly.</li>
                        <li className="">Check your spam folder.</li>
                        <li className="">Make sure the email isn’t blocked by firewalls or filters.</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};
