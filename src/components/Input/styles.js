import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const InputPrimary = styled.input`
    width: 100%;
    height: 100%;
    margin: 0.5rem 0;
    background: rgba(255, 255, 255, 0.1);
    outline: none;
    font-size: 1.125rem;
    padding: 0.625rem 0 0.625rem 1.25rem;
    border: 0.25rem solid rgba(0, 0, 0, 0.3);
    box-shadow: 0.625rem 0.625rem 0 rgba(0, 0, 0, 0.3);
    color: #3dc1d3;

    :focus {
        border: 0.25rem solid #ffffff;
        transition: all 0.5s;
    }
`;
