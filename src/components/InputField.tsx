import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: number | null) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue === "" ? null : parseFloat(inputValue);
    if (!isNaN(numericValue as number) || inputValue === "") {
      onChange(numericValue);
    }
  };

  return (
    <div>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        inputMode="decimal"
        placeholder={label}
        className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
};

export default InputField;
