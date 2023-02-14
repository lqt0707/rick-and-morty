import { CharacterFiltReqType } from "../../service/types/getCharacter";
import React from "react";
import { useDispatch } from "react-redux";
import Taro from "@tarojs/taro";
import { updateWikiCharacter } from "@actions/wiki";

interface CharacterCardProps {
  character: CharacterFiltReqType;
  showImage?: boolean;
  number?: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  showImage = true,
  number,
}) => {
  const dispatch = useDispatch();
  const handleClickCard = () => {
    dispatch(updateWikiCharacter(character));
    Taro.navigateTo({
      url: `/pages/wiki/pages/character/index?id=${character.id}`,
    });
  };
};
