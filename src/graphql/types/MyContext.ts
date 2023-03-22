import type { Request } from "express";

export interface MyContext {
  req: Request;
}
