'use client';

import type React from 'react';

import { useState } from 'react';

type Option = {
  value: string
  label: string
  icon: React.ReactNode
}

type LanguageProps = {
  options: Option[]
  value?: string
  onChange?: (value: string) => void
}

export default function Language({ options, value, onChange }: LanguageProps) {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((o) => o.value === value) || options[0];

  return (
    <div className="relative w-[180px] max-sm:w-[120px] max-sm:text-[13px]">
      {/* Custom dropdown */}
      <div
        className="flex items-center justify-between bg-white border px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {selectedOption.icon}
          <span className="text-black font-medium">{selectedOption.label}</span>
        </div>
        <span className={`text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▼</span>
      </div>

      {open && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors ${
                option.value === value ? 'bg-blue-100 text-blue-700' : 'text-black'
              }`}
              onClick={() => {
                onChange?.(option.value); // trigger parent change
                setOpen(false); // close dropdown
              }}
            >
              {option.icon}
              <span className="font-medium">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
