import { User } from "../../domain/entities/user";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
