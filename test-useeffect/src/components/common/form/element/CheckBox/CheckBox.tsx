import { FC } from 'react';

type Props = {
  name: string
  defaultChecked: boolean
  className: string
}

export const CheckBox: FC<Props> = ({ ...props }) => {
  return <input type='checkbox' {...props} />
}
