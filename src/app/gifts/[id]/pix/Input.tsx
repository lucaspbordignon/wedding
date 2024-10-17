"use client";

import Button from "@wedding/components/Button";
import { Input as InputBase } from "@wedding/components/Input";

interface InputProps {
  value: string;
}

const Input = ({ value }: InputProps) => (
  <div className="w-full grid grid-cols-6 gap-1">
    <InputBase
      className="col-span-5"
      value={value}
      onChange={() => undefined}
    />
    <Button
      className="h-9"
      onClick={() => navigator.clipboard.writeText(value)}
    >
      Copiar
    </Button>
  </div>
);

export default Input;
