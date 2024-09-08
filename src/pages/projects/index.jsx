import { Container, Main } from "./style";

import { Nav } from "../../components/nav";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

export function Projects(){
  return(
    <Container>
      <Nav/>
      <Main>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Main>
      <Footer/>
    </Container>
  )
}