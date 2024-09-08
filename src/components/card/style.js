import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bg_main};
  border-radius: .8rem;
  text-align: center;
  padding: 1.2rem;

  img {
    max-height: 25rem;
    text-align: center;
    margin-bottom: 1rem;
    width: 100%;
    
  }

  p {
    margin-top: 1.2rem;
  }
`