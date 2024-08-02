import styled from "styled-components";

export const Container = styled.div`
  main {
    display: grid;
    grid-template-areas: 
    "profile social"
    "about about "
    "projects projects";
    margin: 1rem;
  }
  
  .profile {
    display: flex;
    grid-area: profile;
  }

  .text {
    display: block;
  }

  .aboutMe {
    background: ${({ theme })=> theme.colors.bg_color_components};
    border-radius: .8rem;
    padding: 2rem;
    margin-top: 2rem;
    grid-area: about;
  }


  .social {
    background-color: ${({ theme })=> theme.colors.bg_color_components};
    padding: 1rem;
    border-radius: .8rem;
    justify-content: center;
    grid-area: social;

    > ul {
      display: flex;
      gap: 1rem;
      font-size: 2.4rem;
      list-style: none;
    }
  }
`