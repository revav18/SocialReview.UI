import { UserCredential } from "./userCredential";

export interface EstablishmentRegister extends UserCredential {
  name: string;
  description: string;
  city: string;
  address: string;
  phoneNumber: string;
}
