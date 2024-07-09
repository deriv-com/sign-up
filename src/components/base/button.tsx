import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
    return (
        <button className={clsx("", className)} {...props}>
            {children}
        </button>
    );
};
