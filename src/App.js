import './App.css';

function App() {

  const bookProperties = [
    {
      ISBN: '978-1-61450-524-2',
      Title: 'A Wizards Guide to Defensive Baking',
      Author: 'KingFischer, T. ',
      Publishingyear: 2020,
      FirstPublished: 2020,
      Genre: 'Fantasy',
      Language: 'English',
      originalLanguage: 'English',
      Publisher: 'Argyll Productions',
      Pages: 320
    },

    {
      ISBN: '978-3-7175-2422-9',
      Title: 'Das Babylonische Woerterbuch',
      Author: 'Machado de Assis, Joaquim Maria',
      Publishingyear: 2018,
      FirstPublished: 'not known',
      Genre: 'Stories',
      Language: 'English',
      originalLanguage: 'Brazilian',
      Publisher: 'Manesse Verlag',
      Pages: 256
    }
  ]


  return (
  <div>
    <Header></Header>
    <Book book={bookProperties[0]}></Book>
    <Book book={bookProperties[1]}></Book>
  </div>
  );
}

//object Books - voor tonen van lijst van boeken
const Book = (props) => {
  console.log(props);
  return (
    <div>
      <table>
        <thead>
          <th colspan='2'></th>
        </thead>
        <tbody>
          <tr>
            <td>ISBN</td>
            <td>{props.book.ISBN}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{props.book.Title}</td>
          </tr>
          <tr>
            <td>Publishing year</td>
            <td>{props.book.Publishingyear}</td>
          </tr>
          <tr>
            <td>First published</td>
            <td>{props.book.FirstPublished}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>{props.book.Genre}</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{props.book.Language}</td>
          </tr>
          <tr>
            <td>original Language</td>
            <td>{props.book.originalLanguage}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{props.book.Publisher}</td>
          </tr>
          <tr>
            <td>Pages</td>
            <td>{props.book.Pages}</td>
          </tr>
        </tbody>
      </table>
      {/* <p>{props.book.ISBN}</p>
      <p>{props.book.Title}</p>
      <p>{props.book.Author}</p>
      <p>{props.book.Publishingyear}</p>
      <p>{props.book.FirstPublished}</p>
      <p>{props.book.Genre}</p>
      <p>{props.book.Language}</p>
      <p>{props.book.originalLanguage}</p>
      <p>{props.book.Publisher}</p>
      <p>{props.book.Pages}</p> */}
    </div>
  );
};
  

  const Header = () => {

      return (
        <div>
          <h1>Books</h1>
          <h2>
            a list of books I happen to like
          </h2>
        </div>
  );
};


export default App;
