import React from "react";
import { Episode } from "../modules/rickmortyapi";
import EpisodeItem from "./EpisodeItem";

interface EpisodeListProps {
  items: Episode[];
}

const EpisodeList = ({ items }: EpisodeListProps) => {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <EpisodeItem item={item} key={index} />
      ))}
    </React.Fragment>
  );
};

export default EpisodeList;
