import { BadRequestError } from "../helper/apiError";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const getEachPlace = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let id = req.params.id;
    const response = await axios.get(
      `https://open-api.myhelsinki.fi/v2/place/${id}`
    );
    res.json(response.data);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
