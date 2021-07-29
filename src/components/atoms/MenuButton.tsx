import styled from 'styled-components'

import Button, { Props as ButtonProps } from './Button'
import Typography from './Typography'
import Burger from './Burger'
import Spacer from './Spacer'


export type Props = ButtonProps

export default function MenuButton (props: Props) {
  return (
    <Button {...props} variant='no-style'>
      <Wrapper>
        <Burger />
        <Spacer size={10} axis='horizontal'></Spacer>
        <Typography variant='button'>Menu</Typography>
      </Wrapper>
    </Button>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
