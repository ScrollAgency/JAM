import React, { useContext, type ReactNode } from "react";
import { CheckoutContext, type CheckoutContextValue } from "./CheckoutContext";

interface Props {
  children?: ReactNode;
  cart?: CheckoutContextValue["cart"];
}

export const StripeGlobalContext = ({ children, cart }: Props) => {
  const context = useContext(CheckoutContext);
  const actualCart = context?.cart ?? cart ?? [];

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ cart?: CheckoutContextValue["cart"] }>, {
            cart: actualCart,
          });
        }
        return child;
      })}
    </>
  );
};
