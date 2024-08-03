import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  
  border-radius: .8rem;
  
  background: ${({ theme })=> theme.colors.bg_color_components};
  display: flex;
  justify-content: center;
  align-items: center;
`