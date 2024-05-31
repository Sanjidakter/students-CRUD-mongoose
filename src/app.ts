import cors from "cors";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
} from "express";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandaler from "./middlewares/globalErrorhandaler";
import notFound from "./middlewares/notFound";
import router from "./app/routes";


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1",router);


const getAController = (req: Request, res: Response) => {
  res.sendStatus(200);
};

app.get("/", getAController);

app.use(globalErrorHandaler);

// Not Found
app.use(notFound)

export default app;
