import { Container } from "./style";
import logo from '../../assets/Vector 1.png'

export function Nav(){
  return (
    <Container>
      <div>
        <a href="/"><img src={logo} alt="" /></a>
      
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Technologies</a></li>
        </ul>
      </div>
    </Container>
  )
}