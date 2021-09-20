import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    //max-width: 300px;
    > img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0.8em;
        left: 15px;
    }
`;

export const InputPrimary = styled.input`
    display: block;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    margin: 0 0 1em 0;
    ::placeholder {
        color: #000;
        font-weight: 400;
    }
`;
