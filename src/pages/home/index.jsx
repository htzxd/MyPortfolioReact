import { Container } from "./style";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { ThumbsUp } from 'phosphor-icons'

export function Home(){
  return (
    <Container>
      <Nav />
        <main>
          <div className="profile">
            <img src="https://github.com/htzxd.png"/>
            <h2>Hi, I'm Marco </h2>
            <p>This is my Portfolio and browsing here you will learn more about me!</p>
          </div>

          <div className="social">
            <h2>Social Media</h2>
            <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href="" ></a></li>
            </ul>
          </div> 

          <div id="aboutMe">
            
          </div>  
        </main>

      <Footer />
    </Container>
  )
}