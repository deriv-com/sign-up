import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ProgressBar } from "../../components/base/progress-bar";
import { SelectableCard } from "../../components/base/selectable-card";
import {
    CurrencyBtcIcon,
    CurrencyEthIcon,
    CurrencyEurIcon,
    CurrencyLtcIcon,
    CurrencyUsdIcon,
} from "@deriv/quill-icons/Currencies";

export const CurrencySelectionPage = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("");

    return (
        <React.Fragment>
            <div className="fixed top-0 w-full h-[52px] inline-flex items-center px-4 border-b-2 bg-white z-40">
                <ProgressBar className="w-[269px] ml-auto" value={43} />
                <IoMdClose size="1.5rem" className="ml-auto" />
            </div>
            <div className="h-[calc(100vh-52px)] flex flex-col gap-y-4 mt-[52px] p-4">
                <div className="font-semibold">Account Currency</div>
                <div className="">Recommended</div>
                <div className="flex flex-col gap-y-4">
                    <SelectableCard
                        className="gap-x-4"
                        selected={selectedCurrency === "usd"}
                        onClick={() => setSelectedCurrency("usd")}
                    >
                        <CurrencyUsdIcon className="w-6" />
                        <div className="font-semibold">US dollar (USD)</div>
                    </SelectableCard>
                    <SelectableCard
                        className="gap-x-4"
                        selected={selectedCurrency === "btc"}
                        onClick={() => setSelectedCurrency("btc")}
                    >
                        <CurrencyBtcIcon className="w-6" />
                        <div className="font-semibold">Bitcoin (BTC)</div>
                    </SelectableCard>
                </div>
                <div className="">Other</div>
                <div className="flex flex-col gap-y-4">
                    <SelectableCard
                        className="gap-x-4"
                        selected={selectedCurrency === "eur"}
                        onClick={() => setSelectedCurrency("eur")}
                    >
                        <CurrencyEurIcon className="w-6" />
                        <div className="font-semibold">Euro (EUR)</div>
                    </SelectableCard>
                    <SelectableCard
                        className="gap-x-4"
                        selected={selectedCurrency === "eth"}
                        onClick={() => setSelectedCurrency("eth")}
                    >
                        <CurrencyEthIcon className="w-6" />
                        <div className="font-semibold">Ethereum (ETH)</div>
                    </SelectableCard>
                    <SelectableCard
                        className="gap-x-4"
                        selected={selectedCurrency === "ltc"}
                        onClick={() => setSelectedCurrency("ltc")}
                    >
                        <CurrencyLtcIcon className="w-6" />
                        <div className="font-semibold">Litecoin (LTC)</div>
                    </SelectableCard>
                </div>
            </div>
        </React.Fragment>
    );
};
