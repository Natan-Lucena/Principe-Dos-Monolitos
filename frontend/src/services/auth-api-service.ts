interface LoginRequest {
  id: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export class AuthApiService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }

  async login(request: LoginRequest) {
    const response = await fetch(`${this.apiUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error("Falha no login");
    }

    const { token } = (await response.json()) as LoginResponse;

    return token;
  }
}
