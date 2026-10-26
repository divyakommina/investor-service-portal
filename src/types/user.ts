export type UserRole =
  | "OPERATIONS_EXECUTIVE"
  | "OPERATIONS_MANAGER"
  | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}