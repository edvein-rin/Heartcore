import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components/macro'


export interface Props extends PropsWithChildren<{}> {
  display?: 'block' | 'inline' | 'flex',
  variant?: 'text' | 'no-style',
  textCase?: 'lowercase' | 'uppercase' | 'capitalize' | 'none',
  bold?: boolean,
  italic?: boolean,
}

export default function Button ({children, display = 'block', variant = 'text', textCase = 'uppercase', bold = true, italic = false}: Props) {
  return (
    <Wrapper display={display} variant={variant} textCase={textCase} bold={bold} italic={italic}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  display: ${({display}) => display};
  font-weight: ${({bold}) => bold ? 'bold' : 'inherit'};
  font-style: ${({italic}) => italic ? 'italic' : 'inherit'};
  
  ${({variant, textCase}) => {
    switch (variant) {
      case 'text':
        return css`
          text-transform: ${textCase};
        `
    }
  }}
`
