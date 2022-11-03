import "./App.css";

function App() {
  const bookProperties = [
    {
      ISBN: "978-1-61450-524-2",
      Title: "A Wizards Guide to Defensive Baking",
      Author: "KingFischer, T. ",
      Publishingyear: 2020,
      FirstPublished: 2020,
      Genre: "Fantasy",
      Language: "English",
      originalLanguage: "English",
      Publisher: "Argyll Productions",
      Pages: 320,
    },

    {
      ISBN: "978-3-7175-2422-9",
      Title: "Das Babylonische Woerterbuch",
      Author: "Machado de Assis, Joaquim Maria",
      Publishingyear: 2018,
      FirstPublished: "not known",
      Genre: "Stories",
      Language: "English",
      originalLanguage: "Brazilian",
      Publisher: "Manesse Verlag",
      Pages: 256,
    },
  ];

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
    <div className="divTable">
      <div className="tableBody">
        <div className="tableRow">
          <div className="tableCell">ISBN</div>
          <div className="tableCell">{props.book.ISBN}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">Title</div>
          <div className="tableCell">{props.book.Title}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">Publishing year</div>
          <div className="tableCell">{props.book.Publishingyear}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">First published</div>
          <div className="tableCell">{props.book.FirstPublished}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">Genre</div>
          <div className="tableCell">{props.book.Genre}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">Language</div>
          <div className="tableCell">{props.book.Language}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">original Language</div>
          <div className="tableCell">{props.book.originalLanguage}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">Publisher</div>
          <div className="tableCell">{props.book.Publisher}</div>
        </div>
        <div className="tableRow">
          <div className="tableCell">Pages</div>
          <div className="tableCell">{props.book.Pages}</div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Books</h1>
      <h2>a list of books I happen to like</h2>
    </div>
  );
};

export default App;
