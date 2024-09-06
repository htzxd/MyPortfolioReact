import { Container } from "./style";

import { Link } from "react-router-dom";
import { Nav } from "../../components/nav";

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
              <button><Link to="/about">Read More...</Link></button>
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
        </main>
    </Container>
  )
}