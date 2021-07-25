import { PropsWithChildren } from 'react'

import Typography, { Align } from './Typography'


export interface Props extends PropsWithChildren<{}> {
  align?: Align,
}

export default function Subtitle ({children, align='left'}: Props) {
  return (
    <Typography variant='h5' align={align}>
      {children}
    </Typography>
  )
}
