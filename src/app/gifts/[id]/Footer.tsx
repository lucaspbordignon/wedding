"use client";

import Button from "@wedding/components/Button";
import { Database } from "@wedding/lib/db/types";

interface FooterProps {
  product: Database["public"]["Tables"]["products"]["Row"];
}

const Footer = ({ product }: FooterProps) => (
  <section className="fixed bottom-0 pb-6 flex flex-col gap-2 w-full max-w-screen-md px-6 lg:px-24 bg-white">
    <Button href={`/gifts/${product.id}/pix`} primary>
      Pagar com Pix
    </Button>

    <Button href={product.payment_url}>Cartão de crédito</Button>
  </section>
);

export default Footer;
