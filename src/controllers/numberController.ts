import { Request, Response } from "express";
import * as Service from "@/services/numberService";

export async function getAllOrdered(req: Request, res: Response) {
  const orderedArray =  await Service.getAllOrdered();
  res.send(orderedArray);
}
