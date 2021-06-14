import styled from 'styled-components'
import Book from './Book'

const StyledH4 = styled.h4`
    margin: 0;
    font-size: clamp(0.5rem, 0.8rem, 1rem); 
    padding: 5px; 
`;

const StyledDiv = styled.div`
    min-height: 50vh;
    width: 264px
`;

function Booklist(props) {
    return(
        <StyledDiv>
        <StyledH4>Your Books</StyledH4>
           {(props.books.map(book => {
               return (
                <Book title={book.title} 
                      key={book.key}
                      author={book.author} 
                      category={book.category} 
                      handleDelete={() => props.handleDelete(book.key)}
           />
           )}))}
        </StyledDiv>
    )
}

export default Booklist;