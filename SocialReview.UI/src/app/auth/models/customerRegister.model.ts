import { UserCredential } from "./userCredential.model";

export interface CustomerRegister extends UserCredential {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
