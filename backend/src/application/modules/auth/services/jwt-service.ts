import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { User } from "../../../../domain/entities/user";
import { UserRepository } from "../../../../domain/repositories/user-repository";

interface JwtPayloadExtended extends JwtPayload {
  sub: string;
  email: string;
}

export class JwtService {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor(private readonly userRepository: UserRepository) {
    this.secret = process.env.JWT_SECRET || "changeme";
    this.expiresIn = process.env.JWT_EXPIRES_IN || "1d";
  }

  async generateToken(user: User): Promise<string> {
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return jwt.sign(payload, this.secret, {
      expiresIn: this.expiresIn,
    } as SignOptions);
  }

  async validateToken(token: string): Promise<User | null> {
    try {
      const decoded = jwt.verify(token, this.secret) as JwtPayloadExtended;

      const [user] = await this.userRepository.search({ email: decoded.email });

      return user ?? null;
    } catch (error) {
      return null;
    }
  }
}
