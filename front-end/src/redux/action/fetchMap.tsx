import { Dispatch } from "redux";
import axios from "axios";
import {
  FetchEachPlace,
  FetchEachPlaceAction,
  FetchMap,
  FetchMapAction,
  PlaceType,
} from "../../types";

export function fetchMap(map: PlaceType[]): FetchMapAction {
  return {
    type: FetchMap,
    payload: {
      map: map,
    },
  };
}

export function fetchPlaceById(placeDetail: PlaceType): FetchEachPlaceAction {
  return {
    type: FetchEachPlace,
    payload: {
      placeDetail: placeDetail,
    },
  };
}

export function fetchMapFunction() {
  return (dispatch: Dispatch) => {
    axios
      .get("/map")
      .then((res: any) => {
        const data = res.data;
        dispatch(fetchMap(data));
      })
      .catch((error) => console.log(error));
  };
}

export function fetchPlaceByIdFunction(id: string) {
  return (dispatch: Dispatch) => {
    axios
      .get(`map/${id}`)
      .then((res: any) => {
        const place = res.data;
        dispatch(fetchPlaceById(place));
      })
      .catch((error) => console.log(error));
  };
}
