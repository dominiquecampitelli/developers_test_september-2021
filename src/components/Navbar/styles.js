import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 3.125rem 0;
`;

export const HeaderLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

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
    button:hover {
        top: 0.125rem;
        left: 0.125rem;
    }
    button:hover:after {
        top: -0.125rem;
        left: -0.125rem;
    }
`;

export const Logo = styled.h1`
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.7;
    }
`;

export const Search = styled.div`
    width: 50%;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: left;

    input {
        height: auto;
    }
`;

export const Button = styled.button`
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
    button:hover {
        top: 0.125rem;
        left: 0.125rem;
    }
    button:hover:after {
        top: -0.125rem;
        left: -0.125rem;
    }
`;
