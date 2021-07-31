import styled, { css } from 'styled-components/macro'

import { Color } from '../globals/Colors'
import Typography from './Typography'

export interface Props {
  display?: 'block' | 'inline' | 'flex'
  variant?: 'text' | 'no-style'
  size?: 'normal' | 'big'
  textCase?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  textColor?: Color
  textHoverColor?: Color
  bold?: boolean
  italic?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

export default function Button(props: Props) {
  const {
    variant = 'text',
    size,
    textCase = 'uppercase',
    textColor,
    textHoverColor = 'orange',
    bold = true,
    children,
  } = props

  let child

  if (variant === 'text') {
    if (size === 'big') {
      child = (
        <Typography
          variant='h4'
          textCase='uppercase'
          weight={600}
          color={textColor}
          hoverColor={textHoverColor}
        >
          {children}
        </Typography>
      )
    } else {
      child = (
        <Typography
          variant='button'
          color={textColor}
          hoverColor={textHoverColor}
        >
          {children}
        </Typography>
      )
    }
  } else {
    child = children
  }

  return (
    <Wrapper
      {...props}
      variant={variant}
      textCase={textCase}
      textHoverColor={textHoverColor}
      bold={bold}
    >
      {child}
    </Wrapper>
  )
}

export const Wrapper = styled.button<Props>`
  display: ${({ display }) => display};

  font-weight: ${({ bold }) => bold && (bold ? 'bold' : 'inherit')};
  font-style: ${({ italic }) => italic && (italic ? 'italic' : 'inherit')};

  cursor: pointer;
  background: none;
  border: none;

  ${({ variant, textCase }) => {
    switch (variant) {
      case 'text':
        return css`
          text-transform: ${textCase};
        `

      default:
        return null
    }
  }}
`
