import { FC } from 'react';

type SelectType = JSX.IntrinsicElements["select"]

// こちらでもOK
// type Option = {
//   option: {
//     id: number
//     name: string
//   }[]
// }
// type Props = Select & Option

type Option = {
  id: number
  name: string
}
type OptionProps = {
  option: Option[]
}

type Props = SelectType & OptionProps

export const Select: FC<Props> = ({ ...props }) => {
  return (
    <select {...props}>
      {props.option.map((data) =>
        <option key={data.id}>
          {data.name}
        </option>
      )}
    </select >
  )
}
