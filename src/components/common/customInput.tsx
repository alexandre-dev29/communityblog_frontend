import React, { HTMLInputTypeAttribute } from "react";

interface ICustomInputProps {
  type: HTMLInputTypeAttribute | undefined;
  name: string;
  labelText: string;
  placeholder?: string;
  isRequired: boolean;
  formRegistration?: any;
}

const CustomInput = ({
  isRequired,
  name,
  labelText,
  placeholder,
  type,
  formRegistration,
}: ICustomInputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-200 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        placeholder={placeholder}
        required={isRequired}
        {...formRegistration}
      />
    </div>
  );
};

export default CustomInput;
