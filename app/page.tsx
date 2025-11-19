import Image from "next/image";
import { createClient } from "../utils/supabase/client";

export default async function Page() {
  const supabase = createClient();

  const { data: products } = await supabase
    .from("product_variants")
    .select("*");

  return (
    <ul>
      {products?.map((item) => (
        <Image
          key={item.id}
          width={700}
          height={700}
          src={item.images[0]}
          alt={item.id}
        />
      ))}
    </ul>
  );
}
