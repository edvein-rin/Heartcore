import styled from "styled-components";
import Link, { Props as LinkProps } from "./Link";

export interface Props extends LinkProps {
  alt: string,
  src?: string,
  height?: string,
  width?: string,
}

export default function ImageLink (props: Props) {
  return (
    <Wrapper href={props.href} height={props.height} width={props.width}>
      <img alt={props.alt} src={props.src} />
    </Wrapper>
  )
}

export const Wrapper = styled(Link)`
  width: ${({width}) => width};
  height: ${({height}) => height};

  & > img {
    height: 100%;
  }
`