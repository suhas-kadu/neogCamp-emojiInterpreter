import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "Love",
  "😀": "Simling Face",
  "😂": "Tears of Joy",
  "😐": "Neutral",
  "😪": "Sleepy",
  "🍎": "Red Apple",
  "🎄": "Christmas Tree",
  "🍓": "Strawberry",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //  for(var item in emojiList){
    //     if(useState != item)
    //   {
    //     console.log("we don't have it ")
    //     meaning = "we dont have it"
    //     setMeaning(meaning)
    //   }
    //  }
    if (meaning === undefined) {
      meaning = "We don't have it our database";
    }
    setMeaning(meaning);
  };

  const emojiClickHandler = (item) => {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Emoji Expression</h1>
      <input
        onChange={emojiInputHandler}
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "1rem",
          padding: "0.5rem",
          placeholder: "put any emoji or click on any of the emojis below"
        }}
      />
      <h2>{meaning}</h2>

      <ul style={{ margin: "0rem", padding: "0rem", listStyle: "none" }}>
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojiClickHandler(item)}
              style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            >
              {" "}
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
