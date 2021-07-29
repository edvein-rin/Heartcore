import Button, { Props as ButtonProps } from "./Button"
import AppLink, { Props as AppLinkProps } from './AppLink'

export type Props = ButtonProps & AppLinkProps

export default function ButtonLink (props: Props) {
  return (
    <AppLink {...props}>
      <Button {...props}>
        {props.children}
      </Button>
    </AppLink>
  )
}
