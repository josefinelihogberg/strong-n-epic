export interface User {
  id: number;
  username: string;
  role: "USER" | "ADMIN";
  password: string;
  activities?: string[];
}
