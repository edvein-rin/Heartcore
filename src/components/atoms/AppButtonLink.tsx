import AppLink, { Props as AppLinkProps } from './AppLink'
import Button, { Props as ButtonProps } from './Button'

export type Props = ButtonProps & AppLinkProps

export default function ButtonLink(props: Props) {
  const { children } = props

  return (
    <AppLink {...props}>
      <Button {...props}>{children}</Button>
    </AppLink>
  )
}
