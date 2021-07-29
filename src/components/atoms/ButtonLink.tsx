import Button, { Props as ButtonProps } from "./Button"
import Link, { Props as LinkProps } from './Link'

export type Props = ButtonProps & LinkProps

export default function ButtonLink (props: Props) {
  return (
    <Link href={props.href}>
      <Button {...props}>
        {props.children}
      </Button>
    </Link>
  )
}
