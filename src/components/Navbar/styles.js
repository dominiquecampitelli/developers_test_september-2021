import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`;

export const Nav = styled.nav``;

export const Logo = styled.h1`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.7;
    }
`;
