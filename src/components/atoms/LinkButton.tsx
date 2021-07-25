import Button, { Props as ButtonProps } from "./Button"
import Link, { Props as LinkProps } from './Link'

export interface Props extends ButtonProps, LinkProps {}

export default function LinkButton (props: Props) {
  return (
    <Link {...props}>
      <Button {...props}>
        {props.children}
      </Button>
    </Link>
  )
}
