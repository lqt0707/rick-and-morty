import { CharacterFilterType, CharacterType } from "@constants/types/wiki";
import { ServicePaginationType } from "./servicePaginationType";

export interface CharacterServiceResType {
  info: ServicePaginationType;
  results: Array<CharacterType>;
}

export interface CharacterFiltReqType extends CharacterFilterType {
  page: number;
}

export interface GetCharacterType {
  all: (page: { page: number } | void) => Promise<CharacterServiceResType>;
  one: (id: number) => Promise<CharacterType>;
  list: (ids: number[]) => Promise<CharacterType[]>;
  filt: (filter: CharacterFiltReqType) => Promise<CharacterServiceResType>;
}
