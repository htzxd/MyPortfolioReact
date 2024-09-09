import { Container, Main } from "./style";

import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";

import react from "../../assets/logo-react.svg";
import js from "../../assets/logo-javascript.svg";
import css from "../../assets/logo-css3.svg";
import html from "../../assets/logo-html5.svg";
import node from "../../assets/logo-nodejs.svg";

export function Tech(){
  return (
    <Container>
      <Nav/>
        <Main>
          <ul>
            <li>
              <img src={react} alt="tech logo" />
              <h2>React</h2>
            </li>
            <li>
              <img src={js} alt="tech logo" />
              <h2>javascript</h2>
            </li>
            <li>
              <img src={css} alt="tech logo" />
              <h2>css3</h2>
            </li>
            <li>
              <img src={html} alt="tech logo" />
              <h2>html5</h2>
            </li>
            <li>
              <img src={node} alt="tech logo" />
              <h2>nodejs</h2>
            </li>
          </ul>
          
        </Main>
      <Footer/>
    </Container>
  )
}