import Button, { Props as ButtonProps } from './Button'
import Typography from './Typography'
import Burger from './Burger'
import Spacer from './Spacer'


export type Props = ButtonProps

export default function MenuButton (props: Props) {
  return (
    <Button {...props} display='flex'>
      <Burger />
      <Spacer size={10} axis='horizontal'></Spacer>
      <Typography variant='caption'>Menu</Typography>
    </Button>
  )
}
