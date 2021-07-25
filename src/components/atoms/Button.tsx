import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components/macro'


export interface Props extends PropsWithChildren<{}> {
  variant?: 'text',
  textCase?: 'lowercase' | 'uppercase' | 'capitalize' | 'none',
  bold?: boolean,
  italic?: boolean,
}

export default function Button ({children, variant = 'text', textCase = 'uppercase', bold = true, italic = false}: Props) {
  return (
    <Wrapper variant={variant} textCase={textCase} bold={bold} italic={italic}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
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
