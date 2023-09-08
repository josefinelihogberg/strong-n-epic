export interface User {
  id: string;
  username: string;
  role: "USER" | "ADMIN";
  password: string;
  activities?: string[];
}
