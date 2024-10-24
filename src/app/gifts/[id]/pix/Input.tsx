"use client";

import Button from "@wedding/components/Button";
import { Input as InputBase } from "@wedding/components/Input";
import { useToast } from "@wedding/hooks/use-toast";

interface InputProps {
  value: string;
}

const Input = ({ value }: InputProps) => {
  const { toast } = useToast();

  const onCopyClick = () => {
    navigator.clipboard.writeText(value);
    toast({
      title: "Código PIX copiado!",
      description:
        "Para finalizar, acesse o app de seu banco e cole o código para realizar o pagamento.",
      duration: 4000,
    });
  };

  return (
    <div className="w-full grid grid-cols-6 gap-2">
      <InputBase
        className="col-span-6 md:col-span-5 h-11"
        value={value}
        onChange={() => undefined}
      />

      <Button onClick={onCopyClick} className="h-9 col-span-6 md:col-span-1">
        Copiar
      </Button>
    </div>
  );
};

export default Input;
