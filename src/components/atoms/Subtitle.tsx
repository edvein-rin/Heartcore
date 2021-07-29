import Typography, { Props as TypographyProps } from './Typography'


export type Props = TypographyProps

export default function Subtitle (props: Props) {
  return (
    <Typography variant='h5' {...props}>
      {props.children}
    </Typography>
  )
}
