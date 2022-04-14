import React from "react";
import { Character, Episode } from "../modules/rickmortyapi";
import EpisodeItem from "./EpisodeItem";

interface EpisodeListProps {
  items: Episode[];
  characters: Character[];
}

const EpisodeList = ({ items, characters }: EpisodeListProps) => {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <EpisodeItem
          item={item}
          key={index}
          characters={characters.filter((character) =>
            item.characters.includes(character.url)
          )}
        />
      ))}
    </React.Fragment>
  );
};

export default EpisodeList;
