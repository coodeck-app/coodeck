import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function PrimaryButton({ label, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      {...props}
    >
      {label}
    </button>
  );
}
