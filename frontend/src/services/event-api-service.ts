interface Event {
  name: string;
  date: string;
}

export class EventApiService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = process.env.api_url || "http://localhost:3000";
  }

  async listEvents(): Promise<Event[]> {
    const response = await fetch(`${this.apiUrl}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}
