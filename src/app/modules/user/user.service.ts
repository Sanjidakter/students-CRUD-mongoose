import config from "../../config";
import { TStudent } from "../student/student.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (paasword: string, studentData: TStudent) => {
//   create a user object
let user = {};

// if password is not given , use default password
if(!paasword){
  user.paasword = config.default_password as string;
}else{
  user.paasword = paasword;
}

// set student role
  const result = await User.create(studentData);
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
