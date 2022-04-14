import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Character, Episode } from "../modules/rickmortyapi";
import Image from "next/image";

interface EpisodeItemProps {
  item: Episode;
  characters: Character[];
}

const EpisodeList = ({ item, characters }: EpisodeItemProps) => {
  const characterInfos = characters.filter((character) =>
    item.characters.includes(character.url)
  );
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="subtitle1">
          {item.name}
        </Typography>
      </CardContent>
      <CardMedia sx={{ width: 250, display: { xs: "none", sm: "block" } }}>
        <ImageList cols={5} rowHeight={50}>
          {characterInfos.map((character) => (
            <ImageListItem key={character.image}>
              <Image
                layout="fill"
                src={character.image}
                alt={character.name}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardMedia>
    </Card>
  );
};

export default EpisodeList;
