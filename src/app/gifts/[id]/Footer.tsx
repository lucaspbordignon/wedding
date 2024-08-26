"use client";

import Button from "@wedding/components/Button";
import { Database } from "@wedding/lib/db/types";

interface FooterProps {
  product: Database["public"]["Tables"]["products"]["Row"];
}

const Footer = ({ product }: FooterProps) => (
  <section className="flex flex-col gap-2 w-full">
    <Button
      onClick={() => {
        alert("Add the QR code");
      }}
      primary
    >
      Pagar com Pix
    </Button>

    <Button href={product.payment_url}>Cartão de crédito</Button>
  </section>
);

export default Footer;
