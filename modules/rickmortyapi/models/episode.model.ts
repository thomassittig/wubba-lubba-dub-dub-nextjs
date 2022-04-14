import { CharacterLocation } from "rickmortyapi/dist/interfaces";
import { ResourceBase } from "./base.model";

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  character: string[];
}

/**
 * This may be look weird. But as long as the original resource type is not properly exported by the rickmorty-api
 * module,  we need a referencing type
 */
type EpisodeResource = Episode;

export const fromResource = (resource: EpisodeResource): Episode => ({
  ...resource,
});
