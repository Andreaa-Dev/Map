import axios from "axios";
import request from "supertest";
import "@types/jest";

import app from "../../src/app";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchFunction = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (e) {
    return [];
  }
};

jest.mock("axios");

describe("fetchFunction", () => {
  describe("When API call is successful", () => {
    it("should return Helsinki map", async () => {});
  });
});
