import { getEpisodes } from "rickmortyapi";
import { Filter, Page } from "../types";
import { Episode, fromEpisodeResource } from "../models";
import { HttpStatusCode } from "../../../constants";

export const findAll = async (filter?: Filter): Promise<Page<Episode>> => {
  const resultInfo = await getEpisodes();

  if (resultInfo.status !== HttpStatusCode.OK) {
    throw new Error("Unhandled result status");
  }

  const entries = resultInfo.data.results || [];

  return {
    entries: entries.map(fromEpisodeResource),
    count: entries.length,
    totalCount: resultInfo.data.info?.count || 0,
  };
};
