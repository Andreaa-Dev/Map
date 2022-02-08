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
    it("should return Helsinki map", async () => {
      const user = [
        {
          id: 1,
          name: "John",
        },
        { id: 2, name: "Andrea" },
      ];
      axios.get.mockResolvedValueOnce(user);
      const result = await fetchFunction();

      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual(user);
    });
  });

  describe("when api fails", () => {
    it("should return empty map", async () => {
      const message = "Network error";
      axios.get.mockRejectValueOnce(new Error(message));
      const result = await fetchFunction();

      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual([]);
    });
  });
});
