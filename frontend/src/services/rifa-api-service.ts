export interface Rifa {
  id: string;
  sold: boolean;
  createdAt: Date;
}

export class RifaApiService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }

  async listRifas(): Promise<Rifa[]> {
    const response = await fetch(`${this.apiUrl}/rifas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch rifas");
    }
    return response.json();
  }
}
