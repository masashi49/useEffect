import { FC } from 'react';

type Props = JSX.IntrinsicElements['textarea']

export const TextArea: FC<Props> = ({ ...props }) => {
  return <textarea {...props} />
}
