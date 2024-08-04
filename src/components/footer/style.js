import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme })=> theme.colors.bg_main};
    position: fixed;

    height: 50px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    font-size: 1.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
`