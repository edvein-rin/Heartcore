import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import styled from "styled-components";

export type Props = RouterLinkProps

export default styled(RouterLink)<RouterLinkProps>`
  &, &:link, &:visited, &:hover, &:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: var(--highlight-color);
  }

  transition: all 300ms ease;
`