import styled from 'styled-components/macro'
import React from 'react'


export type Props = React.HTMLProps<HTMLAnchorElement>

export default styled.a<Props>`
  &, &:link, &:visited, &:hover, &:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: var(--highlight-color);
  }

  transition: all 300ms ease;
`
