import clsx from "clsx";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export const Input = ({ className, ...props }: InputProps) => {
    return <input className={clsx("", className)} {...props} />;
};
