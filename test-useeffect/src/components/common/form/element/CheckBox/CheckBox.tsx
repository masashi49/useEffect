type Props = {
  name: string
  defaultChecked: boolean
  className: string
}

export const CheckBox = ({ ...props }: Props) => {
  return <input type='checkbox' {...props} />
}
