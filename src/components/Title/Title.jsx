import styled from "styled-components"

const H1 = styled.h1`
  font-weight: bold;
`

export default function Title (props){
  return(
    <h1>{props.children}</h1>
  )
}