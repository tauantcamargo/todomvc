import styled from "styled-components"

const TitleContainer = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border ? props.border : 'none'};
`

const Title = ({ children, ...props }) => {
  return (
    <TitleContainer {...props}>{children}</TitleContainer>
  )
}

export default Title
