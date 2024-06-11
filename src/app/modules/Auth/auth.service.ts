import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const isUserExists = await User.findOne({ id: payload?.id });
  console.log(isUserExists);
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found");
  }

  // checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists?.password
  );
  console.log(isPasswordMatched);// console will return true if the password matches
  
  return {};
};

export const AuthServices = {
  loginUser,
};
