export interface Rifa {
  id: string;
  sold: boolean;
  createdAt: Date;
  name?: string;
  email?: string;
}

interface SellRifaProps {
  name: string;
  email: string;
  number: string;
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

  async sellRifa(props: SellRifaProps): Promise<void> {
    const response = await fetch(`${this.apiUrl}/rifas/sell`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to sell rifa: ${errorMessage}`);
    }
  }
}
