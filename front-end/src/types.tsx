export type PlaceType = {
  id: string;
  name: {
    fi: string;
    en: string;
    sv: string;
    zh: string;
  };
  location: {
    lat: number;
    lon: number;
    address: {
      locality: string;
      neighbourhood: string;
      postal_code: string;
      street_address: string;
    };
  };
  description: {
    body: string;
    intro: string;
  };
};

export const FetchMap = "fetchMap";
export const FetchEachPlace = "fetchEachPlace";

export type FetchMapAction = {
  type: typeof FetchMap;
  payload: {
    map: PlaceType[];
  };
};

export type FetchEachPlaceAction = {
  type: typeof FetchEachPlace;
  payload: {
    placeDetail: PlaceType;
  };
};

export type AllAction = FetchMapAction | FetchEachPlaceAction;

export type MapState = {
  map: PlaceType[];
  eachPlace: PlaceType;
};

export type AppState = {
  mapState: MapState;
};
