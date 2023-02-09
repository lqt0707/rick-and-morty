import { isArray } from "lodash";
import { getCharacter } from "@service";
import Taro from "@tarojs/taro";
import { defaultSixCharacters } from "@constants/wiki";
import { CharacterType } from "@constants/types/wiki";
import { useCallback, useEffect, useState } from "react";

/**
 * 随机获得n个角色信息的hook
 * @param number
 */
const generateRandomCharacters = async (number: number) => {
  const rids: number[] = [];
  for (let i = 0; i < number; i++) {
    let rid: number;
    do {
      rid = Math.floor(Math.random() * 671) + 1;
    } while (rids.indexOf(rid) !== -1);
    rids.push(rid);
  }
  const res = await getCharacter.list(rids);
  Taro.hideLoading();
  if (isArray(res)) {
    return res;
  }
  return defaultSixCharacters;
};

export const useRandomCharacters = (
  number: number
): [CharacterType[], () => void] => {
  const [characters, setCharacters] =
    useState<CharacterType[]>(defaultSixCharacters);

  const refreshCharacters = useCallback(() => {
    generateRandomCharacters(number).then((data) => setCharacters(data));
  }, [number]);
  useEffect(() => {
    refreshCharacters();
  }, [refreshCharacters]);
  return [characters, refreshCharacters];
};
