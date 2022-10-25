import styled from "styled-components"

const Background = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  color: white;

  gap: 10px;
  background: url('praia.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height:81vh;
`
function Main(props){
  return(
    <Background>
      {props.children}
    </Background>
  )
}

export default Main