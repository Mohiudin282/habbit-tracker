import classNames from "classnames";
import React, { MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: ReactNode;
  color?: "white" | "red";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  color = "white",
  className,
  onClick
}: Props) => {
  return (
    <button
      className={twMerge(
        classNames(
          "rounded-md px-4 py-1 font-bold duration-100 hover:bg-opacity-80",
          {
            "bg-white text-black": color === "white",
            "bg-red-500": color === "red",
          },
        ),
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}