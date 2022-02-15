import { AllAction, FetchEachPlace, FetchMap, MapState } from "../../types";

const initialState: MapState = {
  map: [],
  eachPlace: null,
};

export default function map(state = initialState, action: AllAction): MapState {
  switch (action.type) {
    case FetchMap:
      return {
        ...state,
        map: action.payload.map,
      };
    case FetchEachPlace:
      return {
        ...state,
        eachPlace: action.payload.placeDetail,
      };
    default:
      return state;
  }
}
