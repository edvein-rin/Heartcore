import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'


interface ButtonProps extends PropsWithChildren<{}> {
  style: 'round' | null
}


const Button = ({children}: ButtonProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Button

export const Wrapper = styled.div`
  font-size: bold;
`
