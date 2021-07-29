import styled, { css } from 'styled-components/macro'
import Typography from './Typography'


export interface Props {
  display?: 'block' | 'inline' | 'flex',
  variant?: 'text' | 'no-style',
  textCase?: 'lowercase' | 'uppercase' | 'capitalize' | 'none',
  bold?: boolean,
  italic?: boolean,
  children?: React.ReactNode,
}

export default function Button ({children, display = 'block', variant = 'text', textCase = 'uppercase', bold = true, italic = false}: Props) {
  return (
    <Wrapper display={display} variant={variant} textCase={textCase} bold={bold} italic={italic}>
      {variant === 'text' ? <Typography variant='button'>{children}</Typography> : children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  display: ${({display}) => display};
  font-weight: ${({bold}) => bold ? 'bold' : 'inherit'};
  font-style: ${({italic}) => italic ? 'italic' : 'inherit'};

  cursor: pointer;
  
  ${({variant, textCase}) => {
    switch (variant) {
      case 'text':
        return css`
          text-transform: ${textCase};
        `
    }
  }}
`
