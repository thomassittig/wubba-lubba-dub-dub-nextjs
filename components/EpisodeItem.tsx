import React from "react";
import { Paper } from "@mui/material";
import { Episode } from "../modules/rickmortyapi";

interface EpisodeItemProps {
  item: Episode;
}

const EpisodeList = ({ item }: EpisodeItemProps) => {
  return <Paper>{item.name}</Paper>;
};

export default EpisodeList;
