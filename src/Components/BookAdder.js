import React from 'react';
import styled from 'styled-components';

const StyledBookAdderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    letter-spacing: 2px;
    font-size: clamp(1rem, 1rem, 1.75rem); 
`;

const StyledBookAdder = styled.div`
    display: flex; 
    justify-content: flex-start;
    flex-direction: column;
    @media (max-width: 650px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledH4 = styled.h4`
    margin: 0;
    font-size: clamp(0.5rem, 0.8rem, 1rem); 
    padding: 5px; 
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 25vh;
`;

const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    font-size: clamp(0.7rem, 0.8rem, 1rem);
`;

const StyledInput = styled.input`
   margin: 5px; 
   letter-spacing: 2px;
   font-size: clamp(0.8rem, 0.8rem, 1.75rem); 
`;

const StyledSelect = styled.select`
    margin: 5px; 
    letter-spacing: 2px;
    font-size: clamp(0.8rem, 0.8rem, 1.75rem); 
`;

const StyledSubmit = styled.input``;

function BookAdder(props) {
    return(
        <StyledBookAdderContainer>
                <StyledBookAdder>
        {/* Add books  */}
                    <StyledH4>Add book</StyledH4>
                    <StyledForm onSubmit={props.newBookSubmit}>
            {/* Title input  */}
                    <StyledLabel htmlFor="bookTitle">Title: 
                        <StyledInput type="text" 
                                     id="bookTitle"
                                     name="newBookTitle" 
                                     value={props.newBookTitle} 
                                     maxLength="50"
                                     onChange={props.newBookHandler} required></StyledInput> 
                    </StyledLabel>
            {/* Author input  */}
                    <StyledLabel htmlFor="bookAuthor">Author: 
                        <StyledInput type="text" 
                                     id="bookAuthor"
                                    name="newBookAuthor" 
                                    value={props.newBookAuthor} 
                                    maxLength="50"
                                    onChange={props.newBookHandler} required></StyledInput> 
                    </StyledLabel>
            {/* Category Selector  */}
                    <StyledLabel htmlFor="category">Category: 
                        <StyledSelect name="newBookCategory" 
                                      id="category"
                                      value={props.newBookCategory} 
                                      onChange={props.newBookHandler} required>
                            <option value="">Select</option>
                            <option value={props.category1}>{props.category1}</option>
                            <option value={props.category2}>{props.category2}</option>
                            <option value={props.category3}>{props.category3}</option>
                        </StyledSelect> 
                    </StyledLabel>
            {/* Submit button  */}
                    <StyledSubmit type="submit" value="Add book"></StyledSubmit>
                    </StyledForm>
                </StyledBookAdder>
        </StyledBookAdderContainer>
    )
}

export default BookAdder;