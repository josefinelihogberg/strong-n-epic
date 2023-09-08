import { Activity } from "./Activity";

export interface User {
  id: Number;
  username: string;
  role: "USER" | "ADMIN";
  password: string;
  activities?: Activity[];
}
