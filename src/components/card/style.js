import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  
  border-radius: .8rem;
  
  background: ${({ theme })=> theme.colors.bg_main};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin: .8rem;
  }

  p {
    margin: 1rem;
  }

  img {
    border-radius: .8rem .8rem 0 0;
  }
`