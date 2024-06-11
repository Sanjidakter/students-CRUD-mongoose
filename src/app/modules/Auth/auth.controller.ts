import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "OfferedCourse deleted successfully",
    data: result,
  });
});

export const AuthControllers = {
    loginUser,
}
