export interface TokenRepository {
  getToken(): Promise<string | undefined>;
  saveToken(token: string): void;
}

export interface CounterRepository {
  getCounter(): number;
  setCounter(count: number): void;
}
