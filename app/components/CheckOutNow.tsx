"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddTo Cart";


export default function CheckOutNow ({
  currency,
  description,
  image,
  name,
  price,
  price_id
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  
  function buyNow(priceId: string) {
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id
  }
  return (
    <Button
    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
    onClick={()=> {
     buyNow(product.price_id);
    }}>
      Checkout Now
    </Button>
  );
}