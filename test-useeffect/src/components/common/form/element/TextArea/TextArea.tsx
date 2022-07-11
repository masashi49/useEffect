import { ComponentPropsWithoutRef, forwardRef } from 'react';

export const TextArea = forwardRef<
  HTMLTextAreaElement, ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => {
  return <textarea {...props} ref={ref} />
})
