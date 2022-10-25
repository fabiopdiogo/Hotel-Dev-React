import styled from "styled-components"

const SFooter = styled.div`
  background-color: lightgrey; 
  display:flex; 
  flex-direction:column;
  align-items: center;
  justify-content: center;
`

function Footer(props){
  return(
    <SFooter>
      {props.children}
    </SFooter>
  )

}

export default Footer