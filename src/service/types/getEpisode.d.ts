import {EpisodeType} from "@constants/types/wiki";
import {ServicePaginationType} from "./servicePaginationType";

interface EpisodeFilterType {
  name: string,
  episode: number,
}

export interface EpisodeServiceReqType {
  info: ServicePaginationType,
  results: Array<EpisodeType>
}

export interface GetEpisodeType {
  all: (page: { page: number } | void) => Promise<EpisodeServiceReqType>,
  one: (id: number) => Promise<EpisodeType>,
  list: (ids: number[]) => Promise<EpisodeType[]>,
  filt: (filter: EpisodeFilterType) => Promise<EpisodeServiceReqType>
}
