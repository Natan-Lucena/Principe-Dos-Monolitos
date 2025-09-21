import { User } from "../entities/user";

export interface UserSearchParams {
  email?: string;
  name?: string;
}

export interface UserRepository {
  save(user: User): Promise<User>;
  search(params: UserSearchParams): Promise<User[]>;
}
