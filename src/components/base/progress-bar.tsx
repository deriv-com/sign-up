import clsx from "clsx";
import { ComponentProps } from "react";

interface ProgressBarProps extends ComponentProps<"div"> {
    value?: number;
    color?: string;
    bgColor?: string;
}

export const ProgressBar = ({ bgColor = "", color = "", className, value, ...props }: ProgressBarProps) => {
    return (
        <div className={clsx(className, "")} style={{ backgroundColor: bgColor }} {...props}>
            <div className="" style={{ width: `${value}%`, color }}></div>
        </div>
    );
};
