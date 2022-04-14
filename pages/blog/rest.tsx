import type { NextPage } from "next";
import React from "react";
import { Grid, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Episode, findAllEpisodes, Page } from "../../modules/rickmortyapi";
import { AppProps } from "next/app";
import EpisodeList from "../../components/EpisodeList";
import PageLayout from "../../components/PageLayout";
import EpisodeItem from "../../components/EpisodeItem";

interface HomeProps extends AppProps {
  data: Page<Episode>;
}

const Home: NextPage<HomeProps> = ({ data }: HomeProps) => {
  const { t } = useTranslation("blog");
  const [first, ...rest] = data.entries;

  return (
    <PageLayout title={t("title")}>
      <Paper elevation={1}>
        <EpisodeItem item={first} />
      </Paper>

      <Grid container spacing={2}>
        <Grid item md={8}>
          <EpisodeList items={rest} />
        </Grid>
        <Grid item md={4}>
          <Paper>side</Paper>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const data = await findAllEpisodes();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["blog"])),
      data,
    },
  };
};

export default Home;
