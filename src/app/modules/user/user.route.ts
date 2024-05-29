import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject, Schema } from "zod";

const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  //validateRequest higher level function
  return async (req: Request, res: Response, next: NextFunction) => {
    // validation
    const zodParsedData = await schema.parseAsync({
      body: req.body,
    });

    next();
  };
};
router.post("/create-student", UserControllers.createStudent);

export const UserRoutes = router;
