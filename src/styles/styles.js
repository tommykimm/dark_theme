import styled from "styled-components"

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    // border: 1px solid red;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    background: ${props => props.color};
    transition-delay: background-color 5s ease;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    border: 3px solid black;
    border-radius: 3px;
    box-shadow: 6px 6px grey;
    background: ${props => props.color};
    transition-delay: background-color 0.5s ease;
`