import styled from "styled-components";

export const Container = styled.div`
  main {
    display: grid;
    grid-template-areas: 
    "profile social"
    "about about ";
    margin: 1rem;
  }
  
  button {
    padding: 2.4rem;
    margin-top: 1rem;

    border: 1px solid ${({ theme })=> theme.colors.bg_main};
    border-radius: .8rem;
    background: transparent;
    cursor: pointer;
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
  
  section {
    margin: 1rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    a {
      text-decoration: none;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


`