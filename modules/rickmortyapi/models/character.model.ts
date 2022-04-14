import { CharacterLocation } from "rickmortyapi/dist/interfaces";
import { ResourceBase } from "./base.model";

export interface Character extends ResourceBase {
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

/**
 * This may be look weird. But as long as the original resource type is not properly exported by the rickmorty-api
 * module,  we need a referencing type
 */
type CharacterResource = Character;

export const fromResource = (resource: CharacterResource): Character => ({
  ...resource,
});
