import { NextFunction, Request, Response } from "express";

export const validateSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, specialty, available } = req.query;

  if (!name && !specialty && available === undefined) {
    return res
      .status(400)
      .json({ message: "At least one search parameter is required" });
  }

  next();
};
