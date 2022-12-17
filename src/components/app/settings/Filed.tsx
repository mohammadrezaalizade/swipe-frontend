import React, { HTMLInputTypeAttribute } from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  placeHolder: string;
  error: boolean;
  type?: HTMLInputTypeAttribute;
}

const Filed: React.FC<Props> = ({
  label,
  name,
  value,
  placeHolder,
  error,
  type,
  ...rest
}) => {
  return (
    <div className="flex flex-col group border-0 gap-2 ">
      <label htmlFor={name} className="text-gray-600 font-semibold">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeHolder}
        className={`px-3 py-4 h-full w-full rounded-md outline-none text-[16px] text-gray-600 bg-gray-200/60 border-2  focus-within:border-blue-500 transition-all duration-200 ${
          error ? "border-red-500" : "border-transparent"
        }`}
        autoComplete="off"
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Filed;
