"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  primary?: boolean;
  loading?: boolean;
  outline?: boolean;
  mobile?: boolean;
};

const Button: FC<ButtonProps> = ({
  href,
  onClick,
  primary = false,
  loading = false,
  outline = false,
  mobile = false,
  className,
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
        "rounded-md min-h-11 w-full",
        "disabled:opacity-30",
        {
          "md:hover:bg-primary md:hover:text-white border-primary": !primary,
          "bg-primary text-white md:hover:bg-white md:hover:text-primary border-white":
            primary,
          border: !outline,
          "block lg:hidden": mobile,
        },
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    />
  );
};

export default Button;
