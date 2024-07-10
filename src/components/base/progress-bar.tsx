import clsx from "clsx";
import { ComponentProps } from "react";

interface ProgressBarProps extends ComponentProps<"div"> {
    value?: number;
    color?: string;
    bgColor?: string;
}

export const ProgressBar = ({
    bgColor = "#E9ECEF",
    color = "#FF444F",
    className,
    value,
    ...props
}: ProgressBarProps) => {
    return (
        <div className={clsx(className, "flex h-2")}>
            <div className="relative w-full h-2 rounded-full" style={{ backgroundColor: bgColor }} {...props}>
                <div className="absolute h-2 z-10 rounded" style={{ width: `${value}%`, backgroundColor: color }}></div>
            </div>
        </div>
    );
};
