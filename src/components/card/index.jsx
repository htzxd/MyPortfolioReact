import { Container } from "./style";
import img from "../../assets/gitFav.png"

export function Card(){
  return (
    <Container>

      <div className="cards">
        <img src={img} />
        <h2>Pro 1</h2>
        <p>anything</p>
      </div>

    </Container>
  )
}