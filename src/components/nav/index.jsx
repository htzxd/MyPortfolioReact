import { Container } from "./style";
import logo from '../../assets/Vector 1.png'

export function Nav(){
  return (
    <Container>
      <div>
        <a href="/"><img src={logo} alt="" /></a>
      
        <ul>
          <li><a href="#">projects</a></li>
          <li><a href="#">technologies</a></li>
        </ul>
      </div>
    </Container>
  )
}