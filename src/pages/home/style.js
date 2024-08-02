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

    > img {
      max-height: 13rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;
    
  }

  .aboutMe {
    grid-area: about;


    background: ${({ theme })=> theme.colors.bg_color_components};
    border-radius: .8rem;
    padding: 2rem;
    margin-top: 2rem;
  }


  .social {
    grid-area: social;

    border-radius: .8rem;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: end;
    margin-right: 1rem;

    > ul {
      display: flex;
      gap: 2rem;
      font-size: 2.4rem;
      list-style: none;
    }
  }
`