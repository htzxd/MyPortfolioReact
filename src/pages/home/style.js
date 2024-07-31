import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme })=> theme.colors.bg_main};
  color: ${({ theme })=> theme.colors.text_color};

  padding: 2.4rem;
`