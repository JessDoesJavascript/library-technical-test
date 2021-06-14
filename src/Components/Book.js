import React from 'react';
import styled from 'styled-components';

const StyledBookContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-evenly; 
    padding: 5px; 
    margin: 2px;
    border: solid 2px black;
    border-radius: 10px;
    letter-spacing: 2px;
    font-size: clamp(0.8rem, 1rem, 1.5rem); 
`;

const StyledTitle = styled.p`
    font-weight: 700;
    word-break: break-all;
    margin: 0;
`;

const StyledAuthor = styled.p`
    word-break: break-all;
    margin: 0;
    font-family: 'Nunito', cursive;
    font-style: italic;
`;
const StyledCategory = styled.p`
    word-break: break-all;
    margin: 0;
`;
const StyledButton = styled.button``;

function Book(props) {
    return (
        <StyledBookContainer> 
            <StyledTitle>{props.title}</StyledTitle>
            <StyledAuthor>{props.author}</StyledAuthor>
            <StyledCategory>{props.category}</StyledCategory>
            <StyledButton onClick={props.handleDelete}>Delete book</StyledButton>
        </StyledBookContainer>
    )
}

export default Book;