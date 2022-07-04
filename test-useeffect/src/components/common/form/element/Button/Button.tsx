import React, { ComponentPropsWithRef } from 'react';

export const Button = React.forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>((
  props,
  ref
) => {
  return (
    <label>
      <button ref={ref} {...props} />
    </label>
  )
})
