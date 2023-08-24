import React, { useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./DefinitionCard.css";

function WordDefinition({ definition }) {
  const [showSynonyms, setShowSynonyms] = useState(false);
  const [showAntonyms, setShowAntonyms] = useState(false);
  const phonetics = definition.phonetics[0].audio;

  const playAudio = () => {
    const audioElement = new Audio(phonetics);
    audioElement.play();
  };

  useEffect(() => {
    setShowSynonyms(false);
    setShowAntonyms(false);
}, [definition]);

  return (
    <div className="definition-card-wrapper">
      <div className="title">
        <h2 id="word-title">{definition.word}</h2>
        <p>{definition.phonetic}</p>

        <button className="audio-button" onClick={playAudio}>
          <FaPlayCircle />
        </button>
      </div>
      <hr className="line-break" />
      <div>
        {definition.meanings.map((meaning, index) => (
          <div className="meanings" key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <ol>
              {meaning.definitions.slice(0, 3).map((def, defIndex) => (
                <div className="definitions" key={defIndex}>
                  <li>
                    <p>{def.definition}</p>
                    {def.example && <p id="example">"{def.example}"</p>}
                  </li>
                </div>
              ))}
            </ol>
            {meaning.synonyms.length > 0 && (
              <div>
                <button className="synonyms-antonyms-buttons" onClick={() => setShowSynonyms(!showSynonyms)}>
                  {showSynonyms ? "Hide Synonyms" : "Show Synonyms"}
                </button>
                {showSynonyms && <p>{meaning.synonyms.join(", ")}</p>}
              </div>
            )}
            {meaning.antonyms.length > 0 && (
              <div>
                <button className="synonyms-antonyms-buttons" onClick={() => setShowAntonyms(!showAntonyms)}>
                  {showAntonyms ? "Hide Antonyms" : "Show Antonyms"}
                </button>
                {showAntonyms && <p>{meaning.antonyms.join(", ")}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordDefinition;
