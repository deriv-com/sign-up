import { DerivLightIcEmailSentPasskeyIcon } from "@deriv/quill-icons/Illustration";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../../components/base/input";
import { useCountdown } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/route-constants";
import { IoMdClose } from "react-icons/io";

export const EmailVerificationPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email] = useState("placeholder@somedomain.com.my");
    const [resend, setResend] = useState(false);
    const [count, { startCountdown, resetCountdown }] = useCountdown({
        countStart: 60,
    });

    const handleCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const inputString = e.target.value;
        if (inputString === "expire") {
            setError("Code expired. Get a new one.");
        } else if (inputString === "limit") {
            setError("OTP limit reached. Try again in 1 hour.");
        } else if (inputString === "123456") {
            navigate(Paths.currencySelection);
        } else if (inputString.length >= 6) {
            setError("Invalid code.");
        } else {
            setError("");
        }
    };

    useEffect(() => {
        if (resend) startCountdown();
    }, [resend, startCountdown]);

    useEffect(() => {
        if (count === 0) {
            setResend(false);
            resetCountdown();
        }
    }, [count, resetCountdown]);

    return (
        <React.Fragment>
            <div className="fixed top-0 w-full h-[52px] inline-flex items-center px-4 border-b-2 bg-white z-40">
                <h1 className="text-lg font-bold text-gray-700">Email verification</h1>
                <IoMdClose size="1.5rem" className="ml-auto" />
            </div>
            <div className="h-[calc(100vh-52px)] flex flex-col justify-center gap-y-4 mt-[52px] p-4">
                <DerivLightIcEmailSentPasskeyIcon className="mx-auto" height="120px" width="120px" />
                <div className="text-center font-bold leading-6 mx-auto">We've sent a verification code to {email}</div>
                <Input
                    maxLength={6}
                    onChange={handleCodeInput}
                    state={error ? "error" : "none"}
                    helperMessage={error}
                    size="lg"
                    placeholder="Enter 6-digit code"
                    block
                />
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
