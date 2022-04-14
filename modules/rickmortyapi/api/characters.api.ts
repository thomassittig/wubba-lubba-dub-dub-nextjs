import { getCharacter, getCharacters } from "rickmortyapi";
import { Filter, Page } from "../types";
import { Character, fromCharacterResource } from "../models";
import { HttpStatusCode } from "../../../constants";

export const findAll = async (filter?: Filter): Promise<Page<Character>> => {
  const resultInfo = await getCharacters();

  if (resultInfo.status !== HttpStatusCode.OK) {
    throw new Error("Unexpected result status");
  }

  return {
    entries: (resultInfo.data.results || []).map(fromCharacterResource),
    count: resultInfo.data.info?.count || 0,
    totalCount: resultInfo.data.info?.count || 0,
  };
};

export const findByListOfIds = async (ids: number[]): Promise<Character[]> => {
  const resultInfo = await getCharacter(ids);
  if (resultInfo.status !== HttpStatusCode.OK) {
    throw new Error("Unexpected result status");
  }

  return resultInfo.data.map(fromCharacterResource);
};
