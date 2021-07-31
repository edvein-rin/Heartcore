import styled from 'styled-components'
import Link, { Props as LinkProps } from './Link'

export interface Props extends LinkProps {
  alt: string
  src?: string
  height?: string
  width?: string
}

export default function ImageLink(props: Props) {
  const { href, alt, height, src, width } = props
  return (
    <Wrapper href={href} height={height} width={width}>
      <img alt={alt} src={src} />
    </Wrapper>
  )
}

export const Wrapper = styled(Link)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  & > img {
    height: 100%;
  }
`
