import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
    block?: boolean;
    size?: "sm" | "md" | "lg";
    state?: "none" | "error";
    helperMessage?: ReactNode;
}

export const Input = ({
    className,
    helperMessage,
    state = "none",
    block = false,
    size = "md",
    ...props
}: InputProps) => {
    return (
        <div
            className={clsx("flex flex-col", {
                "gap-y-1": size === "sm",
                "gap-y-2": size === "md" || size === "lg",
            })}
        >
            <input
                className={clsx(
                    className,
                    "border  rounded",
                    { "w-full": block },
                    {
                        "h-8": size === "sm",
                        "h-10": size === "md",
                        "h-12": size === "lg",
                    },
                    {
                        "px-2": size === "sm",
                        "px-4": size === "md" || size === "lg",
                    },
                    {
                        "border-gray-300": state === "none",
                        "border-red-600": state === "error",
                    }
                )}
                {...props}
            />
            {helperMessage && (
                <span
                    className={clsx(
                        {
                            "text-xs": size === "sm" || size === "md",
                            "text-sm": size === "lg",
                        },
                        {
                            "text-gray-300": state === "none",
                            "text-red-600": state === "error",
                        }
                    )}
                >
                    {helperMessage}
                </span>
            )}
        </div>
    );
};
