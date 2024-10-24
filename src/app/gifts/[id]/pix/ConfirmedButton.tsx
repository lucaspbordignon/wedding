"use client";

import Button from "@wedding/components/Button";
import { useEffect, useState } from "react";

const ConfirmedButton = () => {
  const [confirmationDisabled, setConfirmationDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setConfirmationDisabled(false);
    }, 3000);
  }, []);

  return (
    <Button primary href="/gifts/confirmed" disabled={confirmationDisabled}>
      Confirmar pagamento
    </Button>
  );
};

export default ConfirmedButton;
