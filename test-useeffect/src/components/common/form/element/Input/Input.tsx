
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {


  function copy<T extends { name: string }, U extends keyof T>(value: T, key: U) {
    return value[key]
  }
  console.log(copy({ name: "hello", hello: 49 }, 'name'))

  type K = { name: string; age: number }

  return (
    <input
      type="text"
      {...props}
      ref={ref}
    />
  );
});

class base<T> {
  private data: T[] = []

  add(item: T) {
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data
  }
}

const hoge = new base<number>()

hoge.add(1)
hoge.add(2)
hoge.add(3)
hoge.remove(2)
console.log(hoge.get())
