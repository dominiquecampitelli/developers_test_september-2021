import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

export const HeaderLine = styled.h1`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    font-size: 1.25rem;
    font-weight: 900;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;

    a,
    button {
        margin: 1rem 0;
        font-size: 1rem;
        text-align: center;
        font-weight: 700;
        letter-spacing: 0.188rem;
        text-transform: uppercase;
        text-decoration: none;
        border: 0.25rem solid #3dc1d3;
        color: #3dc1d3;
        background: #ffffff;
        outline: none;
        position: relative;
        display: inline-block;
        padding: 0.313rem 0.313rem 0.5rem;
        cursor: pointer;
        width: auto;
    }
    a:after,
    button:after {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0.125rem solid #3dc1d3;
        background-color: #3dc1d3;
        left: 0.25rem;
        top: 0.25rem;
        z-index: -1;
        content: '';
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
    }
    a:hover,
    button:hover {
        top: 0.125rem;
        left: 0.125rem;
    }
    a:hover:after,
    button:hover:after {
        top: -0.125rem;
        left: -0.125rem;
    }
`;
