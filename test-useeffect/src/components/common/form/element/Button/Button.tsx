import { FC } from 'react';

type Props = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode
}

export const Button: FC<Props> = ({ children, ...props }) => {
  return <button {...props} >{children}</button>
}
