import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bg_main};
  border-radius: .8rem;
  text-align: center;

  img {
    max-height: 25rem;
    text-align: center;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: .8rem .8rem 0 0;
  }

  a {
    text-decoration: none;
  }

  :hover {
    color: ${({ theme}) => theme.colors.nav_color};
  }

  p {
    margin-top: 1.2rem;
    padding: 1.2rem;
    cursor: pointer;
  }
`