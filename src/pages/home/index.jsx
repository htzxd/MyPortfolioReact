import { Container } from "./style";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";

export function Home(){
  return (
    <Container>
      <Nav />
      <Footer />
    </Container>
  )
}