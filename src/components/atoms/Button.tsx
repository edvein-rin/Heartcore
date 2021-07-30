import styled, { css } from 'styled-components/macro'
import { Color } from '../globals/Colors'
import Typography from './Typography'


export interface Props {
  display?: 'block' | 'inline' | 'flex',
  variant?: 'text' | 'no-style',
  textCase?: 'lowercase' | 'uppercase' | 'capitalize' | 'none',
  textColor?: Color,
  textHoverColor?: Color,
  bold?: boolean,
  italic?: boolean,
  children?: React.ReactNode,
}

export default function Button ({
                              children,
                              display,
                              variant = 'text',
                              textCase = 'uppercase',
                              textColor,
                              textHoverColor = 'orange',
                              bold = true,
                              italic = false,
                                }: Props) {
  return (
    <Wrapper display={display} variant={variant} textCase={textCase} textColor={textColor} textHoverColor={textHoverColor} bold={bold} italic={italic}>
      {variant === 'text' ? <Typography variant='button'>{children}</Typography> : children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  display: ${({display}) => display};
  
  font-weight: ${({bold}) => bold ? 'bold' : 'inherit'};
  font-style: ${({italic}) => italic ? 'italic' : 'inherit'};
  color: ${({textColor}) => 'var(--' + textColor + ')'};

  cursor: pointer;

  &:hover {
    color: ${({textHoverColor}) => 'var(--' + textHoverColor + ')'};
  }
  
  ${({variant, textCase}) => {
    switch (variant) {
      case 'text':
        return css`
          text-transform: ${textCase};
        `
    }
  }}
`
