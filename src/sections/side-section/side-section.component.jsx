import React from "react";
import "./side-section.style.css";

import SectionHeader from "../../components/section-header/section-header.component";
import SearchBox from "../../components/search-box/search-box.component";
import CharactersSection from "../../components/characters-section/characters-section.component";

const SideSection = ({handleChange}) => {
  return (
    <div className="side-section">
      <SectionHeader />
      <SearchBox handleChange={handleChange}/>
      <CharactersSection />
    </div>
  );
};

export default SideSection;