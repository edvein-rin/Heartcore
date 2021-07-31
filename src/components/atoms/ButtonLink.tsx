import Button, { Props as ButtonProps } from './Button'
import Link, { Props as LinkProps } from './Link'

export type Props = ButtonProps & LinkProps

export default function ButtonLink(props: Props) {
  const { href, children } = props
  return (
    <Link href={href}>
      <Button {...props}>{children}</Button>
    </Link>
  )
}
