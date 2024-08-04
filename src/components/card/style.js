import styled from "styled-components";

export const Container = styled.div`
  max-height: 50rem;
  max-width: 50rem;

  border-radius: .8rem;
  width: 100%;
  
  background: ${({ theme })=> theme.colors.bg_main};
  display: flex;
  
  text-align: center;

  .cards {
   
   > img {
    border-radius: .8rem .8rem 0 0;
    max-height: 50rem;
    max-width: 50rem;
   } 
  }
`