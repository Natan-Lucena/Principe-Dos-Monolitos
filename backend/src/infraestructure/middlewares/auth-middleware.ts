import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../application/modules/auth/services/jwt-service";

export const authMiddleware = (jwtService: JwtService) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      const token = authHeader.split(" ")[1];
      const user = await jwtService.validateToken(token);

      if (!user) {
        return res.status(401).json({ message: "Token inválido ou expirado" });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Falha na autenticação" });
    }
  };
};
