import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({ theme })=> theme.colors.bg_main};
  padding: 2.4rem;

  > div {
    display: flex;
    justify-content: space-between;

    > h1 {
      color: ${({ theme })=> theme.colors.title_color};
      font-weight: 900;
    }

    > ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 2rem;
      
      > li a {
        text-decoration: none;
        font-weight: 900;
      }
    }
  }
`