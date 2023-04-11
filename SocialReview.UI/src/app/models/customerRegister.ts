import { UserCredential } from "./userCredential";

export interface CustomerRegister extends UserCredential {
  fistName: string;
  lastName: string;
  phoneNumber: string;
}
