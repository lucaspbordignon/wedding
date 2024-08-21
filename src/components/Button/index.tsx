"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  primary?: boolean;
  loading?: boolean;
  outline?: boolean;
};

const Button: FC<ButtonProps> = ({
  href,
  onClick,
  primary = false,
  loading = false,
  outline = false,
  ...props
}) => {
  const router = useRouter();

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) return router.push(href);

    onClick?.(event);
  };

  return (
    <button
      onClick={onButtonClick}
      className={clsx(
        "font-sans font-semibold cursor-pointer",
        "border-primary rounded-md min-h-11 w-full",
        "disabled:opacity-30",
        {
          "hover:bg-primary hover:text-white": !primary,
          "bg-primary text-white hover:bg-white hover:text-primary": primary,
          border: !outline,
        }
      )}
      disabled={loading || props.disabled}
      {...props}
    />
  );
};

export default Button;
