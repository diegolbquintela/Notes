import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

const App = (props) => (
  <div>
    <Header />
    // Mapping notes from notes.js
    {notes.map((noteItem) => (
      <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />
    ))}
    <Footer />
  </div>
);

export default App;
