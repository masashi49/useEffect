import React  from 'react';

type ElementType = HTMLButtonElement | null
type ButtonProps = JSX.IntrinsicElements['button']

export const Button = React.forwardRef<ElementType, ButtonProps>((
  props,
  ref
) => {
  return (
    <label>
      <button ref={ref} {...props}>
        {props.children}
      </button>
    </label>
  )
})
