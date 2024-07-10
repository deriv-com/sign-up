import clsx from "clsx";
import { ComponentProps } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";

interface SelectableCardProps extends ComponentProps<"div"> {
    selected?: boolean;
}

export const SelectableCard = ({ className, children, selected = false, ...props }: SelectableCardProps) => {
    return (
        <div
            className={clsx(
                className,
                "inline-flex w-full h-16 items-center border-2 bg-gray-50 rounded-[4px] text-sm px-4 transition-all ease-in-out",
                {
                    "border-green-600 ": selected,
                    "border-gray-200 ": !selected,
                }
            )}
            {...props}
        >
            {children}
            <span className="flex justify-center items-center w-8 h-8 ml-auto">
                {selected ? (
                    <FaRegCircleCheck className="fill-gray-800" size="1.5rem" />
                ) : (
                    <IoChevronForward size="1.25rem" />
                )}
            </span>
        </div>
    );
};
