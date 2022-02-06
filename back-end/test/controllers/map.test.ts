import axios from "axios";
import request from "supertest";

import app from "../../src/app";

jest.mock(axios);

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchFunction = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (e) {
    return [];
  }
};

async function fetchMap() {}
