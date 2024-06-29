import React, { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;


function Input({ ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <input
      ref={ref}
      className="bg-gray-50 border border-[#3A57E8] text-[#8A92A6] min-w-72 text-sm rounded-lg block w-full p-2.5  focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
      {...rest}
    />
  );
}

export default forwardRef(Input)
