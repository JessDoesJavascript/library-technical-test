import React from 'react';
import styled from 'styled-components'

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;
const StyledButton = styled.button`
    letter-spacing: 1px;
    font-size: clamp(0.5rem, 0.8rem, 1rem);
    padding: 5px;
    background-color: white; 
    border: none;
    border-bottom: solid 2px white;
    :hover {
        cursor: pointer;
        border-bottom: solid 2px #AA00AA;
    }
`;

// These buttons are used to filter the books you want to view 

function BooksFilter(props) { 
    return(
        <StyledButtonContainer>
            <StyledButton onClick={() => props.updateBooksToShowAll()}>All</StyledButton>
            <StyledButton onClick={() => props.updateBooksToShowCat1()}>{props.category1}</StyledButton>
            <StyledButton onClick={() => props.updateBooksToShowCat2()}>{props.category2}</StyledButton>
            <StyledButton onClick={() => props.updateBooksToShowCat3()}>{props.category3}</StyledButton>
        </StyledButtonContainer>
    )
}

export default BooksFilter