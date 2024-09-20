import React from "react";
import "./characters-section.style.css";

import CharactersHeader from "../characters-header/characters-header.component";

import CharactersCard from "../characters-card/characters-card.component";

import { useSelector } from "react-redux";
import { selectCharacters, selectInput } from "../../redux/character/character.selector";


const CharactersSection = () => {

  const selectedCharacters = useSelector(selectCharacters);
  const input = useSelector(selectInput) 

  const sortZtoA = () => {
    return selectedCharacters
  .sort( (character, nextCharacter) => (character.name < nextCharacter.name) ? 1 : -1 );
  };
  const sortAtoZ = () => {
    return selectedCharacters
  .sort( (character, nextCharacter) => (character.name > nextCharacter.name) ? 1 : -1 );
  }

  // Filter and Map characters on its own card
  let setSelectedCharacters = selectedCharacters
  .filter((character) => character.name.toLowerCase().includes(input.toLocaleLowerCase()))
  .filter( ( char, idx) => idx < 7)
  .map( ( character) =>(
    <CharactersCard 
    key={character.id} 
    name={character.name} 
    species={character.species} 
    image={character.image}/>
  ) )
  
  
  return (
    <div className="characters-section">
      <div className="characters">
      <CharactersHeader title="CHARACTERS" num={setSelectedCharacters.length}/>
      { setSelectedCharacters}
      </div>
    </div>
  );
};

export default CharactersSection;
;