import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`
const Image = styled.img` 
 max-width: 100%;
`
const H1 = styled.h1`
  color: white;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;

`
function Card({src}){
  return(
    <StyledCard>
      <Image src={src} />        
      <H1>Translados gratuitos</H1>   
    </StyledCard>    
  ) 
}

export default Card