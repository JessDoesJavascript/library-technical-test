
// ## The Problem

// We want to model the local library. The library has 3 sections - Fiction, Non-Fiction and Magazines.

// The application should allow the user to

// - create a library

// - add the three sections

// - add some simple books to each section.

// Other requirements include:

// - The site must be responsive

// - Books must have an author and a title, so the data entry forms should have some data validation

// - There should be some basic navigation too.

import React from 'react';
import styled from 'styled-components';
import BookAdder from './Components/BookAdder';
import uuid from './Components/util';
import Booklist from './Components/Booklist';
import BooksFilter from './Components/BooksFilter';


const StyledApp = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const StyledInputsContainer = styled.div`
  width: 300px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  `;

const StyledH1 = styled.h1`
  letter-spacing: 2px;
  font-size: clamp(1rem, 1.5rem, 2rem);   
`;

const StyledInput = styled.input`
  margin: 5px; 
  letter-spacing: 2px;
  flex-grow: 1;
  max-width: 50%;
  font-size: clamp(0.8rem, 0.8rem, 1.75rem); 
`;

const StyledSubmit = styled.input`
  letter-spacing: 2px;
  font-size: clamp(1rem, 1rem, 1.75rem); 
  width: 250px;
  margin: 30px;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  font-size: clamp(0.7rem, 0.8rem, 1rem); 
`;

const StyledLibraryCreator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
`;

const StyledLibraryContainer = styled.div`
display: flex;
flex-direction: row; 
align-items: flex-start;
margin: 15px;

@media (max-width: 500px) {
  flex-direction: column;
  align-items: center;
}
`;

const StyledDiv = styled.div`

`;

const StyledNameAndLibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyDiv = styled.div`
  height: 20px;
  width: 20px;

`;
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        libraryName: "",
        categories: "",
        booksFilter: "all",
        newBookTitle: "",
        newBookAuthor: "",
        newBookCategory: "",
        newBookObject: {},
        books: [],
        booksToShow: [],
        libraryNameInput: "",
        newLibraryCreated: false,
        category1: "Fiction",
        category2: "Non-Fiction",
        category3: "Magazines",
        libraryCreationButton: "Create Library!"
      }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.newBookSubmit = this.newBookSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
}

handleChange(e) {
  this.setState({[e.target.name]: e.target.value});
}

handleSubmit(event) {
  if (!this.state.newLibraryCreated) {
  this.setState({
    libraryName: this.state.libraryNameInput,
    categories: [this.state.category1, this.state.category2, this.state.category3],
    libraryCreationButton: "Library Created!",
    newLibraryCreated: true
  })
  event.preventDefault();
} else if (this.state.newLibraryCreated) {
    event.preventDefault();
}
}

newBookSubmit(e) {
  e.preventDefault();
 let newBook = {};
 let booksArray = this.state.books.slice();
 newBook.key = uuid();
 newBook.title = this.state.newBookTitle;
 newBook.author = this.state.newBookAuthor;
 newBook.category = this.state.newBookCategory;
 let newBookArray = [...booksArray, newBook];
 this.setState({ books: newBookArray, booksToShow: newBookArray });
}

updateBooksFilter(str) {
 this.setState({
   booksFilter: str
 })
}

handleDelete(key) {
  let booksAfterDeletion = this.state.books.slice().filter(book => book.key !== key);
  this.setState({
    books: booksAfterDeletion
  })
}


  render() {
    let booksCollection = [];
    if (this.state.booksFilter === "all") {
      booksCollection = this.state.books.slice();
    } else if (this.state.booksFilter === "cat1") {
      booksCollection = this.state.books.slice().filter(book => book.category === this.state.category1)
    } else if (this.state.booksFilter === "cat2") {
      booksCollection = this.state.books.slice().filter(book => book.category === this.state.category2)
    } else if (this.state.booksFilter === "cat3") {
      booksCollection = this.state.books.slice().filter(book => book.category === this.state.category3)
    }
    return (
    <StyledApp>
      <StyledH1>Library Manager</StyledH1>
        <StyledLibraryCreator>
          <StyledInputsContainer>
            <StyledForm onSubmit={this.handleSubmit}>
              <p>This app lets you create a library with 3 sections. The defaults are Fiction, Non-Fiction and Magazines, but feel free to change them! </p>
                <StyledLabel htmlFor="libraryName"> Library Name: 
                <StyledInput type="text"
                            id="libraryName"
                            name="libraryNameInput" 
                            value={this.state.libraryNameInput} 
                            maxLength="50"
                            onChange={this.handleChange} required />
              </StyledLabel>              
              <StyledLabel htmlFor="category1"> First Category: 
                <StyledInput type="text" 
                            id="category1"
                            name="category1"
                            value={this.state.category1} 
                            maxLength="20"
                            onChange={this.handleChange} required />
              </StyledLabel>
              <StyledLabel htmlFor="category2"> Second Category: 
                <StyledInput type="text" 
                            id="category2" 
                            name="category2" 
                            value={this.state.category2} 
                            maxLength="20"
                            onChange={this.handleChange} required />
              </StyledLabel>
              <StyledLabel htmlFor="category3"> Third Category: 
                <StyledInput type="text" 
                            id="category3" 
                            name="category3" 
                            value={this.state.category3} 
                            maxLength="20"
                            onChange={this.handleChange} required />
              </StyledLabel>
              <StyledSubmit type="submit" value={this.state.libraryCreationButton}></StyledSubmit>
          </StyledForm>
       </StyledInputsContainer>
      </StyledLibraryCreator>
        {this.state.newLibraryCreated &&  
        <StyledNameAndLibraryContainer> 
        <StyledH1>{this.state.libraryName}</StyledH1>
          <StyledLibraryContainer>
            <BookAdder libraryName={this.state.libraryName} 
                    category1={this.state.category1}  
                    category2={this.state.category2}  
                    category3={this.state.category3}
                    books={this.state.books}
                    newBookTitle={this.state.newBookTitle}
                    newBookAuthor={this.state.newBookAuthor}
                    newBookCategory={this.state.newBookCategory}
                    newBookHandler={this.handleChange}
                    newBookSubmit={this.newBookSubmit}
                    />
            <EmptyDiv />
            <StyledDiv>
            <BooksFilter updateBooksToShowAll={() => this.updateBooksFilter("all")}
                    updateBooksToShowCat1={() => this.updateBooksFilter("cat1")}
                    updateBooksToShowCat2={() => this.updateBooksFilter("cat2")}
                    updateBooksToShowCat3={() => this.updateBooksFilter("cat3")}
                    category1={this.state.category1}
                    category2={this.state.category2}
                    category3={this.state.category3} />
        <Booklist books={booksCollection} handleDelete={this.handleDelete}></Booklist>
     
        </StyledDiv>
        </StyledLibraryContainer>
        </StyledNameAndLibraryContainer>
        }
      
 

    </StyledApp>
    )
};
}

export default App;
