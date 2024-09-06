import { Container } from "./style";



import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { Card } from "../../components/card";

import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export function Home(){
  return (
    <Container>
      <Nav />
        <main>
          <div className="profile">
            <img src="https://github.com/htzxd.png"/>
            <div className="text">
              <h2>Hi, I'm Marco! </h2>
              <p>This is my Portfolio and browsing here <br />you will learn more about me!</p>
              <button>Read More...</button>
            </div>
          </div>

          <div className="social">
            <h2>Social Media</h2>
            <ul>
              <li><a href="https://linkedin.com/in/dev-marcopereira" target="_blank"><LinkedinLogo /></a></li>
              <li><a href="https://intagram.com/marcorealz" target="_blank"><InstagramLogo /></a></li>
              <li><a href="https://github.com/htzxd" target="_blank"><GithubLogo /></a></li>
            </ul>
          </div> 

          <div className="aboutMe">
            <h2>About Me</h2>
            <p>I'm a FullStack developer Junior, i'm learned so far html, css, js, react, sqlite3 and nodeJS. <br />
            I still have a lot to study and I'm very thirsty to learn, I'm focused and certainly a great professional.</p>
          </div>  
        </main>

        <section>
          <a href="https://github.com/htzxd/devLinks" target="_blank"><Card /></a>
          
          
          
        </section>

      <Footer />
    </Container>
  )
}