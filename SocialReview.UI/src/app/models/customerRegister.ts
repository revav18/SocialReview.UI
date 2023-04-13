import { UserCredential } from "./userCredential";

export interface CustomerRegister extends UserCredential {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
