import { FC } from 'react';


type Props = JSX.IntrinsicElements['input']

export const Input: FC<Props> = ({ ...props }) => {
  return <input {...props} />
}
