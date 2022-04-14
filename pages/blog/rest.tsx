import type { NextPage } from "next";
import React from "react";
import { Grid, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Character,
  Episode,
  findAllEpisodes,
  Page,
} from "../../modules/rickmortyapi";
import { AppProps } from "next/app";
import EpisodeList from "../../components/EpisodeList";
import PageLayout from "../../components/PageLayout";
import EpisodeItem from "../../components/EpisodeItem";
import { findByListOfIds } from "../../modules/rickmortyapi/api/characters.api";

interface HomeProps extends AppProps {
  episodes: Page<Episode>;
  characters: Character[];
}

const REGEX_RESOURCE_ID = /([\d]+$)/;

const Home: NextPage<HomeProps> = ({ episodes, characters }: HomeProps) => {
  const { t } = useTranslation("blog");
  const [first, ...rest] = episodes.entries;

  return (
    <PageLayout title={t("title")}>
      <Paper elevation={1}>
        <EpisodeItem
          item={first}
          characters={characters.filter((character) =>
            first.characters.includes(character.url)
          )}
        />
      </Paper>

      <Grid container spacing={2}>
        <Grid item md={8}>
          <EpisodeList items={rest} characters={characters} />
        </Grid>
        <Grid item md={4}>
          <Paper>side</Paper>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const episodes = await findAllEpisodes();
  const listOfCharacterIds: number[] = [
    ...Array.from(
      new Set(
        episodes.entries
          .reduce(
            (listOfUrls, episode) => [...listOfUrls, ...episode.characters],
            [] as string[]
          )
          .map((url) => (url.match(REGEX_RESOURCE_ID) || [])[0])
          .filter(Boolean)
          .map(Number)
      )
    ),
  ];
  const characters = await findByListOfIds(listOfCharacterIds);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["blog"])),
      episodes,
      characters,
    },
  };
};

export default Home;
