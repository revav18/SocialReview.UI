export interface UserCredential {
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  Customer,
  Estalishment
}
