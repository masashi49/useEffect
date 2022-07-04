
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      type="text"
      {...props}
      ref={ref}
    />
  );
});
