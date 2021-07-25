import { PropsWithChildren } from 'react';

import Typography, { Align } from './Typography';


export interface Props extends PropsWithChildren<{}> {
  align?: Align,
}

export default function Title ({children, align = 'left'}: Props) {
  return (
    <Typography variant='h1' align={align} paragraph>
      {children}
    </Typography>
  )
}
