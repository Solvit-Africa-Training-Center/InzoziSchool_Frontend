import React from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, className }) => (
  <select
    value={value}
    onChange={e => onChange?.(e.target.value)}
    className={`w-[230px] bg-white border-none rounded-lg px-3 py-2 text-gray-700 ${className}`}
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
