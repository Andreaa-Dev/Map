import { BadRequestError } from "../helper/apiError";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

const base_url =
  "https://open-api.myhelsinki.fi/v2/places/?language_filter=en&start=1&limit=20";

export const getMap = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(base_url);
    res.json(response.data);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
