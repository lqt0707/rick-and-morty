import { CharacterType } from "@constants/types/wiki";
import { defaultCharacter, UPDATE_WIKI_CHARACTER } from "@constants/wiki";

interface StateType {
  dic: {
    [propName: string]: CharacterType;
  };
}

interface ActionType {
  type: string;
  payload: CharacterType;
}

const INITIAL_STATE: StateType = {
  dic: {
    "0": defaultCharacter,
  },
};

export default (state = INITIAL_STATE, action: ActionType): StateType => {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_WIKI_CHARACTER:
      return {
        dic: {
          ...state.dic,
          [payload.id]: payload,
        },
      };
    default:
      return state;
  }
};
