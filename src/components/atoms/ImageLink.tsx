import Link, { Props as LinkProps } from "./Link";

export interface Props extends LinkProps {
  alt: string,
  src?: string,
}

export default function ImageLink (props: Props) {
  return (
    <Link href={props.href}>
      <img alt={props.alt} src={props.src}></img>
    </Link>
  )
}