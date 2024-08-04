import { Container } from "./style";
import img from "../../assets/gitFav.png"

export function Card(){
  return (
    <Container>

      <div className="cards">
        <img src={img} />
        <h2>Pro 1</h2>
        <p>Hoje eu vo bebe e pra esquece eu so quero whisky vagabundo <br /> 
          igual voce, que vem com a dorde cabeça junto
        </p>
      </div>

    </Container>
  )
}