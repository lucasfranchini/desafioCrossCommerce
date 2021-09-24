import InvalidRequestError from "@/errors/InvalidRequestError";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
/* eslint-disable-next-line */
export default function errorHandlingMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof InvalidRequestError) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }
  /* eslint-disable-next-line no-console */
  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: "Internal Server Error!",
  });
}
