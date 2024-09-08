import { Container } from "./style";
import spotify from "../../assets/spotify.png";

export function Card(){
  return(
    <Container>
      
        <img src={spotify} alt="" />
        <h2>Spotify Recommendation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          In modi nostrum rem. Accusamus impedit soluta voluptates eius 
          deleniti quia modi cum at. Dignissimos 
          iusto officia repellat molestias praesentium. Laudantium, atque.
        </p>
      
    </Container>
  )
}