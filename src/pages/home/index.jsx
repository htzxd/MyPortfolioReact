import { Container } from "./style";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

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
              <li><a href=""><LinkedinLogo /></a></li>
              <li><a href=""><InstagramLogo /></a></li>
              <li><a href="" ><GithubLogo /></a></li>
            </ul>
          </div> 

          <div className="aboutMe">
            <h2>About Me</h2>
            <p>I'm a FullStack developer Junior, i'm learned so far html, css, js, react, sqlite3 and nodeJS.
            I still have a lot to study and I'm very thirsty to learn, I'm focused and certainly a great professional.</p>
          </div>  
        </main>

      <Footer />
    </Container>
  )
}