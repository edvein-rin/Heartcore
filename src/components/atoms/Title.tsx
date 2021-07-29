import Typography, { Props as TypographyProps } from './Typography';


export type Props = TypographyProps

export default function Title (props: Props) {
  return (
    <Typography variant='h1' paragraph font='Recoleta' {...props}>
      {props.children}
    </Typography>
  )
}
