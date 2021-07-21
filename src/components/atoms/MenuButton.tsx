import Button, { Props as ButtonProps } from './Button'


export type Props = ButtonProps


export default function MenuButton ({children}: Props) {
  return (
    <div>
      {/* <Burger></Burger> */}
      <Button>{children}</Button>
    </div>
  )
}
