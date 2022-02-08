export type PlacesType = {
  name: string;
};

export type EachTypeType = {
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
