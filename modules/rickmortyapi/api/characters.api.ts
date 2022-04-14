import { getCharacters } from "rickmortyapi";
import { Filter, Page } from "../types";
import { Character, fromCharacterResource } from "../models";
import { HttpStatusCode } from "../../../constants";

export const findAll = async (filter?: Filter): Promise<Page<Character>> => {
  const resultInfo = await getCharacters();

  if (resultInfo.status !== HttpStatusCode.OK) {
    throw new Error("Unhandled result status");
  }

  return {
    entries: (resultInfo.data.results || []).map(fromCharacterResource),
    count: resultInfo.data.info?.count || 0,
    totalCount: resultInfo.data.info?.count || 0,
  };
};
