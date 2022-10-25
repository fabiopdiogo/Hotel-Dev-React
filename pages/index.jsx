import styled from "styled-components"

import Main from "../src/components/Main/Main"
import Card from "../src/components/Card/Card"
import Title from "../src/components/Title/Title"
import Footer from "../src/components/Footer/Footer"
import Button from "../src/components/Button/Button"


const H1 = styled.p`
  font-size:50px;
  font-weight:bold;
`
const H2 = styled.p`
  font-size:30px;
  font-weight:bold;  
  margin: 30px 190px;

`

const Flex1 = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 30px;

  @media (max-width: 1000px){
    width: 100%;
    margin: 20px 0;
  }
`

const Flex2 = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`


const Container= styled.div`
  display:flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`
const Image= styled.img`  
  width: 50%;

  @media (max-width: 1000px){
    width: 100%;
    height: 50vh;
  }
`
const StyledP = styled.p`
  font-size:15px;
  padding: 30px;
`
const StyledPF = styled.p`
  font-size:15px;
  padding: 5px 0px;
`

export default function HomePage(){
  return(      
    <>
      <Main>
        <H1>Hotel Dev</H1>
        <p>O seu paraíso na terra.</p>
        <Button>Reservar agora</Button>
      </Main>      

      <Container>
        <Image src="imagem-cidade.jpg" />
        <Flex1>
            <Title>Belo Horizonte, MG, Brasil</Title>
            <StyledP>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed mauris lacus. Donec metus nisi, accumsan ut nulla 
                      sit amet, molestie cursus nisl. Integer enim augue, sollicitudin 
                      vel tristique eget, euismod a sapien."
            </StyledP>
            <Button>Reservar agora</Button>
        </Flex1>        
      </Container>
      
     
      <Flex2>
        <Card src="imagem-carro.jpg"/>
        <Card src="imagem-quarto.jpg"/>
        <Card src="imagem-vista.jpg"/>
      </Flex2>     

      <Container>
      <Flex1>
            <Title>Alguma dúvida?</Title>
            <Title> Entre em contato!</Title>
            <StyledP>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed mauris lacus. Donec metus nisi, accumsan ut nulla 
                      sit amet, molestie cursus nisl. Integer enim augue, sollicitudin 
                      vel tristique eget, euismod a sapien."
            </StyledP>
        </Flex1>      
        <Image src="imagem-duvida.jpg" />         
      </Container>
      
      <Footer>
        <StyledPF>HotelDev - Todos os direitos reservados.</StyledPF>
        <StyledPF>Rua xxxxxx, Bairro xxxxxxxxxx, MG, Brasil</StyledPF> 
      </Footer>
     
             
    </>     
  )
}