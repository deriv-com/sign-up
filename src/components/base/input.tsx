import clsx from "clsx";
import { ComponentProps } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
    block?: boolean;
    size?: "sm" | "md" | "lg";
}

export const Input = ({ className, block = false, size = "md", ...props }: InputProps) => {
    return (
        <input
            className={clsx(
                className,
                "border border-gray-300 rounded",
                { "w-full": block },
                {
                    "h-8": size === "sm",
                    "h-10": size === "md",
                    "h-12": size === "lg",
                },
                {
                    "px-2": size === "sm",
                    "px-4": size === "md" || size === "lg",
                }
            )}
            {...props}
        />
    );
};
