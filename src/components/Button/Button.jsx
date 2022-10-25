import styled from "styled-components"

const StyledButton = styled.button`
  padding: 10px 40px;  
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px ;
  transition: all 0.25s ease-out;
  border: 2px solid #00A7EF;
  color: #00A7EF;
`
function Button(props){
  return(
    <StyledButton>{props.children}</StyledButton>
  )
}

export default Button