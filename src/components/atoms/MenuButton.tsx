import styled from 'styled-components'
import { useEffect, useState } from 'react'

import Button, { Props as ButtonProps } from './Button'
import Typography from './Typography'
import Burger from './Burger'
import Spacer from './Spacer'
import Menu from '../organisms/Menu'


export interface Props extends ButtonProps {
  onOpenChange(open: boolean): void, 
}

export default function MenuButton ({onOpenChange}: Props) {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const html = document.documentElement

    if (open) {
      html.classList.add('no-scroll')
    } else {
      html.classList.remove('no-scroll')
    }
  })

  return (
    <>
      <Button variant='no-style' onClick={() => {setOpen(!open); onOpenChange(!open)}}>
        <Wrapper>
          <Burger />
          <Spacer size={10} axis='horizontal' />
          <Typography variant='button'>Menu</Typography>
        </Wrapper>
      </Button>
      <Menu open={open}/>
    </>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
