import styled from "styled-components";

export const Container = styled.div`
  h2 {
    text-transform: uppercase;
  }
`

export const Main = styled.div`
  ul {
    display: flex;
    gap: 10px;
    list-style: none;
  }

  li {
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }

  img {
    max-height: 80px;
  }
`